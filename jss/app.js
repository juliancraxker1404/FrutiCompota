var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="https://juliancraxker1404.github.io/FrutiCompota/";
    }else{
        location.href="https://juliancraxker1404.github.io/FrutiCompota/indexingles.html";
    }
}

