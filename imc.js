const btnCalculate = document.getElementById('calcular')

const calculateBMI = (height, weight) => (weight / Math.pow(height, 2)).toFixed(1)

const classification = (bmi) => {
    if (bmi < 18.5)
        return 'abaixo do peso'
    else if (bmi < 25)
        return 'com peso ideal. Parabéns!!!'
    else if (bmi < 30)
        return 'levemente acima do peso.'
    else if (bmi < 35)
        return 'com obesidade grau I.'
    else if (bmi < 40)
        return 'com obesidade grau II.'
    else
        return 'com obesidade grau III. Cuidado!!'
}

const bmi = () => {
    const name = document.getElementById('nome').value
    const height = document.getElementById('altura').value
    const weight = document.getElementById('peso').value
    const result = document.getElementById('resultado')

    if (validateInputs(name, height, weight)) {

        const bmiValue = calculateBMI(height, weight)
        
        let bmiClassification = classification(bmiValue)

        result.textContent = `${name} seu IMC é ${bmiValue} e você está ${bmiClassification}`
    } else {
        alert('Preencha todos os campos')
    }

}

function validateInputs() {
    for (i = 0; i < arguments.length; i++)
        if (arguments[i] === '')
            return false

    return true
}

btnCalculate.addEventListener('click', bmi)