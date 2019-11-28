var $span=$(".nav span")
var $img=$(".nav img")
var $li=$(" .index li:contains('>')").next();
var $middle1=$(".middle1");
var $middle=$(".middle");
console.log($li)
$span.click(function(){
	if($(this).html()=="发展历程"){
		$span.css("color","")
		$(this).css("color","red");
		$img.attr("src","")
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("发展历程");
		$middle1.show();
		$middle.hide();
	}else{
		$span.css("color","")
		$(this).css("color","red");
		$img.attr("src","")
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("品牌简介");
		$middle1.hide();
		$middle.show();
	}
})

