// Limesonline

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "http://www.repstatic.it/minify/sites/limesonline/www/common/common.cache.php?name=common_js&v=1" || details.url == "https://www.repstatic.it/minify/sites/limesonline/www/common/common.cache.php?name=common_js&v=1" )
            return {redirectUrl: "http://www.mysite.com/js/library_dev.js" };
    },
    {urls: ["*://www.repstatic.it/minify/sites/limesonline/*"]},
    ["blocking"]);
