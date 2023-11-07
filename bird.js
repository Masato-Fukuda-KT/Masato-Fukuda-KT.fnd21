'use strict'
// 1行目に記載している 'use strict' は削除しないでください


document.getElementById('startButton').addEventListener('click', function() {
    const imageCount = parseInt(document.getElementById('result').textContent);
    const container = document.getElementById('container');

    container.innerHTML = '';
    for (let i = 0; i < imageCount; i++) {
        createAndDisplayImage(container);
    }
});

function createAndDisplayImage(container) {
    const image = document.createElement('img');
    image.src = "まもぎふ.gif" 
    image.className = 'image';

    container.appendChild(image);
}
