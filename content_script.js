// Waits until the page is fully loaded
window.onload = function(){
    // Moves to the nodes that must be fixed
    newsapp_node = document.querySelectorAll('news-app');
    temp0 = newsapp_node[0].shadowRoot;
    ironlazypages_node = temp0.querySelectorAll('iron-lazy-pages')[0];
    newsarticle_node = ironlazypages_node.querySelectorAll('news-article')[0];
    divampdochost_node = newsarticle_node.shadowRoot.querySelectorAll('div.amp-doc-host')[0];
    temp1 = divampdochost_node.shadowRoot;
    article_node = temp1.querySelectorAll('div.detail-article_body')[0]
    
    targetremove_node = article_node.querySelectorAll('[amp-access = "NOT (showContent)"]')[0];
    targetfix_node = article_node.querySelectorAll('[amp-access = "showContent"]')[0];
    
    // Fixes the nodes
    targetremove_node.parentNode.removeChild(targetremove_node);
    targetfix_node.removeAttribute('amp-access-hide');
};

