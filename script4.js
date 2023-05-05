function generar(){
    var nom=document.getElementById("nombre").value;
    var p1=nom.charAt(0);
    var aP=document.getElementById("apeP").value;
    var p2=aP.charAt(0);
    var parte1=p1.concat(p2);

    var aM=document.getElementById("apeM").value;
    var p3=aM.charAt(0);
    var parte2=parte1.concat(p3);
    var partei= parte2.toUpperCase();

    var a=document.getElementById("año").value;
    var porcion=a.substring(2);
    var mess=document.getElementById("mes").value;
    var parte4=porcion.concat(mess);
    var dia=document.getElementById("dia").value;
    var partef=parte4.concat(dia);

    var rfc=partei.concat(partef);
    document.getElementById("resultado").value=rfc;

}