<?php
	// 设定头信息
	header("Content-Type: text/html;charset=utf-8");
	
	    $mysql_server_name="localhost"; //数据库服务器名称(IP也可以)
	    $mysql_username="root"; // 连接数据库用户名
	    $mysql_password=""; // 连接数据库密码
	    $mysql_database="test"; // 数据库的名字
	
	    // 连接到数据库
	    $conn=mysql_connect($mysql_server_name, $mysql_username,
	                        $mysql_password);
	
	    // 插入用sql---`test`.`users2`表名对应改成你自己写的表名
	    $strsql="INSERT INTO `test`.`register`
		(
		`username`,
		`password`)
		VALUES
		(
		'%s',
		'%s');";
		// 替换里面的变量
		// sprintf类似于js中的replace方法
		// $_GET["xxx"] 从url里面取出来参数值 xxx是参数名(key)
	    $strsql= sprintf($strsql, $_GET["username"], $_GET["password"]);
	   
	
		//
		//echo $strsql;
	    // 执行sql查询
	    $result=mysql_db_query($mysql_database, $strsql, $conn);
	    if($result) {
	        // echo 类似于document.wirte
	        echo "ok";
	    } else {
	        echo "no";
	    }
