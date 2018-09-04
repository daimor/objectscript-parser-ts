// Generated from ./src/antlr/ObjectScriptLexer.g4 by ANTLR 4.6-SNAPSHOT


  import { Token } from 'antlr4ts';



import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class ObjectScriptLexer extends Lexer {
	public static readonly ObjectMethod=1;
	public static readonly ObjectName=2;
	public static readonly Label=3;
	public static readonly RoutineName=4;
	public static readonly GlobalName=5;
	public static readonly SystemVariable=6;
	public static readonly SpecialGlobal=7;
	public static readonly MACMethodPrivate=8;
	public static readonly MACMethodPublic=9;
	public static readonly SQLBlock=10;
	public static readonly JSBlock=11;
	public static readonly HTMLBlock=12;
	public static readonly Property=13;
	public static readonly ID=14;
	public static readonly INT=15;
	public static readonly FLOAT=16;
	public static readonly STRING=17;
	public static readonly EOL=18;
	public static readonly EQUAL=19;
	public static readonly COMMA=20;
	public static readonly Dollar=21;
	public static readonly Colon=22;
	public static readonly DOT=23;
	public static readonly PLUS=24;
	public static readonly MINUS=25;
	public static readonly PERCENT=26;
	public static readonly AT=27;
	public static readonly SHARP=28;
	public static readonly EXCLAMATION=29;
	public static readonly QUESTON=30;
	public static readonly ASTERISK=31;
	public static readonly UNDERSCORE=32;
	public static readonly SLASH=33;
	public static readonly BACKSLASH=34;
	public static readonly COMMENT=35;
	public static readonly Spaces=36;
	public static readonly LPClass=37;
	public static readonly RPClass=38;
	public static readonly LPAREN=39;
	public static readonly RPAREN=40;
	public static readonly LBRACE=41;
	public static readonly RBRACE=42;
	public static readonly LBRACK=43;
	public static readonly RBRACK=44;
	public static readonly FUNCTION=45;
	public static readonly UserFunction=46;
	public static readonly Macros=47;
	public static readonly CARET=48;
	public static readonly VertBar=49;
	public static readonly WS=50;
	public static readonly WSNL=51;
	public static readonly CondOper=52;
	public static readonly Negative=53;
	public static readonly ObjectClass=54;
	public static readonly ObjectSuper=55;
	public static readonly ObjectThis=56;
	public static readonly Define=57;
	public static readonly DefineExpression=58;
	public static readonly Include=59;
	public static readonly CMDComments=60;
	public static readonly CommandDO=61;
	public static readonly CommandGOTO=62;
	public static readonly CommandJOB=63;
	public static readonly CMD=64;
	public static readonly CommandSPACE=65;
	public static readonly CommandCOLON=66;
	public static readonly CommandEOL=67;
	public static readonly CommandLBRACE=68;
	public static readonly CommandRBRACE=69;
	public static readonly CommandCOMMA=70;
	public static readonly Special=71;
	public static readonly CMDMacros=72;
	public static readonly COMMAND=1;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "COMMAND"
	];

	public static readonly ruleNames: string[] = [
		"ObjectMethod", "ObjectName", "Label", "RoutineName", "GlobalName", "SystemVariable", 
		"SpecialGlobal", "MACMethodPrivate", "MACMethodPublic", "ParenBlock", 
		"ChevronBlock", "SQLBlock", "JSBlock", "HTMLBlock", "Property", "ID", 
		"INT", "FLOAT", "STRING", "EXPONENT", "EOL", "EQUAL", "COMMA", "Dollar", 
		"Colon", "DOT", "PLUS", "MINUS", "PERCENT", "AT", "SHARP", "EXCLAMATION", 
		"QUESTON", "ASTERISK", "UNDERSCORE", "SLASH", "BACKSLASH", "COMMENT", 
		"Spaces", "LPClass", "RPClass", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
		"LBRACK", "RBRACK", "FUNCTION", "UserFunction", "Macros", "CARET", "VertBar", 
		"WS", "WSNL", "CondOper", "Negative", "ObjectClass", "ObjectSuper", "ObjectThis", 
		"Define", "DefineExpression", "Include", "CMDComments", "CommandDO", "CommandGOTO", 
		"CommandJOB", "CMD", "CommandSPACE", "CommandCOLON", "CommandEOL", "CommandLBRACE", 
		"CommandRBRACE", "CommandCOMMA", "Special", "CMDMacros"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'$'", undefined, "'.'", undefined, undefined, "'%'", "'@'", "'#'", "'!'", 
		"'?'", "'*'", undefined, "'/'", "'\\'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'^'", "'|'", undefined, undefined, undefined, 
		"'''", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'&'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "ObjectMethod", "ObjectName", "Label", "RoutineName", "GlobalName", 
		"SystemVariable", "SpecialGlobal", "MACMethodPrivate", "MACMethodPublic", 
		"SQLBlock", "JSBlock", "HTMLBlock", "Property", "ID", "INT", "FLOAT", 
		"STRING", "EOL", "EQUAL", "COMMA", "Dollar", "Colon", "DOT", "PLUS", "MINUS", 
		"PERCENT", "AT", "SHARP", "EXCLAMATION", "QUESTON", "ASTERISK", "UNDERSCORE", 
		"SLASH", "BACKSLASH", "COMMENT", "Spaces", "LPClass", "RPClass", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "FUNCTION", "UserFunction", 
		"Macros", "CARET", "VertBar", "WS", "WSNL", "CondOper", "Negative", "ObjectClass", 
		"ObjectSuper", "ObjectThis", "Define", "DefineExpression", "Include", 
		"CMDComments", "CommandDO", "CommandGOTO", "CommandJOB", "CMD", "CommandSPACE", 
		"CommandCOLON", "CommandEOL", "CommandLBRACE", "CommandRBRACE", "CommandCOMMA", 
		"Special", "CMDMacros"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ObjectScriptLexer._LITERAL_NAMES, ObjectScriptLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return ObjectScriptLexer.VOCABULARY;
	}


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


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ObjectScriptLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "ObjectScriptLexer.g4"; }

	@Override
	public get ruleNames(): string[] { return ObjectScriptLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return ObjectScriptLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return ObjectScriptLexer.modeNames; }

	@Override
	action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 0:
			this.ObjectMethod_action(_localctx, actionIndex);
			break;

		case 2:
			this.Label_action(_localctx, actionIndex);
			break;

		case 20:
			this.EOL_action(_localctx, actionIndex);
			break;

		case 38:
			this.Spaces_action(_localctx, actionIndex);
			break;

		case 39:
			this.LPClass_action(_localctx, actionIndex);
			break;

		case 40:
			this.RPClass_action(_localctx, actionIndex);
			break;

		case 41:
			this.LPAREN_action(_localctx, actionIndex);
			break;

		case 42:
			this.RPAREN_action(_localctx, actionIndex);
			break;

		case 44:
			this.RBRACE_action(_localctx, actionIndex);
			break;

		case 46:
			this.RBRACK_action(_localctx, actionIndex);
			break;

		case 50:
			this.CARET_action(_localctx, actionIndex);
			break;

		case 56:
			this.ObjectClass_action(_localctx, actionIndex);
			break;

		case 59:
			this.Define_action(_localctx, actionIndex);
			break;

		case 61:
			this.Include_action(_localctx, actionIndex);
			break;

		case 62:
			this.CMDComments_action(_localctx, actionIndex);
			break;

		case 63:
			this.CommandDO_action(_localctx, actionIndex);
			break;

		case 64:
			this.CommandGOTO_action(_localctx, actionIndex);
			break;

		case 65:
			this.CommandJOB_action(_localctx, actionIndex);
			break;

		case 66:
			this.CMD_action(_localctx, actionIndex);
			break;

		case 67:
			this.CommandSPACE_action(_localctx, actionIndex);
			break;

		case 69:
			this.CommandEOL_action(_localctx, actionIndex);
			break;

		case 71:
			this.CommandRBRACE_action(_localctx, actionIndex);
			break;

		case 73:
			this.Special_action(_localctx, actionIndex);
			break;

		case 74:
			this.CMDMacros_action(_localctx, actionIndex);
			break;
		}
	}
	private ObjectMethod_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.isClass=false;this.isClassMethod=false;
			break;
		}
	}
	private Label_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			 this.labelDef = (!this.doArg);
					
			break;
		}
	}
	private EOL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.isCommand=false;this.macroline=false;
			break;
		}
	}
	private Spaces_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:

			             if (this.nesting==0&&!this.macroline){
			                if ((this.isCommand) && (this.text.length == 1)){this.isCommand=false;this.type = ObjectScriptLexer.CommandSPACE;}
			                else {this.pushMode(ObjectScriptLexer.COMMAND);}
			             }
			            
			break;
		}
	}
	private LPClass_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.nesting++;
			break;
		}
	}
	private RPClass_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.nesting--;this.isClassMethod=true;this.isClass=false;
			break;
		}
	}
	private LPAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.nesting++;
			break;
		}
	}
	private RPAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 7:
			this.nesting--;
			break;
		}
	}
	private RBRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 8:
			this.isCommand=false;
			break;
		}
	}
	private RBRACK_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 9:
			this.isCommand=false;
			break;
		}
	}
	private CARET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 10:
			this.caret=true;
			break;
		}
	}
	private ObjectClass_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 11:
			this.isClass=true;
			break;
		}
	}
	private Define_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 12:
			this.macroline = true;
			break;
		}
	}
	private Include_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 13:
			this.macroline = true;
			break;
		}
	}
	private CMDComments_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 14:
			this.popMode();this.more();
			break;
		}
	}
	private CommandDO_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 15:
			this.doArg = true;this.isCMD();
			break;
		}
	}
	private CommandGOTO_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 16:
			this.doArg = true;this.isCMD();
			break;
		}
	}
	private CommandJOB_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 17:
			this.doArg = true;this.isCMD();
			break;
		}
	}
	private CMD_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 18:
			this.doArg=false;this.isCMD();this.labelDef=false;
			break;
		}
	}
	private CommandSPACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 19:
			this.popMode();this.isCommand=false;
			break;
		}
	}
	private CommandEOL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 20:
			this.popMode();this.isCommand=false;
			break;
		}
	}
	private CommandRBRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 21:
			this.popMode();this.isCommand=false;
			break;
		}
	}
	private Special_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 22:
			this.popMode();this.more();
			break;
		}
	}
	private CMDMacros_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 23:
			this.popMode();
			break;
		}
	}
	@Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.ObjectMethod_sempred(_localctx, predIndex);

		case 1:
			return this.ObjectName_sempred(_localctx, predIndex);

		case 2:
			return this.Label_sempred(_localctx, predIndex);

		case 3:
			return this.RoutineName_sempred(_localctx, predIndex);

		case 4:
			return this.GlobalName_sempred(_localctx, predIndex);

		case 7:
			return this.MACMethodPrivate_sempred(_localctx, predIndex);

		case 8:
			return this.MACMethodPublic_sempred(_localctx, predIndex);

		case 37:
			return this.COMMENT_sempred(_localctx, predIndex);

		case 39:
			return this.LPClass_sempred(_localctx, predIndex);

		case 40:
			return this.RPClass_sempred(_localctx, predIndex);

		case 43:
			return this.LBRACE_sempred(_localctx, predIndex);

		case 59:
			return this.Define_sempred(_localctx, predIndex);

		case 61:
			return this.Include_sempred(_localctx, predIndex);
		}
		return true;
	}
	private ObjectMethod_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isClassMethod;
		}
		return true;
	}
	private ObjectName_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.nesting>0&&this.isClass;
		}
		return true;
	}
	private Label_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return ((this.charPositionInLine==0)||(this.doArg&&(this.lastTokenType==ObjectScriptLexer.CommandSPACE)));
		}
		return true;
	}
	private RoutineName_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.doArg&&(this.lastTokenType===ObjectScriptLexer.CARET);
		}
		return true;
	}
	private GlobalName_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return (this.lastTokenType===ObjectScriptLexer.CARET);
		}
		return true;
	}
	private MACMethodPrivate_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.labelDef;
		}
		return true;
	}
	private MACMethodPublic_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.labelDef;
		}
		return true;
	}
	private COMMENT_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return (this.charPositionInLine==0);
		}
		return true;
	}
	private LPClass_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.isClass;
		}
		return true;
	}
	private RPClass_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.isClass;
		}
		return true;
	}
	private LBRACE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.nesting==0&&!this.macroline;
		}
		return true;
	}
	private Define_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return (this.charPositionInLine==0);
		}
		return true;
	}
	private Include_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return (this.charPositionInLine==0);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02J\u031B\b\x01"+
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06"+
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f"+
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04"+
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04"+
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04"+
		"\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"+
		"\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*"+
		"\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x04"+
		"3\t3\x044\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04"+
		"<\t<\x04=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04"+
		"E\tE\x04F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x03\x02\x03"+
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xA1\n\x03\x03\x03\x03\x03"+
		"\x03\x03\x07\x03\xA6\n\x03\f\x03\x0E\x03\xA9\v\x03\x03\x04\x03\x04\x03"+
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03"+
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03"+
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03"+
		"\v\x03\v\x03\v\x07\v\xD0\n\v\f\v\x0E\v\xD3\v\v\x03\v\x05\v\xD6\n\v\x03"+
		"\f\x03\f\x03\f\x07\f\xDB\n\f\f\f\x0E\f\xDE\v\f\x03\f\x05\f\xE1\n\f\x03"+
		"\r\x07\r\xE4\n\r\f\r\x0E\r\xE7\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r"+
		"\x03\x0E\x07\x0E\xF0\n\x0E\f\x0E\x0E\x0E\xF3\v\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0F\xFB\n\x0F\f\x0F\x0E\x0F\xFE\v\x0F"+
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10"+
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x07\x11\u010E\n\x11\f\x11\x0E"+
		"\x11\u0111\v\x11\x03\x12\x06\x12\u0114\n\x12\r\x12\x0E\x12\u0115\x03\x13"+
		"\x03\x13\x03\x13\x05\x13\u011B\n\x13\x03\x13\x05\x13\u011E\n\x13\x03\x13"+
		"\x03\x13\x03\x13\x05\x13\u0123\n\x13\x03\x13\x06\x13\u0126\n\x13\r\x13"+
		"\x0E\x13\u0127\x03\x13\x03\x13\x05\x13\u012C\n\x13\x03\x14\x03\x14\x07"+
		"\x14\u0130\n\x14\f\x14\x0E\x14\u0133\v\x14\x03\x14\x03\x14\x03\x15\x03"+
		"\x15\x05\x15\u0139\n\x15\x03\x15\x06\x15\u013C\n\x15\r\x15\x0E\x15\u013D"+
		"\x03\x16\x06\x16\u0141\n\x16\r\x16\x0E\x16\u0142\x03\x16\x03\x16\x03\x17"+
		"\x07\x17\u0148\n\x17\f\x17\x0E\x17\u014B\v\x17\x03\x17\x03\x17\x07\x17"+
		"\u014F\n\x17\f\x17\x0E\x17\u0152\v\x17\x03\x18\x07\x18\u0155\n\x18\f\x18"+
		"\x0E\x18\u0158\v\x18\x03\x18\x03\x18\x07\x18\u015C\n\x18\f\x18\x0E\x18"+
		"\u015F\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x07"+
		"\x1C\u0168\n\x1C\f\x1C\x0E\x1C\u016B\v\x1C\x03\x1C\x03\x1C\x07\x1C\u016F"+
		"\n\x1C\f\x1C\x0E\x1C\u0172\v\x1C\x03\x1D\x07\x1D\u0175\n\x1D\f\x1D\x0E"+
		"\x1D\u0178\v\x1D\x03\x1D\x03\x1D\x07\x1D\u017C\n\x1D\f\x1D\x0E\x1D\u017F"+
		"\v\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\""+
		"\x03#\x03#\x03$\x07$\u018E\n$\f$\x0E$\u0191\v$\x03$\x03$\x07$\u0195\n"+
		"$\f$\x0E$\u0198\v$\x03%\x03%\x03&\x03&\x03\'\x06\'\u019F\n\'\r\'\x0E\'"+
		"\u01A0\x03\'\x03\'\x03\'\x03\'\x07\'\u01A7\n\'\f\'\x0E\'\u01AA\v\'\x03"+
		"\'\x03\'\x03\'\x03\'\x07\'\u01B0\n\'\f\'\x0E\'\u01B3\v\'\x03\'\x05\'\u01B6"+
		"\n\'\x03\'\x06\'\u01B9\n\'\r\'\x0E\'\u01BA\x03\'\x03\'\x03\'\x05\'\u01C0"+
		"\n\'\x03\'\x07\'\u01C3\n\'\f\'\x0E\'\u01C6\v\'\x03\'\x06\'\u01C9\n\'\r"+
		"\'\x0E\'\u01CA\x03\'\x05\'\u01CE\n\'\x03\'\x03\'\x07\'\u01D2\n\'\f\'\x0E"+
		"\'\u01D5\v\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01DC\n\'\f\'\x0E\'\u01DF"+
		"\v\'\x03\'\x05\'\u01E2\n\'\x03\'\x05\'\u01E5\n\'\x03(\x06(\u01E8\n(\r"+
		"(\x0E(\u01E9\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03"+
		"*\x03+\x03+\x07+\u01FA\n+\f+\x0E+\u01FD\v+\x03+\x03+\x03,\x07,\u0202\n"+
		",\f,\x0E,\u0205\v,\x03,\x03,\x03,\x03-\x03-\x07-\u020C\n-\f-\x0E-\u020F"+
		"\v-\x03-\x03-\x03-\x03-\x03.\x07.\u0216\n.\f.\x0E.\u0219\v.\x03.\x03."+
		"\x03.\x03/\x07/\u021F\n/\f/\x0E/\u0222\v/\x03/\x03/\x030\x030\x070\u0228"+
		"\n0\f0\x0E0\u022B\v0\x030\x030\x031\x031\x031\x071\u0232\n1\f1\x0E1\u0235"+
		"\v1\x032\x032\x032\x032\x032\x072\u023C\n2\f2\x0E2\u023F\v2\x033\x033"+
		"\x033\x033\x033\x033\x073\u0247\n3\f3\x0E3\u024A\v3\x034\x034\x034\x03"+
		"5\x035\x036\x036\x037\x037\x038\x078\u0256\n8\f8\x0E8\u0259\v8\x038\x03"+
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x05"+
		"8\u026A\n8\x038\x078\u026D\n8\f8\x0E8\u0270\v8\x039\x039\x03:\x03:\x03"+
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03"+
		";\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x07=\u0291"+
		"\n=\f=\x0E=\u0294\v=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03"+
		">\x03>\x07>\u02A1\n>\f>\x0E>\u02A4\v>\x03>\x06>\u02A7\n>\r>\x0E>\u02A8"+
		"\x03?\x03?\x07?\u02AD\n?\f?\x0E?\u02B0\v?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x05@\u02BF\n@\x03@\x03@\x03A\x03"+
		"A\x05A\u02C5\nA\x03A\x03A\x03B\x03B\x03B\x03B\x05B\u02CD\nB\x03B\x03B"+
		"\x03C\x03C\x03C\x05C\u02D4\nC\x03C\x03C\x03D\x03D\x07D\u02DA\nD\fD\x0E"+
		"D\u02DD\vD\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x06G\u02E9"+
		"\nG\rG\x0EG\u02EA\x03G\x03G\x03H\x03H\x07H\u02F1\nH\fH\x0EH\u02F4\vH\x03"+
		"I\x07I\u02F7\nI\fI\x0EI\u02FA\vI\x03I\x03I\x03I\x03J\x07J\u0300\nJ\fJ"+
		"\x0EJ\u0303\vJ\x03J\x03J\x07J\u0307\nJ\fJ\x0EJ\u030A\vJ\x03K\x03K\x03"+
		"K\x03L\x03L\x03L\x03L\x03L\x03L\x07L\u0315\nL\fL\x0EL\u0318\vL\x03L\x03"+
		"L\x04\u01A8\u02A2\x02\x02M\x04\x02\x03\x06\x02\x04\b\x02\x05\n\x02\x06"+
		"\f\x02\x07\x0E\x02\b\x10\x02\t\x12\x02\n\x14\x02\v\x16\x02\x02\x18\x02"+
		"\x02\x1A\x02\f\x1C\x02\r\x1E\x02\x0E \x02\x0F\"\x02\x10$\x02\x11&\x02"+
		"\x12(\x02\x13*\x02\x02,\x02\x14.\x02\x150\x02\x162\x02\x174\x02\x186\x02"+
		"\x198\x02\x1A:\x02\x1B<\x02\x1C>\x02\x1D@\x02\x1EB\x02\x1FD\x02 F\x02"+
		"!H\x02\"J\x02#L\x02$N\x02%P\x02&R\x02\'T\x02(V\x02)X\x02*Z\x02+\\\x02"+
		",^\x02-`\x02.b\x02/d\x020f\x021h\x022j\x023l\x024n\x025p\x026r\x027t\x02"+
		"8v\x029x\x02:z\x02;|\x02<~\x02=\x80\x02>\x82\x02?\x84\x02@\x86\x02A\x88"+
		"\x02B\x8A\x02C\x8C\x02D\x8E\x02E\x90\x02F\x92\x02G\x94\x02H\x96\x02I\x98"+
		"\x02J\x04\x02\x03$\x04\x02RRrr\x04\x02TTtt\x04\x02KKkk\x04\x02XXxx\x04"+
		"\x02CCcc\x04\x02VVvv\x04\x02GGgg\x04\x02WWww\x04\x02DDdd\x04\x02NNnn\x04"+
		"\x02EEee\x03\x02*+\x03\x03++\x04\x02>>@@\x03\x03@@\x04\x02UUuu\x04\x02"+
		"SSss\x04\x02LLll\x04\x02JJjj\x04\x02OOoo\x04\x02C\\c|\x05\x022;C\\c|\x03"+
		"\x022;\x03\x02$$\x04\x02--//\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x05\x02"+
		"\v\f\x0F\x0F\"\"\x04\x02FFff\x04\x02HHhh\x04\x02PPpp\x04\x02QQqq\x04\x02"+
		"IIii\x03\x02\"\"\u0365\x02\x04\x03\x02\x02\x02\x02\x06\x03\x02\x02\x02"+
		"\x02\b\x03\x02\x02\x02\x02\n\x03\x02\x02\x02\x02\f\x03\x02\x02\x02\x02"+
		"\x0E\x03\x02\x02\x02\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02"+
		"\x14\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02\x02\x1C\x03\x02\x02\x02\x02"+
		"\x1E\x03\x02\x02\x02\x02 \x03\x02\x02\x02\x02\"\x03\x02\x02\x02\x02$\x03"+
		"\x02\x02\x02\x02&\x03\x02\x02\x02\x02(\x03\x02\x02\x02\x02,\x03\x02\x02"+
		"\x02\x02.\x03\x02\x02\x02\x020\x03\x02\x02\x02\x022\x03\x02\x02\x02\x02"+
		"4\x03\x02\x02\x02\x026\x03\x02\x02\x02\x028\x03\x02\x02\x02\x02:\x03\x02"+
		"\x02\x02\x02<\x03\x02\x02\x02\x02>\x03\x02\x02\x02\x02@\x03\x02\x02\x02"+
		"\x02B\x03\x02\x02\x02\x02D\x03\x02\x02\x02\x02F\x03\x02\x02\x02\x02H\x03"+
		"\x02\x02\x02\x02J\x03\x02\x02\x02\x02L\x03\x02\x02\x02\x02N\x03\x02\x02"+
		"\x02\x02P\x03\x02\x02\x02\x02R\x03\x02\x02\x02\x02T\x03\x02\x02\x02\x02"+
		"V\x03\x02\x02\x02\x02X\x03\x02\x02\x02\x02Z\x03\x02\x02\x02\x02\\\x03"+
		"\x02\x02\x02\x02^\x03\x02\x02\x02\x02`\x03\x02\x02\x02\x02b\x03\x02\x02"+
		"\x02\x02d\x03\x02\x02\x02\x02f\x03\x02\x02\x02\x02h\x03\x02\x02\x02\x02"+
		"j\x03\x02\x02\x02\x02l\x03\x02\x02\x02\x02n\x03\x02\x02\x02\x02p\x03\x02"+
		"\x02\x02\x02r\x03\x02\x02\x02\x02t\x03\x02\x02\x02\x02v\x03\x02\x02\x02"+
		"\x02x\x03\x02\x02\x02\x02z\x03\x02\x02\x02\x02|\x03\x02\x02\x02\x02~\x03"+
		"\x02\x02\x02\x03\x80\x03\x02\x02\x02\x03\x82\x03\x02\x02\x02\x03\x84\x03"+
		"\x02\x02\x02\x03\x86\x03\x02\x02\x02\x03\x88\x03\x02\x02\x02\x03\x8A\x03"+
		"\x02\x02\x02\x03\x8C\x03\x02\x02\x02\x03\x8E\x03\x02\x02\x02\x03\x90\x03"+
		"\x02\x02\x02\x03\x92\x03\x02\x02\x02\x03\x94\x03\x02\x02\x02\x03\x96\x03"+
		"\x02\x02\x02\x03\x98\x03\x02\x02\x02\x04\x9A\x03\x02\x02\x02\x06\x9E\x03"+
		"\x02\x02\x02\b\xAA\x03\x02\x02\x02\n\xAE\x03\x02\x02\x02\f\xB1\x03\x02"+
		"\x02\x02\x0E\xB4\x03\x02\x02\x02\x10\xB7\x03\x02\x02\x02\x12\xBB\x03\x02"+
		"\x02\x02\x14\xC4\x03\x02\x02\x02\x16\xCC\x03\x02\x02\x02\x18\xD7\x03\x02"+
		"\x02\x02\x1A\xE5\x03\x02\x02\x02\x1C\xF1\x03\x02\x02\x02\x1E\xFC\x03\x02"+
		"\x02\x02 \u0106\x03\x02\x02\x02\"\u010B\x03\x02\x02\x02$\u0113\x03\x02"+
		"\x02\x02&\u012B\x03\x02\x02\x02(\u012D\x03\x02\x02\x02*\u0136\x03\x02"+
		"\x02\x02,\u0140\x03\x02\x02\x02.\u0149\x03\x02\x02\x020\u0156\x03\x02"+
		"\x02\x022\u0160\x03\x02\x02\x024\u0162\x03\x02\x02\x026\u0164\x03\x02"+
		"\x02\x028\u0169\x03\x02\x02\x02:\u0176\x03\x02\x02\x02<\u0180\x03\x02"+
		"\x02\x02>\u0182\x03\x02\x02\x02@\u0184\x03\x02\x02\x02B\u0186\x03\x02"+
		"\x02\x02D\u0188\x03\x02\x02\x02F\u018A\x03\x02\x02\x02H\u018F\x03\x02"+
		"\x02\x02J\u0199\x03\x02\x02\x02L\u019B\x03\x02\x02\x02N\u01E4\x03\x02"+
		"\x02\x02P\u01E7\x03\x02\x02\x02R\u01ED\x03\x02\x02\x02T\u01F1\x03\x02"+
		"\x02\x02V\u01F7\x03\x02\x02\x02X\u0203\x03\x02\x02\x02Z\u0209\x03\x02"+
		"\x02\x02\\\u0217\x03\x02\x02\x02^\u0220\x03\x02\x02\x02`\u0225\x03\x02"+
		"\x02\x02b\u022E\x03\x02\x02\x02d\u0236\x03\x02\x02\x02f\u0240\x03\x02"+
		"\x02\x02h\u024B\x03\x02\x02\x02j\u024E\x03\x02\x02\x02l\u0250\x03\x02"+
		"\x02\x02n\u0252\x03\x02\x02\x02p\u0257\x03\x02\x02\x02r\u0271\x03\x02"+
		"\x02\x02t\u0273\x03\x02\x02\x02v\u027D\x03\x02\x02\x02x\u0286\x03\x02"+
		"\x02\x02z\u028E\x03\x02\x02\x02|\u029E\x03\x02\x02\x02~\u02AA\x03\x02"+
		"\x02\x02\x80\u02BE\x03\x02\x02\x02\x82\u02C2\x03\x02\x02\x02\x84\u02C8"+
		"\x03\x02\x02\x02\x86\u02D0\x03\x02\x02\x02\x88\u02D7\x03\x02\x02\x02\x8A"+
		"\u02E0\x03\x02\x02\x02\x8C\u02E3\x03\x02\x02\x02\x8E\u02E8\x03\x02\x02"+
		"\x02\x90\u02EE\x03\x02\x02\x02\x92\u02F8\x03\x02\x02\x02\x94\u0301\x03"+
		"\x02\x02\x02\x96\u030B\x03\x02\x02\x02\x98\u030E\x03\x02\x02\x02\x9A\x9B"+
		"\x06\x02\x02\x02\x9B\x9C\x05\"\x11\x02\x9C\x9D\b\x02\x02\x02\x9D\x05\x03"+
		"\x02\x02\x02\x9E\xA0\x06\x03\x03\x02\x9F\xA1\x07\'\x02\x02\xA0\x9F\x03"+
		"\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA7\x05"+
		"\"\x11\x02\xA3\xA4\x070\x02\x02\xA4\xA6\x05\"\x11\x02\xA5\xA3\x03\x02"+
		"\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02"+
		"\x02\x02\xA8\x07\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x06\x04"+
		"\x04\x02\xAB\xAC\x05\"\x11\x02\xAC\xAD\b\x04\x03\x02\xAD\t\x03\x02\x02"+
		"\x02\xAE\xAF\x06\x05\x05\x02\xAF\xB0\x05\"\x11\x02\xB0\v\x03\x02\x02\x02"+
		"\xB1\xB2\x06\x06\x06\x02\xB2\xB3\x05\"\x11\x02\xB3\r\x03\x02\x02\x02\xB4"+
		"\xB5\x052\x19\x02\xB5\xB6\x05\"\x11\x02\xB6\x0F\x03\x02\x02\x02\xB7\xB8"+
		"\x05h4\x02\xB8\xB9\x052\x19\x02\xB9\xBA\x05\"\x11\x02\xBA\x11\x03\x02"+
		"\x02\x02\xBB\xBC\x06\t\x07\x02\xBC\xBD\t\x02\x02\x02\xBD\xBE\t\x03\x02"+
		"\x02\xBE\xBF\t\x04\x02\x02\xBF\xC0\t\x05\x02\x02\xC0\xC1\t\x06\x02\x02"+
		"\xC1\xC2\t\x07\x02\x02\xC2\xC3\t\b\x02\x02\xC3\x13\x03\x02\x02\x02\xC4"+
		"\xC5\x06\n\b\x02\xC5\xC6\t\x02\x02\x02\xC6\xC7\t\t\x02\x02\xC7\xC8\t\n"+
		"\x02\x02\xC8\xC9\t\v\x02\x02\xC9\xCA\t\x04\x02\x02\xCA\xCB\t\f\x02\x02"+
		"\xCB\x15\x03\x02\x02\x02\xCC\xD1\x07*\x02\x02\xCD\xD0\x05\x16\v\x02\xCE"+
		"\xD0\n\r\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3"+
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5"+
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD6\t\x0E\x02\x02\xD5\xD4"+
		"\x03\x02\x02\x02\xD6\x17\x03\x02\x02\x02\xD7\xDC\x07>\x02\x02\xD8\xDB"+
		"\x05\x18\f\x02\xD9\xDB\n\x0F\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03"+
		"\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03"+
		"\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE1\t"+
		"\x10\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\x19\x03\x02\x02\x02\xE2\xE4\x05"+
		"l6\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02"+
		"\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE8\x03\x02\x02\x02\xE7\xE5\x03\x02"+
		"\x02\x02\xE8\xE9\x07(\x02\x02\xE9\xEA\t\x11\x02\x02\xEA\xEB\t\x12\x02"+
		"\x02\xEB\xEC\t\v\x02\x02\xEC\xED\x05\x16\v\x02\xED\x1B\x03\x02\x02\x02"+
		"\xEE\xF0\x05l6\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1"+
		"\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3"+
		"\xF1\x03\x02\x02\x02\xF4\xF5\x07(\x02\x02\xF5\xF6\t\x13\x02\x02\xF6\xF7"+
		"\t\x11\x02\x02\xF7\xF8\x05\x18\f\x02\xF8\x1D\x03\x02\x02\x02\xF9\xFB\x05"+
		"l6\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02"+
		"\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xFC\x03\x02"+
		"\x02\x02\xFF\u0100\x07(\x02\x02\u0100\u0101\t\x14\x02\x02\u0101\u0102"+
		"\t\x07\x02\x02\u0102\u0103\t\x15\x02\x02\u0103\u0104\t\v\x02\x02\u0104"+
		"\u0105\x05\x18\f\x02\u0105\x1F\x03\x02\x02\x02\u0106\u0107\x070\x02\x02"+
		"\u0107\u0108\x070\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x05"+
		"\"\x11\x02\u010A!\x03\x02\x02\x02\u010B\u010F\t\x16\x02\x02\u010C\u010E"+
		"\t\x17\x02\x02\u010D\u010C\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02"+
		"\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110#\x03\x02"+
		"\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0114\t\x18\x02\x02\u0113\u0112"+
		"\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02"+
		"\u0115\u0116\x03\x02\x02\x02\u0116%\x03\x02\x02\x02\u0117\u0118\x05$\x12"+
		"\x02\u0118\u011A\x070\x02\x02\u0119\u011B\x05$\x12\x02\u011A\u0119\x03"+
		"\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C"+
		"\u011E\x05*\x15\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02"+
		"\x02\u011E\u012C\x03\x02\x02\x02\u011F\u0120\x070\x02\x02\u0120\u0122"+
		"\x05$\x12\x02\u0121\u0123\x05*\x15\x02\u0122\u0121\x03\x02\x02\x02\u0122"+
		"\u0123\x03\x02\x02\x02\u0123\u012C\x03\x02\x02\x02\u0124\u0126\x05$\x12"+
		"\x02\u0125\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0125"+
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02"+
		"\u0129\u012A\x05*\x15\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0117\x03"+
		"\x02\x02\x02\u012B\u011F\x03\x02\x02\x02\u012B\u0125\x03\x02\x02\x02\u012C"+
		"\'\x03\x02\x02\x02\u012D\u0131\x07$\x02\x02\u012E\u0130\n\x19\x02\x02"+
		"\u012F\u012E\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03"+
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133"+
		"\u0131\x03\x02\x02\x02\u0134\u0135\x07$\x02\x02\u0135)\x03\x02\x02\x02"+
		"\u0136\u0138\t\b\x02\x02\u0137\u0139\t\x1A\x02\x02\u0138\u0137\x03\x02"+
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A"+
		"\u013C\t\x18\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02"+
		"\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E+\x03"+
		"\x02\x02\x02\u013F\u0141\t\x1B\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141"+
		"\u0142\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02"+
		"\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\b\x16\x04\x02\u0145-"+
		"\x03\x02\x02\x02\u0146\u0148\x05l6\x02\u0147\u0146\x03\x02\x02\x02\u0148"+
		"\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02"+
		"\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C"+
		"\u0150\x07?\x02\x02\u014D\u014F\x05l6\x02\u014E\u014D\x03\x02\x02\x02"+
		"\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03"+
		"\x02\x02\x02\u0151/\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153"+
		"\u0155\x05l6\x02\u0154\u0153\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02"+
		"\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03"+
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015D\x07.\x02\x02\u015A"+
		"\u015C\x05l6\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02"+
		"\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E1\x03\x02"+
		"\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0161\x07&\x02\x02\u01613\x03"+
		"\x02\x02\x02\u0162\u0163\x07<\x02\x02\u01635\x03\x02\x02\x02\u0164\u0165"+
		"\x070\x02\x02\u01657\x03\x02\x02\x02\u0166\u0168\x05l6\x02\u0167\u0166"+
		"\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02"+
		"\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0169\x03"+
		"\x02\x02\x02\u016C\u0170\x07-\x02\x02\u016D\u016F\x05l6\x02\u016E\u016D"+
		"\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02"+
		"\u0170\u0171\x03\x02\x02\x02\u01719\x03\x02\x02\x02\u0172\u0170\x03\x02"+
		"\x02\x02\u0173\u0175\x05l6\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0178"+
		"\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02"+
		"\u0177\u0179\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017D\x07"+
		"/\x02\x02\u017A\u017C\x05l6\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017F"+
		"\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02"+
		"\u017E;\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0181\x07\'"+
		"\x02\x02\u0181=\x03\x02\x02\x02\u0182\u0183\x07B\x02\x02\u0183?\x03\x02"+
		"\x02\x02\u0184\u0185\x07%\x02\x02\u0185A\x03\x02\x02\x02\u0186\u0187\x07"+
		"#\x02\x02\u0187C\x03\x02\x02\x02\u0188\u0189\x07A\x02\x02\u0189E\x03\x02"+
		"\x02\x02\u018A\u018B\x07,\x02\x02\u018BG\x03\x02\x02\x02\u018C\u018E\x05"+
		"l6\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D"+
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02"+
		"\u0191\u018F\x03\x02\x02\x02\u0192\u0196\x07a\x02\x02\u0193\u0195\x05"+
		"l6\x02\u0194\u0193\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194"+
		"\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197I\x03\x02\x02\x02\u0198"+
		"\u0196\x03\x02\x02\x02\u0199\u019A\x071\x02\x02\u019AK\x03\x02\x02\x02"+
		"\u019B\u019C\x07^\x02\x02\u019CM\x03\x02\x02\x02\u019D\u019F\x05l6\x02"+
		"\u019E\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u019E\x03"+
		"\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2"+
		"\u01A3\x071\x02\x02\u01A3\u01A4\x07,\x02\x02\u01A4\u01A8\x03\x02\x02\x02"+
		"\u01A5\u01A7\v\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01AA\x03"+
		"\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9"+
		"\u01B5\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AC\x07,\x02"+
		"\x02\u01AC\u01AD\x071\x02\x02\u01AD\u01B1\x03\x02\x02\x02\u01AE\u01B0"+
		"\x05l6\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1"+
		"\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B6\x03\x02"+
		"\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B6\x07\x02\x02\x03\u01B5"+
		"\u01AB\x03\x02\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6\u01E5\x03\x02"+
		"\x02\x02\u01B7\u01B9\x05l6\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BA"+
		"\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02"+
		"\u01BB\u01BF\x03\x02\x02\x02\u01BC\u01BD\x071\x02\x02\u01BD\u01C0";
	private static readonly _serializedATNSegment1: string =
		"\x071\x02\x02\u01BE\u01C0\x07=\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01BF"+
		"\u01BE\x03\x02\x02\x02\u01C0\u01C4\x03\x02\x02\x02\u01C1\u01C3\n\x1B\x02"+
		"\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2"+
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01CD\x03\x02\x02\x02"+
		"\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01C9\t\x1B\x02\x02\u01C8\u01C7\x03"+
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA"+
		"\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CE\x07\x02"+
		"\x02\x03\u01CD\u01C8\x03\x02\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CE"+
		"\u01E5\x03\x02\x02\x02\u01CF\u01D3\x06\'\t\x02\u01D0\u01D2\x05l6\x02\u01D1"+
		"\u01D0\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02"+
		"\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D6\x03\x02\x02\x02\u01D5"+
		"\u01D3\x03\x02\x02\x02\u01D6\u01D7\x07%\x02\x02\u01D7\u01D8\x07=\x02\x02"+
		"\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DD\n\x1B\x02\x02\u01DA\u01DC\n\x1B"+
		"\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD"+
		"\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E1\x03\x02"+
		"\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E2\x07\x0F\x02\x02\u01E1"+
		"\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02"+
		"\x02\x02\u01E3\u01E5\x07\f\x02\x02\u01E4\u019E\x03\x02\x02\x02\u01E4\u01B8"+
		"\x03\x02\x02\x02\u01E4\u01CF\x03\x02\x02\x02\u01E5O\x03\x02\x02\x02\u01E6"+
		"\u01E8\x05l6\x02\u01E7\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02"+
		"\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03"+
		"\x02\x02\x02\u01EB\u01EC\b(\x05\x02\u01ECQ\x03\x02\x02\x02\u01ED\u01EE"+
		"\x06)\n\x02\u01EE\u01EF\x07*\x02\x02\u01EF\u01F0\b)\x06\x02\u01F0S\x03"+
		"\x02\x02\x02\u01F1\u01F2\x06*\v\x02\u01F2\u01F3\x07+\x02\x02\u01F3\u01F4"+
		"\x070\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\b*\x07\x02\u01F6"+
		"U\x03\x02\x02\x02\u01F7\u01FB\x07*\x02\x02\u01F8\u01FA\x05l6\x02\u01F9"+
		"\u01F8\x03\x02\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02"+
		"\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD"+
		"\u01FB\x03\x02\x02\x02\u01FE\u01FF\b+\b\x02\u01FFW\x03\x02\x02\x02\u0200"+
		"\u0202\x05l6\x02\u0201\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02"+
		"\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0206\x03"+
		"\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0207\x07+\x02\x02\u0207"+
		"\u0208\b,\t\x02\u0208Y\x03\x02\x02\x02\u0209\u020D\x07}\x02\x02\u020A"+
		"\u020C\x05l6\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02"+
		"\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x03"+
		"\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u0210\u0211\x06-\f\x02\u0211"+
		"\u0212\x03\x02\x02\x02\u0212\u0213\b-\n\x02\u0213[\x03\x02\x02\x02\u0214"+
		"\u0216\x05n7\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02"+
		"\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03"+
		"\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A\u021B\x07\x7F\x02\x02\u021B"+
		"\u021C\b.\v\x02\u021C]\x03\x02\x02\x02\u021D\u021F\x05n7\x02\u021E\u021D"+
		"\x03\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02"+
		"\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0220\x03"+
		"\x02\x02\x02\u0223\u0224\x07]\x02\x02\u0224_\x03\x02\x02\x02\u0225\u0229"+
		"\x07_\x02\x02\u0226\u0228\x05n7\x02\u0227\u0226\x03\x02\x02\x02\u0228"+
		"\u022B\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02"+
		"\x02\x02\u022A\u022C\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C"+
		"\u022D\b0\f\x02\u022Da\x03\x02\x02\x02\u022E\u022F\x07&\x02\x02\u022F"+
		"\u0233\t\x16\x02\x02\u0230\u0232\t\x17\x02\x02\u0231\u0230\x03\x02\x02"+
		"\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234"+
		"\x03\x02\x02\x02\u0234c\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0236"+
		"\u0237\x07&\x02\x02\u0237\u0238\x07&\x02\x02\u0238\u0239\x03\x02\x02\x02"+
		"\u0239\u023D\t\x16\x02\x02\u023A\u023C\t\x17\x02\x02\u023B\u023A\x03\x02"+
		"\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D"+
		"\u023E\x03\x02\x02\x02\u023Ee\x03\x02\x02\x02\u023F\u023D\x03\x02\x02"+
		"\x02\u0240\u0241\x07&\x02\x02\u0241\u0242\x07&\x02\x02\u0242\u0243\x07"+
		"&\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0248\t\x16\x02\x02\u0245"+
		"\u0247\t\x17\x02\x02\u0246\u0245\x03\x02\x02\x02\u0247\u024A\x03\x02\x02"+
		"\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249g\x03"+
		"\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024B\u024C\x07`\x02\x02\u024C"+
		"\u024D\b4\r\x02\u024Di\x03\x02\x02\x02\u024E\u024F\x07~\x02\x02\u024F"+
		"k\x03\x02\x02\x02\u0250\u0251\t\x1C\x02\x02\u0251m\x03\x02\x02\x02\u0252"+
		"\u0253\t\x1D\x02\x02\u0253o\x03\x02\x02\x02\u0254\u0256\x05l6\x02\u0255"+
		"\u0254\x03\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02"+
		"\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0269\x03\x02\x02\x02\u0259"+
		"\u0257\x03\x02\x02\x02\u025A\u025B\x07(\x02\x02\u025B\u026A\x07(\x02\x02"+
		"\u025C\u025D\x07~\x02\x02\u025D\u026A\x07~\x02\x02\u025E\u025F\x07@\x02"+
		"\x02\u025F\u026A\x07?\x02\x02\u0260\u0261\x07>\x02\x02\u0261\u026A\x07"+
		"?\x02\x02\u0262\u0263\x07)\x02\x02\u0263\u026A\x07?\x02\x02\u0264\u026A"+
		"\t\x0F\x02\x02\u0265\u0266\x07)\x02\x02\u0266\u026A\x07>\x02\x02\u0267"+
		"\u0268\x07)\x02\x02\u0268\u026A\x07@\x02\x02\u0269\u025A\x03\x02\x02\x02"+
		"\u0269\u025C\x03\x02\x02\x02\u0269\u025E\x03\x02\x02\x02\u0269\u0260\x03"+
		"\x02\x02\x02\u0269\u0262\x03\x02\x02\x02\u0269\u0264\x03\x02\x02\x02\u0269"+
		"\u0265\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026E\x03\x02"+
		"\x02\x02\u026B\u026D\x05l6\x02\u026C\u026B\x03\x02\x02\x02\u026D\u0270"+
		"\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02"+
		"\u026Fq\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07)\x02"+
		"\x02\u0272s\x03\x02\x02\x02\u0273\u0274\x07%\x02\x02\u0274\u0275\x07%"+
		"\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\t\f\x02\x02\u0277\u0278"+
		"\t\v\x02\x02\u0278\u0279\t\x06\x02\x02\u0279\u027A\t\x11\x02\x02\u027A"+
		"\u027B\t\x11\x02\x02\u027B\u027C\b:\x0E\x02\u027Cu\x03\x02\x02\x02\u027D"+
		"\u027E\x07%\x02\x02\u027E\u027F\x07%\x02\x02\u027F\u0280\x03\x02\x02\x02"+
		"\u0280\u0281\t\x11\x02\x02\u0281\u0282\t\t\x02\x02\u0282\u0283\t\x02\x02"+
		"\x02\u0283\u0284\t\b\x02\x02\u0284\u0285\t\x03\x02\x02\u0285w\x03\x02"+
		"\x02\x02\u0286\u0287\x07%\x02\x02\u0287\u0288\x07%\x02\x02\u0288\u0289"+
		"\x03\x02\x02\x02\u0289\u028A\t\x07\x02\x02\u028A\u028B\t\x14\x02\x02\u028B"+
		"\u028C\t\x04\x02\x02\u028C\u028D\t\x11\x02\x02\u028Dy\x03\x02\x02\x02"+
		"\u028E\u0292\x06=\r\x02\u028F\u0291\x05l6\x02\u0290\u028F\x03\x02\x02"+
		"\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293"+
		"\x03\x02\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02"+
		"\u0295\u0296\x07%\x02\x02\u0296\u0297\t\x1E\x02\x02\u0297\u0298\t\b\x02"+
		"\x02\u0298\u0299\t\x1F\x02\x02\u0299\u029A\t\x04\x02\x02\u029A\u029B\t"+
		" \x02\x02\u029B\u029C\t\b\x02\x02\u029C\u029D\b=\x0F\x02\u029D{\x03\x02"+
		"\x02\x02\u029E\u02A2\x05z=\x02\u029F\u02A1\v\x02\x02\x02\u02A0\u029F\x03"+
		"\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A2"+
		"\u02A0\x03\x02\x02\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02"+
		"\x02\x02\u02A5\u02A7\t\x1B\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02A8"+
		"\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02"+
		"\u02A9}\x03\x02\x02\x02\u02AA\u02AE\x06?\x0E\x02\u02AB\u02AD\x05l6\x02"+
		"\u02AC\u02AB\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03"+
		"\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0"+
		"\u02AE\x03\x02\x02\x02\u02B1\u02B2\x07%\x02\x02\u02B2\u02B3\t\x04\x02"+
		"\x02\u02B3\u02B4\t \x02\x02\u02B4\u02B5\t\f\x02\x02\u02B5\u02B6\t\v\x02"+
		"\x02\u02B6\u02B7\t\t\x02\x02\u02B7\u02B8\t\x1E\x02\x02\u02B8\u02B9\t\b"+
		"\x02\x02\u02B9\u02BA\b?\x10\x02\u02BA\x7F\x03\x02\x02\x02\u02BB\u02BF"+
		"\x07=\x02\x02\u02BC\u02BD\x071\x02\x02\u02BD\u02BF\x071\x02\x02\u02BE"+
		"\u02BB\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02C0\x03\x02"+
		"\x02\x02\u02C0\u02C1\b@\x11\x02\u02C1\x81\x03\x02\x02\x02\u02C2\u02C4"+
		"\t\x1E\x02\x02\u02C3\u02C5\t!\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4"+
		"\u02C5\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C7\bA\x12"+
		"\x02\u02C7\x83\x03\x02\x02\x02\u02C8\u02CC\t\"\x02\x02\u02C9\u02CA\t!"+
		"\x02\x02\u02CA\u02CB\t\x07\x02\x02\u02CB\u02CD\t!\x02\x02\u02CC\u02C9"+
		"\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02"+
		"\u02CE\u02CF\bB\x13\x02\u02CF\x85\x03\x02\x02\x02\u02D0\u02D3\t\x13\x02"+
		"\x02\u02D1\u02D2\t!\x02\x02\u02D2\u02D4\t\n\x02\x02\u02D3\u02D1\x03\x02"+
		"\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5"+
		"\u02D6\bC\x14\x02\u02D6\x87\x03\x02\x02\x02\u02D7\u02DB\t\x16\x02\x02"+
		"\u02D8\u02DA\t\x17\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03"+
		"\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC"+
		"\u02DE\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02DF\bD\x15"+
		"\x02\u02DF\x89\x03\x02\x02\x02\u02E0\u02E1\t#\x02\x02\u02E1\u02E2\bE\x16"+
		"\x02\u02E2\x8B\x03\x02\x02\x02\u02E3\u02E4\x07<\x02\x02\u02E4\u02E5\x03"+
		"\x02\x02\x02\u02E5\u02E6\bF\x17\x02\u02E6\x8D\x03\x02\x02\x02\u02E7\u02E9"+
		"\t\x1B\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02"+
		"\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03"+
		"\x02\x02\x02\u02EC\u02ED\bG\x18\x02\u02ED\x8F\x03\x02\x02\x02\u02EE\u02F2"+
		"\x07}\x02\x02\u02EF\u02F1\t\x1C\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1"+
		"\u02F4\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02"+
		"\x02\x02\u02F3\x91\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F7"+
		"\t\x1D\x02\x02\u02F6\u02F5\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02"+
		"\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03"+
		"\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FC\x07\x7F\x02\x02\u02FC"+
		"\u02FD\bI\x19\x02\u02FD\x93\x03\x02\x02\x02\u02FE\u0300\t\x1C\x02\x02"+
		"\u02FF\u02FE\x03\x02\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301\u02FF\x03"+
		"\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0304\x03\x02\x02\x02\u0303"+
		"\u0301\x03\x02\x02\x02\u0304\u0308\x07.\x02\x02\u0305\u0307\t\x1C\x02"+
		"\x02\u0306\u0305\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306"+
		"\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\x95\x03\x02\x02\x02"+
		"\u030A\u0308\x03\x02\x02\x02\u030B\u030C\x07(\x02\x02\u030C\u030D\bK\x1A"+
		"\x02\u030D\x97\x03\x02\x02\x02\u030E\u030F\x07&\x02\x02\u030F\u0310\x07"+
		"&\x02\x02\u0310\u0311\x07&\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0316"+
		"\t\x16\x02\x02\u0313\u0315\t\x17\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315"+
		"\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02"+
		"\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319"+
		"\u031A\bL\x1B\x02\u031A\x99\x03\x02\x02\x02M\x02\x03\xA0\xA7\xCF\xD1\xD5"+
		"\xDA\xDC\xE0\xE5\xF1\xFC\u010F\u0115\u011A\u011D\u0122\u0127\u012B\u0131"+
		"\u0138\u013D\u0142\u0149\u0150\u0156\u015D\u0169\u0170\u0176\u017D\u018F"+
		"\u0196\u01A0\u01A8\u01B1\u01B5\u01BA\u01BF\u01C4\u01CA\u01CD\u01D3\u01DD"+
		"\u01E1\u01E4\u01E9\u01FB\u0203\u020D\u0217\u0220\u0229\u0233\u023D\u0248"+
		"\u0257\u0269\u026E\u0292\u02A2\u02A8\u02AE\u02BE\u02C4\u02CC\u02D3\u02DB"+
		"\u02EA\u02F2\u02F8\u0301\u0308\u0316\x1C\x03\x02\x02\x03\x04\x03\x03\x16"+
		"\x04\x03(\x05\x03)\x06\x03*\x07\x03+\b\x03,\t\x07\x03\x02\x03.\n\x030"+
		"\v\x034\f\x03:\r\x03=\x0E\x03?\x0F\x03@\x10\x03A\x11\x03B\x12\x03C\x13"+
		"\x03D\x14\x03E\x15\x06\x02\x02\x03G\x16\x03I\x17\x03K\x18\x03L\x19";
	public static readonly _serializedATN: string = Utils.join(
		[
			ObjectScriptLexer._serializedATNSegment0,
			ObjectScriptLexer._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectScriptLexer.__ATN) {
			ObjectScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectScriptLexer._serializedATN));
		}

		return ObjectScriptLexer.__ATN;
	}

}

