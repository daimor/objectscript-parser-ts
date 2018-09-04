export interface Parser {
  parse(input: string): ParserResult;
}

export interface ParserResult {
  ast: any;
  errors: ParserError[];
}

export interface ParserError {
  line: number;
  start: number;
  end: number;
  message: string;
  level: ParseErrorLevel;
}

export enum ParseErrorLevel {
  ERROR,
  WARNING
}
