//carros

let xCarro = 600;
let yCarro = 45;

let xCarro2 = 600;
let yCarro2 = 96;

let tamanhoXCarro = 40;
let tamanhoYCarro = 30;

function mostraCarro(){
    image ( imagemCarro, xCarro, yCarro, tamanhoXCarro, tamanhoYCarro );
    image ( imagemCarro2, xCarro2, yCarro2, tamanhoXCarro, tamanhoYCarro );
}

function movimentaCarro(){
    xCarro -= 2;
    xCarro2 -= 3;
}
