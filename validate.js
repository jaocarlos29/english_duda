// validate.js

// Função para validar as respostas
function validateAnswers() {
    // Validação da primeira pergunta (Unidade 1 - Exercício 1)
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const feedbackQ1 = document.getElementById('feedback-q1');
    if (q1Answer) {
        if (q1Answer.value === "a") {
            feedbackQ1.textContent = "Correto! Eles são seus melhores amigos.";
            feedbackQ1.className = "feedback correct";
        } else {
            feedbackQ1.textContent = "Incorreto. A resposta correta é 'are'.";
            feedbackQ1.className = "feedback incorrect";
        }
    } else {
        feedbackQ1.textContent = "Por favor, selecione uma resposta.";
        feedbackQ1.className = "feedback incorrect";
    }

    // Validação da segunda pergunta (Unidade 1 - Exercício 2)
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const feedbackQ2 = document.getElementById('feedback-q2');
    if (q2Answer) {
        if (q2Answer.value === "a") {
            feedbackQ2.textContent = "Correto! Você estava em Nova Iorque no ano passado.";
            feedbackQ2.className = "feedback correct";
        } else {
            feedbackQ2.textContent = "Incorreto. A resposta correta é 'was'.";
            feedbackQ2.className = "feedback incorrect";
        }
    } else {
        feedbackQ2.textContent = "Por favor, selecione uma resposta.";
        feedbackQ2.className = "feedback incorrect";
    }

    // Validação da terceira pergunta (Unidade 1 - Leitura e Interpretação)
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    const feedbackQ3 = document.getElementById('feedback-q3');
    if (q3Answer) {
        if (q3Answer.value === "b") {
            feedbackQ3.textContent = "Correto! Mary é enfermeira.";
            feedbackQ3.className = "feedback correct";
        } else {
            feedbackQ3.textContent = "Incorreto. A resposta correta é 'nurse'.";
            feedbackQ3.className = "feedback incorrect";
        }
    } else {
        feedbackQ3.textContent = "Por favor, selecione uma resposta.";
        feedbackQ3.className = "feedback incorrect";
    }

    // Validação da quarta pergunta (Unidade 2 - Exercício 1)
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    const feedbackQ4 = document.getElementById('feedback-q4');
    if (q4Answer) {
        if (q4Answer.value === "a") {
            feedbackQ4.textContent = "Correto! Você está escrevendo um email para seu amigo.";
            feedbackQ4.className = "feedback correct";
        } else {
            feedbackQ4.textContent = "Incorreto. A resposta correta é 'am writing'.";
            feedbackQ4.className = "feedback incorrect";
        }
    } else {
        feedbackQ4.textContent = "Por favor, selecione uma resposta.";
        feedbackQ4.className = "feedback incorrect";
    }

    // Validação da quinta pergunta (Unidade 2 - Exercício 2)
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    const feedbackQ5 = document.getElementById('feedback-q5');
    if (q5Answer) {
        if (q5Answer.value === "a") {
            feedbackQ5.textContent = "Correto! Ela não está falando com o chefe.";
            feedbackQ5.className = "feedback correct";
        } else {
            feedbackQ5.textContent = "Incorreto. A frase negativa é 'She is not talking'.";
            feedbackQ5.className = "feedback incorrect";
        }
    } else {
        feedbackQ5.textContent = "Por favor, selecione uma resposta.";
        feedbackQ5.className = "feedback incorrect";
    }

    // Validação da sexta pergunta (Unidade 2 - Leitura e Interpretação)
    const q6Answer = document.querySelector('input[name="q6"]:checked');
    const feedbackQ6 = document.getElementById('feedback-q6');
    if (q6Answer) {
        if (q6Answer.value === "a") {
            feedbackQ6.textContent = "Correto! Tom está assistindo TV.";
            feedbackQ6.className = "feedback correct";
        } else {
            feedbackQ6.textContent = "Incorreto. A resposta correta é 'watching TV'.";
            feedbackQ6.className = "feedback incorrect";
        }
    } else {
        feedbackQ6.textContent = "Por favor, selecione uma resposta.";
        feedbackQ6.className = "feedback incorrect";
    }

    // Validação da sétima pergunta (Unidade 3 - Exercício 1)
    const q7Answer = document.querySelector('input[name="q7"]:checked');
    const feedbackQ7 = document.getElementById('feedback-q7');
    if (q7Answer) {
        if (q7Answer.value === "a") {
            feedbackQ7.textContent = "Correto! Você visitou sua avó semana passada.";
            feedbackQ7.className = "feedback correct";
        } else {
            feedbackQ7.textContent = "Incorreto. A resposta correta é 'visited'.";
            feedbackQ7.className = "feedback incorrect";
        }
    } else {
        feedbackQ7.textContent = "Por favor, selecione uma resposta.";
        feedbackQ7.className = "feedback incorrect";
    }

    // Validação da oitava pergunta (Unidade 3 - Leitura e Interpretação)
    const q8Answer = document.querySelector('input[name="q8"]:checked');
    const feedbackQ8 = document.getElementById('feedback-q8');
    if (q8Answer) {
        if (q8Answer.value === "b") {
            feedbackQ8.textContent = "Correto! A família foi ao zoológico no fim de semana passado.";
            feedbackQ8.className = "feedback correct";
        } else {
            feedbackQ8.textContent = "Incorreto. A resposta correta é 'to the zoo'.";
            feedbackQ8.className = "feedback incorrect";
        }
    } else {
        feedbackQ8.textContent = "Por favor, selecione uma resposta.";
        feedbackQ8.className = "feedback incorrect";
    }

    // Validação da nona pergunta (Unidade 4 - Exercício 1)
    const q9Answer = document.querySelector('input[name="q9"]:checked');
    const feedbackQ9 = document.getElementById('feedback-q9');
    if (q9Answer) {
        if (q9Answer.value === "a") {
            feedbackQ9.textContent = "Correto! Você visitará sua avó amanhã.";
            feedbackQ9.className = "feedback correct";
        } else {
            feedbackQ9.textContent = "Incorreto. A resposta correta é 'will visit'.";
            feedbackQ9.className = "feedback incorrect";
        }
    } else {
        feedbackQ9.textContent = "Por favor, selecione uma resposta.";
        feedbackQ9.className = "feedback incorrect";
    }

    // Validação da décima pergunta (Unidade 4 - Leitura e Interpretação)
    const q10Answer = document.querySelector('input[name="q10"]:checked');
    const feedbackQ10 = document.getElementById('feedback-q10');
    if (q10Answer) {
        if (q10Answer.value === "b") {
            feedbackQ10.textContent = "Correto! Eles irão viajar para o Brasil no próximo verão.";
            feedbackQ10.className = "feedback correct";
        } else {
            feedbackQ10.textContent = "Incorreto. A resposta correta é 'Brazil'.";
            feedbackQ10.className = "feedback incorrect";
        }
    } else {
        feedbackQ10.textContent = "Por favor, selecione uma resposta.";
        feedbackQ10.className = "feedback incorrect";
    }

    // Validação da décima primeira pergunta (Unidade 5 - Exercício 1)
    const q11Answer = document.querySelector('input[name="q11"]:checked');
    const feedbackQ11 = document.getElementById('feedback-q11');
    if (q11Answer) {
        if (q11Answer.value === "a") {
            feedbackQ11.textContent = "Correto! Se chover, eu ficaria em casa.";
            feedbackQ11.className = "feedback correct";
        } else {
            feedbackQ11.textContent = "Incorreto. A resposta correta é 'would stay'.";
            feedbackQ11.className = "feedback incorrect";
        }
    } else {
        feedbackQ11.textContent = "Por favor, selecione uma resposta.";
        feedbackQ11.className = "feedback incorrect";
    }
}
