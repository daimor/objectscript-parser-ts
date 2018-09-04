// Generated from ./src/antlr/ObjectScriptParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { ObjectScriptParserListener } from './ObjectScriptParserListener';
import { ObjectScriptParserVisitor } from './ObjectScriptParserVisitor';


export class ObjectScriptParser extends Parser {
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
	public static readonly RULE_code = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_blockStatement = 2;
	public static readonly RULE_comments = 3;
	public static readonly RULE_simpleStatement = 4;
	public static readonly RULE_macrosAsCommand = 5;
	public static readonly RULE_includeStatement = 6;
	public static readonly RULE_includeRtn = 7;
	public static readonly RULE_define = 8;
	public static readonly RULE_breakCommand = 9;
	public static readonly RULE_breakStatement = 10;
	public static readonly RULE_catchCommand = 11;
	public static readonly RULE_catchStatement = 12;
	public static readonly RULE_closeCommand = 13;
	public static readonly RULE_closeStatement = 14;
	public static readonly RULE_continueCommand = 15;
	public static readonly RULE_doCommand = 16;
	public static readonly RULE_doStatement = 17;
	public static readonly RULE_elseCommand1 = 18;
	public static readonly RULE_elseCommand2 = 19;
	public static readonly RULE_elseStatement = 20;
	public static readonly RULE_elseifCommand = 21;
	public static readonly RULE_forCommand = 22;
	public static readonly RULE_forStatement = 23;
	public static readonly RULE_forExpression = 24;
	public static readonly RULE_gotoCommand = 25;
	public static readonly RULE_gotoStatement = 26;
	public static readonly RULE_haltCommand = 27;
	public static readonly RULE_hangCommand = 28;
	public static readonly RULE_hangStatement = 29;
	public static readonly RULE_ifCommand = 30;
	public static readonly RULE_ifStatement = 31;
	public static readonly RULE_jobCommand = 32;
	public static readonly RULE_jobStatement = 33;
	public static readonly RULE_jobArgument = 34;
	public static readonly RULE_jobProcessParams = 35;
	public static readonly RULE_killCommand = 36;
	public static readonly RULE_killStatement = 37;
	public static readonly RULE_killArgument = 38;
	public static readonly RULE_lockCommand = 39;
	public static readonly RULE_lockStatement = 40;
	public static readonly RULE_lockArgument = 41;
	public static readonly RULE_lockArgument2 = 42;
	public static readonly RULE_mergeCommand = 43;
	public static readonly RULE_mergeStatement = 44;
	public static readonly RULE_mergeArgument = 45;
	public static readonly RULE_newCommand = 46;
	public static readonly RULE_newStatement = 47;
	public static readonly RULE_openCommand = 48;
	public static readonly RULE_openStatement = 49;
	public static readonly RULE_quitCommand = 50;
	public static readonly RULE_quitStatement = 51;
	public static readonly RULE_readCommand = 52;
	public static readonly RULE_readStatement = 53;
	public static readonly RULE_readArgument = 54;
	public static readonly RULE_setCommand = 55;
	public static readonly RULE_setStatement = 56;
	public static readonly RULE_setArgument = 57;
	public static readonly RULE_tcommitCommand = 58;
	public static readonly RULE_throwCommand = 59;
	public static readonly RULE_trollbackCommand = 60;
	public static readonly RULE_tryCommand = 61;
	public static readonly RULE_tryStatement = 62;
	public static readonly RULE_tstartCommand = 63;
	public static readonly RULE_useCommand = 64;
	public static readonly RULE_useStatement = 65;
	public static readonly RULE_viewCommand = 66;
	public static readonly RULE_viewStatement = 67;
	public static readonly RULE_whileCommand = 68;
	public static readonly RULE_whileStatement = 69;
	public static readonly RULE_writeCommand = 70;
	public static readonly RULE_writeStatement = 71;
	public static readonly RULE_writeArgument = 72;
	public static readonly RULE_xecuteCommand = 73;
	public static readonly RULE_xecuteStatement = 74;
	public static readonly RULE_xeceuteArgument = 75;
	public static readonly RULE_zkillCommand = 76;
	public static readonly RULE_zkillStatement = 77;
	public static readonly RULE_znspaceCommand = 78;
	public static readonly RULE_ztrapCommand = 79;
	public static readonly RULE_zwriteCommand = 80;
	public static readonly RULE_zwriteStatement = 81;
	public static readonly RULE_zzdumpCommand = 82;
	public static readonly RULE_zzdumpStatement = 83;
	public static readonly RULE_printCommand = 84;
	public static readonly RULE_printStatement = 85;
	public static readonly RULE_zbreakCommand = 86;
	public static readonly RULE_zbreakStatement = 87;
	public static readonly RULE_zinsertCommand = 88;
	public static readonly RULE_zloadCommand = 89;
	public static readonly RULE_zprintCommand = 90;
	public static readonly RULE_zremoveCommand = 91;
	public static readonly RULE_zsaveCommand = 92;
	public static readonly RULE_systemFunction = 93;
	public static readonly RULE_variable = 94;
	public static readonly RULE_localVariable = 95;
	public static readonly RULE_globalVariable = 96;
	public static readonly RULE_localVariableList = 97;
	public static readonly RULE_colonExpression = 98;
	public static readonly RULE_expression = 99;
	public static readonly RULE_simpleExpression = 100;
	public static readonly RULE_condition = 101;
	public static readonly RULE_pc = 102;
	public static readonly RULE_arguments = 103;
	public static readonly RULE_doClass = 104;
	public static readonly RULE_doRoutine = 105;
	public static readonly RULE_doArgument = 106;
	public static readonly RULE_labelDef = 107;
	public static readonly RULE_methodPublicVariables = 108;
	public static readonly RULE_methodContent = 109;
	public static readonly RULE_labelParameter = 110;
	public static readonly ruleNames: string[] = [
		"code", "statement", "blockStatement", "comments", "simpleStatement",
		"macrosAsCommand", "includeStatement", "includeRtn", "define", "breakCommand",
		"breakStatement", "catchCommand", "catchStatement", "closeCommand", "closeStatement",
		"continueCommand", "doCommand", "doStatement", "elseCommand1", "elseCommand2",
		"elseStatement", "elseifCommand", "forCommand", "forStatement", "forExpression",
		"gotoCommand", "gotoStatement", "haltCommand", "hangCommand", "hangStatement",
		"ifCommand", "ifStatement", "jobCommand", "jobStatement", "jobArgument",
		"jobProcessParams", "killCommand", "killStatement", "killArgument", "lockCommand",
		"lockStatement", "lockArgument", "lockArgument2", "mergeCommand", "mergeStatement",
		"mergeArgument", "newCommand", "newStatement", "openCommand", "openStatement",
		"quitCommand", "quitStatement", "readCommand", "readStatement", "readArgument",
		"setCommand", "setStatement", "setArgument", "tcommitCommand", "throwCommand",
		"trollbackCommand", "tryCommand", "tryStatement", "tstartCommand", "useCommand",
		"useStatement", "viewCommand", "viewStatement", "whileCommand", "whileStatement",
		"writeCommand", "writeStatement", "writeArgument", "xecuteCommand", "xecuteStatement",
		"xeceuteArgument", "zkillCommand", "zkillStatement", "znspaceCommand",
		"ztrapCommand", "zwriteCommand", "zwriteStatement", "zzdumpCommand", "zzdumpStatement",
		"printCommand", "printStatement", "zbreakCommand", "zbreakStatement",
		"zinsertCommand", "zloadCommand", "zprintCommand", "zremoveCommand", "zsaveCommand",
		"systemFunction", "variable", "localVariable", "globalVariable", "localVariableList",
		"colonExpression", "expression", "simpleExpression", "condition", "pc",
		"arguments", "doClass", "doRoutine", "doArgument", "labelDef", "methodPublicVariables",
		"methodContent", "labelParameter"
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ObjectScriptParser._LITERAL_NAMES, ObjectScriptParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return ObjectScriptParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "ObjectScriptParser.g4"; }

	@Override
	public get ruleNames(): string[] { return ObjectScriptParser.ruleNames; }

