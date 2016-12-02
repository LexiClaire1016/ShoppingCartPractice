$(function() {
	//鼠标以上关注利群 显示二维码
	$(".attention").mouseover(function(){
		$("#QRcode").css("display","block");
	});
	$(".attention").mouseout(function(){
		$("#QRcode").css("display","none");
	});
	
	//鼠标移上全球购 显示所有子分类
	$("#banner .worldshop").parent().mouseover(function() {
		$("#banner .pop").css("display", "block");
	});
	$("#banner .worldshop").parent().mouseout(function() {
		$("#banner .pop").css("display", "none");
	});
	//展示banner里的大轮播图
	carouseFigureFn($(".picture"), $(".picture li"), $(".oNumber li"), "active", 2000);
	//banner右侧小轮播图
	carouseFigureFn($(".littleBanner"), $(".littleBanner li"), $(".circle"), "active-color", 3000);
	//1F轮播图
	carouseFigureFn($(".floor1banner"), $(".floor1banner li"), $(".littlecircle li"), "", 2000);
	//2F轮播图
	carouseFigureFn($(".floor2banner"), $(".floor2banner li"), $(".littlecircle li"), "", 2000);
	//3F轮播图
	carouseFigureFn($(".floor3banner"), $(".floor2banner li"), $(".littlecircle li"), "", 2000);
	//4F轮播图
	carouseFigureFn($(".floor4banner"), $(".floor2banner li"), $(".littlecircle li"), "", 2000);
	//5F轮播图
	carouseFigureFn($(".floor5banner"), $(".floor2banner li"), $(".littlecircle li"), "", 2000);
	//6F轮播图
	carouseFigureFn($(".floor6banner"), $(".floor2banner li"), $(".littlecircle li"), "", 2000);

	//内容第一个商品展示轮播图
	contentCarouseFigure($(".bannerA"), $(".bannerA li"), $(".leftBtn"), $(".rightBtn"), 3000);
	contentCarouseFigure2($(".bannerB"), $(".bannerB li"), $(".leftButton"), $(".rightButton"), 3000);
	//商品展示轮播图带左右控制键
	function contentCarouseFigure(obj, objLi, leftButton, rightButton, time) {
		var index = 0;
		var w = $(objLi).eq(0).prop("offsetWidth");
		var timer;
		timer = setInterval(carouseFigure, time);
		$(obj).parent().mouseover(function() {
			clearInterval(timer);
		});
		console.log($(obj).parent());
		$(obj).parent().mouseout(function() {
			timer = setInterval(carouseFigure, time);
		});

		$(leftButton).click(function() {
			index--;
			if (index < 0) {
				index = 2;
				$(obj).css("left", -w * 4 * 3);
			}
			$(obj).animate({
				"left": -index * 4 * w
			}, 500);
		});

		$(rightButton).click(carouseFigure);

		function carouseFigure() {
			index++;
			if (index >= 4) {
				index = 1;
				$(obj).css("left", 0);
			}
			$(obj).animate({
				"left": -index * 4 * w
			}, 500);
		}

	}
	//商品展示轮播图2带左右控制键
	function contentCarouseFigure2(obj, objLi, leftButton, rightButton, time) {
		var index = 0;
		var w = $(objLi).eq(0).prop("offsetWidth");
		var timer;
		timer = setInterval(carouseFigure, time);
		$(obj).parent().mouseover(function() {
			clearInterval(timer);
		});
		console.log($(obj).parent());
		$(obj).parent().mouseout(function() {
			timer = setInterval(carouseFigure, time);
		});

		$(leftButton).click(function() {
			index--;
			if (index < 0) {
				index = 1;
				$(obj).css("left", -w * 2);
			}
			$(obj).animate({
				"left": -index * w
			}, 500);
		});

		$(rightButton).click(carouseFigure);

		function carouseFigure() {
			index++;
			if (index >= 3) {
				index = 1;
				$(obj).css("left", 0);
			}
			$(obj).animate({
				"left": -index * w
			}, 500);
		}

	}
	//轮播图函数
	function carouseFigureFn(obj, objLi, obj2Li, className, time) {
		var index = 0;
		var w = $(objLi).eq(0).prop("offsetWidth");
		var timer;
		timer = setInterval(carouseFigure, time);
		$(obj).parent().mouseover(function() {
			clearInterval(timer);
		});
		$(obj).parent().mouseout(function() {
			timer = setInterval(carouseFigure, time);
		});

		for (var i = 0; i < obj2Li.length; i++) {
			$(obj2Li).eq(i).mouseover(function() {
				for (var j = 0; j < $(obj2Li).length; j++) {
					$(obj2Li).eq(j).removeClass(className);
					$(this).addClass(className);
					$(obj).animate({
						"left": -w * $(this).index()
					}, 10);
					index = $(this).index();
				}
			});
		}

		function carouseFigure() {
			index++;
			if (index >= $(objLi).length) {
				index = 1;
				$(obj).css("left", 0);
			}
			$(obj).animate({
				"left": -w * index
			}, 500);

			for (var i = 0; i < $(obj2Li).length; i++) {
				$(obj2Li).eq(i).removeClass(className);
			}
			$(obj2Li).eq(index >= $(obj2Li).length ? 0 : index).addClass(className);
		}
	}
	//每一层的图片切换
	floorTabImg((".tab1"), (".tab1 li"), (".select li"));

	function floorTabImg(obj, objLi, obj2Li) {
		var index = 0;
		var w = $(objLi).eq(0).prop("offsetWidth");
		for (var i = 0; i < obj2Li.length; i++) {
			$(obj2Li).eq(i).mouseover(function() {
				for (var j = 0; j < $(obj2Li).length; j++) {
					$(obj2Li).eq(j).css("background-color","");
					$(this).css("background-color","white");
					$(obj).animate({
						"left": -w * $(this).index()
					}, 10);
					index = $(this).index();
				}
			});
		}
	}
	floorTabDetail($(".floor1title"),$(".floor1title li"));
	function floorTabDetail(objLi, obj2Li) {
		var index = 0;
		var w = $(objLi).eq(0).prop("offsetWidth");
		for (var i = 0; i < obj2Li.length; i++) {
			$(obj2Li).eq(i).mouseover(function() {
				for (var j = 0; j < $(obj2Li).length; j++) {
					$(obj2Li).eq(j).removeClass("index");
					$(this).addClass("index");
					index = $(this).index();
				}
			});
		}
	}
});