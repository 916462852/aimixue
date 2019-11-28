var $span=$(".nav span");
var $img=$(".nav img");
var $li=$(".index li:contains('>')").next();
var $middle=$(".middle");
$middle.hide()
$($middle[0]).show();
$span.click(function(){
	if($(this).html()=="百搭风格"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("百搭风格");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[0]).show();
	}if($(this).html()=="韩版风格"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("韩版风格");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[1]).show();
	}if($(this).html()=="欧美风格"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("欧美风格");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[2]).show();
	}if($(this).html()=="简约风格"){
		$span.css("color","");
		$(this).css("color","red");
		$img.attr("src","");
		$(this).next().attr("src","images/youjiantou.png");
		$li.html("");
		$li.html("简约风格");
		$li.css("color","")
		$li.css("color","red")
		$middle.hide()
		$($middle[3]).show();
	}
})

var $toggle=$(".toggle");
$toggle.click(function(){
	$middle.hide()
	$($middle[4]).show();
})
