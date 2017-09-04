$(".remark-btn-red").click(function(){
    var content=$(".remark-textarea").val();
    console.log(content);
    if(content!=""&&content!="快来和小伙伴们一起畅聊吧"){
        console.log("if"+content);
        var title=$("#title").html();
        var cImg=$("#img").html();
        //var content=$("#content").val();
        var cTime=$("#time").html();
        $.ajax({
            type:"POST",
            url:"/comment.do",
            data:{
                title:title,
                cImg:cImg,
                content:content,
                cTime:cTime
        },
            success:function(data){
                console.log("sucess");
                if(data.code>0){
                    alert('评论发表成功');
                    $("#content").html(content);
                }
            }

        })
    }
});
