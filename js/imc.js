
const weight = document.getElementById('weight')

const height = document.getElementById('height')


function calcularIMC(event) {
    event.preventDefault()

    console.log(typeof weight.value)
    console.log(typeof height.value)

    const imc = Number(weight.value) / (Number(height.value) * Number(height.value))

    console.log(imc)

    const result = document.getElementById('result-box')

    result.innerHTML = `
        <p>Seu IMC é:</p>
        <p>${imc}</p>
        <p>Classificação</p>
    `
}