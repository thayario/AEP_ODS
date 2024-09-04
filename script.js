
function CalcularIMC() {
    var inputMetrosImc = document.getElementById("inputMetrosImc")
    var metrosImc = parseFloat(inputMetrosImc.value)
    var inputQuilosImc = document.getElementById("inputQuilosImc")
    var quilosImc = parseFloat(inputQuilosImc.value)
    if (metrosImc <= 0 || inputQuilosImc <= 0) {
        alert("Não é um valor válido!")
    }
    var calAlt = metrosImc * metrosImc
    var IMC = quilosImc / calAlt
    var resultFinal = document.getElementById("resultado")
    resultFinal.textContent = IMC.toFixed(2)
}

function LimparCamposIMC() {
    document.getElementById("inputMetrosImc").value = ""
    document.getElementById("inputQuilosImc").value = ""
    document.getElementById("resultado").textContent = ""
}

function CalcularTxBasal() {
    const selectedSex = document.querySelector("input[name='sexo']:checked").value
    var inputIdadeBs = document.getElementById("inputIdadeBs")
    var idadeBs = parseInt(inputIdadeBs.value)
    var inputQuilosBs = document.getElementById("inputQuilosBs")
    var quilosBs = parseFloat(inputQuilosBs.value)
    var inputMetrosBs = document.getElementById("inputMetrosBs")
    var metrosBs = parseFloat(inputMetrosBs.value) * 100
    var resultFinalTx = document.getElementById("resultadoTxBa")

    if (quilosBs <= 0 || metrosBs <= 0 || idadeBs <= 0) {
        alert("Não é um valor válido!")
    }

    if (selectedSex == "mulher") {
        var calculo = (655 + (9.6 * quilosBs) + (1.7 * metrosBs) - (4.7 * idadeBs))
    } else {
        var calculo = (66 + (13.8 * quilosBs) + (5 * metrosBs) - (6.8 * idadeBs))
    }

    resultFinalTx.textContent = calculo.toFixed(2)
}

function LimparCamposTxBa() {
    document.getElementById("inputIdadeBs").value = ""
    document.getElementById("inputQuilosBs").value = ""
    document.getElementById("inputMetrosBs").value = ""
    document.getElementById("resultadoTxBa").textContent = ""

}

function CriarAlerta() {

    var inputHrEvento = document.getElementById("horaEvento")
    var horaEvento = inputHrEvento.value

    if (!horaEvento) {
        alert("POr favor insira um horário válido")
        return
    }

    var [horas, minutos] = horaEvento.split(":").map(Number)
    var agora = new Date()
    var evento = new Date()

    evento.setHours(horas)
    evento.setMinutes(minutos)
    evento.setSeconds(0)
    evento.setMilliseconds(0)

    var tempoAteEvento = evento.getTime() - agora.getTime()

    if (tempoAteEvento < 0) {
        alert("O horário inserido já passou.")
        return
    }

    setTimeout(function () {
        alert("Hora de tomar a insulina!")
    }, tempoAteEvento)

    console.log("Alerta configurado para " + evento)

    console.log(horaEvento)

}



