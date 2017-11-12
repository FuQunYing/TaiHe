
/*banner*/
$(function(){
	var index = {
		init:function(){
			this.banner();
			this.album();
		},
		//焦点图
		banner:function(){
			var swiper1 = new Swiper('.banner', {
		        pagination : '.swiper-pagination',
				    paginationClickable :true,
		        nextButton: '.b-next',
		        prevButton: '.b-prev',
		        loop:true,
		        //spaceBetween: 0,
		         autoplay:4000
		        //preventClicks : false
		    });
		},
		//专辑
		album:function(){
			var swiper2 = new Swiper('.album-list', {
		        // pagination: '.swiper-pagination',
		        // paginationClickable: true,
		        nextButton: '.a-next',
		        prevButton: '.a-prev',
		        slidesPerView: 'auto',
		        slidesPerGroup:2
		        //preventClicks : false
		    });
		}
	};
	index.init();
});
/*服务盒子区--鼠标悬停*/
$("div.service-box").on("mouseenter","a span",function(){
	"use strict";
  $(this).addClass("spanHover")
}).on("mouseleave","a span",function(){
	"use strict";
	$(this).removeClass("spanHover")
});
