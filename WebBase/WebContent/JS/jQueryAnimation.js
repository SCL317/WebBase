/**
 * 
 */
function showTest() {
	$('#anim').show('slow', function() {
		alert("显示成功");
	})
}
function hideTest() {
	$('#anim').hide('slow', function() {
		alert("隐藏成功");
	})
}

// $('#anim').style = "display: none" ||
function show_hideTest() {
	if ($('#inp').val() == "内容显示") {
		$('#anim').show('slow', function() {
			// console.log(document.getElementById('inp'));
			//注意console.log在这个位置和在下面位置的区别
		})
		$('#inp').val('内容隐藏');//注意这个内容在function里和外的区别
	}
	// else if ($('#inp').val("内容隐藏")) {//这种的不是判断是赋值
	else {
		$('#anim').hide('slow', function() {
		})
		$('#inp').val('内容显示');
	}
	console.log(document.getElementById('anim'))
	console.log(document.getElementById('inp'))
}


function moveTest() {
	$('#move').animate({
		 left: '+=100px',
	}, 3000,function(){ 
		$('#move').animate({
			 left: '-=100px',
		}, 3000);});
	}

function moveTest2() {
	$('#move2').animate({
		 left: '+=100px',
		 top:'+=100px',
	}, 3000,function(){ 
		$('#move2').animate({
			 left: '-=100px',
			 top:'-=100px'
		}, 3000);});
	}