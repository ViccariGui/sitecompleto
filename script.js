function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "C",
        q2: "A",
        q3: "D",
        q4: "B",
        q5: "B",
        q6: "D",
        q7: "B",
        q8: "B",
        q9: "A",
        q10: "C",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    // Tocar som dependendo da pontuação
    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    } else {
        let failureSound = document.getElementById('perdeusom');
        failureSound.play();
    }

    // Mostrar o botão "Responder Novamente"
    // document.getElementById("resetQuiz").style.display = "inline-block";
    document.querySelector('button[type="button"]').disabled = true; 
    document.getElementById('retry-button').disabled = false; 
}

function resetQuiz() {
    let form = document.getElementById('quiz-form');
    form.reset(); // Reseta todas as respostas do formulário

    // Habilitar todas as opções de resposta
    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });

    // Limpar o resultado exibido
    document.getElementById('result').innerHTML = "";

    // Esconder o botão de reset novamente
    document.getElementById("retry-button").style.display = "display: block";
    document.querySelector('button[type="button"]').disabled = false;
    document.getElementById('retry-button').disabled = true;
}