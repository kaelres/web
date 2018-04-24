function server(a, cb) { //cb une fonction
    if (a == 1) {
        cb("ON");
    } else if (a == 2) {
     cb("");
    } else {
        cb("OFF");
    }
}

function serv(a, fct) {
    console.log("debut");
    var s = 200;

    setTimeout(function () { // le setTimeOut permet de créer un thread qui va exec, le temps qu'il passe par les if else
        if (a == 1) {       // le programme principal sera déjà passé par sa prochaine ligne qui incremente s et c'est une var paratgée
            fct("ON");
        } else if (a == 2) {
            fct("");
        } else {
            fct("OFF");
        }
        console.log(s); // s est a 300 ici il parait
    }, 1000);

    s+=100;
    console.log('fin');
}

serv(2, function (txt) {
    if (!txt) txt = "vide";
    console.log(txt);
}) // A priori on a a ==2 et cb la fonction qui affiche en console log. donc on fait cb("OFF") qui fait en fait console.log("OFF")

