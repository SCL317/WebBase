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
    	return str.replace(/(^\s*)|(\s*$)/g, "");
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