	@Override
	public get serializedATN(): string { return ObjectScriptParser._serializedATN; }


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

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ObjectScriptParser._ATN, this);
	}
	@RuleVersion(0)
	public code(): CodeContext {
		let _localctx: CodeContext = new CodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ObjectScriptParser.RULE_code);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,0,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 222;
					this.statement();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,0,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ObjectScriptParser.RULE_statement);
		let _la: number;
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
				case 1:
					{
					this.state = 228;
					this.match(ObjectScriptParser.Spaces);
					}
					break;
				}
				this.state = 231;
				this.simpleStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(ObjectScriptParser.Include);
				this.state = 233;
				this.match(ObjectScriptParser.Spaces);
				this.state = 234;
				this.includeStatement();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.Spaces) {
					{
					this.state = 235;
					this.match(ObjectScriptParser.Spaces);
					}
				}

				this.state = 238;
				_la = this._input.LA(1);
				if ( !(_la===ObjectScriptParser.EOF || _la===ObjectScriptParser.EOL) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 240;
				this.define();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 241;
				this.comments();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 242;
				_la = this._input.LA(1);
				if ( !(_la===ObjectScriptParser.EOL || _la===ObjectScriptParser.Spaces || _la===ObjectScriptParser.CommandEOL) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 243;
				this.match(ObjectScriptParser.Label);
				this.state = 245;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
				case 1:
					{
					this.state = 244;
					this.labelDef();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public blockStatement(quitWithoutArgs: boolean): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state, quitWithoutArgs);
		this.enterRule(_localctx, 4, ObjectScriptParser.RULE_blockStatement);

		if(quitWithoutArgs) {this.loopLevel++;}

		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			_la = this._input.LA(1);
			if ( !(_la===ObjectScriptParser.LBRACE || _la===ObjectScriptParser.CommandLBRACE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 250;
					this.statement();
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			}
			this.state = 256;
			_la = this._input.LA(1);
			if ( !(_la===ObjectScriptParser.RBRACE || _la===ObjectScriptParser.CommandRBRACE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
			this._ctx._stop = this._input.tryLT(-1);

			if(quitWithoutArgs) {this.loopLevel--;}

		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comments(): CommentsContext {
		let _localctx: CommentsContext = new CommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ObjectScriptParser.RULE_comments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(ObjectScriptParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ObjectScriptParser.RULE_simpleStatement);

		    // reset blocks
		    this.catchBlock = this.tryBlock;
		    this.tryBlock = false;
		    this.elseBlock = this.ifBlock;
		    this.ifBlock = false;
		    this.whileBlock = this.doBlock;
		    this.doBlock = false;

		let _la: number;
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				this.breakCommand();
				this.state = 262;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
				case 1:
					{
					this.state = 261;
					this.pc();
					}
					break;
				}
				this.state = 264;
				this.breakStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this.catchCommand();
				this.state = 267;
				this.catchStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 269;
				this.closeCommand();
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 270;
					this.pc();
					}
				}

				this.state = 273;
				this.closeStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 275;
				this.continueCommand();
				this.state = 277;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
				case 1:
					{
					this.state = 276;
					this.pc();
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 279;
				this.doCommand();
				this.state = 281;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
				case 1:
					{
					this.state = 280;
					this.pc();
					}
					break;
				}
				this.state = 284;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
				case 1:
					{
					this.state = 283;
					this.doStatement();
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 286;
				this.elseCommand1();
				this.state = 287;
				this.elseStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 289;
				this.elseCommand2();
				this.state = 291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.match(ObjectScriptParser.CommandSPACE);
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 293;
				this.forCommand();
				this.state = 294;
				this.forStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 296;
				this.gotoCommand();
				this.state = 298;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
				case 1:
					{
					this.state = 297;
					this.pc();
					}
					break;
				}
				this.state = 300;
				this.gotoStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 302;
				this.haltCommand();
				this.state = 304;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
				case 1:
					{
					this.state = 303;
					this.pc();
					}
					break;
				}
				this.state = 307;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
				case 1:
					{
					this.state = 306;
					this.match(ObjectScriptParser.CommandSPACE);
					}
					break;
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 309;
				this.hangCommand();
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 310;
					this.pc();
					}
				}

				this.state = 313;
				this.hangStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 315;
				this.ifCommand();
				this.state = 316;
				this.ifStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 318;
				this.jobCommand();
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 319;
					this.pc();
					}
				}

				this.state = 322;
				this.jobStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 324;
				this.killCommand();
				this.state = 326;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
				case 1:
					{
					this.state = 325;
					this.pc();
					}
					break;
				}
				this.state = 328;
				this.killStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 330;
				this.lockCommand();
				this.state = 332;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
				case 1:
					{
					this.state = 331;
					this.pc();
					}
					break;
				}
				this.state = 334;
				this.lockStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 336;
				this.mergeCommand();
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 337;
					this.pc();
					}
				}

				this.state = 340;
				this.mergeStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 342;
				this.newCommand();
				this.state = 344;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
				case 1:
					{
					this.state = 343;
					this.pc();
					}
					break;
				}
				this.state = 346;
				this.newStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 348;
				this.openCommand();
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 349;
					this.pc();
					}
				}

				this.state = 352;
				this.openStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 354;
				this.quitCommand();
				this.state = 356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
				case 1:
					{
					this.state = 355;
					this.pc();
					}
					break;
				}
				this.state = 358;
				this.quitStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 360;
				this.readCommand();
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 361;
					this.pc();
					}
				}

				this.state = 364;
				this.readStatement();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 366;
				this.setCommand();
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 367;
					this.pc();
					}
				}

				this.state = 370;
				this.setStatement();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 372;
				this.tcommitCommand();
				this.state = 374;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,25,this._ctx) ) {
				case 1:
					{
					this.state = 373;
					this.pc();
					}
					break;
				}
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 376;
				this.throwCommand();
				this.state = 378;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
				case 1:
					{
					this.state = 377;
					this.pc();
					}
					break;
				}
				this.state = 381;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,27,this._ctx) ) {
				case 1:
					{
					this.state = 380;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 383;
				this.trollbackCommand();
				this.state = 385;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
				case 1:
					{
					this.state = 384;
					this.pc();
					}
					break;
				}
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
				case 1:
					{
					this.state = 387;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 390;
				this.tryCommand();
				this.state = 391;
				this.tryStatement();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 393;
				this.tstartCommand();
				this.state = 395;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,30,this._ctx) ) {
				case 1:
					{
					this.state = 394;
					this.pc();
					}
					break;
				}
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 397;
				this.useCommand();
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 398;
					this.pc();
					}
				}

				this.state = 401;
				this.useStatement();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 403;
				this.viewCommand();
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 404;
					this.pc();
					}
				}

				this.state = 407;
				this.viewStatement();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 409;
				this.whileCommand();
				this.state = 410;
				this.whileStatement();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 412;
				this.writeCommand();
				this.state = 414;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
				case 1:
					{
					this.state = 413;
					this.pc();
					}
					break;
				}
				this.state = 417;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
				case 1:
					{
					this.state = 416;
					this.writeStatement();
					}
					break;
				}
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 419;
				this.xecuteCommand();
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 420;
					this.pc();
					}
				}

				this.state = 423;
				this.xecuteStatement();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 425;
				this.zkillCommand();
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 426;
					this.pc();
					}
				}

				this.state = 429;
				this.zkillStatement();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 431;
				this.znspaceCommand();
				this.state = 433;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,37,this._ctx) ) {
				case 1:
					{
					this.state = 432;
					this.pc();
					}
					break;
				}
				this.state = 435;
				this.expression(0);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 437;
				this.ztrapCommand();
				this.state = 439;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,38,this._ctx) ) {
				case 1:
					{
					this.state = 438;
					this.pc();
					}
					break;
				}
				this.state = 441;
				this.expression(0);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 443;
				this.zwriteCommand();
				this.state = 445;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.pc();
					}
					break;
				}
				this.state = 447;
				this.zwriteStatement();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 449;
				this.zzdumpCommand();
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 450;
					this.pc();
					}
				}

				this.state = 453;
				this.zzdumpStatement();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 455;
				this.printCommand();
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandCOLON) {
					{
					this.state = 456;
					this.pc();
					}
				}

				this.state = 459;
				this.printStatement();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 461;
				this.zbreakCommand();
				this.state = 463;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,42,this._ctx) ) {
				case 1:
					{
					this.state = 462;
					this.pc();
					}
					break;
				}
				this.state = 465;
				this.zbreakStatement();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 467;
				this.zinsertCommand();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 468;
				this.zloadCommand();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 469;
				this.zprintCommand();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 470;
				this.zremoveCommand();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 471;
				this.zsaveCommand();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 472;
				this.match(ObjectScriptParser.SQLBlock);
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 473;
				this.match(ObjectScriptParser.JSBlock);
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 474;
				this.match(ObjectScriptParser.HTMLBlock);
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 475;
				this.macrosAsCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public macrosAsCommand(): MacrosAsCommandContext {
		let _localctx: MacrosAsCommandContext = new MacrosAsCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ObjectScriptParser.RULE_macrosAsCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(ObjectScriptParser.CMDMacros);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public includeStatement(): IncludeStatementContext {
		let _localctx: IncludeStatementContext = new IncludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ObjectScriptParser.RULE_includeStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ObjectScriptParser.ID:
			case ObjectScriptParser.PERCENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 480;
				this.includeRtn();
				}
				break;
			case ObjectScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 481;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.Spaces) {
					{
					this.state = 482;
					this.match(ObjectScriptParser.Spaces);
					}
				}

				this.state = 485;
				this.match(ObjectScriptParser.ID);
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 487;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===ObjectScriptParser.Spaces) {
							{
							this.state = 486;
							this.match(ObjectScriptParser.Spaces);
							}
						}

						this.state = 489;
						this.match(ObjectScriptParser.COMMA);
						this.state = 490;
						this.includeRtn();
						}
						}
					}
					this.state = 495;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
				}
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.Spaces) {
					{
					this.state = 496;
					this.match(ObjectScriptParser.Spaces);
					}
				}

				this.state = 499;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public includeRtn(): IncludeRtnContext {
		let _localctx: IncludeRtnContext = new IncludeRtnContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ObjectScriptParser.RULE_includeRtn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.PERCENT) {
				{
				this.state = 502;
				this.match(ObjectScriptParser.PERCENT);
				}
			}

			this.state = 505;
			this.match(ObjectScriptParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public define(): DefineContext {
		let _localctx: DefineContext = new DefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ObjectScriptParser.RULE_define);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.match(ObjectScriptParser.DefineExpression);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public breakCommand(): BreakCommandContext {
		let _localctx: BreakCommandContext = new BreakCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ObjectScriptParser.RULE_breakCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			if (!(this.cmp("b,break"))) throw new FailedPredicateException(this, "this.cmp(\"b,break\")");
			this.state = 510;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ObjectScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
			case 1:
				{
				this.state = 512;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				{
				this.state = 515;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public catchCommand(): CatchCommandContext {
		let _localctx: CatchCommandContext = new CatchCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ObjectScriptParser.RULE_catchCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			if (!(this.catchBlock&&this.cmp("catch"))) throw new FailedPredicateException(this, "this.catchBlock&&this.cmp(\"catch\")");
			this.state = 519;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public catchStatement(): CatchStatementContext {
		let _localctx: CatchStatementContext = new CatchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ObjectScriptParser.RULE_catchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.CommandSPACE) {
				{
				this.state = 521;
				this.match(ObjectScriptParser.CommandSPACE);
				}
			}

			this.state = 525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				{
				this.state = 524;
				this.match(ObjectScriptParser.Spaces);
				}
				break;
			}
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.ID) {
				{
				this.state = 527;
				this.match(ObjectScriptParser.ID);
				}
			}

			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.Spaces) {
				{
				this.state = 530;
				this.match(ObjectScriptParser.Spaces);
				}
			}

			this.state = 533;
			this.blockStatement(true);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closeCommand(): CloseCommandContext {
		let _localctx: CloseCommandContext = new CloseCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ObjectScriptParser.RULE_closeCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			if (!(this.cmp("c,close"))) throw new FailedPredicateException(this, "this.cmp(\"c,close\")");
			this.state = 536;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closeStatement(): CloseStatementContext {
		let _localctx: CloseStatementContext = new CloseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ObjectScriptParser.RULE_closeStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 539;
			this.expression(0);
			this.state = 544;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 540;
					this.match(ObjectScriptParser.COMMA);
					this.state = 541;
					this.expression(0);
					}
					}
				}
				this.state = 546;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public continueCommand(): ContinueCommandContext {
		let _localctx: ContinueCommandContext = new ContinueCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ObjectScriptParser.RULE_continueCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			if (!(this.cmp("continue"))) throw new FailedPredicateException(this, "this.cmp(\"continue\")");
			this.state = 548;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doCommand(): DoCommandContext {
		let _localctx: DoCommandContext = new DoCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ObjectScriptParser.RULE_doCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			if (!(this.cmp("d,do"))) throw new FailedPredicateException(this, "this.cmp(\"d,do\")");
			this.state = 551;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ObjectScriptParser.RULE_doStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 553;
				this.match(ObjectScriptParser.CommandSPACE);
				{
				this.state = 554;
				this.doArgument();
				this.state = 556;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
				case 1:
					{
					this.state = 555;
					this.pc();
					}
					break;
				}
				this.state = 565;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,59,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 558;
						this.match(ObjectScriptParser.COMMA);
						this.state = 559;
						this.doArgument();
						this.state = 561;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
						case 1:
							{
							this.state = 560;
							this.pc();
							}
							break;
						}
						}
						}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,59,this._ctx);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 568;
				this.match(ObjectScriptParser.CommandSPACE);
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.EOL || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ObjectScriptParser.Spaces - 36)) | (1 << (ObjectScriptParser.CommandSPACE - 36)) | (1 << (ObjectScriptParser.CommandEOL - 36)))) !== 0)) {
					{
					{
					this.state = 569;
					_la = this._input.LA(1);
					if ( !(_la===ObjectScriptParser.EOL || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ObjectScriptParser.Spaces - 36)) | (1 << (ObjectScriptParser.CommandSPACE - 36)) | (1 << (ObjectScriptParser.CommandEOL - 36)))) !== 0)) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 574;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 575;
				this.blockStatement(true);
				this.doBlock = true;

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 578;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseCommand1(): ElseCommand1Context {
		let _localctx: ElseCommand1Context = new ElseCommand1Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, ObjectScriptParser.RULE_elseCommand1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			if (!(this.elseBlock&&this.cmp("else"))) throw new FailedPredicateException(this, "this.elseBlock&&this.cmp(\"else\")");
			this.state = 582;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseCommand2(): ElseCommand2Context {
		let _localctx: ElseCommand2Context = new ElseCommand2Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, ObjectScriptParser.RULE_elseCommand2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			if (!(!this.elseBlock&&this.cmp("else"))) throw new FailedPredicateException(this, "!this.elseBlock&&this.cmp(\"else\")");
			this.state = 585;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ObjectScriptParser.RULE_elseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.CommandSPACE) {
				{
				this.state = 587;
				this.match(ObjectScriptParser.CommandSPACE);
				}
			}

			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.Spaces) {
				{
				this.state = 590;
				this.match(ObjectScriptParser.Spaces);
				}
			}

			this.state = 593;
			this.blockStatement(false);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseifCommand(): ElseifCommandContext {
		let _localctx: ElseifCommandContext = new ElseifCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ObjectScriptParser.RULE_elseifCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			if (!(this.cmp("elseif"))) throw new FailedPredicateException(this, "this.cmp(\"elseif\")");
			this.state = 596;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forCommand(): ForCommandContext {
		let _localctx: ForCommandContext = new ForCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ObjectScriptParser.RULE_forCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			if (!(this.cmp("f,for"))) throw new FailedPredicateException(this, "this.cmp(\"f,for\")");
			this.state = 599;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ObjectScriptParser.RULE_forStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
			case 1:
				{
				this.state = 602;
				this.variable();
				this.state = 605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
				case 1:
					{
					this.state = 603;
					this.match(ObjectScriptParser.EQUAL);
					this.state = 604;
					this.forExpression();
					}
					break;
				}
				}
				break;
			}
			this.state = 612;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 609;
					_la = this._input.LA(1);
					if ( !(_la===ObjectScriptParser.EOL || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ObjectScriptParser.Spaces - 36)) | (1 << (ObjectScriptParser.CommandSPACE - 36)) | (1 << (ObjectScriptParser.CommandEOL - 36)))) !== 0)) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 614;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			}
			this.state = 616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,67,this._ctx) ) {
			case 1:
				{
				this.state = 615;
				this.blockStatement(true);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ObjectScriptParser.RULE_forExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.expression(0);
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,71,this._ctx) ) {
			case 1:
				{
				this.state = 625;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,69,this._ctx) ) {
				case 1:
					{
					this.state = 619;
					this.match(ObjectScriptParser.Colon);
					this.state = 620;
					this.expression(0);
					this.state = 623;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,68,this._ctx) ) {
					case 1:
						{
						this.state = 621;
						this.match(ObjectScriptParser.Colon);
						this.state = 622;
						this.expression(0);
						}
						break;
					}
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 631;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 627;
						this.match(ObjectScriptParser.COMMA);
						this.state = 628;
						this.expression(0);
						}
						}
					}
					this.state = 633;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gotoCommand(): GotoCommandContext {
		let _localctx: GotoCommandContext = new GotoCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ObjectScriptParser.RULE_gotoCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			if (!(this.cmp("g,goto"))) throw new FailedPredicateException(this, "this.cmp(\"g,goto\")");
			this.state = 637;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gotoStatement(): GotoStatementContext {
		let _localctx: GotoStatementContext = new GotoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ObjectScriptParser.RULE_gotoStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public haltCommand(): HaltCommandContext {
		let _localctx: HaltCommandContext = new HaltCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ObjectScriptParser.RULE_haltCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			if (!(this.cmp("h,halt"))) throw new FailedPredicateException(this, "this.cmp(\"h,halt\")");
			this.state = 642;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hangCommand(): HangCommandContext {
		let _localctx: HangCommandContext = new HangCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ObjectScriptParser.RULE_hangCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			if (!(this.cmp("h,hang"))) throw new FailedPredicateException(this, "this.cmp(\"h,hang\")");
			this.state = 645;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hangStatement(): HangStatementContext {
		let _localctx: HangStatementContext = new HangStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ObjectScriptParser.RULE_hangStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 648;
			this.expression(0);
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,72,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 649;
					this.match(ObjectScriptParser.COMMA);
					this.state = 650;
					this.expression(0);
					}
					}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,72,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifCommand(): IfCommandContext {
		let _localctx: IfCommandContext = new IfCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ObjectScriptParser.RULE_ifCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			if (!(this.cmp("i,if"))) throw new FailedPredicateException(this, "this.cmp(\"i,if\")");
			this.state = 657;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ObjectScriptParser.RULE_ifStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 659;
				this.match(ObjectScriptParser.CommandSPACE);
				this.state = 660;
				this.condition(0);
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.COMMA) {
					{
					{
					this.state = 661;
					this.match(ObjectScriptParser.COMMA);
					this.state = 662;
					this.condition(0);
					}
					}
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.Spaces) {
					{
					this.state = 668;
					this.match(ObjectScriptParser.Spaces);
					}
				}

				this.state = 671;
				this.blockStatement(false);
				this.ifBlock=true;
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 674;
				this.match(ObjectScriptParser.CommandSPACE);
				this.state = 675;
				this.condition(0);
				this.state = 680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,75,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 676;
						this.match(ObjectScriptParser.COMMA);
						this.state = 677;
						this.condition(0);
						}
						}
					}
					this.state = 682;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,75,this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jobCommand(): JobCommandContext {
		let _localctx: JobCommandContext = new JobCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ObjectScriptParser.RULE_jobCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			if (!(this.cmp("j,job"))) throw new FailedPredicateException(this, "this.cmp(\"j,job\")");
			this.state = 686;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jobStatement(): JobStatementContext {
		let _localctx: JobStatementContext = new JobStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ObjectScriptParser.RULE_jobStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 689;
			this.jobArgument();
			this.state = 694;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 690;
					this.match(ObjectScriptParser.COMMA);
					this.state = 691;
					this.jobArgument();
					}
					}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jobArgument(): JobArgumentContext {
		let _localctx: JobArgumentContext = new JobArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ObjectScriptParser.RULE_jobArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this.doArgument();
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,80,this._ctx) ) {
			case 1:
				{
				this.state = 698;
				this.match(ObjectScriptParser.Colon);
				this.state = 700;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
				case 1:
					{
					this.state = 699;
					this.jobProcessParams();
					}
					break;
				}
				this.state = 704;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,79,this._ctx) ) {
				case 1:
					{
					this.state = 702;
					this.match(ObjectScriptParser.Colon);
					this.state = 703;
					this.expression(0);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jobProcessParams(): JobProcessParamsContext {
		let _localctx: JobProcessParamsContext = new JobProcessParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ObjectScriptParser.RULE_jobProcessParams);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(ObjectScriptParser.LPAREN);
			this.state = 713;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 711;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,81,this._ctx) ) {
					case 1:
						{
						this.state = 709;
						this.expression(0);
						}
						break;

					case 2:
						{
						this.state = 710;
						this.match(ObjectScriptParser.Colon);
						}
						break;
					}
					}
				}
				this.state = 715;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
			}
			this.state = 716;
			this.match(ObjectScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public killCommand(): KillCommandContext {
		let _localctx: KillCommandContext = new KillCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ObjectScriptParser.RULE_killCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			if (!(this.cmp("k,kill"))) throw new FailedPredicateException(this, "this.cmp(\"k,kill\")");
			this.state = 719;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public killStatement(): KillStatementContext {
		let _localctx: KillStatementContext = new KillStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ObjectScriptParser.RULE_killStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,83,this._ctx) ) {
			case 1:
				{
				this.state = 721;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				{
				this.state = 724;
				this.killArgument();
				this.state = 729;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,84,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 725;
						this.match(ObjectScriptParser.COMMA);
						this.state = 726;
						this.killArgument();
						}
						}
					}
					this.state = 731;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,84,this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public killArgument(): KillArgumentContext {
		let _localctx: KillArgumentContext = new KillArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ObjectScriptParser.RULE_killArgument);
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,86,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 734;
				this.variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 735;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 736;
				this.variable();
				this.state = 737;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lockCommand(): LockCommandContext {
		let _localctx: LockCommandContext = new LockCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ObjectScriptParser.RULE_lockCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			if (!(this.cmp("l,lock"))) throw new FailedPredicateException(this, "this.cmp(\"l,lock\")");
			this.state = 742;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lockStatement(): LockStatementContext {
		let _localctx: LockStatementContext = new LockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ObjectScriptParser.RULE_lockStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				{
				this.state = 744;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
			this.state = 752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
			case 1:
				{
				this.state = 747;
				this.lockArgument();
				this.state = 750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,88,this._ctx) ) {
				case 1:
					{
					this.state = 748;
					this.match(ObjectScriptParser.COMMA);
					this.state = 749;
					this.lockArgument();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lockArgument(): LockArgumentContext {
		let _localctx: LockArgumentContext = new LockArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ObjectScriptParser.RULE_lockArgument);
		let _la: number;
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,95,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.PLUS || _la===ObjectScriptParser.MINUS) {
					{
					this.state = 754;
					_la = this._input.LA(1);
					if ( !(_la===ObjectScriptParser.PLUS || _la===ObjectScriptParser.MINUS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 757;
				this.lockArgument2();
				this.state = 760;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
				case 1:
					{
					this.state = 758;
					this.match(ObjectScriptParser.Colon);
					this.state = 759;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.PLUS || _la===ObjectScriptParser.MINUS) {
					{
					this.state = 762;
					_la = this._input.LA(1);
					if ( !(_la===ObjectScriptParser.PLUS || _la===ObjectScriptParser.MINUS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 765;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 766;
				this.lockArgument2();
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.COMMA) {
					{
					{
					this.state = 767;
					this.match(ObjectScriptParser.COMMA);
					this.state = 768;
					this.lockArgument2();
					}
					}
					this.state = 773;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 774;
				this.match(ObjectScriptParser.RPAREN);
				this.state = 777;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,94,this._ctx) ) {
				case 1:
					{
					this.state = 775;
					this.match(ObjectScriptParser.Colon);
					this.state = 776;
					this.expression(0);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lockArgument2(): LockArgument2Context {
		let _localctx: LockArgument2Context = new LockArgument2Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, ObjectScriptParser.RULE_lockArgument2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.variable();
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				{
				this.state = 782;
				this.match(ObjectScriptParser.SHARP);
				this.state = 783;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public mergeCommand(): MergeCommandContext {
		let _localctx: MergeCommandContext = new MergeCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ObjectScriptParser.RULE_mergeCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			if (!(this.cmp("m,merge"))) throw new FailedPredicateException(this, "this.cmp(\"m,merge\")");
			this.state = 787;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public mergeStatement(): MergeStatementContext {
		let _localctx: MergeStatementContext = new MergeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ObjectScriptParser.RULE_mergeStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 790;
			this.mergeArgument();
			this.state = 795;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,97,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 791;
					this.match(ObjectScriptParser.COMMA);
					this.state = 792;
					this.mergeArgument();
					}
					}
				}
				this.state = 797;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,97,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public mergeArgument(): MergeArgumentContext {
		let _localctx: MergeArgumentContext = new MergeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ObjectScriptParser.RULE_mergeArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.variable();
			this.state = 799;
			this.match(ObjectScriptParser.EQUAL);
			this.state = 800;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newCommand(): NewCommandContext {
		let _localctx: NewCommandContext = new NewCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ObjectScriptParser.RULE_newCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			if (!(this.cmp("n,new"))) throw new FailedPredicateException(this, "this.cmp(\"n,new\")");
			this.state = 803;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public newStatement(): NewStatementContext {
		let _localctx: NewStatementContext = new NewStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ObjectScriptParser.RULE_newStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,100,this._ctx) ) {
			case 1:
				{
				this.state = 805;
				this.match(ObjectScriptParser.CommandSPACE);
				this.state = 814;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,99,this._ctx) ) {
				case 1:
					{
					this.state = 806;
					this.localVariable();
					this.state = 811;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,98,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 807;
							this.match(ObjectScriptParser.COMMA);
							this.state = 808;
							this.localVariable();
							}
							}
						}
						this.state = 813;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,98,this._ctx);
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public openCommand(): OpenCommandContext {
		let _localctx: OpenCommandContext = new OpenCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ObjectScriptParser.RULE_openCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			if (!(this.cmp("o,open"))) throw new FailedPredicateException(this, "this.cmp(\"o,open\")");
			this.state = 819;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public openStatement(): OpenStatementContext {
		let _localctx: OpenStatementContext = new OpenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ObjectScriptParser.RULE_openStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 822;
			this.expression(0);
			this.state = 839;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,106,this._ctx) ) {
			case 1:
				{
				this.state = 823;
				this.match(ObjectScriptParser.Colon);
				this.state = 825;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,101,this._ctx) ) {
				case 1:
					{
					this.state = 824;
					this.colonExpression();
					}
					break;
				}
				this.state = 837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
				case 1:
					{
					this.state = 827;
					this.match(ObjectScriptParser.Colon);
					this.state = 829;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,102,this._ctx) ) {
					case 1:
						{
						this.state = 828;
						this.expression(0);
						}
						break;
					}
					this.state = 835;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,104,this._ctx) ) {
					case 1:
						{
						this.state = 831;
						this.match(ObjectScriptParser.Colon);
						this.state = 833;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,103,this._ctx) ) {
						case 1:
							{
							this.state = 832;
							this.expression(0);
							}
							break;
						}
						}
						break;
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public quitCommand(): QuitCommandContext {
		let _localctx: QuitCommandContext = new QuitCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ObjectScriptParser.RULE_quitCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			if (!(this.cmp("q,quit"))) throw new FailedPredicateException(this, "this.cmp(\"q,quit\")");
			this.state = 842;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public quitStatement(): QuitStatementContext {
		let _localctx: QuitStatementContext = new QuitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ObjectScriptParser.RULE_quitStatement);
		try {
			this.state = 855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,110,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 844;
				if (!(this.loopLevel>0)) throw new FailedPredicateException(this, "this.loopLevel>0");
				this.state = 846;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,107,this._ctx) ) {
				case 1:
					{
					this.state = 845;
					this.match(ObjectScriptParser.CommandSPACE);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 848;
				if (!(this.loopLevel==0)) throw new FailedPredicateException(this, "this.loopLevel==0");
				this.state = 850;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,108,this._ctx) ) {
				case 1:
					{
					this.state = 849;
					this.match(ObjectScriptParser.CommandSPACE);
					}
					break;
				}
				this.state = 853;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,109,this._ctx) ) {
				case 1:
					{
					this.state = 852;
					this.expression(0);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public readCommand(): ReadCommandContext {
		let _localctx: ReadCommandContext = new ReadCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ObjectScriptParser.RULE_readCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			if (!(this.cmp("r,read"))) throw new FailedPredicateException(this, "this.cmp(\"r,read\")");
			this.state = 858;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public readStatement(): ReadStatementContext {
		let _localctx: ReadStatementContext = new ReadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ObjectScriptParser.RULE_readStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 861;
			this.readArgument();
			this.state = 866;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,111,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 862;
					this.match(ObjectScriptParser.COMMA);
					this.state = 863;
					this.readArgument();
					}
					}
				}
				this.state = 868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,111,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public readArgument(): ReadArgumentContext {
		let _localctx: ReadArgumentContext = new ReadArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ObjectScriptParser.RULE_readArgument);
		let _la: number;
		try {
			this.state = 878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,113,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 869;
				this.writeArgument();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				this.variable();
				this.state = 873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.SHARP) {
					{
					this.state = 871;
					this.match(ObjectScriptParser.SHARP);
					this.state = 872;
					this.expression(0);
					}
				}

				this.state = 875;
				this.match(ObjectScriptParser.Colon);
				this.state = 876;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setCommand(): SetCommandContext {
		let _localctx: SetCommandContext = new SetCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ObjectScriptParser.RULE_setCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			if (!(this.cmp("s,set"))) throw new FailedPredicateException(this, "this.cmp(\"s,set\")");
			this.state = 881;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setStatement(): SetStatementContext {
		let _localctx: SetStatementContext = new SetStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ObjectScriptParser.RULE_setStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 884;
			this.setArgument();
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,114,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 885;
					this.match(ObjectScriptParser.COMMA);
					this.state = 886;
					this.setArgument();
					}
					}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,114,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setArgument(): SetArgumentContext {
		let _localctx: SetArgumentContext = new SetArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ObjectScriptParser.RULE_setArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.variable();
			this.state = 893;
			this.match(ObjectScriptParser.EQUAL);
			this.state = 894;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tcommitCommand(): TcommitCommandContext {
		let _localctx: TcommitCommandContext = new TcommitCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ObjectScriptParser.RULE_tcommitCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 896;
			if (!(this.cmp("tc,tcommit"))) throw new FailedPredicateException(this, "this.cmp(\"tc,tcommit\")");
			this.state = 897;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public throwCommand(): ThrowCommandContext {
		let _localctx: ThrowCommandContext = new ThrowCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ObjectScriptParser.RULE_throwCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			if (!(this.cmp("throw"))) throw new FailedPredicateException(this, "this.cmp(\"throw\")");
			this.state = 900;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trollbackCommand(): TrollbackCommandContext {
		let _localctx: TrollbackCommandContext = new TrollbackCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ObjectScriptParser.RULE_trollbackCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			if (!(this.cmp("tr,trollback"))) throw new FailedPredicateException(this, "this.cmp(\"tr,trollback\")");
			this.state = 903;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tryCommand(): TryCommandContext {
		let _localctx: TryCommandContext = new TryCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ObjectScriptParser.RULE_tryCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			if (!(this.cmp("try"))) throw new FailedPredicateException(this, "this.cmp(\"try\")");
			this.state = 906;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ObjectScriptParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.CommandSPACE) {
				{
				this.state = 908;
				this.match(ObjectScriptParser.CommandSPACE);
				}
			}

			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.Spaces) {
				{
				this.state = 911;
				this.match(ObjectScriptParser.Spaces);
				}
			}

			this.state = 914;
			this.blockStatement(true);
			this.tryBlock = true;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tstartCommand(): TstartCommandContext {
		let _localctx: TstartCommandContext = new TstartCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ObjectScriptParser.RULE_tstartCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			if (!(this.cmp("ts,tstart"))) throw new FailedPredicateException(this, "this.cmp(\"ts,tstart\")");
			this.state = 918;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public useCommand(): UseCommandContext {
		let _localctx: UseCommandContext = new UseCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ObjectScriptParser.RULE_useCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			if (!(this.cmp("u,use"))) throw new FailedPredicateException(this, "this.cmp(\"u,use\")");
			this.state = 921;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ObjectScriptParser.RULE_useStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 924;
			this.expression(0);
			this.state = 931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,118,this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this.match(ObjectScriptParser.Colon);
				this.state = 926;
				this.colonExpression();
				this.state = 929;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,117,this._ctx) ) {
				case 1:
					{
					this.state = 927;
					this.match(ObjectScriptParser.Colon);
					this.state = 928;
					this.expression(0);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public viewCommand(): ViewCommandContext {
		let _localctx: ViewCommandContext = new ViewCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ObjectScriptParser.RULE_viewCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			if (!(this.cmp("v,view"))) throw new FailedPredicateException(this, "this.cmp(\"v,view\")");
			this.state = 934;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public viewStatement(): ViewStatementContext {
		let _localctx: ViewStatementContext = new ViewStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ObjectScriptParser.RULE_viewStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 937;
			this.expression(0);
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				{
				this.state = 938;
				this.match(ObjectScriptParser.Colon);
				this.state = 939;
				this.expression(0);
				this.state = 946;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,120,this._ctx) ) {
				case 1:
					{
					this.state = 940;
					this.match(ObjectScriptParser.Colon);
					this.state = 941;
					this.expression(0);
					this.state = 944;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
					case 1:
						{
						this.state = 942;
						this.match(ObjectScriptParser.Colon);
						this.state = 943;
						this.expression(0);
						}
						break;
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileCommand(): WhileCommandContext {
		let _localctx: WhileCommandContext = new WhileCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ObjectScriptParser.RULE_whileCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			if (!(this.cmp("while"))) throw new FailedPredicateException(this, "this.cmp(\"while\")");
			this.state = 951;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ObjectScriptParser.RULE_whileStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 978;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,125,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 953;
				if (!(this.whileBlock)) throw new FailedPredicateException(this, "this.whileBlock");
				this.state = 954;
				this.match(ObjectScriptParser.CommandSPACE);
				this.state = 955;
				this.condition(0);
				this.state = 960;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 956;
						this.match(ObjectScriptParser.COMMA);
						this.state = 957;
						this.condition(0);
						}
						}
					}
					this.state = 962;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 963;
				if (!(!this.whileBlock)) throw new FailedPredicateException(this, "!this.whileBlock");
				this.state = 964;
				this.match(ObjectScriptParser.CommandSPACE);
				this.state = 965;
				this.condition(0);
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.COMMA) {
					{
					{
					this.state = 966;
					this.match(ObjectScriptParser.COMMA);
					this.state = 967;
					this.condition(0);
					}
					}
					this.state = 972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.Spaces) {
					{
					this.state = 973;
					this.match(ObjectScriptParser.Spaces);
					}
				}

				this.state = 976;
				this.blockStatement(true);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public writeCommand(): WriteCommandContext {
		let _localctx: WriteCommandContext = new WriteCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ObjectScriptParser.RULE_writeCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			if (!(this.cmp("w,write"))) throw new FailedPredicateException(this, "this.cmp(\"w,write\")");
			this.state = 981;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public writeStatement(): WriteStatementContext {
		let _localctx: WriteStatementContext = new WriteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ObjectScriptParser.RULE_writeStatement);
		try {
			let _alt: number;
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,127,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 983;
				this.match(ObjectScriptParser.CommandSPACE);
				{
				this.state = 984;
				this.writeArgument();
				this.state = 989;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 985;
						this.match(ObjectScriptParser.COMMA);
						this.state = 986;
						this.writeArgument();
						}
						}
					}
					this.state = 991;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 992;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public writeArgument(): WriteArgumentContext {
		let _localctx: WriteArgumentContext = new WriteArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ObjectScriptParser.RULE_writeArgument);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1008;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,129,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 999;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,128,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 996;
						_la = this._input.LA(1);
						if ( !(_la===ObjectScriptParser.SHARP || _la===ObjectScriptParser.EXCLAMATION) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 1001;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,128,this._ctx);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1002;
				this.match(ObjectScriptParser.QUESTON);
				this.state = 1003;
				this.expression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1004;
				this.match(ObjectScriptParser.ASTERISK);
				this.state = 1005;
				this.variable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1006;
				this.match(ObjectScriptParser.SLASH);
				this.state = 1007;
				this.match(ObjectScriptParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public xecuteCommand(): XecuteCommandContext {
		let _localctx: XecuteCommandContext = new XecuteCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ObjectScriptParser.RULE_xecuteCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			if (!(this.cmp("x,xecute"))) throw new FailedPredicateException(this, "this.cmp(\"x,xecute\")");
			this.state = 1011;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public xecuteStatement(): XecuteStatementContext {
		let _localctx: XecuteStatementContext = new XecuteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ObjectScriptParser.RULE_xecuteStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 1014;
			this.xeceuteArgument();
			this.state = 1016;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,130,this._ctx) ) {
			case 1:
				{
				this.state = 1015;
				this.pc();
				}
				break;
			}
			this.state = 1025;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,132,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1018;
					this.match(ObjectScriptParser.COMMA);
					this.state = 1019;
					this.xeceuteArgument();
					this.state = 1021;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,131,this._ctx) ) {
					case 1:
						{
						this.state = 1020;
						this.pc();
						}
						break;
					}
					}
					}
				}
				this.state = 1027;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,132,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public xeceuteArgument(): XeceuteArgumentContext {
		let _localctx: XeceuteArgumentContext = new XeceuteArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ObjectScriptParser.RULE_xeceuteArgument);
		let _la: number;
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,134,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1028;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1029;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 1030;
				this.expression(0);
				this.argsLevel++;
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.COMMA) {
					{
					{
					this.state = 1032;
					this.match(ObjectScriptParser.COMMA);
					this.state = 1033;
					this.expression(0);
					}
					}
					this.state = 1038;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.argsLevel--;
				this.state = 1040;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zkillCommand(): ZkillCommandContext {
		let _localctx: ZkillCommandContext = new ZkillCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ObjectScriptParser.RULE_zkillCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			if (!(this.cmp("zk,zkill"))) throw new FailedPredicateException(this, "this.cmp(\"zk,zkill\")");
			this.state = 1045;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zkillStatement(): ZkillStatementContext {
		let _localctx: ZkillStatementContext = new ZkillStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ObjectScriptParser.RULE_zkillStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 1048;
			this.variable();
			this.state = 1053;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1049;
					this.match(ObjectScriptParser.COMMA);
					this.state = 1050;
					this.variable();
					}
					}
				}
				this.state = 1055;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public znspaceCommand(): ZnspaceCommandContext {
		let _localctx: ZnspaceCommandContext = new ZnspaceCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ObjectScriptParser.RULE_znspaceCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			if (!(this.cmp("zn,znspace"))) throw new FailedPredicateException(this, "this.cmp(\"zn,znspace\")");
			this.state = 1057;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ztrapCommand(): ZtrapCommandContext {
		let _localctx: ZtrapCommandContext = new ZtrapCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ObjectScriptParser.RULE_ztrapCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			if (!(this.cmp("ztrap"))) throw new FailedPredicateException(this, "this.cmp(\"ztrap\")");
			this.state = 1060;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zwriteCommand(): ZwriteCommandContext {
		let _localctx: ZwriteCommandContext = new ZwriteCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ObjectScriptParser.RULE_zwriteCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			if (!(this.cmp("zw,zwrite"))) throw new FailedPredicateException(this, "this.cmp(\"zw,zwrite\")");
			this.state = 1063;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zwriteStatement(): ZwriteStatementContext {
		let _localctx: ZwriteStatementContext = new ZwriteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ObjectScriptParser.RULE_zwriteStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1066;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,136,this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
			this.state = 1076;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
			case 1:
				{
				this.state = 1068;
				this.variable();
				this.state = 1073;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1069;
						this.match(ObjectScriptParser.COMMA);
						this.state = 1070;
						this.variable();
						}
						}
					}
					this.state = 1075;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zzdumpCommand(): ZzdumpCommandContext {
		let _localctx: ZzdumpCommandContext = new ZzdumpCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ObjectScriptParser.RULE_zzdumpCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			if (!(this.cmp("zzdump"))) throw new FailedPredicateException(this, "this.cmp(\"zzdump\")");
			this.state = 1079;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zzdumpStatement(): ZzdumpStatementContext {
		let _localctx: ZzdumpStatementContext = new ZzdumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ObjectScriptParser.RULE_zzdumpStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1081;
			this.match(ObjectScriptParser.CommandSPACE);
			this.state = 1082;
			this.expression(0);
			this.state = 1087;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,139,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1083;
					this.match(ObjectScriptParser.COMMA);
					this.state = 1084;
					this.expression(0);
					}
					}
				}
				this.state = 1089;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,139,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public printCommand(): PrintCommandContext {
		let _localctx: PrintCommandContext = new PrintCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ObjectScriptParser.RULE_printCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			if (!(this.cmp("p,print"))) throw new FailedPredicateException(this, "this.cmp(\"p,print\")");
			this.state = 1091;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public printStatement(): PrintStatementContext {
		let _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ObjectScriptParser.RULE_printStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this.match(ObjectScriptParser.CommandSPACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zbreakCommand(): ZbreakCommandContext {
		let _localctx: ZbreakCommandContext = new ZbreakCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ObjectScriptParser.RULE_zbreakCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1095;
			if (!(this.cmp("zb,zbreak"))) throw new FailedPredicateException(this, "this.cmp(\"zb,zbreak\")");
			this.state = 1096;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zbreakStatement(): ZbreakStatementContext {
		let _localctx: ZbreakStatementContext = new ZbreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ObjectScriptParser.RULE_zbreakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,140,this._ctx) ) {
			case 1:
				{
				this.state = 1098;
				this.match(ObjectScriptParser.CommandSPACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zinsertCommand(): ZinsertCommandContext {
		let _localctx: ZinsertCommandContext = new ZinsertCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ObjectScriptParser.RULE_zinsertCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1101;
			if (!(this.cmp("zi,zinsert"))) throw new FailedPredicateException(this, "this.cmp(\"zi,zinsert\")");
			this.state = 1102;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zloadCommand(): ZloadCommandContext {
		let _localctx: ZloadCommandContext = new ZloadCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ObjectScriptParser.RULE_zloadCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			if (!(this.cmp("zl,zload"))) throw new FailedPredicateException(this, "this.cmp(\"zl,zload\")");
			this.state = 1105;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zprintCommand(): ZprintCommandContext {
		let _localctx: ZprintCommandContext = new ZprintCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ObjectScriptParser.RULE_zprintCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			if (!(this.cmp("zp,zprint"))) throw new FailedPredicateException(this, "this.cmp(\"zp,zprint\")");
			this.state = 1108;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zremoveCommand(): ZremoveCommandContext {
		let _localctx: ZremoveCommandContext = new ZremoveCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ObjectScriptParser.RULE_zremoveCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1110;
			if (!(this.cmp("zr,zremove"))) throw new FailedPredicateException(this, "this.cmp(\"zr,zremove\")");
			this.state = 1111;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zsaveCommand(): ZsaveCommandContext {
		let _localctx: ZsaveCommandContext = new ZsaveCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ObjectScriptParser.RULE_zsaveCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1113;
			if (!(this.cmp("zs,zsave"))) throw new FailedPredicateException(this, "this.cmp(\"zs,zsave\")");
			this.state = 1114;
			this.match(ObjectScriptParser.CMD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public systemFunction(): SystemFunctionContext {
		let _localctx: SystemFunctionContext = new SystemFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ObjectScriptParser.RULE_systemFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			_localctx._func = this.match(ObjectScriptParser.SystemVariable);
			this.state = 1117;
			this.match(ObjectScriptParser.LPAREN);
			this.state = 1118;
			this.match(ObjectScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ObjectScriptParser.RULE_variable);
		let _la: number;
		try {
			this.state = 1143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ObjectScriptParser.ID:
			case ObjectScriptParser.PERCENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1120;
				this.localVariable();
				}
				break;
			case ObjectScriptParser.CARET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1121;
				this.globalVariable();
				}
				break;
			case ObjectScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1122;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 1123;
				this.variable();
				this.state = 1124;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;
			case ObjectScriptParser.AT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1126;
				this.match(ObjectScriptParser.AT);
				this.state = 1127;
				this.variable();
				this.state = 1140;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
				case 1:
					{
					this.state = 1128;
					this.match(ObjectScriptParser.AT);
					this.state = 1129;
					this.match(ObjectScriptParser.LPAREN);
					this.state = 1130;
					this.expression(0);
					this.state = 1135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ObjectScriptParser.COMMA) {
						{
						{
						this.state = 1131;
						this.match(ObjectScriptParser.COMMA);
						this.state = 1132;
						this.expression(0);
						}
						}
						this.state = 1137;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1138;
					this.match(ObjectScriptParser.RPAREN);
					}
					break;
				}
				}
				break;
			case ObjectScriptParser.Property:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1142;
				this.match(ObjectScriptParser.Property);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public localVariable(): LocalVariableContext {
		let _localctx: LocalVariableContext = new LocalVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ObjectScriptParser.RULE_localVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.PERCENT) {
				{
				this.state = 1145;
				this.match(ObjectScriptParser.PERCENT);
				}
			}

			this.state = 1148;
			this.match(ObjectScriptParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public globalVariable(): GlobalVariableContext {
		let _localctx: GlobalVariableContext = new GlobalVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ObjectScriptParser.RULE_globalVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this.match(ObjectScriptParser.CARET);
			this.state = 1156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.VertBar) {
				{
				this.state = 1151;
				this.match(ObjectScriptParser.VertBar);
				this.state = 1153;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,145,this._ctx) ) {
				case 1:
					{
					this.state = 1152;
					this.expression(0);
					}
					break;
				}
				this.state = 1155;
				this.match(ObjectScriptParser.VertBar);
				}
			}

			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.PERCENT) {
				{
				this.state = 1158;
				this.match(ObjectScriptParser.PERCENT);
				}
			}

			this.state = 1161;
			this.match(ObjectScriptParser.GlobalName);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public localVariableList(): LocalVariableListContext {
		let _localctx: LocalVariableListContext = new LocalVariableListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ObjectScriptParser.RULE_localVariableList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1163;
			this.match(ObjectScriptParser.LPAREN);
			this.state = 1164;
			this.match(ObjectScriptParser.ID);
			this.state = 1165;
			this.match(ObjectScriptParser.Spaces);
			this.state = 1170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ObjectScriptParser.COMMA) {
				{
				{
				this.state = 1166;
				this.match(ObjectScriptParser.COMMA);
				this.state = 1167;
				this.match(ObjectScriptParser.ID);
				}
				}
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1173;
			this.match(ObjectScriptParser.RPAREN);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public colonExpression(): ColonExpressionContext {
		let _localctx: ColonExpressionContext = new ColonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ObjectScriptParser.RULE_colonExpression);
		try {
			let _alt: number;
			this.state = 1185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,151,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1175;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,150,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						this.state = 1178;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,149,this._ctx) ) {
						case 1:
							{
							this.state = 1176;
							this.expression(0);
							}
							break;

						case 2:
							{
							this.state = 1177;
							this.match(ObjectScriptParser.Colon);
							}
							break;
						}
						}
					}
					this.state = 1182;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,150,this._ctx);
				}
				this.state = 1183;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 198;
		this.enterRecursionRule(_localctx, 198, ObjectScriptParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,152,this._ctx) ) {
			case 1:
				{
				this.state = 1188;
				this.simpleExpression();
				}
				break;

			case 2:
				{
				this.state = 1189;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 1190;
				this.expression(0);
				this.state = 1191;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;

			case 3:
				{
				this.state = 1193;
				this.condition(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,157,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ObjectScriptParser.RULE_expression);
					this.state = 1196;
					if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					this.state = 1198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===ObjectScriptParser.Spaces) {
						{
						this.state = 1197;
						this.match(ObjectScriptParser.Spaces);
						}
					}

					this.state = 1213;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ObjectScriptParser.EOL:
					case ObjectScriptParser.UNDERSCORE:
						{
						{
						this.state = 1203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===ObjectScriptParser.EOL) {
							{
							{
							this.state = 1200;
							this.match(ObjectScriptParser.EOL);
							}
							}
							this.state = 1205;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1206;
						this.match(ObjectScriptParser.UNDERSCORE);
						}
						}
						break;
					case ObjectScriptParser.PLUS:
						{
						this.state = 1207;
						this.match(ObjectScriptParser.PLUS);
						}
						break;
					case ObjectScriptParser.MINUS:
						{
						this.state = 1208;
						this.match(ObjectScriptParser.MINUS);
						}
						break;
					case ObjectScriptParser.ASTERISK:
						{
						this.state = 1209;
						this.match(ObjectScriptParser.ASTERISK);
						}
						break;
					case ObjectScriptParser.SHARP:
						{
						this.state = 1210;
						this.match(ObjectScriptParser.SHARP);
						}
						break;
					case ObjectScriptParser.SLASH:
						{
						this.state = 1211;
						this.match(ObjectScriptParser.SLASH);
						}
						break;
					case ObjectScriptParser.BACKSLASH:
						{
						this.state = 1212;
						this.match(ObjectScriptParser.BACKSLASH);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1216;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,156,this._ctx) ) {
					case 1:
						{
						this.state = 1215;
						this.match(ObjectScriptParser.Spaces);
						}
						break;
					}
					this.state = 1218;
					this.expression(4);
					}
					}
				}
				this.state = 1223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,157,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ObjectScriptParser.RULE_simpleExpression);
		try {
			this.state = 1236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,158,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1224;
				this.match(ObjectScriptParser.INT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1225;
				this.match(ObjectScriptParser.FLOAT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1226;
				this.variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1227;
				this.match(ObjectScriptParser.STRING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1228;
				this.doClass();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1229;
				if (!(this.argsLevel>0)) throw new FailedPredicateException(this, "this.argsLevel>0");
				this.state = 1230;
				this.match(ObjectScriptParser.DOT);
				this.state = 1231;
				this.localVariable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1232;
				this.match(ObjectScriptParser.SystemVariable);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1233;
				this.match(ObjectScriptParser.SpecialGlobal);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1234;
				this.systemFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1235;
				this.match(ObjectScriptParser.Macros);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	@RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 202;
		this.enterRecursionRule(_localctx, 202, ObjectScriptParser.RULE_condition, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,159,this._ctx) ) {
			case 1:
				{
				this.state = 1239;
				this.match(ObjectScriptParser.LPAREN);
				this.state = 1240;
				this.condition(0);
				this.state = 1241;
				this.match(ObjectScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				this.state = 1243;
				this.match(ObjectScriptParser.Negative);
				this.state = 1244;
				this.condition(2);
				}
				break;

			case 3:
				{
				this.state = 1245;
				this.simpleExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,160,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ObjectScriptParser.RULE_condition);
					this.state = 1248;
					if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					this.state = 1249;
					_la = this._input.LA(1);
					if ( !(_la===ObjectScriptParser.EQUAL || _la===ObjectScriptParser.CondOper) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1250;
					this.condition(4);
					}
					}
				}
				this.state = 1255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,160,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pc(): PcContext {
		let _localctx: PcContext = new PcContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ObjectScriptParser.RULE_pc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			this.match(ObjectScriptParser.CommandCOLON);
			this.state = 1257;
			this.condition(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ObjectScriptParser.RULE_arguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.argsLevel++;
			this.state = 1260;
			this.match(ObjectScriptParser.LPAREN);
			this.state = 1265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,162,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 1263;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,161,this._ctx) ) {
					case 1:
						{
						this.state = 1261;
						this.match(ObjectScriptParser.COMMA);
						}
						break;

					case 2:
						{
						this.state = 1262;
						this.expression(0);
						}
						break;
					}
					}
				}
				this.state = 1267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,162,this._ctx);
			}
			this.state = 1268;
			this.match(ObjectScriptParser.RPAREN);
			this.argsLevel--;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doClass(): DoClassContext {
		let _localctx: DoClassContext = new DoClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ObjectScriptParser.RULE_doClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1271;
			this.match(ObjectScriptParser.ObjectClass);
			this.state = 1272;
			this.match(ObjectScriptParser.LPClass);
			this.state = 1273;
			this.match(ObjectScriptParser.ObjectName);
			this.state = 1274;
			this.match(ObjectScriptParser.RPClass);
			this.state = 1275;
			this.match(ObjectScriptParser.ObjectMethod);
			this.state = 1276;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doRoutine(): DoRoutineContext {
		let _localctx: DoRoutineContext = new DoRoutineContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ObjectScriptParser.RULE_doRoutine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,163,this._ctx) ) {
			case 1:
				{
				this.state = 1278;
				this.match(ObjectScriptParser.Label);
				}
				break;
			}
			this.state = 1283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,164,this._ctx) ) {
			case 1:
				{
				this.state = 1281;
				this.match(ObjectScriptParser.PLUS);
				this.state = 1282;
				this.expression(0);
				}
				break;
			}
			this.state = 1287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,165,this._ctx) ) {
			case 1:
				{
				this.state = 1285;
				this.match(ObjectScriptParser.CARET);
				this.state = 1286;
				this.match(ObjectScriptParser.RoutineName);
				}
				break;
			}
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,166,this._ctx) ) {
			case 1:
				{
				this.state = 1289;
				this.arguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doArgument(): DoArgumentContext {
		let _localctx: DoArgumentContext = new DoArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ObjectScriptParser.RULE_doArgument);
		try {
			this.state = 1294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,167,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1292;
				this.doClass();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1293;
				this.doRoutine();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labelDef(): LabelDefContext {
		let _localctx: LabelDefContext = new LabelDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ObjectScriptParser.RULE_labelDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.match(ObjectScriptParser.LPAREN);
			this.state = 1305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ObjectScriptParser.ID) {
				{
				this.state = 1297;
				this.labelParameter();
				this.state = 1302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.COMMA) {
					{
					{
					this.state = 1298;
					this.match(ObjectScriptParser.COMMA);
					this.state = 1299;
					this.labelParameter();
					}
					}
					this.state = 1304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1307;
			this.match(ObjectScriptParser.RPAREN);
			this.state = 1333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,177,this._ctx) ) {
			case 1:
				{
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.LBRACK) {
					{
					this.state = 1308;
					this.methodPublicVariables();
					}
				}

				this.state = 1312;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,171,this._ctx) ) {
				case 1:
					{
					this.state = 1311;
					this.match(ObjectScriptParser.Spaces);
					}
					break;
				}
				this.state = 1315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.MACMethodPrivate || _la===ObjectScriptParser.MACMethodPublic) {
					{
					this.state = 1314;
					_la = this._input.LA(1);
					if ( !(_la===ObjectScriptParser.MACMethodPrivate || _la===ObjectScriptParser.MACMethodPublic) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1318;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,173,this._ctx) ) {
				case 1:
					{
					this.state = 1317;
					this.match(ObjectScriptParser.Spaces);
					}
					break;
				}
				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.CommandEOL) {
					{
					this.state = 1320;
					this.match(ObjectScriptParser.CommandEOL);
					}
				}

				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ObjectScriptParser.COMMENT) {
					{
					{
					this.state = 1323;
					this.comments();
					}
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ObjectScriptParser.Spaces) {
					{
					this.state = 1329;
					this.match(ObjectScriptParser.Spaces);
					}
				}

				this.state = 1332;
				this.methodContent();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodPublicVariables(): MethodPublicVariablesContext {
		let _localctx: MethodPublicVariablesContext = new MethodPublicVariablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ObjectScriptParser.RULE_methodPublicVariables);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.match(ObjectScriptParser.LBRACK);
			this.state = 1336;
			this.match(ObjectScriptParser.ID);
			this.state = 1341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ObjectScriptParser.COMMA) {
				{
				{
				this.state = 1337;
				this.match(ObjectScriptParser.COMMA);
				this.state = 1338;
				this.match(ObjectScriptParser.ID);
				}
				}
				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1344;
			this.match(ObjectScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodContent(): MethodContentContext {
		let _localctx: MethodContentContext = new MethodContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ObjectScriptParser.RULE_methodContent);
		try {
			this.state = 1364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,181,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1346;
				this.match(ObjectScriptParser.CommandLBRACE);
				this.state = 1347;
				this.statement();
				this.state = 1348;
				this.match(ObjectScriptParser.CommandRBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1350;
				this.match(ObjectScriptParser.CommandLBRACE);
				this.state = 1351;
				this.match(ObjectScriptParser.CommandRBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1352;
				this.match(ObjectScriptParser.LBRACE);
				this.state = 1353;
				this.statement();
				this.state = 1354;
				this.match(ObjectScriptParser.RBRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1356;
				this.match(ObjectScriptParser.CommandLBRACE);
				this.state = 1358;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,179,this._ctx) ) {
				case 1:
					{
					this.state = 1357;
					this.match(ObjectScriptParser.CommandEOL);
					}
					break;
				}
				this.state = 1361;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,180,this._ctx) ) {
				case 1:
					{
					this.state = 1360;
					this.statement();
					}
					break;
				}
				this.state = 1363;
				this.match(ObjectScriptParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labelParameter(): LabelParameterContext {
		let _localctx: LabelParameterContext = new LabelParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ObjectScriptParser.RULE_labelParameter);
		let _la: number;
		try {
			this.state = 1370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,182,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1366;
				this.match(ObjectScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1367;
				this.match(ObjectScriptParser.ID);
				this.state = 1368;
				this.match(ObjectScriptParser.EQUAL);
				this.state = 1369;
				_la = this._input.LA(1);
				if ( !(_la===ObjectScriptParser.INT || _la===ObjectScriptParser.STRING) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.breakCommand_sempred(_localctx as BreakCommandContext, predIndex);

		case 11:
			return this.catchCommand_sempred(_localctx as CatchCommandContext, predIndex);

		case 13:
			return this.closeCommand_sempred(_localctx as CloseCommandContext, predIndex);

		case 15:
			return this.continueCommand_sempred(_localctx as ContinueCommandContext, predIndex);

		case 16:
			return this.doCommand_sempred(_localctx as DoCommandContext, predIndex);

		case 18:
			return this.elseCommand1_sempred(_localctx as ElseCommand1Context, predIndex);

		case 19:
			return this.elseCommand2_sempred(_localctx as ElseCommand2Context, predIndex);

		case 21:
			return this.elseifCommand_sempred(_localctx as ElseifCommandContext, predIndex);

		case 22:
			return this.forCommand_sempred(_localctx as ForCommandContext, predIndex);

		case 25:
			return this.gotoCommand_sempred(_localctx as GotoCommandContext, predIndex);

		case 27:
			return this.haltCommand_sempred(_localctx as HaltCommandContext, predIndex);

		case 28:
			return this.hangCommand_sempred(_localctx as HangCommandContext, predIndex);

		case 30:
			return this.ifCommand_sempred(_localctx as IfCommandContext, predIndex);

		case 32:
			return this.jobCommand_sempred(_localctx as JobCommandContext, predIndex);

		case 36:
			return this.killCommand_sempred(_localctx as KillCommandContext, predIndex);

		case 39:
			return this.lockCommand_sempred(_localctx as LockCommandContext, predIndex);

		case 43:
			return this.mergeCommand_sempred(_localctx as MergeCommandContext, predIndex);

		case 46:
			return this.newCommand_sempred(_localctx as NewCommandContext, predIndex);

		case 48:
			return this.openCommand_sempred(_localctx as OpenCommandContext, predIndex);

		case 50:
			return this.quitCommand_sempred(_localctx as QuitCommandContext, predIndex);

		case 51:
			return this.quitStatement_sempred(_localctx as QuitStatementContext, predIndex);

		case 52:
			return this.readCommand_sempred(_localctx as ReadCommandContext, predIndex);

		case 55:
			return this.setCommand_sempred(_localctx as SetCommandContext, predIndex);

		case 58:
			return this.tcommitCommand_sempred(_localctx as TcommitCommandContext, predIndex);

		case 59:
			return this.throwCommand_sempred(_localctx as ThrowCommandContext, predIndex);

		case 60:
			return this.trollbackCommand_sempred(_localctx as TrollbackCommandContext, predIndex);

		case 61:
			return this.tryCommand_sempred(_localctx as TryCommandContext, predIndex);

		case 63:
			return this.tstartCommand_sempred(_localctx as TstartCommandContext, predIndex);

		case 64:
			return this.useCommand_sempred(_localctx as UseCommandContext, predIndex);

		case 66:
			return this.viewCommand_sempred(_localctx as ViewCommandContext, predIndex);

		case 68:
			return this.whileCommand_sempred(_localctx as WhileCommandContext, predIndex);

		case 69:
			return this.whileStatement_sempred(_localctx as WhileStatementContext, predIndex);

		case 70:
			return this.writeCommand_sempred(_localctx as WriteCommandContext, predIndex);

		case 73:
			return this.xecuteCommand_sempred(_localctx as XecuteCommandContext, predIndex);

		case 76:
			return this.zkillCommand_sempred(_localctx as ZkillCommandContext, predIndex);

		case 78:
			return this.znspaceCommand_sempred(_localctx as ZnspaceCommandContext, predIndex);

		case 79:
			return this.ztrapCommand_sempred(_localctx as ZtrapCommandContext, predIndex);

		case 80:
			return this.zwriteCommand_sempred(_localctx as ZwriteCommandContext, predIndex);

		case 82:
			return this.zzdumpCommand_sempred(_localctx as ZzdumpCommandContext, predIndex);

		case 84:
			return this.printCommand_sempred(_localctx as PrintCommandContext, predIndex);

		case 86:
			return this.zbreakCommand_sempred(_localctx as ZbreakCommandContext, predIndex);

		case 88:
			return this.zinsertCommand_sempred(_localctx as ZinsertCommandContext, predIndex);

		case 89:
			return this.zloadCommand_sempred(_localctx as ZloadCommandContext, predIndex);

		case 90:
			return this.zprintCommand_sempred(_localctx as ZprintCommandContext, predIndex);

		case 91:
			return this.zremoveCommand_sempred(_localctx as ZremoveCommandContext, predIndex);

		case 92:
			return this.zsaveCommand_sempred(_localctx as ZsaveCommandContext, predIndex);

		case 99:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 100:
			return this.simpleExpression_sempred(_localctx as SimpleExpressionContext, predIndex);

		case 101:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);
		}
		return true;
	}
	private breakCommand_sempred(_localctx: BreakCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.cmp("b,break");
		}
		return true;
	}
	private catchCommand_sempred(_localctx: CatchCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.catchBlock&&this.cmp("catch");
		}
		return true;
	}
	private closeCommand_sempred(_localctx: CloseCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.cmp("c,close");
		}
		return true;
	}
	private continueCommand_sempred(_localctx: ContinueCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.cmp("continue");
		}
		return true;
	}
	private doCommand_sempred(_localctx: DoCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.cmp("d,do");
		}
		return true;
	}
	private elseCommand1_sempred(_localctx: ElseCommand1Context, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.elseBlock&&this.cmp("else");
		}
		return true;
	}
	private elseCommand2_sempred(_localctx: ElseCommand2Context, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return !this.elseBlock&&this.cmp("else");
		}
		return true;
	}
	private elseifCommand_sempred(_localctx: ElseifCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.cmp("elseif");
		}
		return true;
	}
	private forCommand_sempred(_localctx: ForCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.cmp("f,for");
		}
		return true;
	}
	private gotoCommand_sempred(_localctx: GotoCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.cmp("g,goto");
		}
		return true;
	}
	private haltCommand_sempred(_localctx: HaltCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.cmp("h,halt");
		}
		return true;
	}
	private hangCommand_sempred(_localctx: HangCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.cmp("h,hang");
		}
		return true;
	}
	private ifCommand_sempred(_localctx: IfCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.cmp("i,if");
		}
		return true;
	}
	private jobCommand_sempred(_localctx: JobCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.cmp("j,job");
		}
		return true;
	}
	private killCommand_sempred(_localctx: KillCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.cmp("k,kill");
		}
		return true;
	}
	private lockCommand_sempred(_localctx: LockCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.cmp("l,lock");
		}
		return true;
	}
	private mergeCommand_sempred(_localctx: MergeCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.cmp("m,merge");
		}
		return true;
	}
	private newCommand_sempred(_localctx: NewCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.cmp("n,new");
		}
		return true;
	}
	private openCommand_sempred(_localctx: OpenCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.cmp("o,open");
		}
		return true;
	}
	private quitCommand_sempred(_localctx: QuitCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.cmp("q,quit");
		}
		return true;
	}
	private quitStatement_sempred(_localctx: QuitStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.loopLevel>0;

		case 21:
			return this.loopLevel==0;
		}
		return true;
	}
	private readCommand_sempred(_localctx: ReadCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.cmp("r,read");
		}
		return true;
	}
	private setCommand_sempred(_localctx: SetCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.cmp("s,set");
		}
		return true;
	}
	private tcommitCommand_sempred(_localctx: TcommitCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.cmp("tc,tcommit");
		}
		return true;
	}
	private throwCommand_sempred(_localctx: ThrowCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.cmp("throw");
		}
		return true;
	}
	private trollbackCommand_sempred(_localctx: TrollbackCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.cmp("tr,trollback");
		}
		return true;
	}
	private tryCommand_sempred(_localctx: TryCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.cmp("try");
		}
		return true;
	}
	private tstartCommand_sempred(_localctx: TstartCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.cmp("ts,tstart");
		}
		return true;
	}
	private useCommand_sempred(_localctx: UseCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.cmp("u,use");
		}
		return true;
	}
	private viewCommand_sempred(_localctx: ViewCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.cmp("v,view");
		}
		return true;
	}
	private whileCommand_sempred(_localctx: WhileCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.cmp("while");
		}
		return true;
	}
	private whileStatement_sempred(_localctx: WhileStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.whileBlock;

		case 33:
			return !this.whileBlock;
		}
		return true;
	}
	private writeCommand_sempred(_localctx: WriteCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.cmp("w,write");
		}
		return true;
	}
	private xecuteCommand_sempred(_localctx: XecuteCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.cmp("x,xecute");
		}
		return true;
	}
	private zkillCommand_sempred(_localctx: ZkillCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.cmp("zk,zkill");
		}
		return true;
	}
	private znspaceCommand_sempred(_localctx: ZnspaceCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.cmp("zn,znspace");
		}
		return true;
	}
	private ztrapCommand_sempred(_localctx: ZtrapCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.cmp("ztrap");
		}
		return true;
	}
	private zwriteCommand_sempred(_localctx: ZwriteCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.cmp("zw,zwrite");
		}
		return true;
	}
	private zzdumpCommand_sempred(_localctx: ZzdumpCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.cmp("zzdump");
		}
		return true;
	}
	private printCommand_sempred(_localctx: PrintCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.cmp("p,print");
		}
		return true;
	}
	private zbreakCommand_sempred(_localctx: ZbreakCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 42:
			return this.cmp("zb,zbreak");
		}
		return true;
	}
	private zinsertCommand_sempred(_localctx: ZinsertCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 43:
			return this.cmp("zi,zinsert");
		}
		return true;
	}
	private zloadCommand_sempred(_localctx: ZloadCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.cmp("zl,zload");
		}
		return true;
	}
	private zprintCommand_sempred(_localctx: ZprintCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.cmp("zp,zprint");
		}
		return true;
	}
	private zremoveCommand_sempred(_localctx: ZremoveCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.cmp("zr,zremove");
		}
		return true;
	}
	private zsaveCommand_sempred(_localctx: ZsaveCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.cmp("zs,zsave");
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private simpleExpression_sempred(_localctx: SimpleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.argsLevel>0;
		}
		return true;
	}
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03J\u055F\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x03\x02\x07"+
		"\x02\xE2\n\x02\f\x02\x0E\x02\xE5\v\x02\x03\x03\x05\x03\xE8\n\x03\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xEF\n\x03\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xF8\n\x03\x05\x03\xFA\n\x03"+
		"\x03\x04\x03\x04\x07\x04\xFE\n\x04\f\x04\x0E\x04\u0101\v\x04\x03\x04\x03"+
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\u0109\n\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0112\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x05\x06\u0118\n\x06\x03\x06\x03\x06\x05\x06\u011C"+
		"\n\x06\x03\x06\x05\x06\u011F\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x05\x06\u0126\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"\u012D\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0133\n\x06\x03\x06"+
		"\x05\x06\u0136\n\x06\x03\x06\x03\x06\x05\x06\u013A\n\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0143\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x05\x06\u0149\n\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x05\x06\u014F\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0155\n\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u015B\n\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x05\x06\u0161\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"\u0167\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u016D\n\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x05\x06\u0173\n\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x05\x06\u0179\n\x06\x03\x06\x03\x06\x05\x06\u017D\n\x06\x03\x06\x05"+
		"\x06\u0180\n\x06\x03\x06\x03\x06\x05\x06\u0184\n\x06\x03\x06\x05\x06\u0187"+
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u018E\n\x06\x03"+
		"\x06\x03\x06\x05\x06\u0192\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"\u0198\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05"+
		"\x06\u01A1\n\x06\x03\x06\x05\x06\u01A4\n\x06\x03\x06\x03\x06\x05\x06\u01A8"+
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01AE\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x05\x06\u01B4\n\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x05\x06\u01BA\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01C0\n\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01C6\n\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x05\x06\u01CC\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"\u01D2\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01DF\n\x06\x03\x07\x03\x07\x03\b"+
		"\x03\b\x03\b\x05\b\u01E6\n\b\x03\b\x03\b\x05\b\u01EA\n\b\x03\b\x03\b\x07"+
		"\b\u01EE\n\b\f\b\x0E\b\u01F1\v\b\x03\b\x05\b\u01F4\n\b\x03\b\x05\b\u01F7"+
		"\n\b\x03\t\x05\t\u01FA\n\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03"+
		"\f\x05\f\u0204\n\f\x03\f\x05\f\u0207\n\f\x03\r\x03\r\x03\r\x03\x0E\x05"+
		"\x0E\u020D\n\x0E\x03\x0E\x05\x0E\u0210\n\x0E\x03\x0E\x05\x0E\u0213\n\x0E"+
		"\x03\x0E\x05\x0E\u0216\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03"+
		"\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0221\n\x10\f\x10\x0E\x10\u0224\v"+
		"\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03"+
		"\x13\x05\x13\u022F\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0234\n\x13\x07"+
		"\x13\u0236\n\x13\f\x13\x0E\x13\u0239\v\x13\x03\x13\x03\x13\x07\x13\u023D"+
		"\n\x13\f\x13\x0E\x13\u0240\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13"+
		"\u0246\n\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x05"+
		"\x16\u024F\n\x16\x03\x16\x05\x16\u0252\n\x16\x03\x16\x03\x16\x03\x17\x03"+
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05"+
		"\x19\u0260\n\x19\x05\x19\u0262\n\x19\x03\x19\x07\x19\u0265\n\x19\f\x19"+
		"\x0E\x19\u0268\v\x19\x03\x19\x05\x19\u026B\n\x19\x03\x1A\x03\x1A\x03\x1A"+
		"\x03\x1A\x03\x1A\x05\x1A\u0272\n\x1A\x05\x1A\u0274\n\x1A\x03\x1A\x03\x1A"+
		"\x07\x1A\u0278\n\x1A\f\x1A\x0E\x1A\u027B\v\x1A\x05\x1A\u027D\n\x1A\x03"+
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03"+
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u028E\n\x1F\f\x1F"+
		"\x0E\x1F\u0291\v\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x07!\u029A\n!"+
		"\f!\x0E!\u029D\v!\x03!\x05!\u02A0\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03"+
		"!\x07!\u02A9\n!\f!\x0E!\u02AC\v!\x05!\u02AE\n!\x03\"\x03\"\x03\"\x03#"+
		"\x03#\x03#\x03#\x07#\u02B7\n#\f#\x0E#\u02BA\v#\x03$\x03$\x03$\x05$\u02BF"+
		"\n$\x03$\x03$\x05$\u02C3\n$\x05$\u02C5\n$\x03%\x03%\x03%\x07%\u02CA\n"+
		"%\f%\x0E%\u02CD\v%\x03%\x03%\x03&\x03&\x03&\x03\'\x05\'\u02D5\n\'\x03"+
		"\'\x03\'\x03\'\x07\'\u02DA\n\'\f\'\x0E\'\u02DD\v\'\x05\'\u02DF\n\'\x03"+
		"(\x03(\x03(\x03(\x03(\x05(\u02E6\n(\x03)\x03)\x03)\x03*\x05*\u02EC\n*"+
		"\x03*\x03*\x03*\x05*\u02F1\n*\x05*\u02F3\n*\x03+\x05+\u02F6\n+\x03+\x03"+
		"+\x03+\x05+\u02FB\n+\x03+\x05+\u02FE\n+\x03+\x03+\x03+\x03+\x07+\u0304"+
		"\n+\f+\x0E+\u0307\v+\x03+\x03+\x03+\x05+\u030C\n+\x05+\u030E\n+\x03,\x03"+
		",\x03,\x05,\u0313\n,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x07.\u031C\n."+
		"\f.\x0E.\u031F\v.\x03/\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x03"+
		"1\x071\u032C\n1\f1\x0E1\u032F\v1\x051\u0331\n1\x051\u0333\n1\x032\x03"+
		"2\x032\x033\x033\x033\x033\x053\u033C\n3\x033\x033\x053\u0340\n3\x033"+
		"\x033\x053\u0344\n3\x053\u0346\n3\x053\u0348\n3\x053\u034A\n3\x034\x03"+
		"4\x034\x035\x035\x055\u0351\n5\x035\x035\x055\u0355\n5\x035\x055\u0358"+
		"\n5\x055\u035A\n5\x036\x036\x036\x037\x037\x037\x037\x077\u0363\n7\f7"+
		"\x0E7\u0366\v7\x038\x038\x038\x038\x058\u036C\n8\x038\x038\x038\x058\u0371"+
		"\n8\x039\x039\x039\x03:\x03:\x03:\x03:\x07:\u037A\n:\f:\x0E:\u037D\v:"+
		"\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03"+
		"?\x03?\x03?\x03@\x05@\u0390\n@\x03@\x05@\u0393\n@\x03@\x03@\x03@\x03A"+
		"\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u03A4\nC"+
		"\x05C\u03A6\nC\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E"+
		"\x05E\u03B3\nE\x05E\u03B5\nE\x05E\u03B7\nE\x03F\x03F\x03F\x03G\x03G\x03"+
		"G\x03G\x03G\x07G\u03C1\nG\fG\x0EG\u03C4\vG\x03G\x03G\x03G\x03G\x03G\x07"+
		"G\u03CB\nG\fG\x0EG\u03CE\vG\x03G\x05G\u03D1\nG\x03G\x03G\x05G\u03D5\n"+
		"G\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x07I\u03DE\nI\fI\x0EI\u03E1\vI\x03"+
		"I\x05I\u03E4\nI\x03J\x03J\x07J\u03E8\nJ\fJ\x0EJ\u03EB\vJ\x03J\x03J\x03"+
		"J\x03J\x03J\x03J\x05J\u03F3\nJ\x03K\x03K\x03K\x03L\x03L\x03L\x05L\u03FB"+
		"\nL\x03L\x03L\x03L\x05L\u0400\nL\x07L\u0402\nL\fL\x0EL\u0405\vL\x03M\x03"+
		"M\x03M\x03M\x03M\x03M\x07M\u040D\nM\fM\x0EM\u0410\vM\x03M\x03M\x03M\x05"+
		"M\u0415\nM\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x07O\u041E\nO\fO\x0EO\u0421"+
		"\vO\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03S\x05S\u042D\nS\x03"+
		"S\x03S\x03S\x07S\u0432\nS\fS\x0ES\u0435\vS\x05S\u0437\nS\x03T\x03T\x03"+
		"T\x03U\x03U\x03U\x03U\x07U\u0440\nU\fU\x0EU\u0443\vU\x03V\x03V\x03V\x03"+
		"W\x03W\x03X\x03X\x03X\x03Y\x05Y\u044E\nY\x03Z\x03Z\x03Z\x03[\x03[\x03"+
		"[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03^\x03^\x03^\x03_\x03_\x03_\x03_"+
		"\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x07"+
		"`\u0470\n`\f`\x0E`\u0473\v`\x03`\x03`\x05`\u0477\n`\x03`\x05`\u047A\n"+
		"`\x03a\x05a\u047D\na\x03a\x03a\x03b\x03b\x03b\x05b\u0484\nb\x03b\x05b"+
		"\u0487\nb\x03b\x05b\u048A\nb\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x07c\u0493"+
		"\nc\fc\x0Ec\u0496\vc\x03c\x03c\x03d\x03d\x03d\x07d\u049D\nd\fd\x0Ed\u04A0"+
		"\vd\x03d\x03d\x05d\u04A4\nd\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u04AD"+
		"\ne\x03e\x03e\x05e\u04B1\ne\x03e\x07e\u04B4\ne\fe\x0Ee\u04B7\ve\x03e\x03"+
		"e\x03e\x03e\x03e\x03e\x03e\x05e\u04C0\ne\x03e\x05e\u04C3\ne\x03e\x07e"+
		"\u04C6\ne\fe\x0Ee\u04C9\ve\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03"+
		"f\x03f\x03f\x03f\x05f\u04D7\nf\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03"+
		"g\x05g\u04E1\ng\x03g\x03g\x03g\x07g\u04E6\ng\fg\x0Eg\u04E9\vg\x03h\x03"+
		"h\x03h\x03i\x03i\x03i\x03i\x07i\u04F2\ni\fi\x0Ei\u04F5\vi\x03i\x03i\x03"+
		"i\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03k\x05k\u0502\nk\x03k\x03k\x05"+
		"k\u0506\nk\x03k\x03k\x05k\u050A\nk\x03k\x05k\u050D\nk\x03l\x03l\x05l\u0511"+
		"\nl\x03m\x03m\x03m\x03m\x07m\u0517\nm\fm\x0Em\u051A\vm\x05m\u051C\nm\x03"+
		"m\x03m\x05m\u0520\nm\x03m\x05m\u0523\nm\x03m\x05m\u0526\nm\x03m\x05m\u0529"+
		"\nm\x03m\x05m\u052C\nm\x03m\x07m\u052F\nm\fm\x0Em\u0532\vm\x03m\x05m\u0535"+
		"\nm\x03m\x05m\u0538\nm\x03n\x03n\x03n\x03n\x07n\u053E\nn\fn\x0En\u0541"+
		"\vn\x03n\x03n\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03"+
		"o\x05o\u0551\no\x03o\x05o\u0554\no\x03o\x05o\u0557\no\x03p\x03p\x03p\x03"+
		"p\x05p\u055D\np\x03p\x02\x02\x04\xC8\xCCq\x02\x02\x04\x02\x06\x02\b\x02"+
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C"+
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026"+
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02"+
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02"+
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02"+
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02"+
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02"+
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02"+
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02"+
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02"+
		"\x02\f\x03\x03\x14\x14\x05\x02\x14\x14&&EE\x04\x02++FF\x04\x02,,GG\x06"+
		"\x02\x14\x14&&CCEE\x03\x02\x1A\x1B\x03\x02\x1E\x1F\x04\x02\x15\x1566\x03"+
		"\x02\n\v\x04\x02\x11\x11\x13\x13\u05EF\x02\xE3\x03\x02\x02\x02\x04\xF9"+
		"\x03\x02\x02\x02\x06\xFB\x03\x02\x02\x02\b\u0104\x03\x02\x02\x02\n\u01DE"+
		"\x03\x02\x02\x02\f\u01E0\x03\x02\x02\x02\x0E\u01F6\x03\x02\x02\x02\x10"+
		"\u01F9\x03\x02\x02\x02\x12\u01FD\x03\x02\x02\x02\x14\u01FF\x03\x02\x02"+
		"\x02\x16\u0203\x03\x02\x02\x02\x18\u0208\x03\x02\x02\x02\x1A\u020C\x03"+
		"\x02\x02\x02\x1C\u0219\x03\x02\x02\x02\x1E\u021C\x03\x02\x02\x02 \u0225"+
		"\x03\x02\x02\x02\"\u0228\x03\x02\x02\x02$\u0245\x03\x02\x02\x02&\u0247"+
		"\x03\x02\x02\x02(\u024A\x03\x02\x02\x02*\u024E\x03\x02\x02\x02,\u0255"+
		"\x03\x02\x02\x02.\u0258\x03\x02\x02\x020\u025B\x03\x02\x02\x022\u026C"+
		"\x03\x02\x02\x024\u027E\x03\x02\x02\x026\u0281\x03\x02\x02\x028\u0283"+
		"\x03\x02\x02\x02:\u0286\x03\x02\x02\x02<\u0289\x03\x02\x02\x02>\u0292"+
		"\x03\x02\x02\x02@\u02AD\x03\x02\x02\x02B\u02AF\x03\x02\x02\x02D\u02B2"+
		"\x03\x02\x02\x02F\u02BB\x03\x02\x02\x02H\u02C6\x03\x02\x02\x02J\u02D0"+
		"\x03\x02\x02\x02L\u02D4\x03\x02\x02\x02N\u02E5\x03\x02\x02\x02P\u02E7"+
		"\x03\x02\x02\x02R\u02EB\x03\x02\x02\x02T\u030D\x03\x02\x02\x02V\u030F"+
		"\x03\x02\x02\x02X\u0314\x03\x02\x02\x02Z\u0317\x03\x02\x02\x02\\\u0320"+
		"\x03\x02\x02\x02^\u0324\x03\x02\x02\x02`\u0332\x03\x02\x02\x02b\u0334"+
		"\x03\x02\x02\x02d\u0337\x03\x02\x02\x02f\u034B\x03\x02\x02\x02h\u0359"+
		"\x03\x02\x02\x02j\u035B\x03\x02\x02\x02l\u035E\x03\x02\x02\x02n\u0370"+
		"\x03\x02\x02\x02p\u0372\x03\x02\x02\x02r\u0375\x03\x02\x02\x02t\u037E"+
		"\x03\x02\x02\x02v\u0382\x03\x02\x02\x02x\u0385\x03\x02\x02\x02z\u0388"+
		"\x03\x02\x02\x02|\u038B\x03\x02\x02\x02~\u038F\x03\x02\x02\x02\x80\u0397"+
		"\x03\x02\x02\x02\x82\u039A\x03\x02\x02\x02\x84\u039D\x03\x02\x02\x02\x86"+
		"\u03A7\x03\x02\x02\x02\x88\u03AA\x03\x02\x02\x02\x8A\u03B8\x03\x02\x02"+
		"\x02\x8C\u03D4\x03\x02\x02\x02\x8E\u03D6\x03\x02\x02\x02\x90\u03E3\x03"+
		"\x02\x02\x02\x92\u03F2\x03\x02\x02\x02\x94\u03F4\x03\x02\x02\x02\x96\u03F7"+
		"\x03\x02\x02\x02\x98\u0414\x03\x02\x02\x02\x9A\u0416\x03\x02\x02\x02\x9C"+
		"\u0419\x03\x02\x02\x02\x9E\u0422\x03\x02\x02\x02\xA0\u0425\x03\x02\x02"+
		"\x02\xA2\u0428\x03\x02\x02\x02\xA4\u042C\x03\x02\x02\x02\xA6\u0438\x03"+
		"\x02\x02\x02\xA8\u043B\x03\x02\x02\x02\xAA\u0444\x03\x02\x02\x02\xAC\u0447"+
		"\x03\x02\x02\x02\xAE\u0449\x03\x02\x02\x02\xB0\u044D\x03\x02\x02\x02\xB2"+
		"\u044F\x03\x02\x02\x02\xB4\u0452\x03\x02\x02\x02\xB6\u0455\x03\x02\x02"+
		"\x02\xB8\u0458\x03\x02\x02\x02\xBA\u045B\x03\x02\x02\x02\xBC\u045E\x03"+
		"\x02\x02\x02\xBE\u0479\x03\x02\x02\x02\xC0\u047C\x03\x02\x02\x02\xC2\u0480"+
		"\x03\x02\x02\x02\xC4\u048D\x03\x02\x02\x02\xC6\u04A3\x03\x02\x02\x02\xC8"+
		"\u04AC\x03\x02\x02\x02\xCA\u04D6\x03\x02\x02\x02\xCC\u04E0\x03\x02\x02"+
		"\x02\xCE\u04EA\x03\x02\x02\x02\xD0\u04ED\x03\x02\x02\x02\xD2\u04F9\x03"+
		"\x02\x02\x02\xD4\u0501\x03\x02\x02\x02\xD6\u0510\x03\x02\x02\x02\xD8\u0512"+
		"\x03\x02\x02\x02\xDA\u0539\x03\x02\x02\x02\xDC\u0556\x03\x02\x02\x02\xDE"+
		"\u055C\x03\x02\x02\x02\xE0\xE2\x05\x04\x03\x02\xE1\xE0\x03\x02\x02\x02"+
		"\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02"+
		"\xE4\x03\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE8\x07&\x02\x02"+
		"\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02"+
		"\xE9\xFA\x05\n\x06\x02\xEA\xEB\x07=\x02\x02\xEB\xEC\x07&\x02\x02\xEC\xEE"+
		"\x05\x0E\b\x02\xED\xEF\x07&\x02\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03"+
		"\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\t\x02\x02\x02\xF1\xFA\x03"+
		"\x02\x02\x02\xF2\xFA\x05\x12\n\x02\xF3\xFA\x05\b\x05\x02\xF4\xFA\t\x03"+
		"\x02\x02\xF5\xF7\x07\x05\x02\x02\xF6\xF8\x05\xD8m\x02\xF7\xF6\x03\x02"+
		"\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xE7\x03\x02"+
		"\x02\x02\xF9\xEA\x03\x02\x02\x02\xF9\xF2\x03\x02\x02\x02\xF9\xF3\x03\x02"+
		"\x02\x02\xF9\xF4\x03\x02\x02\x02\xF9\xF5\x03\x02\x02\x02\xFA\x05\x03\x02"+
		"\x02\x02\xFB\xFF\t\x04\x02\x02\xFC\xFE\x05\x04\x03\x02\xFD\xFC\x03\x02"+
		"\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03"+
		"\x02\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102"+
		"\u0103\t\x05\x02\x02\u0103\x07\x03\x02\x02\x02\u0104\u0105\x07%\x02\x02"+
		"\u0105\t\x03\x02\x02\x02\u0106\u0108\x05\x14\v\x02\u0107\u0109\x05\xCE"+
		"h\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A"+
		"\x03\x02\x02\x02\u010A\u010B\x05\x16\f\x02\u010B\u01DF\x03\x02\x02\x02"+
		"\u010C\u010D\x05\x18\r\x02\u010D\u010E\x05\x1A\x0E\x02\u010E\u01DF\x03"+
		"\x02\x02\x02\u010F\u0111\x05\x1C\x0F\x02\u0110\u0112\x05\xCEh\x02\u0111"+
		"\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02"+
		"\x02\x02\u0113\u0114\x05\x1E\x10\x02\u0114\u01DF\x03\x02\x02\x02\u0115"+
		"\u0117\x05 \x11\x02\u0116\u0118\x05\xCEh\x02\u0117\u0116\x03\x02\x02\x02"+
		"\u0117\u0118\x03\x02\x02\x02\u0118\u01DF\x03\x02\x02\x02\u0119\u011B\x05"+
		"\"\x12\x02\u011A\u011C\x05\xCEh\x02\u011B\u011A\x03\x02\x02\x02\u011B"+
		"\u011C\x03\x02\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D\u011F\x05$\x13"+
		"\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u01DF"+
		"\x03\x02\x02\x02\u0120\u0121\x05&\x14\x02\u0121\u0122\x05*\x16\x02\u0122"+
		"\u01DF\x03\x02\x02\x02\u0123\u0125\x05(\x15\x02\u0124\u0126\x07C\x02\x02"+
		"\u0125\u0124\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u01DF\x03"+
		"\x02\x02\x02\u0127\u0128\x05.\x18\x02\u0128\u0129\x050\x19\x02\u0129\u01DF"+
		"\x03\x02\x02\x02\u012A\u012C\x054\x1B\x02\u012B\u012D\x05\xCEh\x02\u012C"+
		"\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02"+
		"\x02\x02\u012E\u012F\x056\x1C\x02\u012F\u01DF\x03\x02\x02\x02\u0130\u0132"+
		"\x058\x1D\x02\u0131\u0133\x05\xCEh\x02\u0132\u0131\x03\x02\x02\x02\u0132"+
		"\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0136\x07C\x02"+
		"\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u01DF"+
		"\x03\x02\x02\x02\u0137\u0139\x05:\x1E\x02\u0138\u013A\x05\xCEh\x02\u0139"+
		"\u0138\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02"+
		"\x02\x02\u013B\u013C\x05<\x1F\x02\u013C\u01DF\x03\x02\x02\x02\u013D\u013E"+
		"\x05> \x02\u013E\u013F\x05@!\x02\u013F\u01DF\x03\x02\x02\x02\u0140\u0142"+
		"\x05B\"\x02\u0141\u0143\x05\xCEh\x02\u0142\u0141\x03\x02\x02\x02\u0142"+
		"\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x05D#\x02"+
		"\u0145\u01DF\x03\x02\x02\x02\u0146\u0148\x05J&\x02\u0147\u0149\x05\xCE"+
		"h\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A"+
		"\x03\x02\x02\x02\u014A\u014B\x05L\'\x02\u014B\u01DF\x03\x02\x02\x02\u014C"+
		"\u014E\x05P)\x02\u014D\u014F\x05\xCEh\x02\u014E\u014D\x03\x02\x02\x02"+
		"\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x05"+
		"R*\x02\u0151\u01DF\x03\x02\x02\x02\u0152\u0154\x05X-\x02\u0153\u0155\x05"+
		"\xCEh\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155"+
		"\u0156\x03\x02\x02\x02\u0156\u0157\x05Z.\x02\u0157\u01DF\x03\x02\x02\x02"+
		"\u0158\u015A\x05^0\x02\u0159\u015B\x05\xCEh\x02\u015A\u0159\x03\x02\x02"+
		"\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D"+
		"\x05`1\x02\u015D\u01DF\x03\x02\x02\x02\u015E\u0160\x05b2\x02\u015F\u0161"+
		"\x05\xCEh\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02"+
		"\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x05d3\x02\u0163\u01DF\x03\x02"+
		"\x02\x02\u0164\u0166\x05f4\x02\u0165\u0167\x05\xCEh\x02\u0166\u0165\x03"+
		"\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168"+
		"\u0169\x05h5\x02\u0169\u01DF\x03\x02\x02\x02\u016A\u016C\x05j6\x02\u016B"+
		"\u016D\x05\xCEh\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02"+
		"\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x05l7\x02\u016F\u01DF\x03"+
		"\x02\x02\x02\u0170\u0172\x05p9\x02\u0171\u0173\x05\xCEh\x02\u0172\u0171"+
		"\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02"+
		"\u0174\u0175\x05r:\x02\u0175";
	private static readonly _serializedATNSegment1: string =
		"\u01DF\x03\x02\x02\x02\u0176\u0178\x05v<\x02\u0177\u0179\x05\xCEh\x02"+
		"\u0178\u0177\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u01DF\x03"+
		"\x02\x02\x02\u017A\u017C\x05x=\x02\u017B\u017D\x05\xCEh\x02\u017C\u017B"+
		"\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02"+
		"\u017E\u0180\x05\xC8e\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03"+
		"\x02\x02\x02\u0180\u01DF\x03\x02\x02\x02\u0181\u0183\x05z>\x02\u0182\u0184"+
		"\x05\xCEh\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02"+
		"\u0184\u0186\x03\x02\x02\x02\u0185\u0187\x05\xC8e\x02\u0186\u0185\x03"+
		"\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u01DF\x03\x02\x02\x02\u0188"+
		"\u0189\x05|?\x02\u0189\u018A\x05~@\x02\u018A\u01DF\x03\x02\x02\x02\u018B"+
		"\u018D\x05\x80A\x02\u018C\u018E\x05\xCEh\x02\u018D\u018C\x03\x02\x02\x02"+
		"\u018D\u018E\x03\x02\x02\x02\u018E\u01DF\x03\x02\x02\x02\u018F\u0191\x05"+
		"\x82B\x02\u0190\u0192\x05\xCEh\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192"+
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194\x05\x84C\x02"+
		"\u0194\u01DF\x03\x02\x02\x02\u0195\u0197\x05\x86D\x02\u0196\u0198\x05"+
		"\xCEh\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198"+
		"\u0199\x03\x02\x02\x02\u0199\u019A\x05\x88E\x02\u019A\u01DF\x03\x02\x02"+
		"\x02\u019B\u019C\x05\x8AF\x02\u019C\u019D\x05\x8CG\x02\u019D\u01DF\x03"+
		"\x02\x02\x02\u019E\u01A0\x05\x8EH\x02\u019F\u01A1\x05\xCEh\x02\u01A0\u019F"+
		"\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02"+
		"\u01A2\u01A4\x05\x90I\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03"+
		"\x02\x02\x02\u01A4\u01DF\x03\x02\x02\x02\u01A5\u01A7\x05\x94K\x02\u01A6"+
		"\u01A8\x05\xCEh\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02"+
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x05\x96L\x02\u01AA\u01DF"+
		"\x03\x02\x02\x02\u01AB\u01AD\x05\x9AN\x02\u01AC\u01AE\x05\xCEh\x02\u01AD"+
		"\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02"+
		"\x02\x02\u01AF\u01B0\x05\x9CO\x02\u01B0\u01DF\x03\x02\x02\x02\u01B1\u01B3"+
		"\x05\x9EP\x02\u01B2\u01B4\x05\xCEh\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3"+
		"\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x05\xC8"+
		"e\x02\u01B6\u01DF\x03\x02\x02\x02\u01B7\u01B9\x05\xA0Q\x02\u01B8\u01BA"+
		"\x05\xCEh\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02"+
		"\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x05\xC8e\x02\u01BC\u01DF\x03"+
		"\x02\x02\x02\u01BD\u01BF\x05\xA2R\x02\u01BE\u01C0\x05\xCEh\x02\u01BF\u01BE"+
		"\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02"+
		"\u01C1\u01C2\x05\xA4S\x02\u01C2\u01DF\x03\x02\x02\x02\u01C3\u01C5\x05"+
		"\xA6T\x02\u01C4\u01C6\x05\xCEh\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6"+
		"\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8\x05\xA8U\x02"+
		"\u01C8\u01DF\x03\x02\x02\x02\u01C9\u01CB\x05\xAAV\x02\u01CA\u01CC\x05"+
		"\xCEh\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC"+
		"\u01CD\x03\x02\x02\x02\u01CD\u01CE\x05\xACW\x02\u01CE\u01DF\x03\x02\x02"+
		"\x02\u01CF\u01D1\x05\xAEX\x02\u01D0\u01D2\x05\xCEh\x02\u01D1\u01D0\x03"+
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3"+
		"\u01D4\x05\xB0Y\x02\u01D4\u01DF\x03\x02\x02\x02\u01D5\u01DF\x05\xB2Z\x02"+
		"\u01D6\u01DF\x05\xB4[\x02\u01D7\u01DF\x05\xB6\\\x02\u01D8\u01DF\x05\xB8"+
		"]\x02\u01D9\u01DF\x05\xBA^\x02\u01DA\u01DF\x07\f\x02\x02\u01DB\u01DF\x07"+
		"\r\x02\x02\u01DC\u01DF\x07\x0E\x02\x02\u01DD\u01DF\x05\f\x07\x02\u01DE"+
		"\u0106\x03\x02\x02\x02\u01DE\u010C\x03\x02\x02\x02\u01DE\u010F\x03\x02"+
		"\x02\x02\u01DE\u0115\x03\x02\x02\x02\u01DE\u0119\x03\x02\x02\x02\u01DE"+
		"\u0120\x03\x02\x02\x02\u01DE\u0123\x03\x02\x02\x02\u01DE\u0127\x03\x02"+
		"\x02\x02\u01DE\u012A\x03\x02\x02\x02\u01DE\u0130\x03\x02\x02\x02\u01DE"+
		"\u0137\x03\x02\x02\x02\u01DE\u013D\x03\x02\x02\x02\u01DE\u0140\x03\x02"+
		"\x02\x02\u01DE\u0146\x03\x02\x02\x02\u01DE\u014C\x03\x02\x02\x02\u01DE"+
		"\u0152\x03\x02\x02\x02\u01DE\u0158\x03\x02\x02\x02\u01DE\u015E\x03\x02"+
		"\x02\x02\u01DE\u0164\x03\x02\x02\x02\u01DE\u016A\x03\x02\x02\x02\u01DE"+
		"\u0170\x03\x02\x02\x02\u01DE\u0176\x03\x02\x02\x02\u01DE\u017A\x03\x02"+
		"\x02\x02\u01DE\u0181\x03\x02\x02\x02\u01DE\u0188\x03\x02\x02\x02\u01DE"+
		"\u018B\x03\x02\x02\x02\u01DE\u018F\x03\x02\x02\x02\u01DE\u0195\x03\x02"+
		"\x02\x02\u01DE\u019B\x03\x02\x02\x02\u01DE\u019E\x03\x02\x02\x02\u01DE"+
		"\u01A5\x03\x02\x02\x02\u01DE\u01AB\x03\x02\x02\x02\u01DE\u01B1\x03\x02"+
		"\x02\x02\u01DE\u01B7\x03\x02\x02\x02\u01DE\u01BD\x03\x02\x02\x02\u01DE"+
		"\u01C3\x03\x02\x02\x02\u01DE\u01C9\x03\x02\x02\x02\u01DE\u01CF\x03\x02"+
		"\x02\x02\u01DE\u01D5\x03\x02\x02\x02\u01DE\u01D6\x03\x02\x02\x02\u01DE"+
		"\u01D7\x03\x02\x02\x02\u01DE\u01D8\x03\x02\x02\x02\u01DE\u01D9\x03\x02"+
		"\x02\x02\u01DE\u01DA\x03\x02\x02\x02\u01DE\u01DB\x03\x02\x02\x02\u01DE"+
		"\u01DC\x03\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\v\x03\x02\x02"+
		"\x02\u01E0\u01E1\x07J\x02\x02\u01E1\r\x03\x02\x02\x02\u01E2\u01F7\x05"+
		"\x10\t\x02\u01E3\u01E5\x07)\x02\x02\u01E4\u01E6\x07&\x02\x02\u01E5\u01E4"+
		"\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02"+
		"\u01E7\u01EF\x07\x10\x02\x02\u01E8\u01EA\x07&\x02\x02\u01E9\u01E8\x03"+
		"\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB"+
		"\u01EC\x07\x16\x02\x02\u01EC\u01EE\x05\x10\t\x02\u01ED\u01E9\x03\x02\x02"+
		"\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0"+
		"\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02"+
		"\u01F2\u01F4\x07&\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03"+
		"\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x07*\x02\x02\u01F6"+
		"\u01E2\x03\x02\x02\x02\u01F6\u01E3\x03\x02\x02\x02\u01F7\x0F\x03\x02\x02"+
		"\x02\u01F8\u01FA\x07\x1C\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA"+
		"\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x07\x10\x02\x02"+
		"\u01FC\x11\x03\x02\x02\x02\u01FD\u01FE\x07<\x02\x02\u01FE\x13\x03\x02"+
		"\x02\x02\u01FF\u0200\x06\v\x02\x02\u0200\u0201\x07B\x02\x02\u0201\x15"+
		"\x03\x02\x02\x02\u0202\u0204\x07C\x02\x02\u0203\u0202\x03\x02\x02\x02"+
		"\u0203\u0204\x03\x02\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205\u0207\x05"+
		"\xC8e\x02\u0206\u0205\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207"+
		"\x17\x03\x02\x02\x02\u0208\u0209\x06\r\x03\x02\u0209\u020A\x07B\x02\x02"+
		"\u020A\x19\x03\x02\x02\x02\u020B\u020D\x07C\x02\x02\u020C\u020B\x03\x02"+
		"\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020F\x03\x02\x02\x02\u020E"+
		"\u0210\x07&\x02\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02"+
		"\x02\u0210\u0212\x03\x02\x02\x02\u0211\u0213\x07\x10\x02\x02\u0212\u0211"+
		"\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02\x02\x02"+
		"\u0214\u0216\x07&\x02\x02\u0215\u0214\x03\x02\x02\x02\u0215\u0216\x03"+
		"\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x05\x06\x04\x02\u0218"+
		"\x1B\x03\x02\x02\x02\u0219\u021A\x06\x0F\x04\x02\u021A\u021B\x07B\x02"+
		"\x02\u021B\x1D\x03\x02\x02\x02\u021C\u021D\x07C\x02\x02\u021D\u0222\x05"+
		"\xC8e\x02\u021E\u021F\x07\x16\x02\x02\u021F\u0221\x05\xC8e\x02\u0220\u021E"+
		"\x03\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02"+
		"\u0222\u0223\x03\x02\x02\x02\u0223\x1F\x03\x02\x02\x02\u0224\u0222\x03"+
		"\x02\x02\x02\u0225\u0226\x06\x11\x05\x02\u0226\u0227\x07B\x02\x02\u0227"+
		"!\x03\x02\x02\x02\u0228\u0229\x06\x12\x06\x02\u0229\u022A\x07B\x02\x02"+
		"\u022A#\x03\x02\x02\x02\u022B\u022C\x07C\x02\x02\u022C\u022E\x05\xD6l"+
		"\x02\u022D\u022F\x05\xCEh\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F"+
		"\x03\x02\x02\x02\u022F\u0237\x03\x02\x02\x02\u0230\u0231\x07\x16\x02\x02"+
		"\u0231\u0233\x05\xD6l\x02\u0232\u0234\x05\xCEh\x02\u0233\u0232\x03\x02"+
		"\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235"+
		"\u0230\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02"+
		"\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0246\x03\x02\x02\x02\u0239"+
		"\u0237\x03\x02\x02\x02\u023A\u023E\x07C\x02\x02\u023B\u023D\t\x06\x02"+
		"\x02\u023C\u023B\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C"+
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0241\x03\x02\x02\x02"+
		"\u0240\u023E\x03\x02\x02\x02\u0241\u0242\x05\x06\x04\x02\u0242\u0243\b"+
		"\x13\x01\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0246\x07C\x02\x02\u0245"+
		"\u022B\x03\x02\x02\x02\u0245\u023A\x03\x02\x02\x02\u0245\u0244\x03\x02"+
		"\x02\x02\u0246%\x03\x02\x02\x02\u0247\u0248\x06\x14\x07\x02\u0248\u0249"+
		"\x07B\x02\x02\u0249\'\x03\x02\x02\x02\u024A\u024B\x06\x15\b\x02\u024B"+
		"\u024C\x07B\x02\x02\u024C)\x03\x02\x02\x02\u024D\u024F\x07C\x02\x02\u024E"+
		"\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251\x03\x02"+
		"\x02\x02\u0250\u0252\x07&\x02\x02\u0251\u0250\x03\x02\x02\x02\u0251\u0252"+
		"\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x05\x06\x04\x02"+
		"\u0254+\x03\x02\x02\x02\u0255\u0256\x06\x17\t\x02\u0256\u0257\x07B\x02"+
		"\x02\u0257-\x03\x02\x02\x02\u0258\u0259\x06\x18\n\x02\u0259\u025A\x07"+
		"B\x02\x02\u025A/\x03\x02\x02\x02\u025B\u0261\x07C\x02\x02\u025C\u025F"+
		"\x05\xBE`\x02\u025D\u025E\x07\x15\x02\x02\u025E\u0260\x052\x1A\x02\u025F"+
		"\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x03\x02"+
		"\x02\x02\u0261\u025C\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262"+
		"\u0266\x03\x02\x02\x02\u0263\u0265\t\x06\x02\x02\u0264\u0263\x03\x02\x02"+
		"\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267"+
		"\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02"+
		"\u0269\u026B\x05\x06\x04\x02\u026A\u0269\x03\x02\x02\x02\u026A\u026B\x03"+
		"\x02\x02\x02\u026B1\x03\x02\x02\x02\u026C\u027C\x05\xC8e\x02\u026D\u026E"+
		"\x07\x18\x02\x02\u026E\u0271\x05\xC8e\x02\u026F\u0270\x07\x18\x02\x02"+
		"\u0270\u0272\x05\xC8e\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03"+
		"\x02\x02\x02\u0272\u0274\x03\x02\x02\x02\u0273\u026D\x03\x02\x02\x02\u0273"+
		"\u0274\x03\x02\x02\x02\u0274\u027D\x03\x02\x02\x02\u0275\u0276\x07\x16"+
		"\x02\x02\u0276\u0278\x05\xC8e\x02\u0277\u0275\x03\x02\x02\x02\u0278\u027B"+
		"\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02"+
		"\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u0273\x03"+
		"\x02\x02\x02\u027C\u0279\x03\x02\x02\x02\u027D3\x03\x02\x02\x02\u027E"+
		"\u027F\x06\x1B\v\x02\u027F\u0280\x07B\x02\x02\u02805\x03\x02\x02\x02\u0281"+
		"\u0282\x03\x02\x02\x02\u02827\x03\x02\x02\x02\u0283\u0284\x06\x1D\f\x02"+
		"\u0284\u0285\x07B\x02\x02\u02859\x03\x02\x02\x02\u0286\u0287\x06\x1E\r"+
		"\x02\u0287\u0288\x07B\x02\x02\u0288;\x03\x02\x02\x02\u0289\u028A\x07C"+
		"\x02\x02\u028A\u028F\x05\xC8e\x02\u028B\u028C\x07\x16\x02\x02\u028C\u028E"+
		"\x05\xC8e\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02"+
		"\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290=\x03\x02"+
		"\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x06 \x0E\x02\u0293\u0294"+
		"\x07B\x02\x02\u0294?\x03\x02\x02\x02\u0295\u0296\x07C\x02\x02\u0296\u029B"+
		"\x05\xCCg\x02\u0297\u0298\x07\x16\x02\x02\u0298\u029A\x05\xCCg\x02\u0299"+
		"\u0297\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02"+
		"\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029F\x03\x02\x02\x02\u029D"+
		"\u029B\x03\x02\x02\x02\u029E\u02A0\x07&\x02\x02\u029F\u029E\x03\x02\x02"+
		"\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2"+
		"\x05\x06\x04\x02\u02A2\u02A3\b!\x01\x02\u02A3\u02AE\x03\x02\x02\x02\u02A4"+
		"\u02A5\x07C\x02\x02\u02A5\u02AA\x05\xCCg\x02\u02A6\u02A7\x07\x16\x02\x02"+
		"\u02A7\u02A9\x05\xCCg\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AC\x03"+
		"\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB"+
		"\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u0295\x03\x02"+
		"\x02\x02\u02AD\u02A4\x03\x02\x02\x02\u02AEA\x03\x02\x02\x02\u02AF\u02B0"+
		"\x06\"\x0F\x02\u02B0\u02B1\x07B\x02\x02\u02B1C\x03\x02\x02\x02\u02B2\u02B3"+
		"\x07C\x02\x02\u02B3\u02B8\x05F$\x02\u02B4\u02B5\x07\x16\x02\x02\u02B5"+
		"\u02B7\x05F$\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02"+
		"\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9E\x03\x02"+
		"\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB\u02C4\x05\xD6l\x02\u02BC\u02BE"+
		"\x07\x18\x02\x02\u02BD\u02BF\x05H%\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE"+
		"\u02BF\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02C1\x07\x18"+
		"\x02\x02\u02C1\u02C3\x05\xC8e\x02\u02C2\u02C0\x03\x02\x02\x02\u02C2\u02C3"+
		"\x03\x02\x02\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4\u02BC\x03\x02\x02\x02"+
		"\u02C4\u02C5\x03\x02\x02\x02\u02C5G\x03\x02\x02\x02\u02C6\u02CB\x07)\x02"+
		"\x02\u02C7\u02CA\x05\xC8e\x02\u02C8\u02CA\x07\x18\x02\x02\u02C9\u02C7"+
		"\x03\x02\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02CA\u02CD\x03\x02\x02\x02"+
		"\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CE\x03"+
		"\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02CF\x07*\x02\x02\u02CF"+
		"I\x03\x02\x02\x02\u02D0\u02D1\x06&\x10\x02\u02D1\u02D2\x07B\x02\x02\u02D2"+
		"K\x03\x02\x02\x02\u02D3\u02D5\x07C\x02\x02\u02D4\u02D3\x03\x02\x02\x02"+
		"\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02DE\x03\x02\x02\x02\u02D6\u02DB\x05"+
		"N(\x02\u02D7\u02D8\x07\x16\x02\x02\u02D8\u02DA\x05N(\x02\u02D9\u02D7\x03"+
		"\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB"+
		"\u02DC\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD\u02DB\x03\x02"+
		"\x02\x02\u02DE\u02D6\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF"+
		"M\x03\x02\x02\x02\u02E0\u02E6\x05\xBE`\x02\u02E1\u02E2\x07)\x02\x02\u02E2"+
		"\u02E3\x05\xBE`\x02\u02E3\u02E4\x07*\x02\x02\u02E4\u02E6\x03\x02\x02\x02"+
		"\u02E5\u02E0\x03\x02\x02\x02\u02E5\u02E1\x03\x02\x02\x02\u02E6O\x03\x02"+
		"\x02\x02\u02E7\u02E8\x06)\x11\x02\u02E8\u02E9\x07B\x02\x02\u02E9Q\x03"+
		"\x02\x02\x02\u02EA\u02EC\x07C\x02\x02\u02EB\u02EA\x03\x02\x02\x02\u02EB"+
		"\u02EC\x03\x02\x02\x02\u02EC\u02F2\x03\x02\x02\x02\u02ED\u02F0\x05T+\x02"+
		"\u02EE\u02EF\x07\x16\x02\x02\u02EF\u02F1\x05T+\x02\u02F0\u02EE\x03\x02"+
		"\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2"+
		"\u02ED\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3S\x03\x02\x02"+
		"\x02\u02F4\u02F6\t\x07\x02\x02\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6"+
		"\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02FA\x05V,\x02\u02F8"+
		"\u02F9\x07\x18\x02\x02\u02F9\u02FB\x05\xC8e\x02\u02FA\u02F8\x03\x02\x02"+
		"\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u030E\x03\x02\x02\x02\u02FC\u02FE"+
		"\t\x07\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02"+
		"\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x07)\x02\x02\u0300\u0305\x05"+
		"V,\x02\u0301\u0302\x07\x16\x02\x02\u0302\u0304\x05V,\x02\u0303\u0301\x03"+
		"\x02\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0305"+
		"\u0306\x03\x02\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u0305\x03\x02"+
		"\x02\x02\u0308\u030B\x07*\x02\x02\u0309\u030A\x07\x18\x02\x02\u030A\u030C"+
		"\x05\xC8e\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02"+
		"\u030C\u030E\x03\x02\x02\x02\u030D\u02F5\x03\x02\x02\x02\u030D\u02FD\x03"+
		"\x02\x02\x02\u030EU\x03\x02\x02\x02\u030F\u0312\x05\xBE`\x02\u0310\u0311"+
		"\x07\x1E\x02\x02\u0311\u0313\x05\xC8e\x02\u0312\u0310\x03\x02\x02\x02"+
		"\u0312\u0313\x03\x02\x02\x02\u0313W\x03\x02\x02\x02\u0314\u0315\x06-\x12"+
		"\x02\u0315\u0316\x07B\x02\x02\u0316Y\x03\x02\x02\x02\u0317\u0318\x07C"+
		"\x02\x02\u0318\u031D\x05\\/\x02\u0319\u031A\x07\x16\x02\x02\u031A\u031C"+
		"\x05\\/\x02\u031B\u0319\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D"+
		"\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E[\x03\x02\x02"+
		"\x02\u031F\u031D\x03\x02\x02\x02\u0320\u0321\x05\xBE`\x02\u0321\u0322"+
		"\x07\x15\x02\x02\u0322\u0323\x05\xC8e\x02\u0323]\x03\x02\x02\x02\u0324"+
		"\u0325\x060\x13\x02\u0325\u0326\x07B\x02\x02\u0326_\x03\x02\x02\x02\u0327"+
		"\u0330\x07C\x02\x02\u0328\u032D\x05\xC0a\x02\u0329\u032A\x07\x16\x02\x02"+
		"\u032A\u032C\x05\xC0a\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032F\x03"+
		"\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E"+
		"\u0331\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u0330\u0328\x03\x02"+
		"\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02\u0332"+
		"\u0327\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333a\x03\x02\x02"+
		"\x02\u0334\u0335\x062\x14\x02\u0335\u0336\x07B\x02\x02\u0336c\x03\x02"+
		"\x02\x02\u0337\u0338\x07C\x02\x02\u0338\u0349\x05\xC8e\x02\u0339\u033B"+
		"\x07\x18\x02\x02\u033A\u033C\x05\xC6d\x02\u033B\u033A\x03\x02\x02\x02"+
		"\u033B\u033C\x03\x02\x02\x02\u033C\u0347\x03\x02\x02\x02\u033D\u033F\x07"+
		"\x18\x02\x02\u033E\u0340\x05\xC8e\x02\u033F\u033E\x03\x02\x02\x02\u033F"+
		"\u0340\x03\x02\x02\x02\u0340\u0345\x03\x02\x02\x02\u0341\u0343\x07\x18"+
		"\x02\x02\u0342\u0344\x05\xC8e\x02\u0343\u0342\x03\x02\x02\x02\u0343\u0344"+
		"\x03\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345\u0341\x03\x02\x02\x02"+
		"\u0345\u0346\x03\x02\x02\x02\u0346\u0348\x03\x02\x02\x02\u0347\u033D\x03"+
		"\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034A\x03\x02\x02\x02\u0349"+
		"\u0339\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034Ae\x03\x02\x02"+
		"\x02\u034B\u034C\x064\x15\x02\u034C\u034D\x07B\x02\x02\u034Dg\x03\x02"+
		"\x02\x02\u034E\u0350\x065\x16\x02\u034F\u0351\x07C\x02\x02\u0350\u034F"+
		"\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u035A\x03\x02\x02\x02"+
		"\u0352\u0354\x065\x17\x02\u0353\u0355\x07C\x02\x02\u0354\u0353\x03\x02"+
		"\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356"+
		"\u0358\x05\xC8e\x02\u0357\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02"+
		"\x02\u0358\u035A\x03\x02\x02\x02\u0359\u034E\x03\x02\x02\x02\u0359\u0352"+
		"\x03\x02\x02\x02\u035Ai\x03\x02\x02\x02\u035B\u035C\x066\x18\x02\u035C"+
		"\u035D\x07B\x02\x02\u035Dk\x03\x02\x02\x02\u035E\u035F\x07C\x02\x02\u035F"+
		"\u0364\x05n8\x02\u0360\u0361\x07\x16\x02\x02\u0361\u0363\x05n8\x02\u0362"+
		"\u0360\x03\x02\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364\u0362\x03\x02"+
		"\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365m\x03\x02\x02\x02\u0366\u0364"+
		"\x03\x02\x02\x02\u0367\u0371\x05\x92J\x02\u0368\u036B\x05\xBE`\x02\u0369"+
		"\u036A\x07\x1E\x02\x02\u036A\u036C\x05\xC8e\x02\u036B\u0369\x03\x02\x02"+
		"\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036E"+
		"\x07\x18\x02\x02\u036E\u036F\x05\xC8e\x02\u036F\u0371\x03\x02\x02\x02"+
		"\u0370\u0367\x03\x02\x02\x02\u0370\u0368\x03\x02\x02\x02\u0371o\x03\x02"+
		"\x02\x02\u0372\u0373\x069\x19\x02\u0373\u0374\x07B\x02\x02\u0374q\x03"+
		"\x02\x02\x02\u0375\u0376\x07C\x02\x02\u0376\u037B\x05t;\x02\u0377\u0378"+
		"\x07\x16\x02\x02\u0378\u037A\x05t;\x02\u0379\u0377\x03\x02\x02\x02\u037A"+
		"\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02"+
		"\x02\x02\u037Cs\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037E\u037F"+
		"\x05\xBE`\x02\u037F\u0380\x07\x15\x02\x02\u0380\u0381\x05\xC8e\x02\u0381"+
		"u\x03\x02\x02\x02\u0382\u0383\x06<\x1A\x02\u0383\u0384\x07B\x02\x02\u0384"+
		"w\x03\x02\x02\x02\u0385\u0386\x06=\x1B\x02\u0386\u0387\x07B\x02\x02\u0387"+
		"y\x03\x02\x02\x02\u0388\u0389\x06>\x1C\x02\u0389\u038A\x07B\x02\x02\u038A"+
		"{\x03\x02\x02\x02\u038B\u038C\x06?\x1D\x02\u038C\u038D\x07B\x02\x02\u038D"+
		"}\x03\x02\x02\x02\u038E\u0390\x07C\x02\x02\u038F\u038E\x03\x02\x02\x02"+
		"\u038F\u0390\x03\x02\x02\x02\u0390\u0392\x03\x02\x02\x02\u0391\u0393\x07"+
		"&\x02\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393"+
		"\u0394\x03\x02\x02\x02\u0394\u0395\x05\x06\x04\x02\u0395\u0396\b@\x01"+
		"\x02\u0396\x7F\x03\x02\x02\x02\u0397\u0398\x06A\x1E\x02\u0398\u0399\x07"+
		"B\x02\x02\u0399\x81\x03\x02\x02\x02\u039A\u039B\x06B\x1F\x02\u039B\u039C"+
		"\x07B\x02\x02\u039C\x83\x03\x02\x02\x02\u039D\u039E\x07C\x02\x02\u039E"+
		"\u03A5\x05\xC8e\x02\u039F\u03A0\x07\x18\x02\x02\u03A0\u03A3\x05\xC6d\x02"+
		"\u03A1\u03A2\x07\x18\x02\x02\u03A2\u03A4\x05\xC8e\x02\u03A3\u03A1\x03"+
		"\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5"+
		"\u039F\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\x85\x03\x02\x02"+
		"\x02\u03A7\u03A8\x06D \x02\u03A8\u03A9\x07B\x02\x02\u03A9\x87\x03\x02"+
		"\x02\x02\u03AA\u03AB\x07C\x02\x02\u03AB\u03B6\x05\xC8e\x02\u03AC\u03AD"+
		"\x07\x18\x02\x02\u03AD\u03B4\x05\xC8e\x02\u03AE\u03AF\x07\x18\x02\x02"+
		"\u03AF\u03B2\x05\xC8e\x02\u03B0\u03B1\x07\x18\x02\x02\u03B1\u03B3\x05"+
		"\xC8e\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3"+
		"\u03B5\x03\x02\x02\x02\u03B4\u03AE\x03\x02\x02\x02\u03B4\u03B5\x03\x02"+
		"\x02\x02\u03B5\u03B7\x03\x02\x02\x02\u03B6\u03AC\x03\x02\x02\x02\u03B6"+
		"\u03B7\x03\x02\x02\x02\u03B7\x89\x03\x02\x02\x02\u03B8\u03B9\x06F!\x02"+
		"\u03B9\u03BA\x07B\x02\x02\u03BA\x8B\x03\x02\x02\x02\u03BB\u03BC\x06G\""+
		"\x02\u03BC\u03BD\x07C\x02\x02\u03BD\u03C2\x05\xCCg\x02\u03BE\u03BF\x07"+
		"\x16\x02\x02\u03BF\u03C1\x05\xCCg\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1"+
		"\u03C4\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02"+
		"\x02\x02\u03C3\u03D5\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5"+
		"\u03C6\x06G#\x02\u03C6\u03C7\x07C\x02\x02\u03C7\u03CC\x05\xCCg\x02\u03C8"+
		"\u03C9\x07\x16\x02\x02\u03C9\u03CB\x05\xCCg\x02\u03CA\u03C8\x03\x02\x02"+
		"\x02\u03CB\u03CE\x03\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CD"+
		"\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02"+
		"\u03CF\u03D1\x07&\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1\x03"+
		"\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D3\x05\x06\x04\x02\u03D3"+
		"\u03D5\x03\x02\x02\x02\u03D4\u03BB\x03\x02\x02\x02\u03D4\u03C5\x03\x02"+
		"\x02\x02\u03D5\x8D\x03\x02\x02\x02\u03D6\u03D7\x06H$\x02\u03D7\u03D8\x07"+
		"B\x02\x02\u03D8\x8F\x03\x02\x02\x02\u03D9\u03DA\x07C\x02\x02\u03DA\u03DF"+
		"\x05\x92J\x02\u03DB\u03DC\x07\x16\x02\x02\u03DC\u03DE\x05\x92J\x02\u03DD"+
		"\u03DB\x03\x02\x02\x02\u03DE\u03E1\x03\x02\x02\x02\u03DF\u03DD\x03\x02"+
		"\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E4\x03\x02\x02\x02\u03E1"+
		"\u03DF\x03\x02\x02\x02\u03E2\u03E4\x07C\x02\x02\u03E3\u03D9\x03\x02\x02"+
		"\x02\u03E3\u03E2\x03\x02\x02\x02\u03E4\x91\x03\x02\x02\x02\u03E5\u03F3"+
		"\x05\xC8e\x02\u03E6\u03E8\t\b\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8"+
		"\u03EB\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02"+
		"\x02\x02\u03EA\u03F3\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC"+
		"\u03ED\x07 \x02\x02\u03ED\u03F3\x05\xC8e\x02\u03EE\u03EF\x07!\x02\x02"+
		"\u03EF\u03F3\x05\xBE`\x02\u03F0\u03F1\x07#\x02\x02\u03F1\u03F3\x07\x10"+
		"\x02\x02\u03F2\u03E5\x03\x02\x02\x02\u03F2\u03E9\x03\x02\x02\x02\u03F2"+
		"\u03EC\x03\x02\x02\x02\u03F2\u03EE\x03\x02\x02\x02\u03F2\u03F0\x03\x02"+
		"\x02\x02\u03F3\x93\x03\x02\x02\x02\u03F4\u03F5\x06K%\x02\u03F5\u03F6\x07"+
		"B\x02\x02\u03F6\x95\x03\x02\x02\x02\u03F7\u03F8\x07C\x02\x02\u03F8\u03FA"+
		"\x05\x98M\x02\u03F9\u03FB\x05\xCEh\x02\u03FA\u03F9\x03\x02\x02\x02\u03FA"+
		"\u03FB\x03\x02\x02\x02\u03FB\u0403\x03\x02\x02\x02\u03FC\u03FD\x07\x16"+
		"\x02\x02\u03FD\u03FF\x05\x98M\x02\u03FE\u0400\x05\xCEh\x02\u03FF\u03FE"+
		"\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x03\x02\x02\x02"+
		"\u0401\u03FC\x03\x02\x02\x02\u0402\u0405\x03\x02\x02\x02\u0403\u0401\x03"+
		"\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\x97\x03\x02\x02\x02\u0405"+
		"\u0403\x03\x02\x02\x02\u0406\u0415\x05\xC8e\x02\u0407\u0408\x07)\x02\x02"+
		"\u0408\u0409\x05\xC8e\x02\u0409\u040E\bM\x01\x02\u040A\u040B\x07\x16\x02"+
		"\x02\u040B\u040D\x05\xC8e\x02\u040C\u040A\x03\x02\x02\x02\u040D\u0410"+
		"\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02"+
		"\u040F\u0411\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0412\b"+
		"M\x01\x02\u0412\u0413\x07*\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414\u0406"+
		"\x03\x02\x02\x02\u0414\u0407\x03\x02\x02\x02\u0415\x99\x03\x02\x02\x02"+
		"\u0416\u0417\x06N&\x02\u0417\u0418\x07";
	private static readonly _serializedATNSegment2: string =
		"B\x02\x02\u0418\x9B\x03\x02\x02\x02\u0419\u041A\x07C\x02\x02\u041A\u041F"+
		"\x05\xBE`\x02\u041B\u041C\x07\x16\x02\x02\u041C\u041E\x05\xBE`\x02\u041D"+
		"\u041B\x03\x02\x02\x02\u041E\u0421\x03\x02\x02\x02\u041F\u041D\x03\x02"+
		"\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\x9D\x03\x02\x02\x02\u0421\u041F"+
		"\x03\x02\x02\x02\u0422\u0423\x06P\'\x02\u0423\u0424\x07B\x02\x02\u0424"+
		"\x9F\x03\x02\x02\x02\u0425\u0426\x06Q(\x02\u0426\u0427\x07B\x02\x02\u0427"+
		"\xA1\x03\x02\x02\x02\u0428\u0429\x06R)\x02\u0429\u042A\x07B\x02\x02\u042A"+
		"\xA3\x03\x02\x02\x02\u042B\u042D\x07C\x02\x02\u042C\u042B\x03\x02\x02"+
		"\x02\u042C\u042D\x03\x02\x02\x02\u042D\u0436\x03\x02\x02\x02\u042E\u0433"+
		"\x05\xBE`\x02\u042F\u0430\x07\x16\x02\x02\u0430\u0432\x05\xBE`\x02\u0431"+
		"\u042F\x03\x02\x02\x02\u0432\u0435\x03\x02\x02\x02\u0433\u0431\x03\x02"+
		"\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0437\x03\x02\x02\x02\u0435"+
		"\u0433\x03\x02\x02\x02\u0436\u042E\x03\x02\x02\x02\u0436\u0437\x03\x02"+
		"\x02\x02\u0437\xA5\x03\x02\x02\x02\u0438\u0439\x06T*\x02\u0439\u043A\x07"+
		"B\x02\x02\u043A\xA7\x03\x02\x02\x02\u043B\u043C\x07C\x02\x02\u043C\u0441"+
		"\x05\xC8e\x02\u043D\u043E\x07\x16\x02\x02\u043E\u0440\x05\xC8e\x02\u043F"+
		"\u043D\x03\x02\x02\x02\u0440\u0443\x03\x02\x02\x02\u0441\u043F\x03\x02"+
		"\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\xA9\x03\x02\x02\x02\u0443\u0441"+
		"\x03\x02\x02\x02\u0444\u0445\x06V+\x02\u0445\u0446\x07B\x02\x02\u0446"+
		"\xAB\x03\x02\x02\x02\u0447\u0448\x07C\x02\x02\u0448\xAD\x03\x02\x02\x02"+
		"\u0449\u044A\x06X,\x02\u044A\u044B\x07B\x02\x02\u044B\xAF\x03\x02\x02"+
		"\x02\u044C\u044E\x07C\x02\x02\u044D\u044C\x03\x02\x02\x02\u044D\u044E"+
		"\x03\x02\x02\x02\u044E\xB1\x03\x02\x02\x02\u044F\u0450\x06Z-\x02\u0450"+
		"\u0451\x07B\x02\x02\u0451\xB3\x03\x02\x02\x02\u0452\u0453\x06[.\x02\u0453"+
		"\u0454\x07B\x02\x02\u0454\xB5\x03\x02\x02\x02\u0455\u0456\x06\\/\x02\u0456"+
		"\u0457\x07B\x02\x02\u0457\xB7\x03\x02\x02\x02\u0458\u0459\x06]0\x02\u0459"+
		"\u045A\x07B\x02\x02\u045A\xB9\x03\x02\x02\x02\u045B\u045C\x06^1\x02\u045C"+
		"\u045D\x07B\x02\x02\u045D\xBB\x03\x02\x02\x02\u045E\u045F\x07\b\x02\x02"+
		"\u045F\u0460\x07)\x02\x02\u0460\u0461\x07*\x02\x02\u0461\xBD\x03\x02\x02"+
		"\x02\u0462\u047A\x05\xC0a\x02\u0463\u047A\x05\xC2b\x02\u0464\u0465\x07"+
		")\x02\x02\u0465\u0466\x05\xBE`\x02\u0466\u0467\x07*\x02\x02\u0467\u047A"+
		"\x03\x02\x02\x02\u0468\u0469\x07\x1D\x02\x02\u0469\u0476\x05\xBE`\x02"+
		"\u046A\u046B\x07\x1D\x02\x02\u046B\u046C\x07)\x02\x02\u046C\u0471\x05"+
		"\xC8e\x02\u046D\u046E\x07\x16\x02\x02\u046E\u0470\x05\xC8e\x02\u046F\u046D"+
		"\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02"+
		"\u0471\u0472\x03\x02\x02\x02\u0472\u0474\x03\x02\x02\x02\u0473\u0471\x03"+
		"\x02\x02\x02\u0474\u0475\x07*\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476"+
		"\u046A\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u047A\x03\x02"+
		"\x02\x02\u0478\u047A\x07\x0F\x02\x02\u0479\u0462\x03\x02\x02\x02\u0479"+
		"\u0463\x03\x02\x02\x02\u0479\u0464\x03\x02\x02\x02\u0479\u0468\x03\x02"+
		"\x02\x02\u0479\u0478\x03\x02\x02\x02\u047A\xBF\x03\x02\x02\x02\u047B\u047D"+
		"\x07\x1C\x02\x02\u047C\u047B\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02"+
		"\u047D\u047E\x03\x02\x02\x02\u047E\u047F\x07\x10\x02\x02\u047F\xC1\x03"+
		"\x02\x02\x02\u0480\u0486\x072\x02\x02\u0481\u0483\x073\x02\x02\u0482\u0484"+
		"\x05\xC8e\x02\u0483\u0482\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02"+
		"\u0484\u0485\x03\x02\x02\x02\u0485\u0487\x073\x02\x02\u0486\u0481\x03"+
		"\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488"+
		"\u048A\x07\x1C\x02\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02"+
		"\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048C\x07\x07\x02\x02\u048C"+
		"\xC3\x03\x02\x02\x02\u048D\u048E\x07)\x02\x02\u048E\u048F\x07\x10\x02"+
		"\x02\u048F\u0494\x07&\x02\x02\u0490\u0491\x07\x16\x02\x02\u0491\u0493"+
		"\x07\x10\x02\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0496\x03\x02\x02\x02"+
		"\u0494\u0492\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0497\x03"+
		"\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0497\u0498\x07*\x02\x02\u0498"+
		"\xC5\x03\x02\x02\x02\u0499\u049E\x07)\x02\x02\u049A\u049D\x05\xC8e\x02"+
		"\u049B\u049D\x07\x18\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049B\x03"+
		"\x02\x02\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E"+
		"\u049F\x03\x02\x02\x02\u049F\u04A1\x03\x02\x02\x02\u04A0\u049E\x03\x02"+
		"\x02\x02\u04A1\u04A4\x07*\x02\x02\u04A2\u04A4\x05\xC8e\x02\u04A3\u0499"+
		"\x03\x02\x02\x02\u04A3\u04A2\x03\x02\x02\x02\u04A4\xC7\x03\x02\x02\x02"+
		"\u04A5\u04A6\be\x01\x02\u04A6\u04AD\x05\xCAf\x02\u04A7\u04A8\x07)\x02"+
		"\x02\u04A8\u04A9\x05\xC8e\x02\u04A9\u04AA\x07*\x02\x02\u04AA\u04AD\x03"+
		"\x02\x02\x02\u04AB\u04AD\x05\xCCg\x02\u04AC\u04A5\x03\x02\x02\x02\u04AC"+
		"\u04A7\x03\x02\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD\u04C7\x03\x02"+
		"\x02\x02\u04AE\u04B0\f\x05\x02\x02\u04AF\u04B1\x07&\x02\x02\u04B0\u04AF"+
		"\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04BF\x03\x02\x02\x02"+
		"\u04B2\u04B4\x07\x14\x02\x02\u04B3\u04B2\x03\x02\x02\x02\u04B4\u04B7\x03"+
		"\x02\x02\x02\u04B5\u04B3\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6"+
		"\u04B8\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B8\u04C0\x07\"\x02"+
		"\x02\u04B9\u04C0\x07\x1A\x02\x02\u04BA\u04C0\x07\x1B\x02\x02\u04BB\u04C0"+
		"\x07!\x02\x02\u04BC\u04C0\x07\x1E\x02\x02\u04BD\u04C0\x07#\x02\x02\u04BE"+
		"\u04C0\x07$\x02\x02\u04BF\u04B5\x03\x02\x02\x02\u04BF\u04B9\x03\x02\x02"+
		"\x02\u04BF\u04BA\x03\x02\x02\x02\u04BF\u04BB\x03\x02\x02\x02\u04BF\u04BC"+
		"\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04BE\x03\x02\x02\x02"+
		"\u04C0\u04C2\x03\x02\x02\x02\u04C1\u04C3\x07&\x02\x02\u04C2\u04C1\x03"+
		"\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4"+
		"\u04C6\x05\xC8e\x06\u04C5\u04AE\x03\x02\x02\x02\u04C6\u04C9\x03\x02\x02"+
		"\x02\u04C7\u04C5\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\xC9"+
		"\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04CA\u04D7\x07\x11\x02\x02"+
		"\u04CB\u04D7\x07\x12\x02\x02\u04CC\u04D7\x05\xBE`\x02\u04CD\u04D7\x07"+
		"\x13\x02\x02\u04CE\u04D7\x05\xD2j\x02\u04CF\u04D0\x06f3\x02\u04D0\u04D1"+
		"\x07\x19\x02\x02\u04D1\u04D7\x05\xC0a\x02\u04D2\u04D7\x07\b\x02\x02\u04D3"+
		"\u04D7\x07\t\x02\x02\u04D4\u04D7\x05\xBC_\x02\u04D5\u04D7\x071\x02\x02"+
		"\u04D6\u04CA\x03\x02\x02\x02\u04D6\u04CB\x03\x02\x02\x02\u04D6\u04CC\x03"+
		"\x02\x02\x02\u04D6\u04CD\x03\x02\x02\x02\u04D6\u04CE\x03\x02\x02\x02\u04D6"+
		"\u04CF\x03\x02\x02\x02\u04D6\u04D2\x03\x02\x02\x02\u04D6\u04D3\x03\x02"+
		"\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D5\x03\x02\x02\x02\u04D7"+
		"\xCB\x03\x02\x02\x02\u04D8\u04D9\bg\x01\x02\u04D9\u04DA\x07)\x02\x02\u04DA"+
		"\u04DB\x05\xCCg\x02\u04DB\u04DC\x07*\x02\x02\u04DC\u04E1\x03\x02\x02\x02"+
		"\u04DD\u04DE\x077\x02\x02\u04DE\u04E1\x05\xCCg\x04\u04DF\u04E1\x05\xCA"+
		"f\x02\u04E0\u04D8\x03\x02\x02\x02\u04E0\u04DD\x03\x02\x02\x02\u04E0\u04DF"+
		"\x03\x02\x02\x02\u04E1\u04E7\x03\x02\x02\x02\u04E2\u04E3\f\x05\x02\x02"+
		"\u04E3\u04E4\t\t\x02\x02\u04E4\u04E6\x05\xCCg\x06\u04E5\u04E2\x03\x02"+
		"\x02\x02\u04E6\u04E9\x03\x02\x02\x02\u04E7\u04E5\x03\x02\x02\x02\u04E7"+
		"\u04E8\x03\x02\x02\x02\u04E8\xCD\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02"+
		"\x02\u04EA\u04EB\x07D\x02\x02\u04EB\u04EC\x05\xCCg\x02\u04EC\xCF\x03\x02"+
		"\x02\x02\u04ED\u04EE\bi\x01\x02\u04EE\u04F3\x07)\x02\x02\u04EF\u04F2\x07"+
		"\x16\x02\x02\u04F0\u04F2\x05\xC8e\x02\u04F1\u04EF\x03\x02\x02\x02\u04F1"+
		"\u04F0\x03\x02\x02\x02\u04F2\u04F5\x03\x02\x02\x02\u04F3\u04F1\x03\x02"+
		"\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F6\x03\x02\x02\x02\u04F5"+
		"\u04F3\x03\x02\x02\x02\u04F6\u04F7\x07*\x02\x02\u04F7\u04F8\bi\x01\x02"+
		"\u04F8\xD1\x03\x02\x02\x02\u04F9\u04FA\x078\x02\x02\u04FA\u04FB\x07\'"+
		"\x02\x02\u04FB\u04FC\x07\x04\x02\x02\u04FC\u04FD\x07(\x02\x02\u04FD\u04FE"+
		"\x07\x03\x02\x02\u04FE\u04FF\x05\xD0i\x02\u04FF\xD3\x03\x02\x02\x02\u0500"+
		"\u0502\x07\x05\x02\x02\u0501\u0500\x03\x02\x02\x02\u0501\u0502\x03\x02"+
		"\x02\x02\u0502\u0505\x03\x02\x02\x02\u0503\u0504\x07\x1A\x02\x02\u0504"+
		"\u0506\x05\xC8e\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0506\x03\x02\x02"+
		"\x02\u0506\u0509\x03\x02\x02\x02\u0507\u0508\x072\x02\x02\u0508\u050A"+
		"\x07\x06\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02"+
		"\u050A\u050C\x03\x02\x02\x02\u050B\u050D\x05\xD0i\x02\u050C\u050B\x03"+
		"\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\xD5\x03\x02\x02\x02\u050E"+
		"\u0511\x05\xD2j\x02\u050F\u0511\x05\xD4k\x02\u0510\u050E\x03\x02\x02\x02"+
		"\u0510\u050F\x03\x02\x02\x02\u0511\xD7\x03\x02\x02\x02\u0512\u051B\x07"+
		")\x02\x02\u0513\u0518\x05\xDEp\x02\u0514\u0515\x07\x16\x02\x02\u0515\u0517"+
		"\x05\xDEp\x02\u0516\u0514\x03\x02\x02\x02\u0517\u051A\x03\x02\x02\x02"+
		"\u0518\u0516\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\u051C\x03"+
		"\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051B\u0513\x03\x02\x02\x02\u051B"+
		"\u051C\x03\x02\x02\x02\u051C\u051D\x03\x02\x02\x02\u051D\u0537\x07*\x02"+
		"\x02\u051E\u0520\x05\xDAn\x02\u051F\u051E\x03\x02\x02\x02\u051F\u0520"+
		"\x03\x02\x02\x02\u0520\u0522\x03\x02\x02\x02\u0521\u0523\x07&\x02\x02"+
		"\u0522\u0521\x03\x02\x02\x02\u0522\u0523\x03\x02\x02\x02\u0523\u0525\x03"+
		"\x02\x02\x02\u0524\u0526\t\n\x02\x02\u0525\u0524\x03\x02\x02\x02\u0525"+
		"\u0526\x03\x02\x02\x02\u0526\u0528\x03\x02\x02\x02\u0527\u0529\x07&\x02"+
		"\x02\u0528\u0527\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\u052B"+
		"\x03\x02\x02\x02\u052A\u052C\x07E\x02\x02\u052B\u052A\x03\x02\x02\x02"+
		"\u052B\u052C\x03\x02\x02\x02\u052C\u0530\x03\x02\x02\x02\u052D\u052F\x05"+
		"\b\x05\x02\u052E\u052D\x03\x02\x02\x02\u052F\u0532\x03\x02\x02\x02\u0530"+
		"\u052E\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02\u0531\u0534\x03\x02"+
		"\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533\u0535\x07&\x02\x02\u0534\u0533"+
		"\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02"+
		"\u0536\u0538\x05\xDCo\x02\u0537\u051F\x03\x02\x02\x02\u0537\u0538\x03"+
		"\x02\x02\x02\u0538\xD9\x03\x02\x02\x02\u0539\u053A\x07-\x02\x02\u053A"+
		"\u053F\x07\x10\x02\x02\u053B\u053C\x07\x16\x02\x02\u053C\u053E\x07\x10"+
		"\x02\x02\u053D\u053B\x03\x02\x02\x02\u053E\u0541\x03\x02\x02\x02\u053F"+
		"\u053D\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0542\x03\x02"+
		"\x02\x02\u0541\u053F\x03\x02\x02\x02\u0542\u0543\x07.\x02\x02\u0543\xDB"+
		"\x03\x02\x02\x02\u0544\u0545\x07F\x02\x02\u0545\u0546\x05\x04\x03\x02"+
		"\u0546\u0547\x07G\x02\x02\u0547\u0557\x03\x02\x02\x02\u0548\u0549\x07"+
		"F\x02\x02\u0549\u0557\x07G\x02\x02\u054A\u054B\x07+\x02\x02\u054B\u054C"+
		"\x05\x04\x03\x02\u054C\u054D\x07,\x02\x02\u054D\u0557\x03\x02\x02\x02"+
		"\u054E\u0550\x07F\x02\x02\u054F\u0551\x07E\x02\x02\u0550\u054F\x03\x02"+
		"\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0553\x03\x02\x02\x02\u0552"+
		"\u0554\x05\x04\x03\x02\u0553\u0552\x03\x02\x02\x02\u0553\u0554\x03\x02"+
		"\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x07,\x02\x02\u0556\u0544"+
		"\x03\x02\x02\x02\u0556\u0548\x03\x02\x02\x02\u0556\u054A\x03\x02\x02\x02"+
		"\u0556\u054E\x03\x02\x02\x02\u0557\xDD\x03\x02\x02\x02\u0558\u055D\x07"+
		"\x10\x02\x02\u0559\u055A\x07\x10\x02\x02\u055A\u055B\x07\x15\x02\x02\u055B"+
		"\u055D\t\v\x02\x02\u055C\u0558\x03\x02\x02\x02\u055C\u0559\x03\x02\x02"+
		"\x02\u055D\xDF\x03\x02\x02\x02\xB9\xE3\xE7\xEE\xF7\xF9\xFF\u0108\u0111"+
		"\u0117\u011B\u011E\u0125\u012C\u0132\u0135\u0139\u0142\u0148\u014E\u0154"+
		"\u015A\u0160\u0166\u016C\u0172\u0178\u017C\u017F\u0183\u0186\u018D\u0191"+
		"\u0197\u01A0\u01A3\u01A7\u01AD\u01B3\u01B9\u01BF\u01C5\u01CB\u01D1\u01DE"+
		"\u01E5\u01E9\u01EF\u01F3\u01F6\u01F9\u0203\u0206\u020C\u020F\u0212\u0215"+
		"\u0222\u022E\u0233\u0237\u023E\u0245\u024E\u0251\u025F\u0261\u0266\u026A"+
		"\u0271\u0273\u0279\u027C\u028F\u029B\u029F\u02AA\u02AD\u02B8\u02BE\u02C2"+
		"\u02C4\u02C9\u02CB\u02D4\u02DB\u02DE\u02E5\u02EB\u02F0\u02F2\u02F5\u02FA"+
		"\u02FD\u0305\u030B\u030D\u0312\u031D\u032D\u0330\u0332\u033B\u033F\u0343"+
		"\u0345\u0347\u0349\u0350\u0354\u0357\u0359\u0364\u036B\u0370\u037B\u038F"+
		"\u0392\u03A3\u03A5\u03B2\u03B4\u03B6\u03C2\u03CC\u03D0\u03D4\u03DF\u03E3"+
		"\u03E9\u03F2\u03FA\u03FF\u0403\u040E\u0414\u041F\u042C\u0433\u0436\u0441"+
		"\u044D\u0471\u0476\u0479\u047C\u0483\u0486\u0489\u0494\u049C\u049E\u04A3"+
		"\u04AC\u04B0\u04B5\u04BF\u04C2\u04C7\u04D6\u04E0\u04E7\u04F1\u04F3\u0501"+
		"\u0505\u0509\u050C\u0510\u0518\u051B\u051F\u0522\u0525\u0528\u052B\u0530"+
		"\u0534\u0537\u053F\u0550\u0553\u0556\u055C";
	public static readonly _serializedATN: string = Utils.join(
		[
			ObjectScriptParser._serializedATNSegment0,
			ObjectScriptParser._serializedATNSegment1,
			ObjectScriptParser._serializedATNSegment2
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectScriptParser.__ATN) {
			ObjectScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectScriptParser._serializedATN));
		}

		return ObjectScriptParser.__ATN;
	}

}

