import { analyzeArray } from "../functions/analyzeArray";

test("AnalyzeArray array of numbers and returns an object: average, min, max, and length.", () => {
    expect(analyzeArray([1, 2, 3])).toMatchObject({ average: 2, min: 1, max: 3, length: 3 });
    expect(analyzeArray([-3, 1, 0, 12])).toMatchObject({ average: 2.5, min: -3, max: 12, length: 4, });
    expect(analyzeArray([-3, 1, 0, "a"])).toBe("");
});