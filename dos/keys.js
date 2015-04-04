dE = function(k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
                get : function() {
                    return this.keyCodeVal;
                }
    });     
    Object.defineProperty(oEvent, 'which', {
                get : function() {
                    return this.keyCodeVal;
                }
    });     

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, k, k);
    } else {
        oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
        alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.dispatchEvent(oEvent);
}
function pressKey(k){
	if(isUpper(k)){
		dE(k.charCodeAt(0),false,false,true,false);
	}else{
		dE(false,false,false,false,k.charCodeAt(0));
	}
}
function isUpper(t){
	if(t.toUpperCase() == t){return true;}
	else{return false;}
}
window.onerror = function(a,b,c){
	alert("ERROR -- " + a + " " + b + " " + c + " ");
}