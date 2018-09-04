lexer grammar ObjectScriptLexer;
@header {
  import { Token } from 'antlr4ts';

}

@lexer::members {
// class lexerState extends Object
// {
//     int charPositionInLine = -1;
//     int line = -1;

//     int this.nesting = 0;
//     boolean this.isCommand = false;
//     boolean this.isClass = false;
//     boolean this.isClassMethod = false;
//     boolean this.doArg = false;
//     boolean this.caret = false;
//     boolean this.labelDef = false;
//     int this.lastTokenType = 0;
//     int mode = DEFAULT_MODE;
//     IntegerStack modeStack;
//     boolean this.macroline = false;

// }
// public lexerState getLexerState()
// {
//     lexerState state = new lexerState();

//     state.line = getLine();
//     state.charPositionInLine = this.charPositionInLine;

//     state.nesting = this.nesting;
//     state.isCommand = this.isCommand;
//     state.isClass = this.isClass;
//     state.isClassMethod = this.isClassMethod;
//     state.doArg = this.doArg;
//     state.caret = this.caret;
//     state.labelDef = this.labelDef;
//     state.lastTokenType = this.lastTokenType;
//     state.mode = _mode;
//     state.modeStack = new IntegerStack();
//     state.macroline = this.macroline;
//     for (int i = 0; i < _modeStack.size(); i++) {
//         state.modeStack.push(_modeStack.get(i));
//     }
//     return state;
// }

// public void setLexerState(lexerState state)
// {
//     if(state==null) return;
//     setLine(state.line);
//     setCharPositionInLine(state.charPositionInLine);

//     this.nesting = state.nesting;
//     this.isCommand = state.isCommand;
//     this.isClass = state.isClass;
//     this.isClassMethod = state.isClassMethod;
//     this.doArg = state.doArg;
//     this.caret = state.caret;
//     this.labelDef = state.labelDef;
//     this.lastTokenType = state.lastTokenType;
//     _modeStack.clear();
//     for (int i = 0; i < state.modeStack.size(); i++) {
//         pushMode(state.modeStack.get(i));
//     }
//     mode(state.mode);
//     this.macroline = state.macroline;
// }

  nesting: number = 0;
  isCommand: boolean = false;
  isClass: boolean = false;
  isClassMethod: boolean = false;
  doArg: boolean = false;
  caret: boolean = false;
  labelDef: boolean = false;
  lastTokenType: number = 0;
  macroline: boolean = false;

  isCMD() {
    this.isCommand=true;
    this.type = ObjectScriptLexer.CMD;
  }
  emit(token?: Token): Token {
    token = !token ? super.emit() : super.emit(token);
    this.lastTokenType = token.type;
    return token;
  }
}

ObjectMethod:
	{this.isClassMethod}? ID {this.isClass=false;this.isClassMethod=false;};
ObjectName: {this.nesting>0&&this.isClass}? '%'? ID ('.' ID)*;
Label:
	{((this.charPositionInLine==0)||(this.doArg&&(this.lastTokenType==ObjectScriptLexer.CommandSPACE)))}? ID { this.labelDef = (!this.doArg);
		};
RoutineName: {this.doArg&&(this.lastTokenType===ObjectScriptLexer.CARET)}? ID;
GlobalName: {(this.lastTokenType===ObjectScriptLexer.CARET)}? ID;
SystemVariable: Dollar ID;
SpecialGlobal: CARET Dollar ID;
MACMethodPrivate: {this.labelDef}? [Pp][Rr][Ii][Vv][Aa][Tt][Ee];
MACMethodPublic: {this.labelDef}? [Pp][Uu][Bb][Ll][Ii][Cc];

fragment ParenBlock: '(' ( ParenBlock | ~[()])* ( ')' | EOF);
fragment ChevronBlock: '<' ( ChevronBlock | ~[<>])* ( '>' | EOF);

SQLBlock: WS* '&' [sS][qQ][lL] ParenBlock;
JSBlock: WS* '&' [jJ][sS]ChevronBlock;
HTMLBlock: WS* '&' [hH][tT][mM][lL]ChevronBlock;

Property: '..' ID;

ID: [a-zA-Z] [a-zA-Z0-9]*;

INT: [0-9]+;

FLOAT:
	INT '.' INT? EXPONENT?
	| '.' INT EXPONENT?
	| INT+ EXPONENT;