export class CodeContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_code; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterCode) listener.enterCode(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitCode) listener.exitCode(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitCode) return visitor.visitCode(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public Include(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Include, 0); }
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.EOL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.EOF, 0); }
	public define(): DefineContext | undefined {
		return this.tryGetRuleContext(0, DefineContext);
	}
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	public CommandEOL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandEOL, 0); }
	public Label(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Label, 0); }
	public labelDef(): LabelDefContext | undefined {
		return this.tryGetRuleContext(0, LabelDefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_statement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public quitWithoutArgs: boolean;
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LBRACE, 0); }
	public CommandLBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandLBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RBRACE, 0); }
	public CommandRBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandRBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number, quitWithoutArgs: boolean);
	constructor(parent: ParserRuleContext, invokingState: number, quitWithoutArgs: boolean) {
		super(parent, invokingState);

		this.quitWithoutArgs = quitWithoutArgs;
	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_blockStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterBlockStatement) listener.enterBlockStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitBlockStatement) listener.exitBlockStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) return visitor.visitBlockStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentsContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(ObjectScriptParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_comments; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterComments) listener.enterComments(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitComments) listener.exitComments(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitComments) return visitor.visitComments(this);
		else return visitor.visitChildren(this);
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public breakCommand(): BreakCommandContext | undefined {
		return this.tryGetRuleContext(0, BreakCommandContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public pc(): PcContext | undefined {
		return this.tryGetRuleContext(0, PcContext);
	}
	public catchCommand(): CatchCommandContext | undefined {
		return this.tryGetRuleContext(0, CatchCommandContext);
	}
	public catchStatement(): CatchStatementContext | undefined {
		return this.tryGetRuleContext(0, CatchStatementContext);
	}
	public closeCommand(): CloseCommandContext | undefined {
		return this.tryGetRuleContext(0, CloseCommandContext);
	}
	public closeStatement(): CloseStatementContext | undefined {
		return this.tryGetRuleContext(0, CloseStatementContext);
	}
	public continueCommand(): ContinueCommandContext | undefined {
		return this.tryGetRuleContext(0, ContinueCommandContext);
	}
	public doCommand(): DoCommandContext | undefined {
		return this.tryGetRuleContext(0, DoCommandContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public elseCommand1(): ElseCommand1Context | undefined {
		return this.tryGetRuleContext(0, ElseCommand1Context);
	}
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	public elseCommand2(): ElseCommand2Context | undefined {
		return this.tryGetRuleContext(0, ElseCommand2Context);
	}
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public forCommand(): ForCommandContext | undefined {
		return this.tryGetRuleContext(0, ForCommandContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public gotoCommand(): GotoCommandContext | undefined {
		return this.tryGetRuleContext(0, GotoCommandContext);
	}
	public gotoStatement(): GotoStatementContext | undefined {
		return this.tryGetRuleContext(0, GotoStatementContext);
	}
	public haltCommand(): HaltCommandContext | undefined {
		return this.tryGetRuleContext(0, HaltCommandContext);
	}
	public hangCommand(): HangCommandContext | undefined {
		return this.tryGetRuleContext(0, HangCommandContext);
	}
	public hangStatement(): HangStatementContext | undefined {
		return this.tryGetRuleContext(0, HangStatementContext);
	}
	public ifCommand(): IfCommandContext | undefined {
		return this.tryGetRuleContext(0, IfCommandContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public jobCommand(): JobCommandContext | undefined {
		return this.tryGetRuleContext(0, JobCommandContext);
	}
	public jobStatement(): JobStatementContext | undefined {
		return this.tryGetRuleContext(0, JobStatementContext);
	}
	public killCommand(): KillCommandContext | undefined {
		return this.tryGetRuleContext(0, KillCommandContext);
	}
	public killStatement(): KillStatementContext | undefined {
		return this.tryGetRuleContext(0, KillStatementContext);
	}
	public lockCommand(): LockCommandContext | undefined {
		return this.tryGetRuleContext(0, LockCommandContext);
	}
	public lockStatement(): LockStatementContext | undefined {
		return this.tryGetRuleContext(0, LockStatementContext);
	}
	public mergeCommand(): MergeCommandContext | undefined {
		return this.tryGetRuleContext(0, MergeCommandContext);
	}
	public mergeStatement(): MergeStatementContext | undefined {
		return this.tryGetRuleContext(0, MergeStatementContext);
	}
	public newCommand(): NewCommandContext | undefined {
		return this.tryGetRuleContext(0, NewCommandContext);
	}
	public newStatement(): NewStatementContext | undefined {
		return this.tryGetRuleContext(0, NewStatementContext);
	}
	public openCommand(): OpenCommandContext | undefined {
		return this.tryGetRuleContext(0, OpenCommandContext);
	}
	public openStatement(): OpenStatementContext | undefined {
		return this.tryGetRuleContext(0, OpenStatementContext);
	}
	public quitCommand(): QuitCommandContext | undefined {
		return this.tryGetRuleContext(0, QuitCommandContext);
	}
	public quitStatement(): QuitStatementContext | undefined {
		return this.tryGetRuleContext(0, QuitStatementContext);
	}
	public readCommand(): ReadCommandContext | undefined {
		return this.tryGetRuleContext(0, ReadCommandContext);
	}
	public readStatement(): ReadStatementContext | undefined {
		return this.tryGetRuleContext(0, ReadStatementContext);
	}
	public setCommand(): SetCommandContext | undefined {
		return this.tryGetRuleContext(0, SetCommandContext);
	}
	public setStatement(): SetStatementContext | undefined {
		return this.tryGetRuleContext(0, SetStatementContext);
	}
	public tcommitCommand(): TcommitCommandContext | undefined {
		return this.tryGetRuleContext(0, TcommitCommandContext);
	}
	public throwCommand(): ThrowCommandContext | undefined {
		return this.tryGetRuleContext(0, ThrowCommandContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public trollbackCommand(): TrollbackCommandContext | undefined {
		return this.tryGetRuleContext(0, TrollbackCommandContext);
	}
	public tryCommand(): TryCommandContext | undefined {
		return this.tryGetRuleContext(0, TryCommandContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public tstartCommand(): TstartCommandContext | undefined {
		return this.tryGetRuleContext(0, TstartCommandContext);
	}
	public useCommand(): UseCommandContext | undefined {
		return this.tryGetRuleContext(0, UseCommandContext);
	}
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public viewCommand(): ViewCommandContext | undefined {
		return this.tryGetRuleContext(0, ViewCommandContext);
	}
	public viewStatement(): ViewStatementContext | undefined {
		return this.tryGetRuleContext(0, ViewStatementContext);
	}
	public whileCommand(): WhileCommandContext | undefined {
		return this.tryGetRuleContext(0, WhileCommandContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public writeCommand(): WriteCommandContext | undefined {
		return this.tryGetRuleContext(0, WriteCommandContext);
	}
	public writeStatement(): WriteStatementContext | undefined {
		return this.tryGetRuleContext(0, WriteStatementContext);
	}
	public xecuteCommand(): XecuteCommandContext | undefined {
		return this.tryGetRuleContext(0, XecuteCommandContext);
	}
	public xecuteStatement(): XecuteStatementContext | undefined {
		return this.tryGetRuleContext(0, XecuteStatementContext);
	}
	public zkillCommand(): ZkillCommandContext | undefined {
		return this.tryGetRuleContext(0, ZkillCommandContext);
	}
	public zkillStatement(): ZkillStatementContext | undefined {
		return this.tryGetRuleContext(0, ZkillStatementContext);
	}
	public znspaceCommand(): ZnspaceCommandContext | undefined {
		return this.tryGetRuleContext(0, ZnspaceCommandContext);
	}
	public ztrapCommand(): ZtrapCommandContext | undefined {
		return this.tryGetRuleContext(0, ZtrapCommandContext);
	}
	public zwriteCommand(): ZwriteCommandContext | undefined {
		return this.tryGetRuleContext(0, ZwriteCommandContext);
	}
	public zwriteStatement(): ZwriteStatementContext | undefined {
		return this.tryGetRuleContext(0, ZwriteStatementContext);
	}
	public zzdumpCommand(): ZzdumpCommandContext | undefined {
		return this.tryGetRuleContext(0, ZzdumpCommandContext);
	}
	public zzdumpStatement(): ZzdumpStatementContext | undefined {
		return this.tryGetRuleContext(0, ZzdumpStatementContext);
	}
	public printCommand(): PrintCommandContext | undefined {
		return this.tryGetRuleContext(0, PrintCommandContext);
	}
	public printStatement(): PrintStatementContext | undefined {
		return this.tryGetRuleContext(0, PrintStatementContext);
	}
	public zbreakCommand(): ZbreakCommandContext | undefined {
		return this.tryGetRuleContext(0, ZbreakCommandContext);
	}
	public zbreakStatement(): ZbreakStatementContext | undefined {
		return this.tryGetRuleContext(0, ZbreakStatementContext);
	}
	public zinsertCommand(): ZinsertCommandContext | undefined {
		return this.tryGetRuleContext(0, ZinsertCommandContext);
	}
	public zloadCommand(): ZloadCommandContext | undefined {
		return this.tryGetRuleContext(0, ZloadCommandContext);
	}
	public zprintCommand(): ZprintCommandContext | undefined {
		return this.tryGetRuleContext(0, ZprintCommandContext);
	}
	public zremoveCommand(): ZremoveCommandContext | undefined {
		return this.tryGetRuleContext(0, ZremoveCommandContext);
	}
	public zsaveCommand(): ZsaveCommandContext | undefined {
		return this.tryGetRuleContext(0, ZsaveCommandContext);
	}
	public SQLBlock(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SQLBlock, 0); }
	public JSBlock(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.JSBlock, 0); }
	public HTMLBlock(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.HTMLBlock, 0); }
	public macrosAsCommand(): MacrosAsCommandContext | undefined {
		return this.tryGetRuleContext(0, MacrosAsCommandContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_simpleStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterSimpleStatement) listener.enterSimpleStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitSimpleStatement) listener.exitSimpleStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) return visitor.visitSimpleStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class MacrosAsCommandContext extends ParserRuleContext {
	public CMDMacros(): TerminalNode { return this.getToken(ObjectScriptParser.CMDMacros, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_macrosAsCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterMacrosAsCommand) listener.enterMacrosAsCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitMacrosAsCommand) listener.exitMacrosAsCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitMacrosAsCommand) return visitor.visitMacrosAsCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class IncludeStatementContext extends ParserRuleContext {
	public includeRtn(): IncludeRtnContext[];
	public includeRtn(i: number): IncludeRtnContext;
	public includeRtn(i?: number): IncludeRtnContext | IncludeRtnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IncludeRtnContext);
		} else {
			return this.getRuleContext(i, IncludeRtnContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.ID, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_includeStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterIncludeStatement) listener.enterIncludeStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitIncludeStatement) listener.exitIncludeStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitIncludeStatement) return visitor.visitIncludeStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IncludeRtnContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ObjectScriptParser.ID, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.PERCENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_includeRtn; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterIncludeRtn) listener.enterIncludeRtn(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitIncludeRtn) listener.exitIncludeRtn(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitIncludeRtn) return visitor.visitIncludeRtn(this);
		else return visitor.visitChildren(this);
	}
}


export class DefineContext extends ParserRuleContext {
	public DefineExpression(): TerminalNode { return this.getToken(ObjectScriptParser.DefineExpression, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_define; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterDefine) listener.enterDefine(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitDefine) listener.exitDefine(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitDefine) return visitor.visitDefine(this);
		else return visitor.visitChildren(this);
	}
}


export class BreakCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_breakCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterBreakCommand) listener.enterBreakCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitBreakCommand) listener.exitBreakCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakCommand) return visitor.visitBreakCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_breakStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterBreakStatement) listener.enterBreakStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitBreakStatement) listener.exitBreakStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) return visitor.visitBreakStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class CatchCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_catchCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterCatchCommand) listener.enterCatchCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitCatchCommand) listener.exitCatchCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchCommand) return visitor.visitCatchCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class CatchStatementContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext {
		return this.getRuleContext(0, BlockStatementContext);
	}
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_catchStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterCatchStatement) listener.enterCatchStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitCatchStatement) listener.exitCatchStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchStatement) return visitor.visitCatchStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class CloseCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_closeCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterCloseCommand) listener.enterCloseCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitCloseCommand) listener.exitCloseCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitCloseCommand) return visitor.visitCloseCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class CloseStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_closeStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterCloseStatement) listener.enterCloseStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitCloseStatement) listener.exitCloseStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitCloseStatement) return visitor.visitCloseStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ContinueCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_continueCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterContinueCommand) listener.enterContinueCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitContinueCommand) listener.exitContinueCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueCommand) return visitor.visitContinueCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class DoCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_doCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterDoCommand) listener.enterDoCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitDoCommand) listener.exitDoCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitDoCommand) return visitor.visitDoCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class DoStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode[];
	public CommandSPACE(i: number): TerminalNode;
	public CommandSPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.CommandSPACE);
		} else {
			return this.getToken(ObjectScriptParser.CommandSPACE, i);
		}
	}
	public doArgument(): DoArgumentContext[];
	public doArgument(i: number): DoArgumentContext;
	public doArgument(i?: number): DoArgumentContext | DoArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DoArgumentContext);
		} else {
			return this.getRuleContext(i, DoArgumentContext);
		}
	}
	public pc(): PcContext[];
	public pc(i: number): PcContext;
	public pc(i?: number): PcContext | PcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PcContext);
		} else {
			return this.getRuleContext(i, PcContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public CommandEOL(): TerminalNode[];
	public CommandEOL(i: number): TerminalNode;
	public CommandEOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.CommandEOL);
		} else {
			return this.getToken(ObjectScriptParser.CommandEOL, i);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.EOL);
		} else {
			return this.getToken(ObjectScriptParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_doStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterDoStatement) listener.enterDoStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitDoStatement) listener.exitDoStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) return visitor.visitDoStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseCommand1Context extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_elseCommand1; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterElseCommand1) listener.enterElseCommand1(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitElseCommand1) listener.exitElseCommand1(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitElseCommand1) return visitor.visitElseCommand1(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseCommand2Context extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_elseCommand2; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterElseCommand2) listener.enterElseCommand2(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitElseCommand2) listener.exitElseCommand2(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitElseCommand2) return visitor.visitElseCommand2(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext {
		return this.getRuleContext(0, BlockStatementContext);
	}
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public Spaces(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Spaces, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_elseStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterElseStatement) listener.enterElseStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitElseStatement) listener.exitElseStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitElseStatement) return visitor.visitElseStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseifCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_elseifCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterElseifCommand) listener.enterElseifCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitElseifCommand) listener.exitElseifCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitElseifCommand) return visitor.visitElseifCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ForCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_forCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterForCommand) listener.enterForCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitForCommand) listener.exitForCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitForCommand) return visitor.visitForCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ForStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode[];
	public CommandSPACE(i: number): TerminalNode;
	public CommandSPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.CommandSPACE);
		} else {
			return this.getToken(ObjectScriptParser.CommandSPACE, i);
		}
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public CommandEOL(): TerminalNode[];
	public CommandEOL(i: number): TerminalNode;
	public CommandEOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.CommandEOL);
		} else {
			return this.getToken(ObjectScriptParser.CommandEOL, i);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.EOL);
		} else {
			return this.getToken(ObjectScriptParser.EOL, i);
		}
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.EQUAL, 0); }
	public forExpression(): ForExpressionContext | undefined {
		return this.tryGetRuleContext(0, ForExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_forStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterForStatement) listener.enterForStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitForStatement) listener.exitForStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitForStatement) return visitor.visitForStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ForExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_forExpression; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterForExpression) listener.enterForExpression(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitForExpression) listener.exitForExpression(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitForExpression) return visitor.visitForExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class GotoCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_gotoCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterGotoCommand) listener.enterGotoCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitGotoCommand) listener.exitGotoCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitGotoCommand) return visitor.visitGotoCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class GotoStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_gotoStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterGotoStatement) listener.enterGotoStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitGotoStatement) listener.exitGotoStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitGotoStatement) return visitor.visitGotoStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class HaltCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_haltCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterHaltCommand) listener.enterHaltCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitHaltCommand) listener.exitHaltCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitHaltCommand) return visitor.visitHaltCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class HangCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_hangCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterHangCommand) listener.enterHangCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitHangCommand) listener.exitHangCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitHangCommand) return visitor.visitHangCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class HangStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_hangStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterHangStatement) listener.enterHangStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitHangStatement) listener.exitHangStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitHangStatement) return visitor.visitHangStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IfCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_ifCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterIfCommand) listener.enterIfCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitIfCommand) listener.exitIfCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitIfCommand) return visitor.visitIfCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	public Spaces(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Spaces, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_ifStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterIfStatement) listener.enterIfStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitIfStatement) listener.exitIfStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) return visitor.visitIfStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class JobCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_jobCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterJobCommand) listener.enterJobCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitJobCommand) listener.exitJobCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitJobCommand) return visitor.visitJobCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class JobStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public jobArgument(): JobArgumentContext[];
	public jobArgument(i: number): JobArgumentContext;
	public jobArgument(i?: number): JobArgumentContext | JobArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JobArgumentContext);
		} else {
			return this.getRuleContext(i, JobArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_jobStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterJobStatement) listener.enterJobStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitJobStatement) listener.exitJobStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitJobStatement) return visitor.visitJobStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class JobArgumentContext extends ParserRuleContext {
	public doArgument(): DoArgumentContext {
		return this.getRuleContext(0, DoArgumentContext);
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	public jobProcessParams(): JobProcessParamsContext | undefined {
		return this.tryGetRuleContext(0, JobProcessParamsContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_jobArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterJobArgument) listener.enterJobArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitJobArgument) listener.exitJobArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitJobArgument) return visitor.visitJobArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class JobProcessParamsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.RPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_jobProcessParams; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterJobProcessParams) listener.enterJobProcessParams(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitJobProcessParams) listener.exitJobProcessParams(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitJobProcessParams) return visitor.visitJobProcessParams(this);
		else return visitor.visitChildren(this);
	}
}


