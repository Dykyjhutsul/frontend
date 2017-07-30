
function GetColor(){
    if(localStorage){
        var x = document.getElementById("mySelect").selectedIndex;
        var color = document.getElementsByTagName("option")[x].value;
        localStorage.setItem("color ", font);

    } else{
        alert("Sorry, your browser do not support local storage.");
    }


}

function GetFont() {
    var font = document.getElementById("font").value;
    localStorage.setItem("font ", font);

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
    SetSettings(localStorage.getItem('color'),localStorage.getItem('font'));
    alert(localStorage.getItem('color'));
    alert(localStorage.getItem('font'));


}