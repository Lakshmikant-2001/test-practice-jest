export function reverseString(str) {
    if (!str)
        return "";
    return str.split("").reverse().join("");
}