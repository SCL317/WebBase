/**
 * 
 */
function pasta(grain, width, shape, hasEgg) {
	this.grain = grain;
	this.width = width;
	this.shape = shape;
	this.hasEgg = hasEgg;
	this.toString = pastaToString;
	// 添加toString的方法
	// 注意在函数的名称后面没有括号
	// 这个不是对一个函数的应用，而是对函数本身的引用
}
function pastaToString() {
	return "Grain" + this.grain + "\n" + "width" + this.width + "\n" + "Shape"
			+ this.shape + "\n" + "Egg" + Boolean(this.hasEgg);
}

function pastaDemo() {
	var pastaTest = new pasta("wheat", 0.2, "circle", true);
	// console.log()和其他打印消息的方法(info、warn和error)都支持字符串替换(就像C语言中的printf函数)。
	// "pastaTest:%o"--------- %o Javascript 对象 : IE, Chrome, Firefox
	console.info("pastaTest:%o", pastaTest);
	// console.info(pastaTest);

	// 对原型对象添加属性
	pasta.prototype.foodgroup = "carbohydrates";

	// 使用expando属性
	pastaTest.color = "     black      ";
	pastaTest.drycook = 7;
	pastaTest.freshcook = 1;

	console.info("pastaTest.foodgroup:", pastaTest.foodgroup);
	console.info("pastaTest:%o", pastaTest);

	var chowFun = new pasta("rice", 3, "flat", false);
	console.info("chowFun:%o", chowFun);
	// chowFun 对象或其他现有的pasta对象都没有添加到pastaTest对象的三个新属性

	pasta.prototype.trim = function(str) {
		// return str.replace("(.)\\1+", "$1");不行
		// return str.split(" +");不行
		return str.replace(/(^\s*)|(\s*$)/g, "");// 见最下面解释
	}
	console.info("pastaTest.color:" + pastaTest.color);
	var trimcolor = pastaTest.trim(pastaTest.color);
	console.info("pastaTest.color:" + trimcolor);

}

function Student(name) {
	this.name = name;
	this.getName = getName;
	this.toString = toString;
}

function getName() {
	return this.age;
}
function toString() {
	return "student :" + this.name;
}

function Button1() {
	var s = new Student("lilei", 20, "asdad", "132255454");
	console.debug(s.toString);
	alert(s.getName());
	alert(s.name);
}
function objDemo() {
	var myObject = new Object();
	myObject.name = "james";
	myObject.age = "20";
	myObject.phone = "1238 798";

	// myObject.100=100;
	myObject["not a valid identifier"] = "This is the property value";
	myObject[100] = "100";

	// 枚举（循环）对象的所有属性
	for (prop in myObject) {
		document.write("The property " + prop + " is " + myObject[prop]
				+ "<br/>");
	}
}

function arrayDemo() {
	var myArray = new Array(3);
	myArray[0] = "Hello";
	myArray[1] = 42;
	myArray[2] = new Date(2000, 1, 1);
	console.info(myArray.leng);
	myArray.expando = "jscript!";
	myArray["anther expando"] = "Windows";
	// 仍然显示3 因为两个expando属性，并不影响长度。
	// window.alert(myArray.length);
	// window.alert("myArray.expando" +myArray.expando);
	// window.alert("myArray[ expando]"+myArray[ expando]);
	for ( var prop in myArray) {
		document.write("prop " + prop + " is " + myArray[prop] + " <br/>");
	}
}
function withDemo() {
	var x, y;
	with (Math) {
		x = cos(3 * PI) + sin(LN10);
		y = tan(14 * E);
	}
	console.info("x= " + x + ", y=" + y);

	var m, n;
	m = Math.cos(3 * Math.PI) + Math.sin(Math.LN10);
	n = Math.tan(14 * Math.E);
	console.info("m= " + m + ", n=" + n);
}

function screenTest() {
	if (screen.width <= 1440 || screen.colorDepth <= 24) {
		var msg = "本网站最佳浏览模式为1400*900*256";
		console.info(msg);
	}
}

function navigatorTest() {
	var len = navigator.plugins.length;
	with (document) {
		write("你的浏览器共支持 " + len + "种外挂插件：<BR>");
		write("TABLE BORDER=0>");
		write("<CAPTION>外挂插件清理</CAPTION>");
		write("<TR><TH><TH>名称<TH>描述<TH>文件名");
		for (var i = 0; i < len; i++)
			write("<TR><TD>" + i + "<TD>" + navigator.plugins[i].name
					+ "<TD>" + navigator.plugins[i].description
					+ "<TD>" +navigator.plugins[i].filename)+"<br/>";
	}
}

function cfm() {
	if (confirm("确定关闭？")) {
		// 关闭窗口这两种形式都可以
		// window.close()
		self.close();
	} else {
		return false;
	}
}

/*
 * 用正则表达式将前后空格用空字符串替代:replace(/(^\s*)|(\s*$)/g, "")
 * ^表示字符串必须以后面的规则开头, 在这里就是说字符串必须以\s*开头.
 * 
 * \s 是空格的意思, * 表示有0个或多个
 * 
 * \s* 就是有0个或多个空格
 * 
 * (^\s*) 表示的就是以0个空格或者多个空格开头 | 表示或的意思, 也就是满足| 左边的也成立, 满足 | 右面的也成立.
 * 
 * \s*前面说过了 $ 的意思是字符串必须以前面的规则结尾
 * 
 * (\s*$) 的意思就是, 以0个空格或者多个空格结尾
 * 
 * /.../g 是正则表达式的属性, 表示全文匹配, 而不是找到一个就停止.
 */
