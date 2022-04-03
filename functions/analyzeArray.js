export function analyzeArray(array) {
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
    return { length, average, min, max };
}