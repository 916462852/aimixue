
var j=0;
var banner_img=document.getElementsByClassName("banner_img")[0];
var imgs=banner_img.getElementsByTagName("img");
var banner=document.getElementsByClassName("banner")[0];
var li=banner.getElementsByTagName("li");
for(var i=0;i<li.length;i++){
	li[i].onclick=function(){
		j=this.getAttribute("lx");
		for(var i=0;i<imgs.length;i++){
		imgs[i].className="";
		li[i].className="";
		}
		imgs[j].className="active";
		li[j].className="active";
	}
}
function f1(){
	j++;
	if(j==3){
		j=0
	}
for(var i=0;i<imgs.length;i++){
	imgs[i].className="";
	li[i].className="";
	}
	imgs[j].className="active";
	li[j].className="active";
}
timer1=setInterval(function(){
	f1();
},2000);
for(var i=0;i<imgs.length;i++){
	imgs[i].onmouseover=function(){
	clearInterval(timer1);
	timer1=null;
	}
	imgs[i].onmouseout=function(){
		timer1=setInterval(function(){
			f1();
			},2000);
	}
}
var content=document.getElementsByClassName("content")[0];
var img=content.getElementsByTagName("img");
var lis=content.getElementsByTagName("li");
var arr=["images/服装_11.png","images/服装_13.png","images/服装_18.png","images/服装_21.png"]
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		clearInterval(timer);
		timer=null;
		var e =this;
		e.children[0].children[0].style.transform="scale(1.2) rotate(360deg)";
		timer2=setInterval(function(){
		console.log(e);
		var first=arr.shift();
		arr.push(first);
		for(var i=0;i<arr.length;i++){
		e.children[0].children[0].src=arr[i]
		}
		},3000)
	}
	lis[i].onmouseout=function(){
		for(var i=0;i<img.length;i++){
		img[i].style.transform="scale(1)rotate(-360deg)"
		}
		clearInterval(timer2);
		timer2=null;
		f2();
		}
}
function f2(){
timer=setInterval(function(){
	var first=arr.shift();
	arr.push(first);
	for(var i=0;i<arr.length;i++){
		img[i].src=arr[i]
	}
},3000);	
}
f2();

