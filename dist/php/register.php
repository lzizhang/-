<?php
	header("content-type:text/html;charset=utf-8");
	$db_hostname="localhost";
	$db_username="root";
	$db_password="root";
	$db_name="db_1802";
	$conn=new mysqli($db_hostname,$db_username,$db_password,$db_name);
	if($conn->connect_errno){
		die("连接失败".$conn->connect_error);
	}
	$conn->query("set names utf-8");
	$username=$_REQUEST["username"];
	$password=$_REQUEST["password"];
	$sql="INSERT INTO `damaijie`(`username`, `password`) VALUES ('$username','$password')";
	$rows=mysqli_query($conn,$sql);
	if(!$rows){
		echo json_encode(array(
			"status"=>0,
			"info"=>"注册失败"
		));
	}else{
		echo json_encode(array(
			"status"=>1,
			"info"=>"注册成功"
		));
	}
?>