function changement(){
    let divPeru=document.getElementById("peru")
    let divTurquoise=document.getElementById("turquoise")
    let divYellow=document.getElementById("yellow")

    if(divPeru.style.display=="inherit"){
        divPeru.style.display="none"
        divYellow.style.display="none"
        divTurquoise.style.display="inherit"
    }else if(divTurquoise.style.display=="inherit"){
        divYellow.style.display="inherit"
        divPeru.style.display="none"
        divTurquoise.style.display="none"
    }else{
        divTurquoise.style.display="none"
        divPeru.style.display="inherit"
        divYellow.style.display="none"
    }
}





/*



function changement(){
    let divPeru=document.getElementById("peru")
    let divTurquoise=document.getElementById("turquoise")
    let divYellow=document.getElementById("yellow")
     
}
function la_suivante(){
    let colorChange = document.getElementById("mon_titre")
    titre.className = "red"
}*/


