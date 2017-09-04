$(()=> {
    var week = ["\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d", "\u661f\u671f\u65e5"];
    var $ulDiv=$(".usUpdate"),
        moved=0;
    $ulDiv.children(":eq("+moved+")").removeAttr("style").siblings().css('display','none');/*.css('display','none');*/

    var date = new Date,
        weekNum = date.getDay();
        weekNum = ( 0 == weekNum ? 7 : weekNum);
        moved = weekNum-1;
    var dayNum = date.getDate(),
        monthNum = date.getMonth() + 1;
        dayNum = dayNum >= 10 ? dayNum: "0" + dayNum,
        monthNum = monthNum >= 10 ? monthNum: "0" + monthNum;

    $(".date_us").html(monthNum+"."+dayNum+ week[moved]);
    $(".date_us").css('color','red');

    //.
    console.log(monthNum+"."+dayNum+ week[moved]);
    console.log(moved);

    $(".btn-lf").click(function() {
        moved--;
        if(moved<=0){
            moved = 0;
        }
        play(moved);
    });
    $(".btn-rt").click(function() {
        moved++;
        if(moved>=6){
            moved=6;
        }
        play(moved);
    });

    function play(m) {
        if(m>=0&&m<=6){

            $ulDiv.children(":eq("+m+")").removeAttr("style").siblings().css('display','none');
            console.log("btn-lf click"+m);

            var t = new Date;
            t.setDate(t.getDate() + m - weekNum + 1);
            var mon = t.getMonth() + 1,
                day = t.getDate();
            day = day >= 10 ? day: "0" + day;
            mon = mon >= 10 ? mon: "0" + mon;
            console.log(day+" "+mon+" "+m+"click");
            $(".date_us").html(mon+"."+day+ week[m]);
            if(moved == weekNum-1){
                console.log("add class"+(new Date).getDay());
                //$(".date_us-1").addClass('date_us-2');
                $(".date_us").css('color','red');
            }else{
                //$(".date_us-1").removeClass('date_us-2');
                $(".date_us").css('color','#3a3a3a');

            }
        }

    }
});



