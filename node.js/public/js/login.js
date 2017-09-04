//登录按钮
$(".login a:first").click(function(){
    $(".modal").css('display','block');
});
//登录关闭按钮
$("div.close").click(()=>{
    $("div.modal").css("display","none");
});
$(".login-submit-btn").click(function(){
    var uname=$("#phoneId").val();
    var upwd=$("#upwd").val();
    var unamereg=/^[a-z0-9]{6,12}$/i;
    if(!unamereg.test(uname)){
        alert("用户名格式不正确,请检查");
        return;
    }
    //验证密码
    var upwdreg=/^\w{6,12}$/i;
    if(!upwdreg.test(upwd)){
        alert("密码格式不正确,请检查");
        return;
    }
    $.ajax({
        type:"POST",
        url:"/login.do",
        data:{uname:uname,upwd:upwd},
        success:function(data){
            if(data.code>0){
                console.log(data);
                alert(data.msg);
                sessionStorage.setItem("uid",data.uid);
                $(".modal").hide();
            }else{
                //alert(data.msg);
                $("p.login-alert").html(data.msg);
            }
        }
    });
});