export class KillCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_killCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterKillCommand) listener.enterKillCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitKillCommand) listener.exitKillCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitKillCommand) return visitor.visitKillCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class KillStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public killArgument(): KillArgumentContext[];
	public killArgument(i: number): KillArgumentContext;
	public killArgument(i?: number): KillArgumentContext | KillArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KillArgumentContext);
		} else {
			return this.getRuleContext(i, KillArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_killStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterKillStatement) listener.enterKillStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitKillStatement) listener.exitKillStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitKillStatement) return visitor.visitKillStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class KillArgumentContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_killArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterKillArgument) listener.enterKillArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitKillArgument) listener.exitKillArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitKillArgument) return visitor.visitKillArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class LockCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_lockCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLockCommand) listener.enterLockCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLockCommand) listener.exitLockCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLockCommand) return visitor.visitLockCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class LockStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public lockArgument(): LockArgumentContext[];
	public lockArgument(i: number): LockArgumentContext;
	public lockArgument(i?: number): LockArgumentContext | LockArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LockArgumentContext);
		} else {
			return this.getRuleContext(i, LockArgumentContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_lockStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLockStatement) listener.enterLockStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLockStatement) listener.exitLockStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLockStatement) return visitor.visitLockStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class LockArgumentContext extends ParserRuleContext {
	public lockArgument2(): LockArgument2Context[];
	public lockArgument2(i: number): LockArgument2Context;
	public lockArgument2(i?: number): LockArgument2Context | LockArgument2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(LockArgument2Context);
		} else {
			return this.getRuleContext(i, LockArgument2Context);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Colon, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.MINUS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_lockArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLockArgument) listener.enterLockArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLockArgument) listener.exitLockArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLockArgument) return visitor.visitLockArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class LockArgument2Context extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public SHARP(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SHARP, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_lockArgument2; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLockArgument2) listener.enterLockArgument2(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLockArgument2) listener.exitLockArgument2(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLockArgument2) return visitor.visitLockArgument2(this);
		else return visitor.visitChildren(this);
	}
}


