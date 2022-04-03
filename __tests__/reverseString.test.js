import { reverseString } from "../functions/reverseString"

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(reverseString("odin")).toBe("nido");
    expect(reverseString("the odin project 123 #")).toBe("# 321 tcejorp nido eht");
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
    expect(reverseString("")).toBe("");
});