var n = document.getElementById('wrappernav');
n.classList.add('is-closed');
function navi() {
	
	if (window.matchMedia("(max-width:48em)").matches && document.getElementById("toggle-nav")==undefined) {			
		n.insertAdjacentHTML('afterBegin','<button id="toggle-nav"><span class="text">Voir les liens</span></button>');

		
		var t = document.getElementById('toggle-nav');  
		t.onclick=function(){
			n.classList.toggle('is-closed');
		}
	}
	if (window.matchMedia("(min-width:48em)").matches && document.getElementById("toggle-nav")) {
		document.getElementById("toggle-nav").outerHTML="";
	}
}

navi();
window.addEventListener('resize', navi);

var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//www.lena-chandelier.me/stats/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
