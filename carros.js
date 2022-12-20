//códigos para os carros

let xCarros = [ 600, 600, 600, 600 , 600, 600 ]
let yCarros = [ 40, 96, 150, 210, 270, 318 ]
let velocidadeCarros = [ 2, 2.5, 3.2, 5, 3.3, 2.3 ]

let tamanhoXCarro = 40;
let tamanhoYCarro = 30;

function mostraCarro(){
    for ( let i = 0; i < imagemCarros.length; i = i + 1 ){
        image ( imagemCarros[i], xCarros[i], yCarros[i], tamanhoXCarro, tamanhoYCarro );
    }
}

function movimentaCarro(){
    for ( let i = 0; i < imagemCarros.length; i = i + 1 ){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialCarro(){
    for ( let i = 0; i < imagemCarros.length; i = i + 1 ){
        if ( passouTodaATela(xCarros[i])){
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}