STRING: '"' ~["]* '"';

fragment EXPONENT: [eE] [+\-]? [0-9]+;

EOL: [\r\n]+ {this.isCommand=false;this.macroline=false;};

EQUAL: WS* '=' WS*;
COMMA: WS* ',' WS*;
Dollar: '$';
Colon: ':';
DOT: '.';
PLUS: WS* '+' WS*;
MINUS: WS* '-' WS*;
PERCENT: '%';
AT: '@';
SHARP: '#';
EXCLAMATION: '!';
QUESTON: '?';
ASTERISK: '*';
UNDERSCORE: WS* '_' WS*;
SLASH: '/';
BACKSLASH: '\\';
COMMENT: (WS+ '/*' .*? ( '*/' WS* | EOF))
	| (WS+ ('//' | ';') ~[\r\n]* ([\r\n]+ | EOF))
	| {(this.charPositionInLine==0)}? (
		WS* '#;' ~[\r\n] ~[\r\n]* '\r'? '\n'
	);

Spaces:
	WS+ {
             if (this.nesting==0&&!this.macroline){
                if ((this.isCommand) && (this.text.length == 1)){this.isCommand=false;this.type = ObjectScriptLexer.CommandSPACE;}
                else {this.pushMode(ObjectScriptLexer.COMMAND);}
             }
            };
LPClass: {this.isClass}? '(' {this.nesting++;};
RPClass:
	{this.isClass}? ').' {this.nesting--;this.isClassMethod=true;this.isClass=false;};
LPAREN: '(' WS* {this.nesting++;};
RPAREN: WS* ')' {this.nesting--;};
LBRACE: '{' WS* {this.nesting==0&&!this.macroline}? -> pushMode(COMMAND);
RBRACE: WSNL* '}' {this.isCommand=false;};
LBRACK: WSNL* '[';
RBRACK: ']' WSNL* {this.isCommand=false;};
FUNCTION: '$' [a-zA-Z][a-zA-Z0-9]*;
UserFunction: '$$' [a-zA-Z][a-zA-Z0-9]*;
Macros: '$$$' [a-zA-Z][a-zA-Z0-9]*;
CARET: '^' {this.caret=true;};
VertBar: '|';
WS: [ \t];
WSNL: [ \t\r\n];
CondOper:
	WS* (
		'&&'
		| '||'
		| '>='
		| '<='
		| '\'='
		| '>'
		| '<'
		| '\'<'
		| '\'>'
	) WS*;
Negative: '\'';
//MACRO       : Spaces? '#' {this.macroline = true;System.out.println("MACRO");};
ObjectClass: '##' [Cc][Ll][Aa][Ss][Ss] {this.isClass=true;};
ObjectSuper: '##' [Ss][Uu][Pp][Ee][Rr];
ObjectThis: '##' [Tt][Hh][Ii][Ss];
Define:
	{(this.charPositionInLine==0)}? WS* '#' [Dd][Ee][Ff][Ii][Nn][Ee] {this.macroline = true;};
DefineExpression: Define .*? [\r\n]+;
Include:
	{(this.charPositionInLine==0)}? WS* '#' [Ii][Nn][Cc][Ll][Uu][Dd][Ee] {this.macroline = true;};

mode COMMAND;
//fragment MethodType: {this.labelDef}? [a-zA-Z]+ { String str = getText().toLowerCase();
// if(str.equals("public")){this.popMode();setType(MACMethodPublic);}
// if(str.equals("private")){this.popMode();setType(MACMethodPrivate);} };
CMDComments: (';' | '//') {this.popMode();this.more();};

CommandDO: [dD][oO]? {this.doArg = true;this.isCMD();};
CommandGOTO: [gG]([oO][tT][oO])? {this.doArg = true;this.isCMD();};
CommandJOB: [jJ]([oO][bB])? {this.doArg = true;this.isCMD();};

CMD: [a-zA-Z] [a-zA-Z0-9]* {this.doArg=false;this.isCMD();this.labelDef=false;};
CommandSPACE: [ ] {this.popMode();this.isCommand=false;};
CommandCOLON: ':' -> popMode;
CommandEOL: [\r\n]+ {this.popMode();this.isCommand=false;};
CommandLBRACE: '{' [ \t]*;
CommandRBRACE: [ \r\n\t]* '}' {this.popMode();this.isCommand=false;};
CommandCOMMA: [ \t]* ',' [ \t]*;

Special: '&' {this.popMode();this.more();};
CMDMacros: '$$$' [a-zA-Z][a-zA-Z0-9]* {this.popMode();};

