'use strict'
// 1行目に記載している 'use strict' は削除しないでください


const buttons = document.querySelectorAll("table button")
const result = document.querySelector("#result")

let concatText = "";

function buttonPressed(event){
    const text = event.target.textContent;

    if(text === "="){
        concatText = eval(concatText);
    }else if(text === "C"){
        concatText = "";
    }else {
        concatText += text;
    }
    result.textContent = concatText
}

buttons.forEach(button => button.addEventListener("click",buttonPressed))
