# INDEC

> Google Spreadsheet to JSON.

## Usage
```js
import indec from 'indec';

indec('0AjAPaAU9MeLFdHUxTlJiVVRYNGRJQnRmSnQwTlpoUXc', (error, data) => console.log(data));
```

## Getting the spreadsheet key:

- In Google Drive, go to the File menu and pick Publish to the web, then click Start publishing. A URL will appear, something like https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html
- The `key` is the part of the url after `key=` and before the next `&`. You'll feed `Indec` with that spreadsheet key.


## API

### Indec#(key, callback)
Fetch data from the google drive spreadsheet given by the key and return as JSON.
- `event` - The name of the event you want to add.
- `listener` - Listener you want to add from given event.

```js
indec('0AjAPaAU9MeLFdHUxTlJiVVRYNGRJQnRmSnQwTlpoUXc', (error, data) => console.log(data));
```

## Installation
```
$ npm install indec
```

## License
MIT license

## Credits

[Tabletop](https://github.com/jsoma/tabletop), because this module is just a simplification for Tabletop.

