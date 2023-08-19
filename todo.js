let input=document.getElementById("input");
let savedisplay=document.querySelector(".savedisplay");

function add()
{
    if(input.value=="")
    {
        alert("please enter task ");
    }
    else
    {
        let newele=document.createElement("ul");
        newele.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        savedisplay.appendChild(newele);
        input.value="";
       newele.querySelector("i").addEventListener("click", remove);
       function remove()
       {
        newele.remove()
       }
    }
}