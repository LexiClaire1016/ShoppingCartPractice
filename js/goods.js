$(function() {
	//鼠标以上关注利群 显示二维码
	$(".attention").mouseover(function(){
		$("#QRcode").css("display","block");
	});
	$(".attention").mouseout(function(){
		$("#QRcode").css("display","none");
	});
	//点击按钮控制购买商品数量
	$(".plusBtn").click(function() {
		$(".goodNumber input").val(Number($(".goodNumber input").val()) + 1);
	});
	$(".minusBtn").click(function() {
		$(".goodNumber input").val($(".goodNumber input").val() - 1);
		if ($(".goodNumber input").val() <= 1) {
			$(".goodNumber input").val(1);
		}
	});
	//显示更多品牌选项
	var flag = 0; //记鼠标点击状态的变化
	$(".moreChoice input").click(function() {
		if (flag == 0) {
			$(".moreChoice").css("height", "175px");
			$(".moreChoice").css("overflow", "visible");
			flag = 1;
		} else {
			$(".moreChoice").css("height", "25px");
			$(".moreChoice").css("overflow", "hidden");
			flag = 0;
		}
	});
	//商品评价
	$(".details ul li").eq(0).click(function() {
		$(".details img").show();
		$(".details p").show();
		$(".details ul li").removeClass("now");
		$(this).addClass("now");
	});
	$(".details ul li").eq(1).click(function() {
		$(".details img").hide();
		$(".details p").hide();
		$(".details ul li").removeClass("now");
		$(this).addClass("now");
		$("#content").css("height","2200px");
		$("#content .right").css("height","2200px");
	});
	//评论分类
	for(var i=0;i<=$(".comment ul li").length;i++){
		$(".comment ul li").eq(i).click(function(){
			$(".comment ul li").removeClass("now");
			$(this).addClass("now");
		});
		
	}
});