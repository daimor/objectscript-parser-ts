import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts';
import { Parser, ParserResult } from './types';
import { ErrorListener } from './tools/errorListener';
import { ObjectScriptLexer } from './antlr/ObjectScriptLexer';
import { ObjectScriptParser } from './antlr/ObjectScriptParser';

export class ObjectScript implements Parser {

  public parse(input: string): ParserResult {
    let errorListener = new ErrorListener();
    let parser = this.buildParser(input, errorListener);

    let tree = parser.code();

    return {
        ast: tree,
        errors: errorListener.errors //.concat(errors)
    };
  }

  private buildParser(input: string, errorListener: ErrorListener): ObjectScriptParser {
    let inputStream = new ANTLRInputStream(input);
    let lexer = new ObjectScriptLexer(inputStream);
    lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);

    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ObjectScriptParser(tokenStream);
    parser.addErrorListener(errorListener);

    return parser;
  }
}