export class MergeCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_mergeCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterMergeCommand) listener.enterMergeCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitMergeCommand) listener.exitMergeCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitMergeCommand) return visitor.visitMergeCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class MergeStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public mergeArgument(): MergeArgumentContext[];
	public mergeArgument(i: number): MergeArgumentContext;
	public mergeArgument(i?: number): MergeArgumentContext | MergeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MergeArgumentContext);
		} else {
			return this.getRuleContext(i, MergeArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_mergeStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterMergeStatement) listener.enterMergeStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitMergeStatement) listener.exitMergeStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitMergeStatement) return visitor.visitMergeStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class MergeArgumentContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(ObjectScriptParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_mergeArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterMergeArgument) listener.enterMergeArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitMergeArgument) listener.exitMergeArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitMergeArgument) return visitor.visitMergeArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class NewCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_newCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterNewCommand) listener.enterNewCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitNewCommand) listener.exitNewCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitNewCommand) return visitor.visitNewCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class NewStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public localVariable(): LocalVariableContext[];
	public localVariable(i: number): LocalVariableContext;
	public localVariable(i?: number): LocalVariableContext | LocalVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocalVariableContext);
		} else {
			return this.getRuleContext(i, LocalVariableContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_newStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterNewStatement) listener.enterNewStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitNewStatement) listener.exitNewStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitNewStatement) return visitor.visitNewStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class OpenCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_openCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterOpenCommand) listener.enterOpenCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitOpenCommand) listener.exitOpenCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitOpenCommand) return visitor.visitOpenCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class OpenStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	public colonExpression(): ColonExpressionContext | undefined {
		return this.tryGetRuleContext(0, ColonExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_openStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterOpenStatement) listener.enterOpenStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitOpenStatement) listener.exitOpenStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitOpenStatement) return visitor.visitOpenStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class QuitCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_quitCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterQuitCommand) listener.enterQuitCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitQuitCommand) listener.exitQuitCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitQuitCommand) return visitor.visitQuitCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class QuitStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_quitStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterQuitStatement) listener.enterQuitStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitQuitStatement) listener.exitQuitStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitQuitStatement) return visitor.visitQuitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ReadCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_readCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterReadCommand) listener.enterReadCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitReadCommand) listener.exitReadCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitReadCommand) return visitor.visitReadCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ReadStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public readArgument(): ReadArgumentContext[];
	public readArgument(i: number): ReadArgumentContext;
	public readArgument(i?: number): ReadArgumentContext | ReadArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReadArgumentContext);
		} else {
			return this.getRuleContext(i, ReadArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_readStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterReadStatement) listener.enterReadStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitReadStatement) listener.exitReadStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitReadStatement) return visitor.visitReadStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ReadArgumentContext extends ParserRuleContext {
	public writeArgument(): WriteArgumentContext | undefined {
		return this.tryGetRuleContext(0, WriteArgumentContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Colon, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SHARP(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SHARP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_readArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterReadArgument) listener.enterReadArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitReadArgument) listener.exitReadArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitReadArgument) return visitor.visitReadArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class SetCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_setCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterSetCommand) listener.enterSetCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitSetCommand) listener.exitSetCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitSetCommand) return visitor.visitSetCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class SetStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public setArgument(): SetArgumentContext[];
	public setArgument(i: number): SetArgumentContext;
	public setArgument(i?: number): SetArgumentContext | SetArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SetArgumentContext);
		} else {
			return this.getRuleContext(i, SetArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_setStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterSetStatement) listener.enterSetStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitSetStatement) listener.exitSetStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitSetStatement) return visitor.visitSetStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SetArgumentContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(ObjectScriptParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_setArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterSetArgument) listener.enterSetArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitSetArgument) listener.exitSetArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitSetArgument) return visitor.visitSetArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class TcommitCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_tcommitCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterTcommitCommand) listener.enterTcommitCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitTcommitCommand) listener.exitTcommitCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitTcommitCommand) return visitor.visitTcommitCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ThrowCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_throwCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterThrowCommand) listener.enterThrowCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitThrowCommand) listener.exitThrowCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitThrowCommand) return visitor.visitThrowCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class TrollbackCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_trollbackCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterTrollbackCommand) listener.enterTrollbackCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitTrollbackCommand) listener.exitTrollbackCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitTrollbackCommand) return visitor.visitTrollbackCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class TryCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_tryCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterTryCommand) listener.enterTryCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitTryCommand) listener.exitTryCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCommand) return visitor.visitTryCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class TryStatementContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext {
		return this.getRuleContext(0, BlockStatementContext);
	}
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public Spaces(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Spaces, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_tryStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterTryStatement) listener.enterTryStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitTryStatement) listener.exitTryStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) return visitor.visitTryStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class TstartCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_tstartCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterTstartCommand) listener.enterTstartCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitTstartCommand) listener.exitTstartCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitTstartCommand) return visitor.visitTstartCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class UseCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_useCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterUseCommand) listener.enterUseCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitUseCommand) listener.exitUseCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitUseCommand) return visitor.visitUseCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class UseStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	public colonExpression(): ColonExpressionContext | undefined {
		return this.tryGetRuleContext(0, ColonExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_useStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterUseStatement) listener.enterUseStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitUseStatement) listener.exitUseStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitUseStatement) return visitor.visitUseStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ViewCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_viewCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterViewCommand) listener.enterViewCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitViewCommand) listener.exitViewCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitViewCommand) return visitor.visitViewCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ViewStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_viewStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterViewStatement) listener.enterViewStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitViewStatement) listener.exitViewStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitViewStatement) return visitor.visitViewStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class WhileCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_whileCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterWhileCommand) listener.enterWhileCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitWhileCommand) listener.exitWhileCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileCommand) return visitor.visitWhileCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public Spaces(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Spaces, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_whileStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterWhileStatement) listener.enterWhileStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitWhileStatement) listener.exitWhileStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) return visitor.visitWhileStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class WriteCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_writeCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterWriteCommand) listener.enterWriteCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitWriteCommand) listener.exitWriteCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitWriteCommand) return visitor.visitWriteCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class WriteStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public writeArgument(): WriteArgumentContext[];
	public writeArgument(i: number): WriteArgumentContext;
	public writeArgument(i?: number): WriteArgumentContext | WriteArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WriteArgumentContext);
		} else {
			return this.getRuleContext(i, WriteArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_writeStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterWriteStatement) listener.enterWriteStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitWriteStatement) listener.exitWriteStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitWriteStatement) return visitor.visitWriteStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class WriteArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SHARP(): TerminalNode[];
	public SHARP(i: number): TerminalNode;
	public SHARP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.SHARP);
		} else {
			return this.getToken(ObjectScriptParser.SHARP, i);
		}
	}
	public EXCLAMATION(): TerminalNode[];
	public EXCLAMATION(i: number): TerminalNode;
	public EXCLAMATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.EXCLAMATION);
		} else {
			return this.getToken(ObjectScriptParser.EXCLAMATION, i);
		}
	}
	public QUESTON(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.QUESTON, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.ASTERISK, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SLASH, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_writeArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterWriteArgument) listener.enterWriteArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitWriteArgument) listener.exitWriteArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitWriteArgument) return visitor.visitWriteArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class XecuteCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_xecuteCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterXecuteCommand) listener.enterXecuteCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitXecuteCommand) listener.exitXecuteCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitXecuteCommand) return visitor.visitXecuteCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class XecuteStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public xeceuteArgument(): XeceuteArgumentContext[];
	public xeceuteArgument(i: number): XeceuteArgumentContext;
	public xeceuteArgument(i?: number): XeceuteArgumentContext | XeceuteArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XeceuteArgumentContext);
		} else {
			return this.getRuleContext(i, XeceuteArgumentContext);
		}
	}
	public pc(): PcContext[];
	public pc(i: number): PcContext;
	public pc(i?: number): PcContext | PcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PcContext);
		} else {
			return this.getRuleContext(i, PcContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_xecuteStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterXecuteStatement) listener.enterXecuteStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitXecuteStatement) listener.exitXecuteStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitXecuteStatement) return visitor.visitXecuteStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class XeceuteArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_xeceuteArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterXeceuteArgument) listener.enterXeceuteArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitXeceuteArgument) listener.exitXeceuteArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitXeceuteArgument) return visitor.visitXeceuteArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class ZkillCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zkillCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZkillCommand) listener.enterZkillCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZkillCommand) listener.exitZkillCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZkillCommand) return visitor.visitZkillCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZkillStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zkillStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZkillStatement) listener.enterZkillStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZkillStatement) listener.exitZkillStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZkillStatement) return visitor.visitZkillStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ZnspaceCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_znspaceCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZnspaceCommand) listener.enterZnspaceCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZnspaceCommand) listener.exitZnspaceCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZnspaceCommand) return visitor.visitZnspaceCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZtrapCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_ztrapCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZtrapCommand) listener.enterZtrapCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZtrapCommand) listener.exitZtrapCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZtrapCommand) return visitor.visitZtrapCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZwriteCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zwriteCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZwriteCommand) listener.enterZwriteCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZwriteCommand) listener.exitZwriteCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZwriteCommand) return visitor.visitZwriteCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZwriteStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zwriteStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZwriteStatement) listener.enterZwriteStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZwriteStatement) listener.exitZwriteStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZwriteStatement) return visitor.visitZwriteStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ZzdumpCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zzdumpCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZzdumpCommand) listener.enterZzdumpCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZzdumpCommand) listener.exitZzdumpCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZzdumpCommand) return visitor.visitZzdumpCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZzdumpStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zzdumpStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZzdumpStatement) listener.enterZzdumpStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZzdumpStatement) listener.exitZzdumpStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZzdumpStatement) return visitor.visitZzdumpStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class PrintCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_printCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterPrintCommand) listener.enterPrintCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitPrintCommand) listener.exitPrintCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitPrintCommand) return visitor.visitPrintCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class PrintStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode { return this.getToken(ObjectScriptParser.CommandSPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_printStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterPrintStatement) listener.enterPrintStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitPrintStatement) listener.exitPrintStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitPrintStatement) return visitor.visitPrintStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ZbreakCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zbreakCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZbreakCommand) listener.enterZbreakCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZbreakCommand) listener.exitZbreakCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZbreakCommand) return visitor.visitZbreakCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZbreakStatementContext extends ParserRuleContext {
	public CommandSPACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandSPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zbreakStatement; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZbreakStatement) listener.enterZbreakStatement(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZbreakStatement) listener.exitZbreakStatement(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZbreakStatement) return visitor.visitZbreakStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ZinsertCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zinsertCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZinsertCommand) listener.enterZinsertCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZinsertCommand) listener.exitZinsertCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZinsertCommand) return visitor.visitZinsertCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZloadCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zloadCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZloadCommand) listener.enterZloadCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZloadCommand) listener.exitZloadCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZloadCommand) return visitor.visitZloadCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZprintCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zprintCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZprintCommand) listener.enterZprintCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZprintCommand) listener.exitZprintCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZprintCommand) return visitor.visitZprintCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZremoveCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zremoveCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZremoveCommand) listener.enterZremoveCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZremoveCommand) listener.exitZremoveCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZremoveCommand) return visitor.visitZremoveCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class ZsaveCommandContext extends ParserRuleContext {
	public CMD(): TerminalNode { return this.getToken(ObjectScriptParser.CMD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_zsaveCommand; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterZsaveCommand) listener.enterZsaveCommand(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitZsaveCommand) listener.exitZsaveCommand(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitZsaveCommand) return visitor.visitZsaveCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class SystemFunctionContext extends ParserRuleContext {
	public _func: Token;
	public LPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.RPAREN, 0); }
	public SystemVariable(): TerminalNode { return this.getToken(ObjectScriptParser.SystemVariable, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_systemFunction; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterSystemFunction) listener.enterSystemFunction(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitSystemFunction) listener.exitSystemFunction(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitSystemFunction) return visitor.visitSystemFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableContext extends ParserRuleContext {
	public localVariable(): LocalVariableContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableContext);
	}
	public globalVariable(): GlobalVariableContext | undefined {
		return this.tryGetRuleContext(0, GlobalVariableContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.AT);
		} else {
			return this.getToken(ObjectScriptParser.AT, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	public Property(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Property, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_variable; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterVariable) listener.enterVariable(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitVariable) listener.exitVariable(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitVariable) return visitor.visitVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class LocalVariableContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ObjectScriptParser.ID, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.PERCENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_localVariable; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLocalVariable) listener.enterLocalVariable(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLocalVariable) listener.exitLocalVariable(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLocalVariable) return visitor.visitLocalVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class GlobalVariableContext extends ParserRuleContext {
	public CARET(): TerminalNode { return this.getToken(ObjectScriptParser.CARET, 0); }
	public GlobalName(): TerminalNode { return this.getToken(ObjectScriptParser.GlobalName, 0); }
	public VertBar(): TerminalNode[];
	public VertBar(i: number): TerminalNode;
	public VertBar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.VertBar);
		} else {
			return this.getToken(ObjectScriptParser.VertBar, i);
		}
	}
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.PERCENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_globalVariable; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterGlobalVariable) listener.enterGlobalVariable(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitGlobalVariable) listener.exitGlobalVariable(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitGlobalVariable) return visitor.visitGlobalVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class LocalVariableListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.ID);
		} else {
			return this.getToken(ObjectScriptParser.ID, i);
		}
	}
	public Spaces(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Spaces, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_localVariableList; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLocalVariableList) listener.enterLocalVariableList(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLocalVariableList) listener.exitLocalVariableList(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableList) return visitor.visitLocalVariableList(this);
		else return visitor.visitChildren(this);
	}
}


