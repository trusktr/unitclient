/* Copyright 2011 Google Inc. All Rights Reserved. */ (function(){var b=0,c,d,e,g,h,i,j=function(a){a.target="_blank";a.addEventListener("click",function(){window.close()},!1)},m=function(){var a;if(a=d.value.replace(/^\s+|\s+$/g,""))e.innerHTML="Searching...",e.style.display="block",g.style.display="none",h.style.display="none",i.style.display="none",c.disabled=!0,b++,chrome.extension.sendRequest({type:"fetch_html",eventKey:b,query:a},k)},k=function(a){if(a.eventKey==b){if(a.html){i.innerHTML=a.html;for(var l=i.getElementsByTagName("span"),a=0,f;f=l[a];a++)("dct-lnk"==
f.className||"dct-rlnk"==f.className)&&f.addEventListener("click",function(){d.value=this.title?this.title:this.innerHTML;m()},!1);l=i.getElementsByTagName("a");for(a=0;f=l[a];a++)j(f);e.style.display="none";i.style.display="block"}else e.innerHTML="No definition found.",e.style.display="block",g.href="http://www.google.com/search?q="+a.sanitizedQuery,g.innerHTML='Search the web for "'+a.sanitizedQuery+'" \u00bb',g.style.display="block";c.disabled=!1}};
window.initDictPageAction=function(){c=document.getElementById("button");d=document.getElementById("query-field");d.focus();e=document.getElementById("lookup-status");g=document.getElementById("web-search-link");j(g);h=document.getElementById("usage-tip");i=document.getElementById("meaning");j(document.getElementById("options-link"));c.addEventListener("click",m,!1);d.addEventListener("keydown",function(a){13==a.keyCode&&m()},!1);h.innerHTML="Tip: Select text on any webpage, then click the Google Dictionary button to view the definition of your selection.";
h.style.display="block";chrome.tabs.getSelected(null,function(a){chrome.tabs.sendRequest(a.id,{type:"get_selection"},function(a){a.selection&&(d.value=a.selection,m())})})};})();
