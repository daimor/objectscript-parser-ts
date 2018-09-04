// Generated from ./src/antlr/ObjectScriptParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ObjectScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ObjectScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ObjectScriptParser.code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode?: (ctx: CodeContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.comments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComments?: (ctx: CommentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.simpleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStatement?: (ctx: SimpleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.macrosAsCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacrosAsCommand?: (ctx: MacrosAsCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.includeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeStatement?: (ctx: IncludeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.includeRtn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeRtn?: (ctx: IncludeRtnContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine?: (ctx: DefineContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.breakCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakCommand?: (ctx: BreakCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.catchCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchCommand?: (ctx: CatchCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.catchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchStatement?: (ctx: CatchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.closeCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseCommand?: (ctx: CloseCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.closeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseStatement?: (ctx: CloseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.continueCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueCommand?: (ctx: ContinueCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.doCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoCommand?: (ctx: DoCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.elseCommand1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseCommand1?: (ctx: ElseCommand1Context) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.elseCommand2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseCommand2?: (ctx: ElseCommand2Context) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.elseifCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseifCommand?: (ctx: ElseifCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.forCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForCommand?: (ctx: ForCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.forExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpression?: (ctx: ForExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.gotoCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoCommand?: (ctx: GotoCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.gotoStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoStatement?: (ctx: GotoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.haltCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHaltCommand?: (ctx: HaltCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.hangCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHangCommand?: (ctx: HangCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.hangStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHangStatement?: (ctx: HangStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.ifCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCommand?: (ctx: IfCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.jobCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJobCommand?: (ctx: JobCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.jobStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJobStatement?: (ctx: JobStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.jobArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJobArgument?: (ctx: JobArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.jobProcessParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJobProcessParams?: (ctx: JobProcessParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.killCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillCommand?: (ctx: KillCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.killStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillStatement?: (ctx: KillStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.killArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillArgument?: (ctx: KillArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.lockCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockCommand?: (ctx: LockCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.lockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStatement?: (ctx: LockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.lockArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockArgument?: (ctx: LockArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.lockArgument2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockArgument2?: (ctx: LockArgument2Context) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.mergeCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeCommand?: (ctx: MergeCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.mergeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeArgument?: (ctx: MergeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.newCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewCommand?: (ctx: NewCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.newStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewStatement?: (ctx: NewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.openCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenCommand?: (ctx: OpenCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.openStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenStatement?: (ctx: OpenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.quitCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuitCommand?: (ctx: QuitCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.quitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuitStatement?: (ctx: QuitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.readCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadCommand?: (ctx: ReadCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.readStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadStatement?: (ctx: ReadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.readArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadArgument?: (ctx: ReadArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.setCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCommand?: (ctx: SetCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStatement?: (ctx: SetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.setArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetArgument?: (ctx: SetArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.tcommitCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcommitCommand?: (ctx: TcommitCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.throwCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowCommand?: (ctx: ThrowCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.trollbackCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrollbackCommand?: (ctx: TrollbackCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.tryCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCommand?: (ctx: TryCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.tstartCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTstartCommand?: (ctx: TstartCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.useCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseCommand?: (ctx: UseCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.viewCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewCommand?: (ctx: ViewCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.viewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewStatement?: (ctx: ViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.whileCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileCommand?: (ctx: WhileCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.writeCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteCommand?: (ctx: WriteCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.writeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteStatement?: (ctx: WriteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.writeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteArgument?: (ctx: WriteArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.xecuteCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXecuteCommand?: (ctx: XecuteCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.xecuteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXecuteStatement?: (ctx: XecuteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.xeceuteArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXeceuteArgument?: (ctx: XeceuteArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zkillCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZkillCommand?: (ctx: ZkillCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zkillStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZkillStatement?: (ctx: ZkillStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.znspaceCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZnspaceCommand?: (ctx: ZnspaceCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.ztrapCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZtrapCommand?: (ctx: ZtrapCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zwriteCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZwriteCommand?: (ctx: ZwriteCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zwriteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZwriteStatement?: (ctx: ZwriteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zzdumpCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZzdumpCommand?: (ctx: ZzdumpCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zzdumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZzdumpStatement?: (ctx: ZzdumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.printCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintCommand?: (ctx: PrintCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zbreakCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZbreakCommand?: (ctx: ZbreakCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zbreakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZbreakStatement?: (ctx: ZbreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zinsertCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZinsertCommand?: (ctx: ZinsertCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zloadCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZloadCommand?: (ctx: ZloadCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zprintCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZprintCommand?: (ctx: ZprintCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zremoveCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZremoveCommand?: (ctx: ZremoveCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.zsaveCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZsaveCommand?: (ctx: ZsaveCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.systemFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemFunction?: (ctx: SystemFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.localVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariable?: (ctx: LocalVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.globalVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalVariable?: (ctx: GlobalVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.localVariableList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableList?: (ctx: LocalVariableListContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.colonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColonExpression?: (ctx: ColonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.simpleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpression?: (ctx: SimpleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.pc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPc?: (ctx: PcContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.doClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoClass?: (ctx: DoClassContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.doRoutine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoRoutine?: (ctx: DoRoutineContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.doArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoArgument?: (ctx: DoArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.labelDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelDef?: (ctx: LabelDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.methodPublicVariables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodPublicVariables?: (ctx: MethodPublicVariablesContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.methodContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodContent?: (ctx: MethodContentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectScriptParser.labelParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelParameter?: (ctx: LabelParameterContext) => Result;
}

