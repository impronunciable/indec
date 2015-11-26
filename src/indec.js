
/**
 * Indec function
 */

function Indec(key, callback=(()=>{})) {
  if(!key) {
    throw new Error('Missing spreadsheet key');
  }

  const url = `https://spreadsheets.google.com/feeds/worksheets/${key}/public/basic?alt=json`;
  _fetch(url, callback);
};

/**
 * Fetch data
 */

function _fetch(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    try {
      const json = JSON.parse(xhr.responseText);
      callback(null, json);
    } catch (e) {
      callback(e, null);
    }
  };
  xhr.send();
}

export default Indec;