export class ColonExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Colon);
		} else {
			return this.getToken(ObjectScriptParser.Colon, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_colonExpression; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterColonExpression) listener.enterColonExpression(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitColonExpression) listener.exitColonExpression(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitColonExpression) return visitor.visitColonExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SimpleExpressionContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.MINUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.ASTERISK, 0); }
	public SHARP(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SHARP, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SLASH, 0); }
	public BACKSLASH(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.BACKSLASH, 0); }
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.UNDERSCORE, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.EOL);
		} else {
			return this.getToken(ObjectScriptParser.EOL, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_expression; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.FLOAT, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.STRING, 0); }
	public doClass(): DoClassContext | undefined {
		return this.tryGetRuleContext(0, DoClassContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.DOT, 0); }
	public localVariable(): LocalVariableContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableContext);
	}
	public SystemVariable(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SystemVariable, 0); }
	public SpecialGlobal(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.SpecialGlobal, 0); }
	public systemFunction(): SystemFunctionContext | undefined {
		return this.tryGetRuleContext(0, SystemFunctionContext);
	}
	public Macros(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Macros, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_simpleExpression; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterSimpleExpression) listener.enterSimpleExpression(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitSimpleExpression) listener.exitSimpleExpression(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitSimpleExpression) return visitor.visitSimpleExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LPAREN, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RPAREN, 0); }
	public CondOper(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CondOper, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.EQUAL, 0); }
	public Negative(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Negative, 0); }
	public simpleExpression(): SimpleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SimpleExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_condition; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterCondition) listener.enterCondition(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitCondition) listener.exitCondition(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitCondition) return visitor.visitCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class PcContext extends ParserRuleContext {
	public CommandCOLON(): TerminalNode { return this.getToken(ObjectScriptParser.CommandCOLON, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_pc; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterPc) listener.enterPc(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitPc) listener.exitPc(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitPc) return visitor.visitPc(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_arguments; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterArguments) listener.enterArguments(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitArguments) listener.exitArguments(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitArguments) return visitor.visitArguments(this);
		else return visitor.visitChildren(this);
	}
}


