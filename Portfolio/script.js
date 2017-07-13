
function showDiv(){
    alert("Yes");
    document.getElementsByClassName("hidden").style.height = "200px";

}

function closeDiv() {
    document.getElementsByClassName("hidden").style.height = "0px";
    alert("No");
}