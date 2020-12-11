let color_carre="rose"

function play(id){
    let cell=document.getElementById(id)
    cell.classList.add("blue")

    if(color_carre=="blue"){
        cell.classList.add('rose')
        cell.innerText="O"
        color_carre="rose"
    }else{
        cell =document.getElementById(id)
        cell.classList.add('blue')
        cell.innerText="X"
        color_carre='blue'
    }
}

function playAgain(){
    let cell=document.getElementById("carre1")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "
    

    cell=document.getElementById("carre2")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre3")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre4")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre5")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre6")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre7")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre8")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

    cell=document.getElementById("carre9")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell.innerText=" "

}