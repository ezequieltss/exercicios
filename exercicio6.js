function calculaora(num1,num2, operação){
 switch(operação){
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
        return num1 * num2;
    case '/':    
        return num1 / num2;
    default:
        return "operação inválida"
         
 }
}
console.log(calculaora(2,3,'-'))
console.log(calculaora(2,3,'+'))
console.log(calculaora(2,3,'*'))
console.log(calculaora(2,3,'/'))
  