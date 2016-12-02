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

    // 查询用sql
    $strsql="SELECT * FROM  register where username = '%s' and password= '%s'";

    $strsql= sprintf($strsql, $_GET["username"], $_GET["password"]);

    // 执行sql查询
    $result=mysql_db_query($mysql_database, $strsql, $conn);

    $row=mysql_fetch_row($result);

    if($row) {
        echo "登录成功";
    } else {
        echo "您的用户名或者密码错误。";
    }
?>