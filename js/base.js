/*请求header*/
$.get("header.html")
  .then(html=>{
    "use strict";
    $("header").html(html)
  })
  .then(()=>{
    $(".mynav ul>li>a").on("click",function(){
        $(this).parent().addClass("showList");
        $(this).parent().siblings().removeClass("showList");
        $(this).parent().parent().next().children("li").removeClass("showList");
        $(this).parent().parent().prev().children("li").removeClass("showList");
      console.log(1);
    });
    $(".mynav ul>li>a").next().on("mouseleave",function(){
      $(this).parent().removeClass("showList");
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
