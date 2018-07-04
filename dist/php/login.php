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
	$sql="SELECT * FROM `damaijie` WHERE username='$username'";
	$result=mysqli_query($conn,$sql);
	$n=mysqli_num_rows($result);
	if(!$n){
		echo json_encode(array(
			"status"=>0,
			"info"=>"用户名不存在"
		));
	}else{
		$data = mysqli_fetch_assoc($result);
		if($data["username"]==$username &&$data["password"]==$password){
			echo json_encode(array(
			"status"=>2,
			"info"=>"登录成功"
		));
		}else{
			echo json_encode(array(
			"status"=>1,
			"info"=>"密码错误"
		));
		}
	}
?>