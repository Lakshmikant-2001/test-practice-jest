export function analyzeArray(array) {
    if (!isAllNumbers(array))
        return "";
    const length = array.length;
    const average = array.reduce((prev, curr) => {
        return prev += curr;
    }) / length;
    const min = array.reduce((prev, curr) => {
        return prev < curr ? prev : curr;
    });
    const max = array.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    });
    return { average, min, max, length };
}

function isAllNumbers(array) {
    return array.every((curr) => {
        return !isNaN(curr);
    });
}