/**
 * 
 */
function NVGClose() {
	window.close();
}
function myInfo() {
	var args = myInfo.arguments.length;
	console.info("args " + args);

	var array = [ "22", "asd", "哈哈哈", 123, "十大"]; // 这里的值也是用，风格
	for ( var index in array) {
		console.info(index + "----" + array[index]);
	}
}