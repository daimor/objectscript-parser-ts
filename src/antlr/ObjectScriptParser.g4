parser grammar ObjectScriptParser;

options {
	tokenVocab = ObjectScriptLexer;
}
@parser::members {
  loopLevel: number = 0;
  ifBlock: boolean = false;
  elseBlock: boolean = false;
  argsLevel: number = 0;
  tryBlock: boolean = false;
  catchBlock: boolean = false;
  doBlock: boolean = false;
  whileBlock: boolean = false;

  cmp(cmds: string): boolean {
    let val = this._input.LT(1).text;
    let vars: string[] = cmds.toLowerCase().split(",");
    return vars.includes(val.toLowerCase());
  }
}

code: statement*;

statement:
	Spaces? simpleStatement
	| Include Spaces includeStatement Spaces? (EOL | EOF)
	| define
	| comments
	| (Spaces | EOL | CommandEOL)
	| Label labelDef?;
blockStatement[quitWithoutArgs: boolean]
	@init {
if(quitWithoutArgs) {this.loopLevel++;}
}
	@after {
if(quitWithoutArgs) {this.loopLevel--;}
}: (LBRACE | CommandLBRACE) statement* (RBRACE | CommandRBRACE);

comments: COMMENT;
simpleStatement
	@init {
    // reset blocks
    this.catchBlock = this.tryBlock;
    this.tryBlock = false;
    this.elseBlock = this.ifBlock;
    this.ifBlock = false;
    this.whileBlock = this.doBlock;
    this.doBlock = false;
}:
	breakCommand pc? breakStatement
	| catchCommand catchStatement
	| closeCommand pc? closeStatement
	| continueCommand pc?
	| doCommand pc? doStatement?
	| elseCommand1 elseStatement
	| elseCommand2 CommandSPACE?
	| forCommand forStatement
	| gotoCommand pc? gotoStatement
	| haltCommand pc? CommandSPACE?
	| hangCommand pc? hangStatement
	| ifCommand ifStatement
	| jobCommand pc? jobStatement
	| killCommand pc? killStatement
	| lockCommand pc? lockStatement
	| mergeCommand pc? mergeStatement
	| newCommand pc? newStatement
	| openCommand pc? openStatement
	| quitCommand pc? quitStatement
	| readCommand pc? readStatement
	| setCommand pc? setStatement
	| tcommitCommand pc?
	| throwCommand pc? expression?
	| trollbackCommand pc? expression?
	| tryCommand tryStatement
	| tstartCommand pc?
	| useCommand pc? useStatement
	| viewCommand pc? viewStatement
	| whileCommand whileStatement
	| writeCommand pc? writeStatement?
	| xecuteCommand pc? xecuteStatement
	| zkillCommand pc? zkillStatement
	| znspaceCommand pc? expression
	| ztrapCommand pc? expression
	| zwriteCommand pc? zwriteStatement
	| zzdumpCommand pc? zzdumpStatement
	| printCommand pc? printStatement
	| zbreakCommand pc? zbreakStatement
	| zinsertCommand
	| zloadCommand
	| zprintCommand
	| zremoveCommand
	| zsaveCommand
	| SQLBlock
	| JSBlock
	| HTMLBlock
	| macrosAsCommand;
macrosAsCommand: CMDMacros;
includeStatement:
	includeRtn
	| LPAREN Spaces? ID (Spaces? COMMA includeRtn)* Spaces? RPAREN;

includeRtn: PERCENT? ID;

define: DefineExpression;

breakCommand: {this.cmp("b,break")}? CMD;
breakStatement: CommandSPACE? expression?;

catchCommand: {this.catchBlock&&this.cmp("catch")}? CMD;
catchStatement:
	CommandSPACE? Spaces? ID? Spaces? blockStatement[true];
closeCommand: {this.cmp("c,close")}? CMD;
closeStatement: CommandSPACE expression (COMMA expression)*;
continueCommand: {this.cmp("continue")}? CMD;
doCommand: {this.cmp("d,do")}? CMD;
doStatement:
	CommandSPACE (doArgument pc? ( COMMA doArgument pc?)*)
	| CommandSPACE (CommandSPACE | Spaces | CommandEOL | EOL)* blockStatement[true] {this.doBlock = true;
		}
	| CommandSPACE;
