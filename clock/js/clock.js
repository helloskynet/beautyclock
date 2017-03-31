/**
 * Created by lcn on 2017/3/29.
 */
$(function () {
    var nowImage = 8;
    tim(nowImage);
    var i = 2;
    setInterval(function () {
        var ti = new Date();
        var timer = longNum(ti.getSeconds());
        if(i%2 == 0){
            $("#first").css({"transform":'transformX(100deg)','webkitTransform':'rotateX(180deg)'});
            $("#page-first").html(timer);
            i = i+1;
        }else{
            $("#first").css({"transform":'transformX(100deg)','webkitTransform':'rotateX(0deg)'});
            $("#page-second").html(timer);
            i = i-1;
        }
        if(ti.getSeconds()  == 0){
            nowImage = tim(nowImage);
        }
    },1000);
});
function tim(nowImage) {
    var clockPos = [];
    clockPos.push({top:"222px",left:"100px",tran:'rotateZ(-5deg)',fontSize:'25px',color:"black"});
    clockPos.push({top:"222px",left:"100px",tran:'rotateZ(-5deg)',fontSize:'25px',color:"black"});
    clockPos.push({top:115,left:105,tran:'rotateZ(0deg)',fontSize:'25px',color:"black"});
    clockPos.push({top:"137px",left:"53px",tran:'rotateZ(-5deg)',fontSize:'21px',color:"black"});
    clockPos.push({top:150,left:115,tran:'rotateZ(0deg)',fontSize:'25px',color:"white"});
    clockPos.push({top:123,left:109,tran:'rotateZ(-1deg)',fontSize:'20px',color:"black"});
    clockPos.push({top:260,left:65,tran:'rotateZ(-10deg)',fontSize:'25px',color:"black"});
    clockPos.push({top:85,left:160,tran:'rotateZ(5deg)',fontSize:'35px',color:"black"});
    clockPos.push({top:222,left:86,tran:'rotateZ(0deg)',fontSize:'25px',color:"black"});
    var ti = new Date();
    var timer = longNum(ti.getHours()) + ' : ' + longNum(ti.getMinutes());
    nowImage = rand(nowImage);
    $("#clock-time").css({"top":clockPos[nowImage].top,"left":clockPos[nowImage].left,"font-size":clockPos[nowImage].fontSize,"transform":clockPos[nowImage].tran,"color":clockPos[nowImage].color}).html(timer);
    $("#clock-main").css("background","url('cimg/" + nowImage + ".png')");
    return nowImage;
}
function rand(now) {
    do{
        var temp = parseInt(Math.random() * 8 + 1);
    }while (temp == now);
    console.log(temp);
    return temp;
}
function longNum(num) {
    if (num < 10){
        num = "0"+num;
    }
    return num;
}