/**
 * 
 */

function hiddenTest() {
	$('p:hidden').show();
}
function visibleTest() {
	$('p:visible').hide();
}

function containsTest() {
	$('li:contains(to)').css('color', 'blue'); // 这边的css要小写注意大小写和符号区分
}
function hasTest() {
	$('li:has(span)').css('color', 'red');
}
function attributeTest() {
	// $('input[class=sss]').val('world');
	$('input[id=aaa]').val('hello');
}
function inputTest() {
	console.log($('#my_form :text'));
}
function selectedTest() {
	console.log($('#sel :selected'));
}

// attr在只设置一个参数的时候表示获取，两个参数的时候表示设置属性
function attrTest() {
	// console.log($('#my_form').attr('action'));
	// console.log($('#my_form').attr('action','poo.php'));
	console.log($('#my_form').attr('action'));
	$('#my_form').attr('action', 'bar.php');
	console.log($('#my_form').attr('action'));
}
// removeAttr()来删除一个属性
function removeAttrTest() {
	$('#my_form').removeAttr('method');
	console.log($('#my_form').attr('method'));
}

function htmlTest() {
	console.log($('#htmltest').html());
	$('#htmltest').html('html修改后');
	console.log($('#htmltest').html());
	$('#htmltest').html('<b>html修改后</b>');
	console.log($('#htmltest').html());
}
function textTest() {
	console.log($('#texttest').text());
	$('#texttest').text('html修改后');
	console.log($('#texttest').text());
	$('#texttest').text('<b>html修改后</b>');
	console.log($('#texttest').text());
}

function cssTest() {
	$('#csstest').css('color', 'red');
	console.log($('#csstest').css('color'));
}

function add_remove_ClassTest() {
	$('.c1').addClass('c2 c3'); // class中添加了两个新的值c2 c3
	console.log(document.getElementById('idc'));
	$('.c1').removeClass("c2"); // 这里只移除了c2
	console.log(document.getElementById('idc'));
}

// append我们可以往一个元素的尾部中追加内容 元素的内部
function appendTest() {
	$('#app').append('######'); // append 尾部添加
	$('#app').append('<b>添加的文件</b>');// 这样添加也会直接识别标签加粗字体
	console.log($('#app'));
	console.log(document.getElementById('app'));
}

// prepend我们可以往一个元素的首部中追加内容 元素的内部
function prependTest() {
	$('#app').prepend('*****'); // perpend 首部添加
	$('#app').prepend('<b style="color:red">添加的文件</b>');// 这样添加也会直接识别标签加粗字体
}

// 在当前元素平级的位置，前方或者后方添加内容，我们则需要使用after和before
function after_beforeTest() {
	$('#ab').after('<b>这个是after添加的</b>'); // 当前元素平级的位置 后添加新的标签
	$('#ab').before('<b>这个是before添加的</b>'); // 当前元素平级的位置 前添加新的标签
}

function cloneTest() {
	var clo = $('#int').clone();
	$('#int').after(clo);
}

//使用replaceWith是将整个标签替换成其他内容
function replaceWithTest() {
	// $('#rw').replaceWith('不带标签的是这样'); 这样替换的是纯文本没有标签
	$('#rw').replaceWith('<b>带标签的是这样</b>'); // 替换带有标签的内容
}

//wrap用来给某个元素外部再包围一对指定的标签
//wrapInner的作用是在元素内部包围一对标签
function wrap_wrapInnerTest() {
	$('#wrap_wrapInner').wrap('<b></b>'); //这个是在元素外部再包围一对指定的标签  实例是加粗
	$('#wrap_wrapInner').wrapInner('<span style="color:red"></span>');
	//是在元素内部包围一对标签 实例是让颜色变红
}

//调用remove方法，可以将选择到的元素从页面中删除
function removeTest() {
	$('li').remove('.rem');//注意remove里的如果是class需要有点. 如果是id需要有# 以此类推
}

//empty用来清空当前选择器选择到的元素下所有的子元素
function emptyTest() {
	$('p').empty();
	console.log(document.getElementsByTagName('P')[0]);
}