function islem(event) {

    var x = event.clientX;
    var y = event.clientY;



    if (x > 365 && x < 400 && y > 400 && y < 425) {
        document.getElementById("gul").innerHTML = "ÇİÇEK FARKI BULUNDU"
    }

    else if (x > 440 && x < 470 && y > 270 && y < 290) {
        document.getElementById("smile").innerHTML = "GÜLÜCÜK FARKI BULUNDU"
    }
    else if (x > 360 && x < 400 && y > 220 && y < 248) {
        document.getElementById("snow").innerHTML = "KAR FARKI BULUNDU"
    }
    else if (x > 230 && x < 250 && y > 200 && y < 225) {
        document.getElementById("bee").innerHTML = "ARI FARKI BULUNDU"
    }


}

function done() {

    if (document.getElementById("gul").innerHTML === "ÇİÇEK FARKI BULUNDU" &&
        document.getElementById("smile").innerHTML === "GÜLÜCÜK FARKI BULUNDU" &&
        document.getElementById("snow").innerHTML === "KAR FARKI BULUNDU" &&
        document.getElementById("bee").innerHTML === "ARI FARKI BULUNDU") {

        alert("4 FARK BULUNDU TEBRIKLER")
    }
    else {
        alert("HENUZ FARKLARI BULAMADIN :(")
    }

}