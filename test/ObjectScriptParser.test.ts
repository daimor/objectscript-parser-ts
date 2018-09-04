import { ObjectScript } from "../src/objectscript";

import * as assert from "assert";

describe("ObjectScriptParser", () => {
  let parser = new ObjectScript();
  describe("will end without errors", () => {
    it("when receives an empty input", () => {
      let result = parser.parse(``);
      assert.equal(result.errors.length, 0);
    });

    it("when receives a valid objectscript line", () => {
      let result = parser.parse(`A  B:C  D E F G=H:I:J K:L M N O,P Q:R  S T=UVW X YZ\nE`);
      assert.equal(result.errors.length, 0);
      assert.equal(result.ast.childCount, 11);
      assert.equal(result.ast.children[0].text, 'A');
      assert.equal(result.ast.children[1].text, '  B:C');
      assert.equal(result.ast.children[2].text, '  D E');
      assert.equal(result.ast.children[3].text, ' F G=H:I:J ');
      assert.equal(result.ast.children[4].text, 'K:L M');
      assert.equal(result.ast.children[5].text, ' N O,P');
      assert.equal(result.ast.children[6].text, ' Q:R');
      assert.equal(result.ast.children[7].text, '  S T=UVW');
      assert.equal(result.ast.children[8].text, ' X YZ');
      assert.equal(result.ast.children[9].text, '\n');
      assert.equal(result.ast.children[10].text, 'E');
    });

    it("will show error", () => {
      let result = parser.parse(` do test set var`);
      assert.equal(result.errors.length, 1);
      assert.equal(result.errors[0].line, 0);
      assert.equal(result.errors[0].start, 9);
      assert.equal(result.errors[0].message, 'no viable alternative at input \'set\'');
    });
  });
});
