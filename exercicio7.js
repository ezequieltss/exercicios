function verificapalindromo(str){
    let strReversa =str.split('').reverse().join('');
     return str === strReversa;

}
console.log(verificapalindromo("ana"));// true
console.log(verificapalindromo("joao"));// false