elseCommand1: {this.elseBlock&&this.cmp("else")}? CMD;
elseCommand2: {!this.elseBlock&&this.cmp("else")}? CMD;
elseStatement:
	CommandSPACE? Spaces? blockStatement[false];

elseifCommand: {this.cmp("elseif")}? CMD;

forCommand: {this.cmp("f,for")}? CMD;
forStatement:
	CommandSPACE (variable (EQUAL forExpression)?)? (
		CommandSPACE
		| Spaces
		| CommandEOL
		| EOL
	)* blockStatement[true]?;
forExpression:
	expression (
		(Colon expression (Colon expression)?)?
		| (COMMA expression)*
	);
gotoCommand: {this.cmp("g,goto")}? CMD;
gotoStatement:;
haltCommand: {this.cmp("h,halt")}? CMD;
hangCommand: {this.cmp("h,hang")}? CMD;
hangStatement: CommandSPACE expression (COMMA expression)*;

ifCommand: {this.cmp("i,if")}? CMD;
ifStatement:
	CommandSPACE condition (COMMA condition)* Spaces? blockStatement[false] {this.ifBlock=true;}
	| CommandSPACE condition (COMMA condition)*;
jobCommand: {this.cmp("j,job")}? CMD;
jobStatement: CommandSPACE jobArgument ( COMMA jobArgument)*;
jobArgument:
	doArgument (Colon jobProcessParams? (Colon expression)?)?;
jobProcessParams: LPAREN (expression | Colon)* RPAREN;
killCommand: {this.cmp("k,kill")}? CMD;
killStatement:
	CommandSPACE? (killArgument (COMMA killArgument)*)?;
killArgument: variable | LPAREN variable RPAREN;
lockCommand: {this.cmp("l,lock")}? CMD;
lockStatement:
	CommandSPACE? (lockArgument (COMMA lockArgument)?)?;
lockArgument: (PLUS | MINUS)? lockArgument2 (Colon expression)?
	| (PLUS | MINUS)? LPAREN lockArgument2 (COMMA lockArgument2)* RPAREN (
		Colon expression
	)?;
lockArgument2: variable (SHARP expression)?;
mergeCommand: {this.cmp("m,merge")}? CMD;
mergeStatement:
	CommandSPACE mergeArgument (COMMA mergeArgument)*;
mergeArgument: variable EQUAL expression;
newCommand: {this.cmp("n,new")}? CMD;
newStatement: (
		CommandSPACE (localVariable (COMMA localVariable)*)?
	)?;
openCommand: {this.cmp("o,open")}? CMD;
openStatement:
	CommandSPACE expression (
		Colon colonExpression? (
			Colon expression? (Colon expression?)?
		)?
	)?;
quitCommand: {this.cmp("q,quit")}? CMD;
quitStatement:
	{this.loopLevel>0}? CommandSPACE?
	| {this.loopLevel==0}? CommandSPACE? expression?;
readCommand: {this.cmp("r,read")}? CMD;
readStatement: CommandSPACE readArgument (COMMA readArgument)*;
readArgument:
	writeArgument
	| variable (SHARP expression)? Colon expression;
setCommand: {this.cmp("s,set")}? CMD;
setStatement: CommandSPACE setArgument ( COMMA setArgument)*;
setArgument: variable EQUAL expression;
tcommitCommand: {this.cmp("tc,tcommit")}? CMD;
throwCommand: {this.cmp("throw")}? CMD;
trollbackCommand: {this.cmp("tr,trollback")}? CMD;
tryCommand: {this.cmp("try")}? CMD;
tryStatement:
	CommandSPACE? Spaces? blockStatement[true] {this.tryBlock = true;};
tstartCommand: {this.cmp("ts,tstart")}? CMD;
useCommand: {this.cmp("u,use")}? CMD;
useStatement:
	CommandSPACE expression (
		Colon colonExpression (Colon expression)?
	)?;
viewCommand: {this.cmp("v,view")}? CMD;
viewStatement:
	CommandSPACE expression (
		Colon expression (Colon expression (Colon expression)?)?
	)?;
