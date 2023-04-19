function suma(){
    /**parseInt(); parseFloat();*/
    var num1, num2, resultado;
    num1=prompt("Escribe un número ", "");
    num2=prompt("Escribe otro número ", "");
    resultado=parseInt(num1)+ parseInt(num2);
    alert("La suma es " +resultado);
}

function resta(){
    /**parseInt(); parseFloat();*/
    var num1, num2, resultado;
    num1=prompt("Escribe un número ", "");
    num2=prompt("Escribe otro número ", "");
    resultado=parseInt(num1)-parseInt(num2);
    alert("La resta es " +resultado);
}

function multiplicar(){
    var num1, num2, resul;
    num1=prompt("Escribe un numero ", "");
    num2=prompt("Escribe otro número ", "");
    resul=parseInt(num1)*parseInt(num2);
    alert("La multiplicacion es " +resul);
}

function dividir(){
    var num1, num2, result;
    num1=prompt("Escribe un numero ", "");
    num2=prompt("Escribe otro número ", "");
    result=parseInt(num1)/parseInt(num2);
    alert("La divición es " +result);
}

function signo(){
    var num;
    num=prompt("Ingresa un numero ");
    if(parseInt(num)<0)
        alert("El numero es negativo");
   else
        alert("El numero es positivo");
}