//入口大背景
 window.onload=function(){
     $("#bodyAll").animate({
         top:270
     },2000).delay(1000).animate({
         top:0
     },2000);
     $("img.bigImg").animate({
         top:0
     },2000).delay(1000).animate({
         top:-200
     },2000);
 };
//轮播
$(()=>{
    var imgs=[
        "images/scroll-1.jpg",
        "images/scroll-2.jpg",
        "images/scroll-3.jpg"
    ];
    var $ulImgs=$(".imgs"),
        $ulIdxs=$(".indexs"),
        LIWIDTH=550,
        moved=0,
        interval=500,
        WAIT=3000+interval,
        timer=null;
    var str="",
        strIdxs="";
        // var i=1;
    for(var src of imgs){
        str+=`<li><img src="${src}"></li>`;
        strIdxs+=`<li class="index-circle"></li>`;
    }
    str+=`<li><img src="${imgs[0]}"></li>`;
    $ulImgs.append(str)
        .css("width",(imgs.length+1)*LIWIDTH);
    $ulIdxs.append(strIdxs).children().first().addClass("hover");
    $(".play-inner-z div:eq("+moved+")").siblings().css('display','none');

    //启用周期性定时器:
    function play(){
        timer=setInterval(()=>{
            moved++;
            $ulImgs.animate({
                left:-moved*LIWIDTH
            },interval,()=>{//每次移动后判断
                if(moved==3){//如果移动到最后一张
                    moved=0;//就瞬间返回第一张
                    $ulImgs.css("left",0);
                }
                //将$ulIdxs下第moved个li设为hover
                $ulIdxs.children(":eq("+moved+")")
                   .addClass("hover")
                   .siblings().removeClass("hover");
                
                $(".play-inner-z div:eq("+moved+")").css('display','block')
                    .siblings().css('display','none');
                //$(".play-inner-z div:eq("+moved+")").css('display','block');
             
/*                 $(".img-inner-lg").children(":eq("+moved+")").css('display':'block'); */
            })//每次移动耗时0.5秒
        },WAIT);//每隔3.5秒动一次
    }
    play();

    $(".scroll-img").hover(()=>{
        clearInterval(timer);
        timer=null;
    },()=>play()
    );
    $ulIdxs.on("click","li",e=>{
        var $tar=$(e.target);
        moved=$tar.index();
        // alert('ok');
        $ulImgs.stop(true).animate({
            left:-moved*LIWIDTH
        },interval,()=>{
            $tar.addClass("hover")
                .siblings().removeClass("hover");
            $(".play-inner-z div:eq("+moved+")").css('display','block')
                .siblings().css('display','none');
        })
    });
    $(".plarrL").click(function(){
        if(moved==0){
            moved=2;
            // $ulImgs.css("left",0);
            // $ulImgs.addClass("move-left");
        }else{
        moved--;
        }
        $ulIdxs.children(":eq("+moved+")")
            .addClass("hover")
            .siblings().removeClass("hover");
        $(".play-inner-z div:eq("+moved+")").css('display','block')
                .siblings().css('display','none');
        $ulImgs.stop(true).animate({
            left:-moved*LIWIDTH
        },interval)

    });
    $(".plarrR").click(function(){
        if(moved==2){
            moved=0;
            // $ulImgs.css("left",0);
        }else{
            // moved=$("")
            moved++;
        }
        $ulIdxs.children(":eq("+moved+")")
            .addClass("hover")
            .siblings().removeClass("hover");
        $(".play-inner-z div:eq("+moved+")").css('display','block')
            .siblings().css('display','none');

        $ulImgs.stop(true).animate({
            left:-moved*LIWIDTH
        },interval)
    });

});
//轮播左右箭头
$("div.scroll-img").mouseenter(function(){
    $("div.scroll-img span.playArr").removeClass('onPlay');
});
$("div.scroll-img ").mouseleave(function(){
    $(".scroll-img span.playArr").addClass('onPlay');
});