whileCommand: {this.cmp("while")}? CMD;
whileStatement:
	{this.whileBlock}? CommandSPACE condition (COMMA condition)*
	| {!this.whileBlock}? CommandSPACE condition (COMMA condition)* Spaces? blockStatement[true];
writeCommand: {this.cmp("w,write")}? CMD;
writeStatement:
	CommandSPACE (writeArgument (COMMA writeArgument)*)
	| CommandSPACE;
writeArgument:
	expression
	| (SHARP | EXCLAMATION)*
	| QUESTON expression
	| ASTERISK variable
	| SLASH ID;
xecuteCommand: {this.cmp("x,xecute")}? CMD;
xecuteStatement:
	CommandSPACE xeceuteArgument pc? (COMMA xeceuteArgument pc?)*;
xeceuteArgument:
	expression
	| LPAREN expression {this.argsLevel++;} (COMMA expression)* {this.argsLevel--;} RPAREN;
zkillCommand: {this.cmp("zk,zkill")}? CMD;
zkillStatement: CommandSPACE variable (COMMA variable)*;
znspaceCommand: {this.cmp("zn,znspace")}? CMD;
ztrapCommand: {this.cmp("ztrap")}? CMD;
zwriteCommand: {this.cmp("zw,zwrite")}? CMD;
zwriteStatement: CommandSPACE? (variable (COMMA variable)*)?;
zzdumpCommand: {this.cmp("zzdump")}? CMD;
zzdumpStatement: CommandSPACE expression (COMMA expression)*;
printCommand: {this.cmp("p,print")}? CMD;
printStatement: CommandSPACE;
zbreakCommand: {this.cmp("zb,zbreak")}? CMD;
zbreakStatement: CommandSPACE?;
zinsertCommand: {this.cmp("zi,zinsert")}? CMD;
zloadCommand: {this.cmp("zl,zload")}? CMD;
zprintCommand: {this.cmp("zp,zprint")}? CMD;
zremoveCommand: {this.cmp("zr,zremove")}? CMD;
zsaveCommand: {this.cmp("zs,zsave")}? CMD;

systemFunction: func = SystemVariable LPAREN RPAREN;

variable:
	localVariable
	| globalVariable
	| LPAREN variable RPAREN
	| AT variable (
		AT LPAREN expression (COMMA expression)* RPAREN
	)?
	| Property;

localVariable: PERCENT? ID;
globalVariable:
	CARET (VertBar expression? VertBar)? PERCENT? GlobalName;
localVariableList: (LPAREN ID Spaces ( COMMA ID)* RPAREN);

colonExpression:
	LPAREN (expression | Colon)* RPAREN
	| expression;
expression:
	simpleExpression
	| expression Spaces? (
		(EOL* UNDERSCORE)
		| PLUS
		| MINUS
		| ASTERISK
		| SHARP
		| SLASH
		| BACKSLASH
	) Spaces? expression
	| LPAREN expression RPAREN
	| condition;
simpleExpression:
	INT
	| FLOAT
	| variable
	| STRING
	| doClass
	| {this.argsLevel>0}? DOT localVariable
	| SystemVariable
	| SpecialGlobal
	| systemFunction
	| Macros;
condition:
	LPAREN condition RPAREN
	| condition (CondOper | EQUAL) condition
	| Negative condition
	| simpleExpression;

pc: CommandCOLON condition;

arguments:
	{this.argsLevel++;} LPAREN (COMMA | expression)* RPAREN {this.argsLevel--;};

doClass:
	ObjectClass LPClass ObjectName RPClass ObjectMethod arguments;
doRoutine:
	Label? (PLUS expression)? (CARET RoutineName)? arguments?;
doArgument: doClass | doRoutine;

labelDef:
	LPAREN (labelParameter ( COMMA labelParameter)*)? RPAREN (
		methodPublicVariables? Spaces? (
			MACMethodPrivate
			| MACMethodPublic
		)? Spaces? CommandEOL? comments* Spaces? methodContent
	)?;
methodPublicVariables: LBRACK ID (COMMA ID)* RBRACK;
methodContent:
	CommandLBRACE statement CommandRBRACE
	| CommandLBRACE CommandRBRACE
	| LBRACE statement RBRACE
	| CommandLBRACE CommandEOL? statement? RBRACE;
labelParameter: ID | ID EQUAL (STRING | INT);
