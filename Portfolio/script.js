
function showDiv(){
    var div = document.getElementsByClassName("hidden")[0];
    var box = document.getElementById("box");
    if(div.style.height=="0px"){
        box.innerText="Collapse";
        div.style.height="600px";
        div.style.background="#C7C4FF";
        div.style.opacity="1";

    }
    else {
        HiddenDiv();
    }

}

function HiddenDiv() {
    var div = document.getElementsByClassName("hidden")[0];
    var box = document.getElementById("box");
    div.style.height="0px";
    div.style.opacity="0";
    div.style.background="rgb(216, 216, 255)";
    box.innerText="Show Certificates";
}

var ArrayOfPicture = new Array(
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpg",
    "10.jpg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg");


function NextPicture() {
    var src = document.getElementsByClassName("pic")[0].src;
    var arr = src.split('/');

    arr.reverse();

    for(var i=0;i<ArrayOfPicture.length;i++){
        if(arr[0]==ArrayOfPicture[i] && i!=ArrayOfPicture.length-1){
            arr[0]=ArrayOfPicture[i+1];
            arr.reverse();
            var new_src=CreateString(arr);
            document.getElementsByClassName("pic")[0].src=new_src;
            //alert(src + "   " + new_src );
            break;
        }
        else if(arr[0]==ArrayOfPicture[i] && i==ArrayOfPicture.length-1){
            arr[0]=ArrayOfPicture[0];
            arr.reverse();
            var new_src=CreateString(arr);
            document.getElementsByClassName("pic")[0].src=new_src;
            //alert(src + "   " + new_src );
            break;
        }
    }

}

function BackPicture() {
    var src = document.getElementsByClassName("pic")[0].src;
    var arr = src.split('/');

    arr.reverse();

    for(var i=0;i<ArrayOfPicture.length;i++){
        if(arr[0]==ArrayOfPicture[i] && i!=ArrayOfPicture[0]){
            arr[0]=ArrayOfPicture[i-1];
            arr.reverse();
            var new_src=CreateString(arr);
            document.getElementsByClassName("pic")[0].src=new_src;
            //alert(src + "   " + new_src );
            break;
        }
        else if(arr[0]==ArrayOfPicture[i] && i==ArrayOfPicture[0]){
            arr[0]=ArrayOfPicture[ArrayOfPicture.length-1];
            arr.reverse();
            var new_src=CreateString(arr);
            document.getElementsByClassName("pic")[0].src=new_src;
            //alert(src + "   " + new_src );
            break;
        }
    }

}


function CreateString(array){
    var src=array[0];
    for(var i=1;i<array.length;i++){
        src=src+"/"+array[i];
    }
    return src;
}

function MoveToHome() {
    HiddenDiv();
    window.scroll(0,0);
}

function MoveToGeneralInfomation() {
    HiddenDiv();
    window.scroll(0,537);
}

function MoveToKnowledge() {
    HiddenDiv();
    window.scroll(0,843);
}

function MoveToMotivationList() {
    HiddenDiv();
    window.scroll(0,1340);
}

function MoveToFeedback() {
    HiddenDiv();
    window.scroll(0,1920);
}

function MoveToContact() {
    HiddenDiv();
    window.scroll(0,3135);
}




function ready() {
    showDiv();
}

document.addEventListener("DOMContentLoaded", ready);