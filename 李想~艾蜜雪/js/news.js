//var xhr1=getXhr();
//			xhr1.open("GET","aimixue.php");
//			xhr1.send(null);
//			xhr1.onreadystatechange=function(){
//				if(xhr1.readyState==4&&xhr1.status==200){
//				var arr1=JSON.parse(xhr1.responseText);
//				arr1.reverse();
//				var middle=document.getElementsByClassName("middle")[0];
//				var choose=document.getElementsByClassName("choose")[0];
//					for(var i=0;i<arr1.length;i++){
//						var ul=document.createElement("ul")	;
//						ul.className="date";
//						var li1=document.createElement("li");
//						var p1=document.createElement("p");
//						if(arr1[i][1].slice(0,3)=="ONE"){
//							p1.innerHTML=arr1[i][1].slice(0,3)
//						}else if(arr1[i][1].slice(0,3)=="TWO"){
//							p1.innerHTML=arr1[i][1].slice(0,3)
//						}else if(arr1[i][1].slice(0,5)=="THREE"){
//							p1.innerHTML=arr1[i][1].slice(0,5)
//						}else{
//							p1.innerHTML=arr1[i][1].slice(0,4)
//						}
//						var p2=document.createElement("p")	;
//						p2.innerHTML=arr1[i][1].slice(-4)
//						console.log(arr1[i][1].slice(-4))
//						var li2=document.createElement("li");
//						var p3=document.createElement("p");
//						p3.innerHTML=arr1[i][2];
//						var p4=document.createElement("p");
//						p4.innerHTML=arr1[i][3];
//						li1.appendChild(p1)
//						li1.appendChild(p2)
//						li2.appendChild(p3)
//						li2.appendChild(p4)
//						ul.appendChild(li1)
//						ul.appendChild(li2)
//						middle.insertBefore(ul,choose)
//					}
//					
//					
//					
//				}
//			}
//function getXhr(){
//		var xhr=null;
//		if(XMLHttpRequest){
//			xhr=new XMLHttpRequest();
//		}else{
//			xhr=new ActiveXObject("Microsoft.XMLHttp");
//		}
//		return xhr;
//	}

var $p1=$("p:contains('春日里的连衣裙，仙气又撩人')");
$p1.click(function(){
	location="news2.html"
})
var $p2=$("p:contains('时髦客不爱裙装爱裤装，她们美得不一样')");
$p2.click(function(){
	location="news1.html"
})
var $p3=$("p:contains('夏日，吹起，运动风')");
$p3.click(function(){
	location="news4.html"
})
var $p4=$("p:contains('美丽说，我把春天献给你')");
$p4.click(function(){
	location="news3.html"
})