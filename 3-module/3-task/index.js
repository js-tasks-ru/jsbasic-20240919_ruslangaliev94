function camelize(str) {
    let camelize = str.split('-');
    let camelized = camelize.map(function (item, index) {
        if (index > 0) {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
        return item;
    });
    return camelized.join('');
}


