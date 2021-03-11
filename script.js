alert ("Hello World")
prompt ("Digite seu nome")
confirm ("Voce torce pra o cruzerin?")

function verificarAposentadoria(usuario){
    if (usuario.idade <50){
        return false;
    }
    else {
       return true;
    }   
}

let usuario = {
    nome: "Rivaldo",
    idade: '29',
    eJogador: false
};

console.log(usuario)

let usuario2 = {
    nome: "Joao",
    idade: "74",
    eJogador: true
};


let usuarios = [usuario, usuario2];

console.log(usuarios)

console.log(verificarAposentadoria(usuario));
console.log(verificarAposentadoria(usuario));