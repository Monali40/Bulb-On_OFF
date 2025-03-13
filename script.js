document.getElementById("img").src="Of.png";
document.getElementById("text").innerHTML="Off";
document.getElementById("Of").style.backgroundColor="rgb(245,188,0)";
document.getElementById("Of").style.Color="white";

function btnOn(){
    document.getElementById("img").src="On.png";
    document.getElementById("text").innerHTML="On";
    document.getElementById("On").style.backgroundColor="rgb(245,188,0)";
    document.getElementById("On").style.Color="white";
    document.getElementById("Of").style.backgroundColor="white";
    document.getElementById("Of").style.Color="back";
}

function btnOf(){
    document.getElementById("img").src="Of.png";
    document.getElementById("text").innerHTML="Off";
    document.getElementById("Of").style.backgroundColor="rgb(245,188,0)";
    document.getElementById("Of").style.Color="white";
    document.getElementById("On").style.backgroundColor="white";
    document.getElementById("On").style.Color="back";
}