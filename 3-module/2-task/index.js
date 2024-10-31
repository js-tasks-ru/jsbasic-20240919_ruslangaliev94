function filterRange(arr, a, b) {

    let filtered = arr.filter(function (element) {
        return a <= element && element <= b
    });

    return filtered;
}
