function startQuiz() {
    document.getElementById('intro-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function calculateScore() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;
    answers.forEach((ans) => {
        score += parseInt(ans.value);
    });

    let resultText = "Skor kamu: " + score + "<br>";

    if (score <= 4) {
        resultText += "✅ Kecemasan minimal.";
    } else if (score <= 9) {
        resultText += "🟡 Kecemasan ringan.";
    } else if (score <= 14) {
        resultText += "🟠 Kecemasan sedang.";
    } else {
        resultText += "🔴 Kecemasan berat. Sebaiknya konsultasikan ke tenaga profesional.";
    }

    document.getElementById("result").innerHTML = resultText;
}

// Pertanyaan GAD-7
const questions = [
    "Merasa gugup, cemas, atau sangat tegang?",
    "Tidak bisa menghentikan rasa khawatir?",
    "Terlalu banyak mengkhawatirkan berbagai hal?",
    "Kesulitan untuk rileks?",
    "Menjadi gelisah sehingga sulit untuk duduk diam?",
    "Mudah terganggu atau mudah kesal?",
    "Merasa takut seakan sesuatu yang buruk akan terjadi?"
];

const quizForm = document.getElementById("quizForm");

questions.forEach((question, i) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
    <p>${i + 1}. ${question}</p>
    <div class="options">
        <label><input type="radio" name="q${i}" value="0" required> Tidak sama sekali</label>
        <label><input type="radio" name="q${i}" value="1"> Beberapa hari</label>
        <label><input type="radio" name="q${i}" value="2"> Lebih dari separuh hari</label>
        <label><input type="radio" name="q${i}" value="3"> Hampir setiap hari</label>
    </div>
`;

    quizForm.appendChild(div);
});
