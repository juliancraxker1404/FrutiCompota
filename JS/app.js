var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="http://127.0.0.1:5501/index.html";
    }else{
        location.href="http://127.0.0.1:5501/principal/indexingles.html";
    }
}


