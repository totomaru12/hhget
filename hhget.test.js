const hhget = require('./hhget')

test('get html head elemnt', () => {
    const hh = hhget.load(`
        <html>
            <head>
                <link rel="icon" href="xxx.ico">
            </head>
        </html>
    `);

    expect(hhget.get({
        hhSource: hh,
        element: 'link',
        filterKey: 'rel',
        filterValue: 'icon',
        targetKey: 'href',
    })).toEqual(['xxx.ico']);
});
