const questions = [
    { question: "¿Cuál es el planeta más grande del sistema solar?", answers: ["Júpiter", "Saturno", "Neptuno", "Marte"], correctAnswer: "Júpiter" },
    { question: "¿Qué elemento químico da a la sangre su color rojo?", answers: ["Hierro", "Oxígeno", "Carbono", "Nitrógeno"], correctAnswer: "Hierro" },
    { question: "¿Cuál es el órgano más grande del cuerpo humano?", answers: ["Corazón", "Hígado", "Piel", "Cerebro"], correctAnswer: "Piel" },
    { question: "¿Qué planeta es conocido como el 'planeta rojo'?", answers: ["Marte", "Júpiter", "Saturno", "Venus"], correctAnswer: "Marte" },
    { question: "¿Cómo se llama el primer elemento de la tabla periódica?", answers: ["Oxígeno", "Hidrógeno", "Helio", "Litio"], correctAnswer: "Hidrógeno" },
    { question: "¿Cuál es la velocidad de la luz en el vacío?", answers: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"], correctAnswer: "300.000 km/s" },
    { question: "¿Qué tipo de animal es la ballena?", answers: ["Pez", "Mamífero", "Reptil", "Anfibio"], correctAnswer: "Mamífero" },
    { question: "¿Cuál es la fórmula química del agua?", answers: ["H2O", "CO2", "O2", "NaCl"], correctAnswer: "H2O" },
    { question: "¿Cuántos planetas tiene el sistema solar?", answers: ["8", "7", "9", "10"], correctAnswer: "8" },
    { question: "¿Qué gas es el más abundante en la atmósfera terrestre?", answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], correctAnswer: "Nitrógeno" },
    { question: "¿Cuál es la capital de Francia?", answers: ["París", "Londres", "Berlín", "Madrid"], correctAnswer: "París" }, // Una pregunta no científica para diversificar
    { question: "¿En qué unidad se mide la presión atmosférica?", answers: ["Pascal", "Newton", "Joule", "Watt"], correctAnswer: "Pascal" },
    { question: "¿Quién propuso la teoría de la relatividad?", answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], correctAnswer: "Albert Einstein" },
    { question: "¿Qué célula del cuerpo humano contiene la información genética?", answers: ["Célula epitelial", "Glóbulo rojo", "Neurona", "Célula germinal"], correctAnswer: "Célula germinal" },
    { question: "¿Qué fenómeno natural es causado por los movimientos de las placas tectónicas?", answers: ["Tsunami", "Tornado", "Erupción volcánica", "Terremoto"], correctAnswer: "Terremoto" }
];


// Variables para llevar el índice de la pregunta actual y la puntuación del usuario
let currentQuestionIndex = 0;
let score = 0;

// Mostrar la pregunta actual y sus opciones de respuesta
function showQuestion() {
    const questionArea = document.getElementById('question-area');
    const answerButtons = document.getElementById('answer-buttons');
	
    answerButtons.innerHTML = ''; 
    
    questionArea.textContent = questions[currentQuestionIndex].question;
	
    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('btn', 'btn-outline-secondary', 'mb-2');
        button.onclick = () => checkAnswer(answer); // Establece el evento onclick
        answerButtons.appendChild(button);
    });
    updateScore(); // Actualiza la puntuación visualmente
}

// aomprobar si la respuesta seleccionada es correcta
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        score++; // Incrementa la puntuación si la respuesta es correcta
    }
    currentQuestionIndex++; // Pasa a la siguiente pregunta
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Muestra la siguiente pregunta
    } else {
        showResults(); // Muestra los resultados si se han acabado las preguntas
    }
    updateScore(); // Actualiza la puntuación visualmente
}

// aostrar los resultados finales
function showResults() {
    const questionArea = document.getElementById('question-area');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    // Muestra la puntuación final y oculta los botones de respuestas y el botón siguiente
    questionArea.innerHTML = `<h3>¡Finalizado! Tu puntuación: ${score} de ${questions.length}</h3>`;
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
}

// actualizar el progreso de las preguntas
function updateProgress() {
    const progress = document.getElementById('progress');
    progress.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
}

// actualizar la puntuación visualmente
function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Puntuación: ${score}`;
}

// Función que se ejecuta al cargar la página
window.onload = function() {
    showQuestion(); // Muestra la primera pregunta
    updateProgress(); // Actualiza el progreso inicial
    document.getElementById('next-btn').onclick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
            updateProgress();
        } else {
            showResults();
        }
    };
};