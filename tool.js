var e = function (Selector) {
	return document.querySelector(Selector)
} 

var bindEvent = function(element,eventName,callback){
element.addEventListener(eventName,callback)
}
var log = function() {
    console.log.apply(console, arguments)
}
