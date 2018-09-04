// Generated from ./src/antlr/ObjectScriptParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { CodeContext } from './ObjectScriptParser';
import { StatementContext } from './ObjectScriptParser';
import { BlockStatementContext } from './ObjectScriptParser';
import { CommentsContext } from './ObjectScriptParser';
import { SimpleStatementContext } from './ObjectScriptParser';
import { MacrosAsCommandContext } from './ObjectScriptParser';
import { IncludeStatementContext } from './ObjectScriptParser';
import { IncludeRtnContext } from './ObjectScriptParser';
import { DefineContext } from './ObjectScriptParser';
import { BreakCommandContext } from './ObjectScriptParser';
import { BreakStatementContext } from './ObjectScriptParser';
import { CatchCommandContext } from './ObjectScriptParser';
import { CatchStatementContext } from './ObjectScriptParser';
import { CloseCommandContext } from './ObjectScriptParser';
import { CloseStatementContext } from './ObjectScriptParser';
import { ContinueCommandContext } from './ObjectScriptParser';
import { DoCommandContext } from './ObjectScriptParser';
import { DoStatementContext } from './ObjectScriptParser';
import { ElseCommand1Context } from './ObjectScriptParser';
import { ElseCommand2Context } from './ObjectScriptParser';
import { ElseStatementContext } from './ObjectScriptParser';
import { ElseifCommandContext } from './ObjectScriptParser';
import { ForCommandContext } from './ObjectScriptParser';
import { ForStatementContext } from './ObjectScriptParser';
import { ForExpressionContext } from './ObjectScriptParser';
import { GotoCommandContext } from './ObjectScriptParser';
import { GotoStatementContext } from './ObjectScriptParser';
import { HaltCommandContext } from './ObjectScriptParser';
import { HangCommandContext } from './ObjectScriptParser';
import { HangStatementContext } from './ObjectScriptParser';
import { IfCommandContext } from './ObjectScriptParser';
import { IfStatementContext } from './ObjectScriptParser';
import { JobCommandContext } from './ObjectScriptParser';
import { JobStatementContext } from './ObjectScriptParser';
import { JobArgumentContext } from './ObjectScriptParser';
import { JobProcessParamsContext } from './ObjectScriptParser';
import { KillCommandContext } from './ObjectScriptParser';
import { KillStatementContext } from './ObjectScriptParser';
import { KillArgumentContext } from './ObjectScriptParser';
import { LockCommandContext } from './ObjectScriptParser';
import { LockStatementContext } from './ObjectScriptParser';
import { LockArgumentContext } from './ObjectScriptParser';
import { LockArgument2Context } from './ObjectScriptParser';
import { MergeCommandContext } from './ObjectScriptParser';
import { MergeStatementContext } from './ObjectScriptParser';
import { MergeArgumentContext } from './ObjectScriptParser';
import { NewCommandContext } from './ObjectScriptParser';
import { NewStatementContext } from './ObjectScriptParser';
import { OpenCommandContext } from './ObjectScriptParser';
import { OpenStatementContext } from './ObjectScriptParser';
import { QuitCommandContext } from './ObjectScriptParser';
import { QuitStatementContext } from './ObjectScriptParser';
import { ReadCommandContext } from './ObjectScriptParser';
import { ReadStatementContext } from './ObjectScriptParser';
import { ReadArgumentContext } from './ObjectScriptParser';
import { SetCommandContext } from './ObjectScriptParser';
import { SetStatementContext } from './ObjectScriptParser';
import { SetArgumentContext } from './ObjectScriptParser';
import { TcommitCommandContext } from './ObjectScriptParser';
import { ThrowCommandContext } from './ObjectScriptParser';
import { TrollbackCommandContext } from './ObjectScriptParser';
import { TryCommandContext } from './ObjectScriptParser';
import { TryStatementContext } from './ObjectScriptParser';
import { TstartCommandContext } from './ObjectScriptParser';
import { UseCommandContext } from './ObjectScriptParser';
import { UseStatementContext } from './ObjectScriptParser';
import { ViewCommandContext } from './ObjectScriptParser';
import { ViewStatementContext } from './ObjectScriptParser';
import { WhileCommandContext } from './ObjectScriptParser';
import { WhileStatementContext } from './ObjectScriptParser';
import { WriteCommandContext } from './ObjectScriptParser';
import { WriteStatementContext } from './ObjectScriptParser';
import { WriteArgumentContext } from './ObjectScriptParser';
import { XecuteCommandContext } from './ObjectScriptParser';
import { XecuteStatementContext } from './ObjectScriptParser';
import { XeceuteArgumentContext } from './ObjectScriptParser';
import { ZkillCommandContext } from './ObjectScriptParser';
import { ZkillStatementContext } from './ObjectScriptParser';
import { ZnspaceCommandContext } from './ObjectScriptParser';
import { ZtrapCommandContext } from './ObjectScriptParser';
import { ZwriteCommandContext } from './ObjectScriptParser';
import { ZwriteStatementContext } from './ObjectScriptParser';
import { ZzdumpCommandContext } from './ObjectScriptParser';
import { ZzdumpStatementContext } from './ObjectScriptParser';
import { PrintCommandContext } from './ObjectScriptParser';
import { PrintStatementContext } from './ObjectScriptParser';
import { ZbreakCommandContext } from './ObjectScriptParser';
import { ZbreakStatementContext } from './ObjectScriptParser';
import { ZinsertCommandContext } from './ObjectScriptParser';
import { ZloadCommandContext } from './ObjectScriptParser';
import { ZprintCommandContext } from './ObjectScriptParser';
import { ZremoveCommandContext } from './ObjectScriptParser';
import { ZsaveCommandContext } from './ObjectScriptParser';
import { SystemFunctionContext } from './ObjectScriptParser';
import { VariableContext } from './ObjectScriptParser';
import { LocalVariableContext } from './ObjectScriptParser';
import { GlobalVariableContext } from './ObjectScriptParser';
import { LocalVariableListContext } from './ObjectScriptParser';
import { ColonExpressionContext } from './ObjectScriptParser';
import { ExpressionContext } from './ObjectScriptParser';
import { SimpleExpressionContext } from './ObjectScriptParser';
import { ConditionContext } from './ObjectScriptParser';
import { PcContext } from './ObjectScriptParser';
import { ArgumentsContext } from './ObjectScriptParser';
import { DoClassContext } from './ObjectScriptParser';
import { DoRoutineContext } from './ObjectScriptParser';
import { DoArgumentContext } from './ObjectScriptParser';
import { LabelDefContext } from './ObjectScriptParser';
import { MethodPublicVariablesContext } from './ObjectScriptParser';
import { MethodContentContext } from './ObjectScriptParser';
import { LabelParameterContext } from './ObjectScriptParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ObjectScriptParser`.
 */
