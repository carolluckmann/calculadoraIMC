function calculo() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const nome = document.getElementById('nome').value;
    const imc = peso / (altura * altura);
if (imc <= 15.99) {
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (magreza grave), consulte um médico/nutricionista!`;
    document.getElementById('resultado').style.backgroundColor = 'red';
} else if (imc >= 16 && imc <= 16.9){
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (magreza moderada), fique atento à sua saúde!`;
    document.getElementById('resultado').style.backgroundColor = 'orange';
} else if (imc >= 17 && imc <= 18.4) {
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (magreza leve), cuide-se.`;
    document.getElementById('resultado').style.backgroundColor = 'yellow';
} else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById('resultado').innerHTML = `${nome}: você está saudável. Seu IMC é ${imc.toFixed(2)}. Parabéns!`;
    document.getElementById('resultado').style.backgroundColor = 'green';
} else if (imc >= 25 && imc <= 29.9) {
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (sobrepeso), cuide-se.`;
    document.getElementById('resultado').style.backgroundColor = 'yellow';
} else if (imc >= 30 && imc <= 34.9) {
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (obesidade grau I), fique atento à sua saúde!`;
    document.getElementById('resultado').style.backgroundColor = 'orange';
} else if (imc >= 35 && imc <= 39.9) {
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (obesidade grau II), consulte um médico/nutricionista!`;
    document.getElementById('resultado').style.backgroundColor = 'red';
} else if (imc >= 40) {
    document.getElementById('resultado').innerHTML = `${nome}: seu IMC é ${imc.toFixed(2)} (obesidade grau III), consulte um médico/nutricionista!`;
    document.getElementById('resultado').style.backgroundColor = 'red';
}
document.getElementById('resultado').style.display = 'block';
}

