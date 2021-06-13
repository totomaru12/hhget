const hhget = require('./hhget')

test('get html head elemnt', () => {
    const hh = hhget.load(`
        <html>
            <head>
                <link rel="icon" href="xxx.ico">
                <meta property="og:image" content="zzz.png">
            </head>
        </html>
    `);

    expect(hhget.get({
        hhSource: hh,
        element: 'link',
        filterKey: 'rel',
        filterValue: 'icon',
        targetKey: 'href',
    })).toEqual('xxx.ico');

    expect(hhget.get({
        hhSource: hh,
        element: 'meta',
        filterKey: 'property',
        filterValue: 'og:image',
        targetKey: 'content',
    })).toEqual('zzz.png');

    expect(hhget.get({
        hhSource: hh,
        element: 'dummy_element',
        filterKey: 'dummy_key',
        filterValue: 'dummy_value',
        targetKey: 'dummy_taget',
    })).toEqual(undefined);
});
