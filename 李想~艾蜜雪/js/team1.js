var $span=$(".nav span");
var $img=$(".nav img");
var $li=$(".index li:contains('>')").next();
var $middle=$(".middle");
$middle.hide()
$($middle[0]).show();
$span.click(function(){
	if($(this).html()=="刘清扬"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("刘清扬");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[0]).show();
	}if($(this).html()=="韩璐璐"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("韩璐璐");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[1]).show();
	}if($(this).html()=="周翔宇"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("周翔宇");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[2]).show();
	}if($(this).html()=="罗峥"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("罗峥");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[3]).show();
	}
})