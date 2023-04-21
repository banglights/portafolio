function suma(){
    var num1=document.getElementById("numero1").value, suma;
    var num2=document.getElementById("numero2").value;
    suma=parseInt(num1)+ parseInt(num2);
    document.getElementById("resultado").innerHTML=suma;
}
function resta(){
    var num1=document.getElementById("numero1").value, restar;
    var num2=document.getElementById("numero2").value;
    restar=parseInt(num1)- parseInt(num2);
    document.getElementById("resultado").innerHTML=restar;
}
function multiplicar(){
    var num1=document.getElementById("numero1").value, multi;
    var num2=document.getElementById("numero2").value;
    multi=parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML=multi;
}

function dividir(){
    var num1=document.getElementById("numero1").value, div;
    var num2=document.getElementById("numero2").value;
    div=parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML=div;
}