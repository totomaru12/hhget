# hhget

- hhget is javascript library which can get html header element in simple way

## usage

```js
const hhget = require('./hhget');

const hh = hhget.load(`
    <html>
        <head>
            <link rel="icon" href="xxx.ico">
        </head>
    </html>
`);

const href = hhget.get({
    hhSource: hh,
    element: 'link',
    filterKey: 'rel',
    filterValue: 'icon',
    targetKey: 'href',
});

console.log(href); // xxx.ico
```

## restriction

this library can't handle maltiple items filtered by key like the below case.

```js
const hh = hhget.load(`
    <html>
        <head>
            <link rel="icon" href="xxx.ico" size="32x32">
            <link rel="icon" href="yyy.ico" size="64x64">
        </head>
    </html>
`);

const href = hhget.get({
    hhSource: hh,
    element: 'link',
    filterKey: 'rel',
    filterValue: 'icon',
    targetKey: 'href',
});

// href becomes "xxx.ico"
// this library can't get yyy.ico""
```

## setup

```terminal
yarn
```

## test

```terminal
yarn test
```
