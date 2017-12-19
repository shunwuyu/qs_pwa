function retrieveData (url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      buildWebPage(result);
    }
  };

  xhttp.open('GET', url, true);
  xhttp.send();
}

function buildWebPage(result) {
  document.getElementById('latest').innerHTML =
   result.latestNews.map(news => `
    <h2>
      <a href="./article.html?id=${news.id}">${news.title}</a>
    </h2>
    <p>${news.description}</p>
  `);
}

function loadLatestNews () {
  const dataUrl = './data/latest.json';
  var result = retrieveData(dataUrl);
}
loadLatestNews();