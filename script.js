const questions = [
    "Merasa gugup, cemas, atau sangat tegang?",
    "Tidak bisa menghentikan rasa khawatir?",
    "Terlalu banyak mengkhawatirkan berbagai hal?",
    "Kesulitan untuk rileks?",
    "Menjadi gelisah sehingga sulit untuk duduk diam?",
    "Mudah terganggu atau mudah kesal?",
    "Merasa takut seakan sesuatu yang buruk akan terjadi?"
];

const messages = {
    minimal: [
    "Kamu dalam kondisi mental yang sehat. Terus jaga keseimbangan dirimu!",
    "Tenang dan terkendali—itu kamu! Lanjutkan kebiasaan positifmu 💪",
    "Kamu sudah melakukan pekerjaan yang luar biasa dalam merawat dirimu. Proud of you!"
    ],
    ringan: [
    "Kamu gak sendiri. Sedikit cemas itu wajar. Terus semangat ya ✨",
    "Semangat terus! Jangan ragu untuk ngobrol sama orang terdekat.",
    "Kamu cukup kuat untuk menghadapi ini. Pelan-pelan aja 🌈"
    ],
    sedang: [
    "Kamu udah hebat bisa sampai sini 💙 Ayo cari support yang kamu butuh.",
    "Healing itu proses. Tapi kamu sedang bergerak ke arah yang lebih baik 🌷",
    "Kamu layak mendapatkan kedamaian, satu langkah kecil setiap hari."
    ],
    berat: [
    "Kamu sedang berada di masa sulit, dan itu valid. Tapi kamu berharga ❤️",
    "Gak apa-apa kalau sekarang kamu butuh istirahat 🌧️→☀️",
    "Yuk, ambil langkah pertamamu menuju pemulihan—pelan tapi pasti 🌻"
    ]
};

const splash = document.getElementById("splash");
const quizForm = document.getElementById("quizForm");
const questionList = document.getElementById("questionList");
const resultPage = document.getElementById("resultPage");
const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");
const messageEl = document.getElementById("message");

function startTest() {
    splash.style.display = "none";
    quizForm.style.display = "block";
}

function getRandomMessage(level) {
    const arr = messages[level];
    return arr[Math.floor(Math.random() * arr.length)];
}

function renderQuestions() {
    questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p class="question">${i + 1}. ${q}</p>
        <div class="options">
        <label><input type="radio" name="q${i}" value="0"> Tidak sama sekali</label>
        <label><input type="radio" name="q${i}" value="1"> Beberapa hari</label>
        <label><input type="radio" name="q${i}" value="2"> Lebih dari separuh hari</label>
        <label><input type="radio" name="q${i}" value="3"> Hampir setiap hari</label>
        </div>
    `;
    questionList.appendChild(div);
    });
}

function getCategory(score) {
    if (score <= 4) return "minimal";
    if (score <= 9) return "ringan";
    if (score <= 14) return "sedang";
    return "berat";
}

quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let total = 0;
    let valid = true;

    for (let i = 0; i < questions.length; i++) {
    const val = document.querySelector(`input[name=q${i}]:checked`);
    if (val) {
        total += parseInt(val.value);
    } else {
        valid = false;
        break;
    }
    }

    if (!valid) {
    alert("Mohon isi semua pertanyaan dulu ya 🙏");
    return;
    }

    const category = getCategory(total);
    quizForm.style.display = "none";
    resultPage.style.display = "block";
    scoreEl.textContent = `Skor kamu: ${total}`;
    levelEl.textContent = `Tingkat kecemasan: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    messageEl.textContent = getRandomMessage(category);
});

renderQuestions();