export class DoClassContext extends ParserRuleContext {
	public ObjectClass(): TerminalNode { return this.getToken(ObjectScriptParser.ObjectClass, 0); }
	public LPClass(): TerminalNode { return this.getToken(ObjectScriptParser.LPClass, 0); }
	public ObjectName(): TerminalNode { return this.getToken(ObjectScriptParser.ObjectName, 0); }
	public RPClass(): TerminalNode { return this.getToken(ObjectScriptParser.RPClass, 0); }
	public ObjectMethod(): TerminalNode { return this.getToken(ObjectScriptParser.ObjectMethod, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_doClass; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterDoClass) listener.enterDoClass(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitDoClass) listener.exitDoClass(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitDoClass) return visitor.visitDoClass(this);
		else return visitor.visitChildren(this);
	}
}


export class DoRoutineContext extends ParserRuleContext {
	public Label(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.Label, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.PLUS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CARET(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CARET, 0); }
	public RoutineName(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RoutineName, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_doRoutine; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterDoRoutine) listener.enterDoRoutine(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitDoRoutine) listener.exitDoRoutine(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitDoRoutine) return visitor.visitDoRoutine(this);
		else return visitor.visitChildren(this);
	}
}


export class DoArgumentContext extends ParserRuleContext {
	public doClass(): DoClassContext | undefined {
		return this.tryGetRuleContext(0, DoClassContext);
	}
	public doRoutine(): DoRoutineContext | undefined {
		return this.tryGetRuleContext(0, DoRoutineContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_doArgument; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterDoArgument) listener.enterDoArgument(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitDoArgument) listener.exitDoArgument(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitDoArgument) return visitor.visitDoArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class LabelDefContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ObjectScriptParser.RPAREN, 0); }
	public labelParameter(): LabelParameterContext[];
	public labelParameter(i: number): LabelParameterContext;
	public labelParameter(i?: number): LabelParameterContext | LabelParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelParameterContext);
		} else {
			return this.getRuleContext(i, LabelParameterContext);
		}
	}
	public methodContent(): MethodContentContext | undefined {
		return this.tryGetRuleContext(0, MethodContentContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	public methodPublicVariables(): MethodPublicVariablesContext | undefined {
		return this.tryGetRuleContext(0, MethodPublicVariablesContext);
	}
	public Spaces(): TerminalNode[];
	public Spaces(i: number): TerminalNode;
	public Spaces(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.Spaces);
		} else {
			return this.getToken(ObjectScriptParser.Spaces, i);
		}
	}
	public CommandEOL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandEOL, 0); }
	public comments(): CommentsContext[];
	public comments(i: number): CommentsContext;
	public comments(i?: number): CommentsContext | CommentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentsContext);
		} else {
			return this.getRuleContext(i, CommentsContext);
		}
	}
	public MACMethodPrivate(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.MACMethodPrivate, 0); }
	public MACMethodPublic(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.MACMethodPublic, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_labelDef; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLabelDef) listener.enterLabelDef(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLabelDef) listener.exitLabelDef(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLabelDef) return visitor.visitLabelDef(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodPublicVariablesContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(ObjectScriptParser.LBRACK, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.ID);
		} else {
			return this.getToken(ObjectScriptParser.ID, i);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(ObjectScriptParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectScriptParser.COMMA);
		} else {
			return this.getToken(ObjectScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_methodPublicVariables; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterMethodPublicVariables) listener.enterMethodPublicVariables(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitMethodPublicVariables) listener.exitMethodPublicVariables(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitMethodPublicVariables) return visitor.visitMethodPublicVariables(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodContentContext extends ParserRuleContext {
	public CommandLBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandLBRACE, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public CommandRBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandRBRACE, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.RBRACE, 0); }
	public CommandEOL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.CommandEOL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_methodContent; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterMethodContent) listener.enterMethodContent(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitMethodContent) listener.exitMethodContent(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitMethodContent) return visitor.visitMethodContent(this);
		else return visitor.visitChildren(this);
	}
}


export class LabelParameterContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ObjectScriptParser.ID, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.EQUAL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.STRING, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ObjectScriptParser.INT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ObjectScriptParser.RULE_labelParameter; }
	@Override
	public enterRule(listener: ObjectScriptParserListener): void {
		if (listener.enterLabelParameter) listener.enterLabelParameter(this);
	}
	@Override
	public exitRule(listener: ObjectScriptParserListener): void {
		if (listener.exitLabelParameter) listener.exitLabelParameter(this);
	}
	@Override
	public accept<Result>(visitor: ObjectScriptParserVisitor<Result>): Result {
		if (visitor.visitLabelParameter) return visitor.visitLabelParameter(this);
		else return visitor.visitChildren(this);
	}
}


