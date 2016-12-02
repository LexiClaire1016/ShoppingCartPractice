$(function() {
	var order = [];
	//传数据
	$(".addToCartBtn").click(function() {
		orderItem = {};
		orderItem.productImgSrc = $(".showGoods dl dt img").attr("src");
		orderItem.productName = encodeURIComponent($(".goodsTitle p").eq(0).html());
		orderItem.productPrice = $(".price").eq(0).html();
		orderItem.productNumber = $(".goodNumber input").eq(0).val();
		orderItem.productCount = $(".price").eq(0).html();
		orderItem.productWeight = $(".weight").eq(0).html();
		orderItem.pointCount = 0;
		order.push(orderItem);
		setCookie("order", JSON.stringify(order), 8);
		
//		if(getCookie("order")){
//			var cookie = JSON.parse(getCookie('order'));
//			cookie.push(orderItem);
//			setCookie('order', JSON.stringify(cookie),3);
//		}else{
//			order.push(orderItem);
//			setCookie("order",JSON.stringify(order),3);
//		}
	});
	//取数据
	var str = getCookie("order");
	
	
	console.log(str);
	if (str != undefined) {
		
			$(".cart").css("display","block");
			$(".cart_detail").prepend("<ul>");
			$(".cart_detail ul").append("<li class='l productName'><a href='goods.html'><img src='' alt='' class='l productImg'/><p class='l'></p></a></li>");
			$(".cart_detail ul").append("<li class='l productPrice'></li>");
			$(".cart_detail ul").append("<li class='l productNumber'><button class='minusBtn'></button>&nbsp;&nbsp;<input type='text' value='1'/>&nbsp;&nbsp;<button class='plusBtn'></button></p></li>");
			$(".cart_detail ul").append("<li class='l productCount'></li>");
			$(".cart_detail ul").append("<li class='l pointCount'></li>");
			$(".cart_detail ul").append("<li class='l deleteProduct'><a href='javascript:void(0);'>清除</a></li>");
			$(".cart_detail ul").append("<li class='l others'></li>");
		var orderObj = JSON.parse(str);
		for (var i = 0; i < orderObj.length; i++) {
			$(".cart_detail .productImg").attr("src",orderObj[i].productImgSrc);
			$(".cart_detail .productName p").html(decodeURIComponent(orderObj[i].productName));
			$(".cart_detail .productPrice").html(orderObj[i].productPrice);
			$(".cart_detail .productNumber input").val(orderObj[i].productNumber);
			$(".cart_detail .productCount").html("￥"+Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
			$(".cart_detail .pointCount").html(orderObj[i].pointCount);
			var productWeight = orderObj[i].productWeight;
			$("#countNumber").html($(".productNumber input").val());
			$("#price").html("￥" + Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
			$(".cart_price").html("已选择该供应商的"+$(".productNumber input").val()+"件商品 总重量"+productWeight+"总价(不含邮费)："+$(".cart_detail .productCount").html()+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			$(".cart-count").html(orderObj[i].productNumber);
		
		}
		//点击按钮控制购买商品数量
		$(".plusBtn").click(function() {
			$(".productNumber input").val(Number($(".productNumber input").val()) + 1);
			$(".cart_detail .productCount").html("￥" + Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
			$("#countNumber").html($(".productNumber input").val());
			$("#price").html("￥" + Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
			$(".cart_price").html("已选择该供应商的"+$(".productNumber input").val()+"件商品 总重量"+productWeight+"总价(不含邮费)："+$(".cart_detail .productCount").html()+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			$(".cart_price").css("text-align","right");
		});
		$(".minusBtn").click(function() {
			$(".productNumber input").val(Number($(".productNumber input").val())- 1);
			if ($(".productNumber input").val() <= 1) {
				$(".productNumber input").val(1);
			}
			$(".cart_detail .productCount").html("￥" + Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
			$("#countNumber").html($(".productNumber input").val());
			$("#price").html("￥" + Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
			$(".cart_price").html("已选择该供应商的"+$(".productNumber input").val()+"件商品 总重量"+productWeight+"总价(不含邮费)："+$(".cart_detail .productCount").html()+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		$(".cart_price").css("text-align","right");
		});
		//清除
		$(".deleteProduct").click(function(){
			removeCookie("order");
			$(".cart").css("display","none");
			$(".price").html("");
		});
		$(".cart_price").html("已选择该供应商的"+$(".productNumber input").val()+"件商品 总重量"+productWeight+"总价(不含邮费)："+$(".cart_detail .productCount").html()+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		$(".cart_price").css("text-align","right");
		
		$("#countNumber").html($(".productNumber input").val());
		$("#price").html(Math.floor($(".cart_detail .productPrice").html() * $(".cart_detail .productNumber input").val() * 100) / 100);
	
	}else{
		$(".cart").css("display","none");
	}

});