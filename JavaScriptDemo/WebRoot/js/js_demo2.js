function validateUserName() {
	var name = document.getElementById("txtName").value;
	var reg = /^[a-zA-Z0-9]{3,6}$/;
	var isRight = reg.test(name);
	if (!isRight) {
		alert("录入错误！");
	}
}

function validatePhone() {
	var phone = document.getElementById("txtPhone").value;
	var reg = /^\d{6}$/;
	var isRight = reg.test(phone);
	if (!isRight) {
		alert("录入错误！");
	}
}

function getDateRange(days) {
	var end = new Date();
	var endString = end.toLocaleDateString();
	end.setDate(end.getDate() - days + 1);
	var s = "开始日期为：" + end.toLocaleDateString() + "\n";
	s += "结束日期 为：" + endString;
	alert(s);
}

function myMethod() {
	if (arguments.length == 1) {
		var n = parseInt(arguments[0]);
		alert(n + "的平方为：" + n * n);
	} else if (arguments.length == 2) {
		var n = parseInt(arguments[0]);
		var m = parseInt(arguments[1]);
		var result = m + n;
		alert(n + "与" + m + "的和为：" + result);
	}
}

function sortArray() {
	var array = [ 34, 2, 14, 56, 43 ];
	array.sort(new Function("a", "b", "return a-b;"));
	alert(array.toString());

	array.sort(function(a, b) {
		return b - a;
	});
	alert(array.toString());
}

function simpleCal(str) {
	if (str == "=") {
		var result = eval(document.getElementById("txtData").value);
		document.getElementById("txtData").value = result;

	} else {
		document.getElementById("txtData").value += str;
	}
}

function delFunc() {
	var result = confirm("您确定要删除吗？");
	return result;
}

function showTime() {
	var now = new Date();
	document.getElementById("spanTime").innerHTML = now.toLocaleTimeString();
}

var timer;
function startClock() {
	timer = window.setInterval(showTime, 1000);
}
function stopClock() {
	window.clearInterval(timer);
}

var openTimer;
function openwindowwait() {
	var openFunc = function() {
		window.open("http://www.baidu.com");
	};
	openTimer = window.setTimeout(openFunc, 5000);
}
function cancelOpen() {
	window.clearTimeout(openTimer);
}

var imageArray = [ "rose.jpg", "daffodil.jpg", "apple.jpg", "daisy.jpg" ];
var imageIndex = 1;
var imageTimer;
function startRotate() {
	var rotateFunc = function() {
		var image = document.getElementById("img1");
		image.src = "/JavaScriptDemo/images/" + imageArray[imageIndex];
		if (imageIndex == imageArray.length - 1)
			imageIndex = 0;
		else
			imageIndex++;
	};
	imageTimer = window.setInterval(rotateFunc, 3000);
}
function stopRotate(){
	window.clearInterval(imageTimer);
}