//star:hover
$(".role-ul li").hover(function(){
    $(this).siblings().removeClass("role-li");
    $(this).addClass("role-li");
    /*     console.log(1); */
});
//star:左右点击箭头
$("span.role-span-arrowR").click(function(){
    $(this).css('display','none');
    $("span.role-span-arrowL").css('display','block');
    $(".role-ul li:lt(4)").css('display','none');
    $(".role-ul li:gt(3)").css('display','block');
});
$("span.role-span-arrowL").click(function(){
    $(this).css('display','none');
    $("span.role-span-arrowR").css('display','block');
    $(".role-ul li:gt(3)").css('display','none');
    $(".role-ul li:lt(4)").css('display','block');
});
$("ul.role-content-ul li").click((e)=>{
    $(e.target).siblings().removeClass("active1");
    $(e.target).addClass("active1");
    $(e.target).siblings().children().css("color","#999");
    $(e.target).children().css('color','#fff');
});
// 点击显示6张

//$("div.hot-news").click((e)=>{
//   //$(e.target).fadeToggle(1000);
//   // $(".oo").fadeToggle(1000);
//    $(e.target).css('display','none');
//    $(".oo").css('display','none');
//    $(e.target).siblings().removeClass("active1");
//});
// $("ul.role-tcontul li:gt(5)").css('display','none');
$("div.remark-content").click(function(){
    $(this).addClass("active");
});
// textarea的聚焦输入字数统计
$(".remark-textarea").focus(function(){
    $(this).addClass("active");
    $(".remark-content").addClass("active");
    var v=$(this).html();
    if(v=="快来和小伙伴们一起畅聊吧"){
        // console.log('==');
        $(this).html("");
    }
    $(".join-num").css("display","block");
});
$(".remark-textarea").blur(function(){
    $(this).removeClass("active");
    $(".remark-content").removeClass("active");
    $(".join-num").css("display","none");
    var v=$(this).html();
    if(v==""){
        $(this).html("快来和小伙伴们一起畅聊吧");
    }
});

$(".remark-textarea").keyup(function () {

    var sendTextarea=document.getElementsByClassName(".remark-textarea");
    // var text=sendTextarea.val();
    var text=$(".remark-textarea").val();
    // console.log(text);
    var counter=text.length;
    // console.log(counter);
    // var sendCount=
    //     document.getElementsByClassName("font-length").innerHTML="saf";
    // document.getElementsByClassName("example")[0];
    // document.getElementById('myAnchor').innerHTML="W3Cschool";

    // console.log(sendCount);
    // sendCount.innerHTML="300-counter";
    console.log(300-counter);
    // console.log(sendCount);;
    // var c=300-counter;
    $("i.font-length").html(300-counter);

});
// function clearDefault(el,message){
//     var obj=el;
//     // var v=el.val();
//     obj=document.getElementsByClassName(".remark-textarea");
//     var v=obj.value;
//     if(typeof(el)=="string")
//     // if(v==message){
//         // $(".remark-textarea").val("");
//         // v="";
//     // }
//     obj.onblur=function(){
//         // if(v==""){
//         //     v=message;
//         // }
//         // $(".remark-textarea").val(message);
//     }
// }
// onclick="clearDefault(this,'快来和小伙伴们一起畅聊吧')"
(function textCount(textarea,num){
    var sendTextarea=document.getElementsByClassName(".remark-textarea");
    // var text=sendTextarea.val();
    var text=$(".remark-textarea").val();
    //console.log(text);
    //var counter=text.length;
    var counter=text;
    // console.log(counter);
    var sendCount=document.getElementsByClassName("i.font-length");
    // console.log(sendCount);
    sendCount.innerHTML=num-counter;
    // console.log(num-counter);
    sendTextarea.keyup=function(){
        text=sendTextarea.value;
        console.log(text);
        counter=text.length;
        sendCount.innerHTML=num-counter;
    }
})(".remark-textarea",300);
//最新评论
$("ul.remarkUl li").click((e)=>{
    $(e.target).siblings().removeClass("on-active");
    $(e.target).addClass("on-active");
});
//左右箭头控制每次显示6张图片
var LIWIDTH=160;
var OFFSET=0;
var moved=0;
var ulList=document.querySelector(".role-tcontul");
//console.log(ulList.children.length);
var aForward=
    document.querySelector(".role-btnR");
var aBackward=
    document.querySelector(".role-btnL");
var liLength=ulList.children.length;
//如果ulList下的li个数<=6
if(liLength<=6)
//为class为forward的a添加disabled class
    aForward.className+=" disabled";
//为class为forward的a绑定单击事件
aForward.onclick=function(){
    if(this.className.indexOf("disabled")==-1 ){
        moved+=6;
        ulList.style.left=
            -moved*LIWIDTH+OFFSET+"px";
    }
    checkA();
    console.log("checkR moved"+moved);
};
//为class为backward的a绑定单击事件
aBackward.onclick=function(){
    if(this.className.indexOf("disabled")==-1 && moved > 0){
        moved-=6;//将moved-6
        ulList.style.left=//重新计算ulList的left
            -moved*LIWIDTH+OFFSET+"px";
    }
    checkA();
    console.log("checkL moved"+moved);

};
//专门负责检查并修改两个a的状态
function checkA(){
    aForward.className="role-btnR";
    aBackward.className="role-btnL";
    if(moved==0){
        aBackward.className="role-btnL disabled";
    }
    else if(liLength-moved==6){
        aForward.className="role-btnR disabled";
    }
};
