/**
 * 
 */
function pasta(grain, width, shape, hasEgg) {
	this.grain = grain;
	this.width = width;
	this.shape = shape;
	this.hasEgg = hasEgg;
	this.toString = pastaToString;
	//添加toString的方法
	//注意在函数的名称后面没有括号
	//这个不是对一个函数的应用，而是对函数本身的引用
}
function pastaToString() {
	return "Grain" + this.grain + "\n" + "width" + this.width + "\n" + "Shape"
			+ this.shape + "\n" + "Egg" + Boolean(this.hasEgg);
}

function pastaDemo() {
	var pastaTest = new pasta("wheat", 0.2, "circle", true);
	//console.log()和其他打印消息的方法(info、warn和error)都支持字符串替换(就像C语言中的printf函数)。
	//"pastaTest:%o"--------- %o Javascript 对象 : IE, Chrome, Firefox
    console.info("pastaTest:%o",pastaTest);
	//console.info(pastaTest);
    
    //对原型对象添加属性
    pasta.prototype.foodgroup="carbohydrates";
    
    //使用espando属性
    pastaTest.color="     black      ";
    pastaTest.drycook=7;
    pastaTest.freshcook=1;
    
    console.info("pastaTest.foodgroup:",pastaTest.foodgroup);
    console.info("pastaTest:%o",pastaTest);
    
    var chowFun = new pasta("rice",3,"flat",false);
    console.info("chowFun:%o",chowFun);
    //chowFun 对象或其他现有的pasta对象都没有添加到pastaTest对象的三个新属性
    
    pasta.prototype.trim= function(str){
    	//return str.replace("(.)\\1+", "$1");不行
    	//return str.split(" +");不行
    	return str.replace(/(^\s*)|(\s*$)/g, "");//见最下面解释
    }
    console.info("pastaTest.color:" +pastaTest.color);
    var trimcolor = pastaTest.trim(pastaTest.color);
    console.info("pastaTest.color:" +trimcolor);
 
}




function Student(name) {
	this.name = name;
	this.getName = getName;
	this.toString =toString;
}

function getName() {
	return this.age;
}
function toString() {
	return "student :"+this.name;
}

function Button1() {
	var s = new Student("lilei",20,"asdad","132255454");
	console.debug(s.toString);
	alert(s.getName());
	alert(s.name);
}
function name() {
	
}

/*用正则表达式将前后空格用空字符串替代:replace(/(^\s*)|(\s*$)/g, "") 
标签： 杂谈	分类： 混口饭吃
^表示字符串必须以后面的规则开头, 在这里就是说字符串必须以\s*开头.

\s 是空格的意思, * 表示有0个或多个

\s* 就是有0个或多个空格

(^\s*) 表示的就是以0个空格或者多个空格开头

| 表示或的意思, 也就是满足| 左边的也成立, 满足 | 右面的也成立.

\s*前面说过了

$ 的意思是字符串必须以前面的规则结尾

(\s*$) 的意思就是, 以0个空格或者多个空格结尾

/.../g  是正则表达式的属性, 表示全文匹配, 而不是找到一个就停止.*/
