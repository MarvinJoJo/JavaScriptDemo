/**
 * 
 */
function secondMethod() {
	alert("Hello World in script file.");
}

function getSquare() {
	var str = document.getElementById("txtData").value;
	if (isNaN(str))
		alert("��¼����ֵ");else {
		var data = parseFloat(str);
		var result = data * data;
		alert(result);
	}
}

function guessNumber() {
	var result = 10;
	var str = document.getElementById("txtNumber").value;
	if (isNaN(str))
		alert("��¼����ֵ");else {
		var data = parseFloat(str);
		var info = data > result ? "����" : "С��";
		info = data == result ? "�¶���" : info;
		alert(info);
	}
}

function getFac() {
	var result = 1;
	for (var i = 1; i <= 10; i++) {
		result *= i;
	}
	alert("10�Ľ׳�Ϊ��" + result);
}

function searchStringAndReplace() {
	var str = document.getElementById("txtString").value;
	var index = str.indexOf("js", 0);
	while (index > -1) {
		str = str.replace("js", "*");
		index = str.indexOf("js", index + 1);
	}
	document.getElementById("txtString").value = str;
}

function stringByRegex() {
	var str = document.getElementById("txtString").value;
	var result = str.match(/js/gi);
	document.getElementById("txtString").value = str.replace(/js/gi, "*");
	alert("���滻��" + result.length + "����");

}

function operateArray(t) {
	var array = document.getElementById("txtNumbers").value.split(",");
	switch (t) {
	case 1:
		array.reverse();
		break;
	case 2:
		array.sort();
		break;
	case 3:
		array.sort(sortFunc);
		break;

	}
	alert(array.toString());
}

function sortFunc(a, b) {
	return a - b;
}

function getRandomNumber() {
	var min = parseInt(document.getElementById("txtMin").value);
	var max = parseInt(document.getElementById("txtMax").value);
	var ran = Math.random();
	var data = Math.floor(ran * (max - min)) + min;
	alert(data);
}

function calculateDepreciation() {
	var money = parseFloat(document.getElementById("txtPrice").value);
	var rate = parseFloat(document.getElementById("txtRate").value);
	var year = parseInt(document.getElementById("txtYear").value);

	var s = "����   ʣ���ֵ\n";
	for (var i = 1; i <= year; i++) {
		var r = money * Math.pow((1 - rate), i);
		s += i + "    " + r + "    " + r.toFixed(2) + "\n";
	}
	document.getElementById("txtResult").innerHTML = s;
}