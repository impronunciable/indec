'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Indec function
 */

function Indec(key) {
  var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

  if (!key) {
    throw new Error('Missing spreadsheet key');
  }

  var url = 'https://spreadsheets.google.com/feeds/worksheets/' + key + '/public/basic?alt=json';
  _fetch(url, callback);
};

/**
 * Fetch data
 */

function _fetch(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    try {
      var json = JSON.parse(xhr.responseText);
      callback(null, json);
    } catch (e) {
      callback(e, null);
    }
  };
  xhr.send();
}

exports.default = Indec;
