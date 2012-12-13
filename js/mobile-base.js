var userAgent = navigator.userAgent.toLowerCase();
 
var browser = {
    msie    : /msie/.test( userAgent ) && !/opera/.test( userAgent ),
    safari  : /webkit/.test( userAgent ),
    firefox : /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ),
    opera   : /opera/.test( userAgent )
};   
 

if( browser.msie ){ //IE
  //alert("ie");
	document.write('<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />');
	document.createElement("header");
	document.createElement("section");
	document.createElement("article");
	document.createElement("footer");
	document.createElement("menu");
	document.createElement("nav");
 //  document.write('IEmeta')
} else if ( browser.safari ){ //Chrome || Safari
 // alert("Chrome Safari");
 document.write('<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />')
 } else if ( browser.opera ){ // Opera
  // alert("opera");
document.write('<meta name="viewport" content="user-scalable=no, initial-scale=0.75, maximum-scale=0.75, minimum-scale=0.75" />')
   } else { 
 // alert("etc");
document.write('<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no " />')
}

function hideURLbar(){  window.scrollTo(0,1); }