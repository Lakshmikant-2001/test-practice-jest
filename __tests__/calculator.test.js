import { calculator } from "../functions/calculator"

test("calculator ", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(2, 3)).toBe(-1);
    expect(calculator.divide(2, 3)).toBe(0.6666666666666666);
    expect(calculator.multiply(2, 3)).toBe(6);
});