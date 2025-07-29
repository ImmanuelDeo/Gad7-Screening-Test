const questions = [
    "Merasa gugup, cemas, atau tegang?",
    "Tidak bisa berhenti merasa khawatir?",
    "Terlalu khawatir tentang berbagai hal?",
    "Sulit untuk rileks?",
    "Gelisa sehingga sulit duduk diam?",
    "Mudah terganggu atau cepat marah?",
    "Merasa takut seolah sesuatu buruk akan terjadi?"
];

const options = [
    { text: "Tidak sama sekali", value: 0 },
    { text: "Beberapa hari", value: 1 },
    { text: "Lebih dari separuh hari", value: 2 },
    { text: "Hampir setiap hari", value: 3 }
];

window.onload = () => {
    const form = document.getElementById("quizForm");
    questions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<label>${index + 1}. ${q}</label>`;
    options.forEach((opt, i) => {
        qDiv.innerHTML += `
        <label>
            <input type="radio" name="q${index}" value="${opt.value}" required />
            ${opt.text}
        </label>
        `;
    });
    form.appendChild(qDiv);
    });
};

function calculateScore() {
    let total = 0;
    for (let i = 0; i < questions.length; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (val) total += parseInt(val.value);
    }

    let hasil = "";
    if (total <= 4) hasil = "Tingkat kecemasan MINIMAL";
    else if (total <= 9) hasil = "Tingkat kecemasan RINGAN";
    else if (total <= 14) hasil = "Tingkat kecemasan SEDANG";
    else hasil = "Tingkat kecemasan BERAT";

    document.getElementById("result").innerHTML =
    `✅ Skormu: ${total}<br>📊 ${hasil}<br><br>
    ⚠️ Ini bukan diagnosis. Jika merasa terganggu, pertimbangkan untuk berkonsultasi ke psikolog atau konselor.`;
}
