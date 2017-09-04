//功能点一:用户注册
//1:获取提交按钮 bt-register
//2:为按钮绑定点击事件
$("#bt-register").click(function(){
    //2.1:验证用户名
    var unamereg=/^[a-z0-9]{6,12}$/i;
    if(!unamereg.test($("#uname").val())){
        alert("用户名格式不正确请重填");
        return;
    }
    //2.2:验证密码
    var upwdreg=/^\w{6,12}$/i;
    if(!upwdreg.test($("#upwd").val())){
        alert("密码格式不正确请重填");
        return;
    }
    if($("h4.error").length>0){
        alert("用户名已存在禁止提交");
        return;
    }
    //2.3:验证确认密码
    if($("#upwd1").val()!==$("#upwd").val()){
        alert("确认密码与密码不一致请重填");
        return;
    }
    //2.4:验证主页 http://
    var urlreg=/^(http|https):\/\/[a-z0-9.]{1,}$/;
    if(!urlreg.test($("#homepage").val())){
        alert("主页格式不正确请重填");
        return;
    }
    //if(vali(uname,/^\w$/)&&vali(upwd,/^\d{6,12}$/)&&upwd==upwd1){}
    //2.5验证通过
    alert("验证通过");
    //2.6:并且接收服务器返回数据
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    var hp=$("#homepage").val();
    $.ajax({
        type:"POST",
        url:"/reg.do",
        data:{
            uname:uname,
            upwd:upwd,
            homepage:hp
        },
        success:function(data){
            if(data.code>0){
                alert(data.msg);
                location.href="dd-index.html";
            }
        },
        err:function(){
            alert("网络出现故障请稍候");
        }
    });
});
////功能点二
uname.onblur=function(){
    var u=this.value;
    $.ajax({
        url:"/existsuname",
        data:{uname:u},
        success:function(data){
            if(data.code==1){
                $("#tipMsg").html(data.msg);
                $("#tipMsg").removeClass("error");
            }else{
                $("#tipMsg").html(data.msg);
                $("#tipMsg").addClass("error");
            }
        }
    });
};