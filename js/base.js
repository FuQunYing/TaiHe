/*请求header*/
$.get("header.html")
  .then(html=>{
    "use strict";
    $("header").html(html)
  })
  .then(()=>{
  "use strict";
    $(".mynav ul li a").on("click",function(){
      if($(this).next().css("display")=="none"){
        $(this).next().css("display","block")
      }else{
        $(this).next().css("display","none")
      }
    });
    $(".wechat").on("mouseenter",function(){
      $(this).next().show()
    }).on("mouseleave",function () {
      $(this).next().hide()
    });
    $(".icon-bar").on("click",function(){
      if($("#header").hasClass("show")){
        $("#header").removeClass("show")
      }else{
        $("#header").addClass("show")
      }
    })
  })
/*请求footer*/
$.get("footer.html")
  .then(html=>{
    "use strict";
    $("#foot").html(html);
  });
/*header*/
/*
(()=>{
  "use strict";
  $(".mynav ul li a").on("click",function(){
    if($(this).next().css("display")=="none"){
      $(this).next().css("display","block")
    }else{
      $(this).next().css("display","none")
    }
  });
  $(".wechat").on("mouseenter",function(){
    $(this).next().show()
  }).on("mouseleave",function () {
    $(this).next().hide()
  });
})();
$(".icon-bar").on("click",function(){
  "use strict";
  if($("#header").hasClass("show")){
    $("#header").removeClass("show")
  }else{
    $("#header").addClass("show")
  }
})*/