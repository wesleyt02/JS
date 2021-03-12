/*lista1 */


/*1*/
function calcularMedia(notas) {
    let soma=0;
    for (let i=0; i<5; i++){
        soma =  soma + notas[i];
    }
    let media = soma / notas.length;
    return media
}
notas = [0,4,6,12,22];
console.log (calcularMedia(media));


