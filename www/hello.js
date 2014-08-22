var exec = cordova.require('cordova/exec');

var hello = {};

hello.greet = function (successCallback, errorCallback) {
	exec(successCallback, errorCallback, "Hello", "greet", ["bin hier in wurstOrdner..."]);   
};

module.exports = hello;