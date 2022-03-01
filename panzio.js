function kalkulacio(){
    var Erk = document.getElementById("erkezes").value;
    var Tav = document.getElementById("tavozas").value;

    var ErkDatum = new Date(Erk);
    var TavDatum = new Date(Tav);

    var elteltido = TavDatum.getTime()-ErkDatum.getTime();
    var napokszama = elteltido /(1000 * 3600 * 24);

    var SzobaAr = 0;

    if(document.getElementById("EgyAgyas").checked == true){
        SzobaAr = 9000;
    }

    if(document.getElementById("KetAgyas").checked == true){
        SzobaAr = 15000;
    }

    if(document.getElementById("EgyAgyasPot").checked == true){
        SzobaAr = 18000;
    }

    if(document.getElementById("KetAgyasPot").checked == true){
        SzobaAr = 20000;
    }

    var VendegekSzama = 0;

    vendegekSzama=document.getElementById("vendegszam").value;
    var Eletkorok = [];

    for(var i=1; i < 5; i++){
        if(isNaN("e"+i)){
            Eletkorok.push(document.getElementById("e"+i).value);
        }
    }

    var Ellatas = 0;
    
    if(document.getElementById("reggeli").checked == true){
        Ellatas = 900;
    }

    if(document.getElementById("felpanzio").checked == true){
        Ellatas = 2900;
    }

    if(document.getElementById("teljespanzio").checked == true){
        Ellatas = 4500;
    }


    console.log(napokszama);
    console.log(SzobaAr);
    console.log(vendegekSzama);
    console.log(Eletkorok);
}