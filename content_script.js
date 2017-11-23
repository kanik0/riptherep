setTimeout(function(){

a=document.querySelectorAll('news-app');
b=a[0].shadowRoot;
c=b.childNodes[17];
d=c.childNodes[3];
e=d.shadowRoot.childNodes[2];
f=e.childNodes[1];
g=f.childNodes[1];
h=g.childNodes[1];
i=h.shadowRoot.childNodes[11];
l=i.childNodes[8];
m=l.childNodes[0];
n=m.childNodes[3];
o=n.childNodes[0];
targetremove=o.childNodes[0];
targetfix=o.childNodes[1];

targetremove.parentNode.removeChild(targetremove);
targetfix.removeAttribute('amp-access-hide');
}, 2200);

