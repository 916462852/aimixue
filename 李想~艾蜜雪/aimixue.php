<?php
$conn=mysqli_connect("127.0.0.1","root","","aimixue",3306);
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT * FROM news ORDER BY id DESC LIMIT 0,4";
$rs=mysqli_query($conn,$sql);
$arr=[];
	while(($row=mysqli_fetch_row($rs))!=null){
		array_push($arr,$row) ;
	}
	echo(json_encode($arr));
?>