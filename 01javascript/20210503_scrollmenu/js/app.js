$(document).ready(function(){
  // 1menu
  // const oneTop = $("#v01s").offset().top;
  // const twoTop = $("#v02s").offset().top;
  // const threeTop = $("#v03s").offset().top;

  // $(".menu > a").eq(0).on("click",function(){});
  // $(".menu > a").eq(0).click(function(){
  //   $("html,body").animate({scrollTop:oneTop})
  // });
  // $(".menu > a").eq(1).click(function(){
  //   $("html,body").animate({scrollTop:twoTop})
  // });
  // $(".menu > a").eq(2).click(function(){
  //   $("html,body").animate({scrollTop:threeTop})
  // });

  // 2nd for
  // for(let i=0;i<$(".menu > a").length;i++){
  //   $(".menu > a").eq(i).click(function(){
  //     $("html,body").animate({scrollTop:$(".scene").eq(i).offset().top})
  //   });
  // }

  // 3rd $(this).index()
  // $(".menu > a").click(function(){
  //   let i = $(this).index();
  //   const st = $(".scene").eq(i).offset().top
  //   $("html,body").animate({scrollTop:st});
  // });

  // 4th hash
  $(".menu > a").click(function(){
    let target = $(this.hash);
    console.log(target);
    const st = target.offset().top;
    $("html,body").animate({scrollTop:st});
  });

  $(window).scroll(function(){
    let scrollY = $(window).scrollTop();

    // if(scrollY >= $(".scene").eq(0).offset().top){
    //   $(".menu > a").removeClass("active").eq(0).addClass("active")
    // }
    // if(scrollY >= $(".scene").eq(1).offset().top){
    //   $(".menu > a").removeClass("active").eq(1).addClass("active")
    // }
    // if(scrollY >= $(".scene").eq(2).offset().top){
    //   $(".menu > a").removeClass("active").eq(2).addClass("active")
    // }

    // for(let i=0;i<$(".scene").length;i++){
    //   if(scrollY >= $(".scene").eq(i).offset().top){
    //     $(".menu > a").removeClass("active").eq(i).addClass("active")
    //   }
    // }

    $(".scene").each(function(index){
      // if(scrollY >= $(".scene").eq(index).offset().top){}
      if(scrollY >= $(this).offset().top){
        $(".menu > a").removeClass("active").eq(index).addClass("active")
      }
    });
  }); //scroll
}); //jquery ready
