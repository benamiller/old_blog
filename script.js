function animation(x){
    x.classList.toggle("change");
    
}

function togglemyNav(){
    if(document.getElementById("myNav").style.height == "100%"){
        document.getElementById("myNav").style.height = "0%";
        document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.7)";
    }else{
        document.getElementById("myNav").style.height = "100%";
        document.getElementById("header").style.backgroundColor = "transparent";
    }
}