// Function that gets node by XPath
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Which site
site = window.location.origin;

// www.sole24ore.com (deletes the cookies)
if (site == "https://www.ilsole24ore.com"){
  document.cookie = '_pwre' +"=" + 'asd' + ";expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT'
                  + ";domain=.ilsole24ore.com;path=/";
  document.cookie = '_pwrf' +"=" + 'asd' + ";expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT'
                  + ";domain=.ilsole24ore.com;path=/";
  document.cookie = '_pwrh' +"=" + 'asd' + ";expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT'
                  + ";domain=.ilsole24ore.com;path=/";
  document.cookie = '_pwrl' +"=" + 'asd' + ";expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT'
                  + ";domain=.ilsole24ore.com;path=/";
  document.cookie = '_pwrv' +"=" + 'asd' + ";expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT'
                  + ";domain=.ilsole24ore.com;path=/";
}

// repubblica.it
if (site.indexOf("repubblica.it") != -1 && document.getElementById("paywall") != null){
    window.onload = function(){
      articleURL = window.location.origin + window.location.pathname
      ampURL = articleURL + "amp/"

      fetch(ampURL).then(function (response) {
      	return response.text();
      }).then(function (html) {
        var parser = new DOMParser();
      	var doc = parser.parseFromString(html, 'text/html');

      	article = doc.getElementsByClassName("story__text")[0]
        article.querySelectorAll("[subscriptions-section='content-not-granted']")[0].remove()
        article.querySelectorAll("[subscriptions-section='content']")[0].setAttribute("subscriptions-section", "")
        article.className = "story__content"
        article.querySelectorAll("[subscriptions-section='']")[0].className = "story__text"

        document.getElementById("article-body").replaceWith(article)
        document.getElementById("paywall").remove()

      }).catch(function (err) {
      	console.warn('Something went wrong.', err);
      });
    }

}


// rep.repubblica.it
if (site == "https://rep.repubblica.it"){
  // Redirects to the right page
  pathname = window.location.pathname;
  url = "https://rep.repubblica.it/ws/detail" + pathname.substr(4);
  if (pathname.substr(0,4)=="/pwa"){
    window.location.replace(url);
  }

  // Waits until the page is fully loaded
  window.onload = function(){

    // Selects the node to remove and deletes it
    targetremove = getElementByXpath("/html/body/main/article/div[3]/div/div[1]");
    targetremove.parentNode.removeChild(targetremove);

    // Selects the node to fix and edits it
    targetfix =  getElementByXpath("/html/body/main/article/div[3]/div/div");
    targetfix.removeAttribute('subscriptions-section');

  }
}

// Tirreno
if (site == ("https://iltirreno.gelocal.it" || "http://iltirreno.gelocal.it")){

  // Waits until the page is fully loaded
  window.onload = function(){

    articleURL = window.location.origin + window.location.pathname
      if(articleURL.substr(-1) == "/"){
          ampURL = articleURL + "amp/"
      }
      else{
          ampURL = articleURL + "/amp/"
      }
      fetch(ampURL).then(function (response) {
      	return response.text();
      }).then(function (html) {
        var parser = new DOMParser();
      	var doc = parser.parseFromString(html, 'text/html');

      	article = doc.getElementsByClassName("article-body")[0]
        article.querySelectorAll("[amp-access='NOT (showContent)']")[0].remove()
        article.querySelectorAll("[amp-access='showContent']")[0].setAttribute("amp-access-hide", "")
        article.className = "entry_content"
        //article.querySelectorAll("[subscriptions-section='']")[0].className = "entry_content"
  
        document.getElementById("article-body").replaceWith(article)
        document.getElementsByClassName("paywall-adagio")[0].remove()
  
      }).catch(function (err) {
        console.warn('Something went wrong.', err);
      });
    }
}

// Economist
if (site == "https://www.economist.com"){

  // Waits until the page is fully loaded
    window.onload = function(){

    // Selects the node to fix and edits it
    targetfix=getElementByXpath('//*[@id="app-mount"]/div');
    targetfix.removeAttribute('class');

    // Selects the node to remove and deletes it
    targetremove = getElementByXpath('//*[@id="piano__in-line-paywall"]');
    targetremove.parentNode.removeChild(targetremove);

  }
}
