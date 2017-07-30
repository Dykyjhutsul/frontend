
function GetColor(){
    var x = document.getElementById("mySelect").selectedIndex;
    var color = document.getElementsByTagName("option")[x].value;
    document.cookie="color =" + color + "; expire=3600000";

}

function GetFont() {
    var font = document.getElementById("font").value;
    document.cookie="font =" + font + "; expire=3600000";

}


function GetCookie(key) {
    name = key +"=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i <cookies.length; i++) {
        var cookie = cookies[i];
        while(cookie.charAt(0)==' ') {
            cookie = cookie.substring(1);
        }
        if(cookie.indexOf(name) == 0) {
            return decodeURIComponent( cookie.substring(name.length,cookie.length) );
        }
    }
    return undefined;

}

function SetSettings(color,font){
    var options = document.getElementsByTagName("option");
    document.body.style.backgroundColor = color;
    document.getElementsByTagName("label")[0].style.fontSize = font;
    document.getElementsByTagName("button")[0].style.fontSize = font;
    for(var i=0;i<options.length;i++){
        if(color == options[i].value){
            document.getElementById("mySelect").selectedIndex = i;
        }
    }
    document.getElementById("font").value = font;
}

window.onload= function () {
    var but = document.getElementById("save");
    but.addEventListener("click",function(){
        GetColor();
        GetFont();
    });
    SetSettings(GetCookie("color"),GetCookie("font"));



}