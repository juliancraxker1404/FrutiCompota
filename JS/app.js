var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="http://127.0.0.1:5500/principal/paginaprincipal.html";
    }else{
        location.href="http://127.0.0.1:5500/principal/indexingles.html";
    }
}


