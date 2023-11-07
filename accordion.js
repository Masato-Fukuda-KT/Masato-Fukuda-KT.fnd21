'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const parentMenu = document.querySelectorAll(".menu > li > a");
for(let i=0; i<parentMenu.length;i++){
    parentMenu[i].addEventListener("click",function(event){
        event.preventDefault();
        this.nextElementSibling.classList.toggle("active")
    })
}

