function loadArticle () {
  const articleId = findGetParameter('id');
  var articleUrl = `./data/data-${articleId}.json`;
  // console.log(articleUrl);
  retrieveData(articleUrl);
}

function findGetParameter (parameterName) {
  let result = null, tmp = [];
  const items = location.search.substr(1).split('&');

  for (const item of items) {
    if (item.split('=')[0] == parameterName)
      result = decodeURIComponent(item.split('=')[1])
  }

  return result;
}

function retrieveData(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      console.log(result);
      buildWebPage(result);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function buildWebPage(result) {
  document.getElementById('article').innerHTML = result.description;
  document.getElementById('article-title').innerHTMl = result.title;
}

loadArticle();
