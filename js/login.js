$(function() {
	//鼠标以上关注利群 显示二维码
	$(".attention").mouseover(function(){
		$("#QRcode").css("display","block");
	});
	$(".attention").mouseout(function(){
		$("#QRcode").css("display","none");
	});
	
	$(".catagories").mouseover(function() { //鼠标移上全部商品分类 显示所有分类
		$("#menu").css("display", "block");
	});
	$("#menu .worldshop").parent().mouseover(function() { //鼠标移上全球购 显示所有子分类
		$("#menu .pop").css("display", "block");
	});
	$("#menu .worldshop").parent().mouseout(function() {
		$("#menu .pop").css("display", "none");
	});
	$("#menu .pop").mouseleave(function() {
		$("#menu .pop").css("display", "none");
		$("#menu").css("display", "none");
	});
	$("#menu>ul").mouseleave(function() {
		$("#menu").css("display", "none");
	});

	//登陆
	$("#loginBtn").click(function() {
		if ($("#idNumber").val() == "") {
			alert("请输入用户名或手机");
		} else if ($("#pw").val() == "") {
			alert("请输入密码");
		} else {
			$.get("../php/login.php?username=" + $("#idNumber").val() + "&password=" + $("#pw").val(), function(res) {
					if (res == "登录成功") {
						alert("登录成功");
						$(location).attr("href", "http://localhost:8080/AJAX/liqun/index.html");
					} else {
						alert("登录失败");
						//$(location).attr("href", "http://localhost:8080/AJAX/liqun/html/login.html");
					}
				})
				.fail(function() {
					alert("error");
				})
		}
	});
});