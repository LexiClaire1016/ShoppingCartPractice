//图片懒加载
// 滚动触发
/**	var scrollTop;
	window.onscroll = function() {
		var oImg = document.getElementsByTagName("img");
		for (var i = 0; i < oImg.length; i++) {
			var imgOffsetTop = oImg[i].offsetTop;
			var dataSrc = oImg[i].getAttribute("data-src");
			var src = oImg[i].getAttribute("src");
			var docClientHeight = document.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			// 显示图片所需要最小距离
			var distance = imgOffsetTop - docClientHeight;
			// 滑动时 顶端距离
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			console.log(scrollTop);
			// 图片将要显示
			if (dataSrc == null) {
				oImg[i].src =  oImg[i].getAttribute("src");
			} else {
				if (scrollTop >= distance) {
					oImg[i].src = dataSrc;
				}

			}
		}
	}
**/

$(function() {
	var docScrollTop;
	$(document).scroll(function() {
		docScrollTop = $("body").prop("scrollTop");

		for (var i = 0; i < $("img").length; i++) {
			var imgOffsetTop = $("img").eq(i).prop("offsetTop");
			var dataSrc = $("img").eq(i).attr("data-src");
			var src = $("img").eq(i).attr("src");
			var docClientHeight = $(window).height();
			var distance = imgOffsetTop - docClientHeight;

			if (dataSrc == null) {
				$("img").eq(i).attr("src", src);
			} else {
				if (docScrollTop >= distance) {
					$("img").eq(i).attr("src", dataSrc);
				}
			}
		}
	});
});