export interface ObjectScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ObjectScriptParser.code`.
	 * @param ctx the parse tree
	 */
	enterCode?: (ctx: CodeContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.code`.
	 * @param ctx the parse tree
	 */
	exitCode?: (ctx: CodeContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.comments`.
	 * @param ctx the parse tree
	 */
	enterComments?: (ctx: CommentsContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.comments`.
	 * @param ctx the parse tree
	 */
	exitComments?: (ctx: CommentsContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.simpleStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleStatement?: (ctx: SimpleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.simpleStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleStatement?: (ctx: SimpleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.macrosAsCommand`.
	 * @param ctx the parse tree
	 */
	enterMacrosAsCommand?: (ctx: MacrosAsCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.macrosAsCommand`.
	 * @param ctx the parse tree
	 */
	exitMacrosAsCommand?: (ctx: MacrosAsCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	enterIncludeStatement?: (ctx: IncludeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	exitIncludeStatement?: (ctx: IncludeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.includeRtn`.
	 * @param ctx the parse tree
	 */
	enterIncludeRtn?: (ctx: IncludeRtnContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.includeRtn`.
	 * @param ctx the parse tree
	 */
	exitIncludeRtn?: (ctx: IncludeRtnContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.define`.
	 * @param ctx the parse tree
	 */
	enterDefine?: (ctx: DefineContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.define`.
	 * @param ctx the parse tree
	 */
	exitDefine?: (ctx: DefineContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.breakCommand`.
	 * @param ctx the parse tree
	 */
	enterBreakCommand?: (ctx: BreakCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.breakCommand`.
	 * @param ctx the parse tree
	 */
	exitBreakCommand?: (ctx: BreakCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.catchCommand`.
	 * @param ctx the parse tree
	 */
	enterCatchCommand?: (ctx: CatchCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.catchCommand`.
	 * @param ctx the parse tree
	 */
	exitCatchCommand?: (ctx: CatchCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.catchStatement`.
	 * @param ctx the parse tree
	 */
	enterCatchStatement?: (ctx: CatchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.catchStatement`.
	 * @param ctx the parse tree
	 */
	exitCatchStatement?: (ctx: CatchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.closeCommand`.
	 * @param ctx the parse tree
	 */
	enterCloseCommand?: (ctx: CloseCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.closeCommand`.
	 * @param ctx the parse tree
	 */
	exitCloseCommand?: (ctx: CloseCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.closeStatement`.
	 * @param ctx the parse tree
	 */
	enterCloseStatement?: (ctx: CloseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.closeStatement`.
	 * @param ctx the parse tree
	 */
	exitCloseStatement?: (ctx: CloseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.continueCommand`.
	 * @param ctx the parse tree
	 */
	enterContinueCommand?: (ctx: ContinueCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.continueCommand`.
	 * @param ctx the parse tree
	 */
	exitContinueCommand?: (ctx: ContinueCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.doCommand`.
	 * @param ctx the parse tree
	 */
	enterDoCommand?: (ctx: DoCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.doCommand`.
	 * @param ctx the parse tree
	 */
	exitDoCommand?: (ctx: DoCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.elseCommand1`.
	 * @param ctx the parse tree
	 */
	enterElseCommand1?: (ctx: ElseCommand1Context) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.elseCommand1`.
	 * @param ctx the parse tree
	 */
	exitElseCommand1?: (ctx: ElseCommand1Context) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.elseCommand2`.
	 * @param ctx the parse tree
	 */
	enterElseCommand2?: (ctx: ElseCommand2Context) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.elseCommand2`.
	 * @param ctx the parse tree
	 */
	exitElseCommand2?: (ctx: ElseCommand2Context) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.elseifCommand`.
	 * @param ctx the parse tree
	 */
	enterElseifCommand?: (ctx: ElseifCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.elseifCommand`.
	 * @param ctx the parse tree
	 */
	exitElseifCommand?: (ctx: ElseifCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.forCommand`.
	 * @param ctx the parse tree
	 */
	enterForCommand?: (ctx: ForCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.forCommand`.
	 * @param ctx the parse tree
	 */
	exitForCommand?: (ctx: ForCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.forExpression`.
	 * @param ctx the parse tree
	 */
	enterForExpression?: (ctx: ForExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.forExpression`.
	 * @param ctx the parse tree
	 */
	exitForExpression?: (ctx: ForExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.gotoCommand`.
	 * @param ctx the parse tree
	 */
	enterGotoCommand?: (ctx: GotoCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.gotoCommand`.
	 * @param ctx the parse tree
	 */
	exitGotoCommand?: (ctx: GotoCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	enterGotoStatement?: (ctx: GotoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	exitGotoStatement?: (ctx: GotoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.haltCommand`.
	 * @param ctx the parse tree
	 */
	enterHaltCommand?: (ctx: HaltCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.haltCommand`.
	 * @param ctx the parse tree
	 */
	exitHaltCommand?: (ctx: HaltCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.hangCommand`.
	 * @param ctx the parse tree
	 */
	enterHangCommand?: (ctx: HangCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.hangCommand`.
	 * @param ctx the parse tree
	 */
	exitHangCommand?: (ctx: HangCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.hangStatement`.
	 * @param ctx the parse tree
	 */
	enterHangStatement?: (ctx: HangStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.hangStatement`.
	 * @param ctx the parse tree
	 */
	exitHangStatement?: (ctx: HangStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.ifCommand`.
	 * @param ctx the parse tree
	 */
	enterIfCommand?: (ctx: IfCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.ifCommand`.
	 * @param ctx the parse tree
	 */
	exitIfCommand?: (ctx: IfCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.jobCommand`.
	 * @param ctx the parse tree
	 */
	enterJobCommand?: (ctx: JobCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.jobCommand`.
	 * @param ctx the parse tree
	 */
	exitJobCommand?: (ctx: JobCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.jobStatement`.
	 * @param ctx the parse tree
	 */
	enterJobStatement?: (ctx: JobStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.jobStatement`.
	 * @param ctx the parse tree
	 */
	exitJobStatement?: (ctx: JobStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.jobArgument`.
	 * @param ctx the parse tree
	 */
	enterJobArgument?: (ctx: JobArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.jobArgument`.
	 * @param ctx the parse tree
	 */
	exitJobArgument?: (ctx: JobArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.jobProcessParams`.
	 * @param ctx the parse tree
	 */
	enterJobProcessParams?: (ctx: JobProcessParamsContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.jobProcessParams`.
	 * @param ctx the parse tree
	 */
	exitJobProcessParams?: (ctx: JobProcessParamsContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.killCommand`.
	 * @param ctx the parse tree
	 */
	enterKillCommand?: (ctx: KillCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.killCommand`.
	 * @param ctx the parse tree
	 */
	exitKillCommand?: (ctx: KillCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.killStatement`.
	 * @param ctx the parse tree
	 */
	enterKillStatement?: (ctx: KillStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.killStatement`.
	 * @param ctx the parse tree
	 */
	exitKillStatement?: (ctx: KillStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.killArgument`.
	 * @param ctx the parse tree
	 */
	enterKillArgument?: (ctx: KillArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.killArgument`.
	 * @param ctx the parse tree
	 */
	exitKillArgument?: (ctx: KillArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.lockCommand`.
	 * @param ctx the parse tree
	 */
	enterLockCommand?: (ctx: LockCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.lockCommand`.
	 * @param ctx the parse tree
	 */
	exitLockCommand?: (ctx: LockCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.lockStatement`.
	 * @param ctx the parse tree
	 */
	enterLockStatement?: (ctx: LockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.lockStatement`.
	 * @param ctx the parse tree
	 */
	exitLockStatement?: (ctx: LockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.lockArgument`.
	 * @param ctx the parse tree
	 */
	enterLockArgument?: (ctx: LockArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.lockArgument`.
	 * @param ctx the parse tree
	 */
	exitLockArgument?: (ctx: LockArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.lockArgument2`.
	 * @param ctx the parse tree
	 */
	enterLockArgument2?: (ctx: LockArgument2Context) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.lockArgument2`.
	 * @param ctx the parse tree
	 */
	exitLockArgument2?: (ctx: LockArgument2Context) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.mergeCommand`.
	 * @param ctx the parse tree
	 */
	enterMergeCommand?: (ctx: MergeCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.mergeCommand`.
	 * @param ctx the parse tree
	 */
	exitMergeCommand?: (ctx: MergeCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	enterMergeStatement?: (ctx: MergeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	exitMergeStatement?: (ctx: MergeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.mergeArgument`.
	 * @param ctx the parse tree
	 */
	enterMergeArgument?: (ctx: MergeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.mergeArgument`.
	 * @param ctx the parse tree
	 */
	exitMergeArgument?: (ctx: MergeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.newCommand`.
	 * @param ctx the parse tree
	 */
	enterNewCommand?: (ctx: NewCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.newCommand`.
	 * @param ctx the parse tree
	 */
	exitNewCommand?: (ctx: NewCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.newStatement`.
	 * @param ctx the parse tree
	 */
	enterNewStatement?: (ctx: NewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.newStatement`.
	 * @param ctx the parse tree
	 */
	exitNewStatement?: (ctx: NewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.openCommand`.
	 * @param ctx the parse tree
	 */
	enterOpenCommand?: (ctx: OpenCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.openCommand`.
	 * @param ctx the parse tree
	 */
	exitOpenCommand?: (ctx: OpenCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.openStatement`.
	 * @param ctx the parse tree
	 */
	enterOpenStatement?: (ctx: OpenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.openStatement`.
	 * @param ctx the parse tree
	 */
	exitOpenStatement?: (ctx: OpenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.quitCommand`.
	 * @param ctx the parse tree
	 */
	enterQuitCommand?: (ctx: QuitCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.quitCommand`.
	 * @param ctx the parse tree
	 */
	exitQuitCommand?: (ctx: QuitCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.quitStatement`.
	 * @param ctx the parse tree
	 */
	enterQuitStatement?: (ctx: QuitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.quitStatement`.
	 * @param ctx the parse tree
	 */
	exitQuitStatement?: (ctx: QuitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.readCommand`.
	 * @param ctx the parse tree
	 */
	enterReadCommand?: (ctx: ReadCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.readCommand`.
	 * @param ctx the parse tree
	 */
	exitReadCommand?: (ctx: ReadCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.readStatement`.
	 * @param ctx the parse tree
	 */
	enterReadStatement?: (ctx: ReadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.readStatement`.
	 * @param ctx the parse tree
	 */
	exitReadStatement?: (ctx: ReadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.readArgument`.
	 * @param ctx the parse tree
	 */
	enterReadArgument?: (ctx: ReadArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.readArgument`.
	 * @param ctx the parse tree
	 */
	exitReadArgument?: (ctx: ReadArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.setCommand`.
	 * @param ctx the parse tree
	 */
	enterSetCommand?: (ctx: SetCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.setCommand`.
	 * @param ctx the parse tree
	 */
	exitSetCommand?: (ctx: SetCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetStatement?: (ctx: SetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetStatement?: (ctx: SetStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.setArgument`.
	 * @param ctx the parse tree
	 */
	enterSetArgument?: (ctx: SetArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.setArgument`.
	 * @param ctx the parse tree
	 */
	exitSetArgument?: (ctx: SetArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.tcommitCommand`.
	 * @param ctx the parse tree
	 */
	enterTcommitCommand?: (ctx: TcommitCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.tcommitCommand`.
	 * @param ctx the parse tree
	 */
	exitTcommitCommand?: (ctx: TcommitCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.throwCommand`.
	 * @param ctx the parse tree
	 */
	enterThrowCommand?: (ctx: ThrowCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.throwCommand`.
	 * @param ctx the parse tree
	 */
	exitThrowCommand?: (ctx: ThrowCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.trollbackCommand`.
	 * @param ctx the parse tree
	 */
	enterTrollbackCommand?: (ctx: TrollbackCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.trollbackCommand`.
	 * @param ctx the parse tree
	 */
	exitTrollbackCommand?: (ctx: TrollbackCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.tryCommand`.
	 * @param ctx the parse tree
	 */
	enterTryCommand?: (ctx: TryCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.tryCommand`.
	 * @param ctx the parse tree
	 */
	exitTryCommand?: (ctx: TryCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.tstartCommand`.
	 * @param ctx the parse tree
	 */
	enterTstartCommand?: (ctx: TstartCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.tstartCommand`.
	 * @param ctx the parse tree
	 */
	exitTstartCommand?: (ctx: TstartCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.useCommand`.
	 * @param ctx the parse tree
	 */
	enterUseCommand?: (ctx: UseCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.useCommand`.
	 * @param ctx the parse tree
	 */
	exitUseCommand?: (ctx: UseCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.useStatement`.
	 * @param ctx the parse tree
	 */
	enterUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.useStatement`.
	 * @param ctx the parse tree
	 */
	exitUseStatement?: (ctx: UseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.viewCommand`.
	 * @param ctx the parse tree
	 */
	enterViewCommand?: (ctx: ViewCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.viewCommand`.
	 * @param ctx the parse tree
	 */
	exitViewCommand?: (ctx: ViewCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.viewStatement`.
	 * @param ctx the parse tree
	 */
	enterViewStatement?: (ctx: ViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.viewStatement`.
	 * @param ctx the parse tree
	 */
	exitViewStatement?: (ctx: ViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.whileCommand`.
	 * @param ctx the parse tree
	 */
	enterWhileCommand?: (ctx: WhileCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.whileCommand`.
	 * @param ctx the parse tree
	 */
	exitWhileCommand?: (ctx: WhileCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.writeCommand`.
	 * @param ctx the parse tree
	 */
	enterWriteCommand?: (ctx: WriteCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.writeCommand`.
	 * @param ctx the parse tree
	 */
	exitWriteCommand?: (ctx: WriteCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.writeStatement`.
	 * @param ctx the parse tree
	 */
	enterWriteStatement?: (ctx: WriteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.writeStatement`.
	 * @param ctx the parse tree
	 */
	exitWriteStatement?: (ctx: WriteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.writeArgument`.
	 * @param ctx the parse tree
	 */
	enterWriteArgument?: (ctx: WriteArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.writeArgument`.
	 * @param ctx the parse tree
	 */
	exitWriteArgument?: (ctx: WriteArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.xecuteCommand`.
	 * @param ctx the parse tree
	 */
	enterXecuteCommand?: (ctx: XecuteCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.xecuteCommand`.
	 * @param ctx the parse tree
	 */
	exitXecuteCommand?: (ctx: XecuteCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.xecuteStatement`.
	 * @param ctx the parse tree
	 */
	enterXecuteStatement?: (ctx: XecuteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.xecuteStatement`.
	 * @param ctx the parse tree
	 */
	exitXecuteStatement?: (ctx: XecuteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.xeceuteArgument`.
	 * @param ctx the parse tree
	 */
	enterXeceuteArgument?: (ctx: XeceuteArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.xeceuteArgument`.
	 * @param ctx the parse tree
	 */
	exitXeceuteArgument?: (ctx: XeceuteArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zkillCommand`.
	 * @param ctx the parse tree
	 */
	enterZkillCommand?: (ctx: ZkillCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zkillCommand`.
	 * @param ctx the parse tree
	 */
	exitZkillCommand?: (ctx: ZkillCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zkillStatement`.
	 * @param ctx the parse tree
	 */
	enterZkillStatement?: (ctx: ZkillStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zkillStatement`.
	 * @param ctx the parse tree
	 */
	exitZkillStatement?: (ctx: ZkillStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.znspaceCommand`.
	 * @param ctx the parse tree
	 */
	enterZnspaceCommand?: (ctx: ZnspaceCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.znspaceCommand`.
	 * @param ctx the parse tree
	 */
	exitZnspaceCommand?: (ctx: ZnspaceCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.ztrapCommand`.
	 * @param ctx the parse tree
	 */
	enterZtrapCommand?: (ctx: ZtrapCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.ztrapCommand`.
	 * @param ctx the parse tree
	 */
	exitZtrapCommand?: (ctx: ZtrapCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zwriteCommand`.
	 * @param ctx the parse tree
	 */
	enterZwriteCommand?: (ctx: ZwriteCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zwriteCommand`.
	 * @param ctx the parse tree
	 */
	exitZwriteCommand?: (ctx: ZwriteCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zwriteStatement`.
	 * @param ctx the parse tree
	 */
	enterZwriteStatement?: (ctx: ZwriteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zwriteStatement`.
	 * @param ctx the parse tree
	 */
	exitZwriteStatement?: (ctx: ZwriteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zzdumpCommand`.
	 * @param ctx the parse tree
	 */
	enterZzdumpCommand?: (ctx: ZzdumpCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zzdumpCommand`.
	 * @param ctx the parse tree
	 */
	exitZzdumpCommand?: (ctx: ZzdumpCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zzdumpStatement`.
	 * @param ctx the parse tree
	 */
	enterZzdumpStatement?: (ctx: ZzdumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zzdumpStatement`.
	 * @param ctx the parse tree
	 */
	exitZzdumpStatement?: (ctx: ZzdumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.printCommand`.
	 * @param ctx the parse tree
	 */
	enterPrintCommand?: (ctx: PrintCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.printCommand`.
	 * @param ctx the parse tree
	 */
	exitPrintCommand?: (ctx: PrintCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zbreakCommand`.
	 * @param ctx the parse tree
	 */
	enterZbreakCommand?: (ctx: ZbreakCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zbreakCommand`.
	 * @param ctx the parse tree
	 */
	exitZbreakCommand?: (ctx: ZbreakCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zbreakStatement`.
	 * @param ctx the parse tree
	 */
	enterZbreakStatement?: (ctx: ZbreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zbreakStatement`.
	 * @param ctx the parse tree
	 */
	exitZbreakStatement?: (ctx: ZbreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zinsertCommand`.
	 * @param ctx the parse tree
	 */
	enterZinsertCommand?: (ctx: ZinsertCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zinsertCommand`.
	 * @param ctx the parse tree
	 */
	exitZinsertCommand?: (ctx: ZinsertCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zloadCommand`.
	 * @param ctx the parse tree
	 */
	enterZloadCommand?: (ctx: ZloadCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zloadCommand`.
	 * @param ctx the parse tree
	 */
	exitZloadCommand?: (ctx: ZloadCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zprintCommand`.
	 * @param ctx the parse tree
	 */
	enterZprintCommand?: (ctx: ZprintCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zprintCommand`.
	 * @param ctx the parse tree
	 */
	exitZprintCommand?: (ctx: ZprintCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zremoveCommand`.
	 * @param ctx the parse tree
	 */
	enterZremoveCommand?: (ctx: ZremoveCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zremoveCommand`.
	 * @param ctx the parse tree
	 */
	exitZremoveCommand?: (ctx: ZremoveCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.zsaveCommand`.
	 * @param ctx the parse tree
	 */
	enterZsaveCommand?: (ctx: ZsaveCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.zsaveCommand`.
	 * @param ctx the parse tree
	 */
	exitZsaveCommand?: (ctx: ZsaveCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.systemFunction`.
	 * @param ctx the parse tree
	 */
	enterSystemFunction?: (ctx: SystemFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.systemFunction`.
	 * @param ctx the parse tree
	 */
	exitSystemFunction?: (ctx: SystemFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.localVariable`.
	 * @param ctx the parse tree
	 */
	enterLocalVariable?: (ctx: LocalVariableContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.localVariable`.
	 * @param ctx the parse tree
	 */
	exitLocalVariable?: (ctx: LocalVariableContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.globalVariable`.
	 * @param ctx the parse tree
	 */
	enterGlobalVariable?: (ctx: GlobalVariableContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.globalVariable`.
	 * @param ctx the parse tree
	 */
	exitGlobalVariable?: (ctx: GlobalVariableContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.localVariableList`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableList?: (ctx: LocalVariableListContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.localVariableList`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableList?: (ctx: LocalVariableListContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.colonExpression`.
	 * @param ctx the parse tree
	 */
	enterColonExpression?: (ctx: ColonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.colonExpression`.
	 * @param ctx the parse tree
	 */
	exitColonExpression?: (ctx: ColonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpression?: (ctx: SimpleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpression?: (ctx: SimpleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.pc`.
	 * @param ctx the parse tree
	 */
	enterPc?: (ctx: PcContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.pc`.
	 * @param ctx the parse tree
	 */
	exitPc?: (ctx: PcContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.doClass`.
	 * @param ctx the parse tree
	 */
	enterDoClass?: (ctx: DoClassContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.doClass`.
	 * @param ctx the parse tree
	 */
	exitDoClass?: (ctx: DoClassContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.doRoutine`.
	 * @param ctx the parse tree
	 */
	enterDoRoutine?: (ctx: DoRoutineContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.doRoutine`.
	 * @param ctx the parse tree
	 */
	exitDoRoutine?: (ctx: DoRoutineContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.doArgument`.
	 * @param ctx the parse tree
	 */
	enterDoArgument?: (ctx: DoArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.doArgument`.
	 * @param ctx the parse tree
	 */
	exitDoArgument?: (ctx: DoArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.labelDef`.
	 * @param ctx the parse tree
	 */
	enterLabelDef?: (ctx: LabelDefContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.labelDef`.
	 * @param ctx the parse tree
	 */
	exitLabelDef?: (ctx: LabelDefContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.methodPublicVariables`.
	 * @param ctx the parse tree
	 */
	enterMethodPublicVariables?: (ctx: MethodPublicVariablesContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.methodPublicVariables`.
	 * @param ctx the parse tree
	 */
	exitMethodPublicVariables?: (ctx: MethodPublicVariablesContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.methodContent`.
	 * @param ctx the parse tree
	 */
	enterMethodContent?: (ctx: MethodContentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.methodContent`.
	 * @param ctx the parse tree
	 */
	exitMethodContent?: (ctx: MethodContentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectScriptParser.labelParameter`.
	 * @param ctx the parse tree
	 */
	enterLabelParameter?: (ctx: LabelParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectScriptParser.labelParameter`.
	 * @param ctx the parse tree
	 */
	exitLabelParameter?: (ctx: LabelParameterContext) => void;
}

