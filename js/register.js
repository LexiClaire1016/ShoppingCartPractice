$(function() {
	
	//鼠标以上关注利群 显示二维码
	$(".attention").mouseover(function(){
		$("#QRcode").css("display","block");
	});
	$(".attention").mouseout(function(){
		$("#QRcode").css("display","none");
	});
	
	
	
	randomCode();
	$("#content .code a").click(randomCode);

	function randomCode() {
		var randCode = "";
		var i = 0;
		while (i < 6) {
			var codeNumber = parseInt(Math.random() * (122 - 48 + 1) + 48);
			if ((codeNumber >= 48 && codeNumber <= 57) || (codeNumber >= 65 && codeNumber <= 90) || (codeNumber >= 97 && codeNumber <= 122)) {
				randCode += String.fromCharCode(codeNumber);
				i++;
			}
			$("#content .code div").html(randCode);
			$("#content .code div").css("color", "#FFFFFF");
			$("#content .code div").css("font-size", "18px");
		}
	}

	//账户名
	$("#idNumber").focus(function() {
		$("#idNumber").siblings().css("display", "block");
		$("#idNumber").siblings().html("用户名不能是纯数字，用户名只能由中文、英文、数字及“_”、“-”组成");
	});
	$("#idNumber").blur(function() {
		var reTel = /^1[3,4,5,7,8]\d{9}$/; //电话号
		var reUserName = /^[A-Za-z_]\w{5,14}$/i; //用户名
		var reMail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/ //邮箱
		if ($("#idNumber").val() == "") {
			$("#idNumber").siblings().css("display", "block");
			$("#idNumber").siblings().html("请输入用户名/手机号");
		} else if ($("#idNumber").val().length < 5 || $("#idNumber").val().length > 19) {
			$("#idNumber").siblings().html("用户名长度只能在6-20位字符之间");
			$("#idNumber").siblings().css("display", "block");
		} else if (!(reTel.test($("#idNumber").val()) || reUserName.test($("#idNumber").val()))) {
			$("#idNumber").siblings().html("请输入正确电话号/用户名");
			$("#idNumber").siblings().css("display", "block");
		} else {
			$("#idNumber").siblings().css("display", "none");
		}
	});

	//密码
	$("#password").focus(function() {
		$("#password").siblings().html("6-20位字符，可使用字母、数字或符号的组合，不建议使用纯数字，纯字母，纯符号");
		$("#password").siblings().css("display", "block");
	});
	$("#password").blur(function() {
		var rePassword = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,20}$/
		if ($("#password").val() == "") {
			$("#password").siblings().css("display", "block");
			$("#password").siblings().html("6-20位字符，可使用字母、数字或符号的组合，不能使用纯数字，纯字母，纯符号");
		} else if ($("#password").val().length < 5 || $("#idNumber").val().length > 19) {
			$("#password").siblings().html("密码长度只能在6-20位字符之间");
			$("#password").siblings().css("display", "block");
		} else if (!rePassword.test($("#password").val())) {
			$("#password").siblings().html("不能使用纯数字，纯字母，纯符号");
			$("#password").siblings().css("display", "block");
		} else {
			$("#password").siblings().css("display", "none");
		}
	});
	//再次输入密码
	$("#password2").focus(function() {
		$("#password2").siblings().html("请再次输入密码");
		$("#password2").siblings().css("display", "block");
	});
	$("#password2").blur(function() {
		if ($("#password2").val() == "") {
			$("#password2").siblings().css("display", "block");
			$("#password2").siblings().html("请再次输入密码");
		} else if ($("#password2").val() != $("#password").val()) {
			$("#password2").siblings().html("两次输入密码不一致");
			$("#password2").siblings().css("display", "block");
		} else {
			$("#password2").siblings().css("display", "none");
		}
	});
	//验证码
	$("#code").focus(function() {
		$("#code").siblings().html("请输入验证码");
		$("#code").siblings().css("display", "block");
	});
	$("#code").blur(function() {
		if ($("#code").val() == "") {
			$("#code").siblings().css("display", "block");
			$("#code").siblings().html("请输入验证码");
		} else if ($("#code").val() != $("#content .code div").text()) {

			$("#code").siblings().html("验证码错误，请重新输入");
			$("#code").siblings().css("display", "block");
		} else {
			$("#code").siblings().css("display", "none");
		}
	});
	//按钮 立即注册
	$(".registBtn").click(function() {
		console.log($("#idNumber").val())
		if ($("#idNumber").val() == "") {
			$("#idNumber").siblings().css("display", "block");
			$("#idNumber").siblings().html("请输入用户名/手机号");
		}else if ($("#password").val() == "") {
			$("#password").siblings().css("display", "block");
			$("#password").siblings().html("请输入密码");
		}else if ($("#code").val() == "") {
			$("#code").siblings().css("display", "block");
			$("#code").siblings().html("请输入验证码");
		}else{
			$.get("../php/check.php?username=" + $("#idNumber").val(),function(res){
				if(res=="true"){
					$("#idNumber").siblings().html("手机号/账号已被注册，请重新填写");
					$("#idNumber").siblings().css("display", "block");
				}else{
					$.get("../php/register.php?username="+$("#idNumber").val()+"&password="+$("#password").val(),function(response){
						if(response=="ok"){
							alert("success");
							$(location).attr("href","http://localhost:8080/AJAX/liqun/html/login.html");
						}else{
							alert("error");
							$(location).attr("href","http://localhost:8080/AJAX/liqun/html/register.html");
						}
					})
				}
			});	
			
		}
	});
});