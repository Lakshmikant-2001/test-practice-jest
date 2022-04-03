import { capitalize } from "../functions/capitalize"

test("A capitalize function that takes a string and returns it with the first character capitalized", ()=> {
    expect(capitalize("o")).toBe("O");
    expect(capitalize("odin")).toBe("Odin");
    expect(capitalize("ODIN")).toBe("ODIN");
    expect(capitalize("the odin project")).toBe("The odin project");
    expect(capitalize("123")).toBe("123");
    expect(capitalize(null)).toBe("");
    expect(capitalize(undefined)).toBe("");
    expect(capitalize("")).toBe("");
});