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


// rep.repubblica.it
if (site == "https://rep.repubblica.it"){
  // Redirects to the right page
  pathname = window.location.pathname;
  url = "https://rep.repubblica.it/ws/detail" + pathname.substr(4);
  if (pathname.substr(0,4)=="/pwa"){
    window.location.replace(url);
  }

  // Waits until the page is fully loaded
  setTimeout(function(){

    // Selects the node to remove and deletes it
    targetremove = getElementByXpath("/html/body/main/article/div[3]/div/div[1]");
    targetremove.parentNode.removeChild(targetremove);

    // Selects the node to fix and edits it
    targetfix =  getElementByXpath("/html/body/main/article/div[3]/div/div");
    targetfix.removeAttribute('subscriptions-section');

  }, 4000);
}

// Tirreno
if (site == ("http://iltirreno.gelocal.it" || "https://iltirreno.gelocal.it")){

  // Waits until the page is fully loaded
    setTimeout(function(){

    // Selects the node to remove and deletes it
    targetremove = getElementByXpath('//*[@id="container"]/div[3]/article/div/div[3]/div');
    targetremove.parentNode.removeChild(targetremove);

    // Selects the node to fix and edits it
    targetfix=getElementByXpath('//*[@id="container"]/div[3]/article/div/div[3]/span');
    targetfix.removeAttribute('style');

  }, 4000);
}

// Economist
if (site == "https://www.economist.com"){

  // Waits until the page is fully loaded
    setTimeout(function(){

    // Selects the node to fix and edits it
    targetfix=getElementByXpath('//*[@id="app-mount"]/div');
    targetfix.removeAttribute('class');

    // Selects the node to remove and deletes it
    targetremove = getElementByXpath('//*[@id="piano__in-line-paywall"]');
    targetremove.parentNode.removeChild(targetremove);

  }, 1500);
}

// Limes (This works, but it's wrong. Move to background.js)
if (site == ("http://www.limesonline.com" || "https://www.limesonline.com")){
  chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    //urls: ["<all_urls>"],
    urls: ["*://www.repstatic.it/minify/sites/limesonline/www/common/*"],
    types: ["script"]
  },
  ["blocking"]
  );
}
