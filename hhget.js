const cheerio = require('cheerio')

exports.load = (html) => {
    const chio = cheerio.load(html)
    return {
        cheerio: chio,
    };
}

exports.get = ({hhSource, element, filterKey, filterValue, targetKey}) => {
    if (!hhSource.cheerio) {
        console.error('hhSource does not have valid cheerio data. make sure call load function before call this function.');
        return undefined;
    }
    return hhSource.cheerio(`${element}[${filterKey}=${filterValue}]`).attr(targetKey)
}
