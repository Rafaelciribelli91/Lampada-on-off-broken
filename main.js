const turnOff = document.getElementById("turnOff")
const turnOn = document.getElementById("turnOn")
const lamp = document.getElementById("lamp")

function lampIsBroken() {
    return lamp.src.indexOf ("quebrada") > -1
}

function lampOff() {
    if (!lampIsBroken() ) {
    lamp.src = "./img/apagada.jpg"
    }
}

function lampOn() {
    if (!lampIsBroken() ) {
    lamp.src = "./img/acesa.png"
    }
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg"
}

turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click", lampOff)
lamp.addEventListener("dblclick", lampBroken)

