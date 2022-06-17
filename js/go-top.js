window.onload = function (){
    var topbtn = document .getElementById("btn");
    var timer = null;

    var pagelookheight = document.documentElement.clientHeight;
    window.onscroll = function (){
        var backtop = document.documentElement.scrollTop;
        if (backtop >= pagelookheight/4){
            topbtn.style.display = "block";
        }else {
            topbtn.style.display = "none";
        }
    }
    topbtn.onclick = function (){
        timer = setInterval(function (){
            var backtop = document.documentElement.scrollTop;
            var speedtop = backtop/10;
            document.documentElement.scrollTop = backtop - speedtop;
            if (backtop ===0){
                clearInterval(timer);
            }
        }, 30);
    }
}