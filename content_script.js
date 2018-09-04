// Redirects to the right page
pathname = window.location.pathname;
url = "https://rep.repubblica.it/ws/detail" + pathname.substr(4);
if (pathname.substr(0,4)=="/pwa"){
window.location.replace(url);
}

// Waits until the page is fully loaded
setTimeout(function(){

// Function that gets node by XPath
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Selects the node to remove and deletes it
targetremove = getElementByXpath("/html/body/main/article/div[3]/div/div[1]");
targetremove.parentNode.removeChild(targetremove);

// Selects the node to fix and edits it
targetfix =  getElementByXpath("/html/body/main/article/div[3]/div/div");
targetfix.removeAttribute('amp-access-hide');

}, 4000);


