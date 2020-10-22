/*console.log("hello word");
function value (valuer)
{
    console.log(valuer);
    var bouton = document.querySelectorAll(".button");
    bouton.addEventListener("ici c'est une méthode du DOM qui permet de mettre un écouteur sur un bouton");
}*/
function afficher(valuer)
{
    document.getElementById("output").value+=valuer;
}
function calculer()
{
    let a = document.getElementById("output").value;
    let b = eval (a);
    document.getElementById("output").value = b;

}
function effacer()
{
    document.getElementById("output","outputt").value = "0";
}
function contraire(valeur)
{
    document.getElementById("output").value*=-1;
}
function valeur_absolu(valeur)
{
    if (document.getElementById("output").value<0)
    {
        document.getElementById("output").value*=-1;
    }
    else
    document.getElementById("output").value;
}
function pi()
{
    var c= 3.14159265358979;
    document.getElementById("output").value = c;
}
function inverse(valeur)
{
    if (document.getElementById("output")==0)
    {
        var e= error;
        document.getElementById("output").value = e;
    }
    else
    {
    var d = document.getElementById("output").value;
    document.getElementById("output").value = 1/d;
    }
}
function factorielle (valeur)
{
    var i,f = 1;
    var nbre = document.getElementById("output").value;
    for (i=1; i<=nbre; i++ )
    {
        f = f*i;
    }
    document.getElementById("output").value =  f;
}