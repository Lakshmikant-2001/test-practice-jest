import { caesarCipher } from "../functions/caesarCipher"

test("caesar cipher test", () => {
    expect(caesarCipher("abcd", 1)).toBe("bcde");
    expect(caesarCipher("Az !", 1)).toBe("ba !");
    expect(caesarCipher("", 1)).toBe("");
});