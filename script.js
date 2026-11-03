const PIN = "150926";

const slides = [

{
title: "happy world couple day, sayaaaanggg ♡",

text: `hari ini ada sedikit alasan buat aku ngingetin kamu,

kalau kamu itu salah satu hal baik yang pernah hadir di hidup aku`
},

{
title: "kadang aku masih suka ga nyangka",

text: `dari yang awalnya cuma ketemu di free fire,

cuma main bareng dan ngobrol biasa,

ternyata sekarang kamu jadi seseorang yang begitu berarti buat aku`
},

{
title: "surat kecil buat kamu",

text: `sayaaaanggg,

makasih yaa udah hadir,

makasih buat perhatian kecil kamu,

buat waktu yang kamu luangin,

dan buat semua hal sederhana yang mungkin kamu sendiri ga sadar kalau itu bikin aku bahagia`
},

{
title: "aku ga minta hubungan yang sempurna",

text: `aku cuma pengen kita sama-sama belajar,

saling ngerti, saling jaga,

dan kalau ada hari yang ga mudah,

semoga kita tetap mau ngobrol baik-baik dan ga buru-buru nyerah`
},

{
title: "ada satu hal yang aku harapin",

text: `semoga suatu hari nanti kita bisa ngerayain hari seperti ini secara langsung,

ga cuma lewat layar,

aku pengen bisa duduk dekat kamu dan bilang semua ini tanpa harus mengetiknya`
},

{
title: "sebelum kamu lanjut",

text: `aku punya satu pertanyaan kecil buat kamu,

jawab yang jujur yaa sayaaaanggg`
}

];

let current = 0;

function unlock() {

    const pin = document.getElementById("pin").value;

    if (pin === PIN) {

        document.getElementById("pinScreen").classList.remove("active");

        document.getElementById("slides").classList.add("active");

        startMusic();

        showSlide();

        clickSound();

    } else {

        document.getElementById("error").innerText =
        "pin-nya salah, coba lagi yaa ♡";

    }

}


function showSlide() {

    const slide = slides[current];

    document.getElementById("title").innerText = slide.title;

    document.getElementById("text").innerText = "";

    document.getElementById("bar").style.width =
    ((current + 1) / slides.length * 100) + "%";

    typeWriter(slide.text);

}


function typeWriter(text) {

    let i = 0;

    const element = document.getElementById("text");

    element.innerText = "";

    const timer = setInterval(() => {

        element.innerText += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }

    }, 65);

}


function nextSlide() {

    clickSound();

    current++;

    if (current < slides.length) {

        showSlide();

    } else {

        document.getElementById("slides").classList.remove("active");

        document.getElementById("ending").classList.add("active");

        typeWriterEnding();

    }

}


function typeWriterEnding() {

    const message = `aku ga tau semua hal yang bakal kita lewati nanti,

    tapi aku berharap kita tetap punya banyak alasan buat saling memilih,

    semoga suatu hari nanti aku bisa merayakan hari ini di samping kamu,

    bukan cuma lewat layar,

    happy world couple day, sayaaaanggg,

    aku sayang kamu 🤍`;

    let i = 0;

    const element = document.getElementById("endingText");

    element.innerText = "";

    const timer = setInterval(() => {

        element.innerText += message.charAt(i);

        i++;

        if (i >= message.length) {
            clearInterval(timer);
        }

    }, 65);

}


function clickSound() {

    const audio = new AudioContext();

    const oscillator = audio.createOscillator();

    const gain = audio.createGain();

    oscillator.frequency.value = 600;

    gain.gain.value = 0.05;

    oscillator.connect(gain);

    gain.connect(audio.destination);

    oscillator.start();

    oscillator.stop(audio.currentTime + 0.08);

}


// Musik romantis sintetis
function startMusic() {

    const audioContext = new AudioContext();

    audioContext.resume();

    const notes = [261, 329, 392, 329, 293, 349, 440, 349];

    let index = 0;

    function playNote() {

        const oscillator = audioContext.createOscillator();

        const gain = audioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value = notes[index % notes.length];

        gain.gain.value = 0.035;

        oscillator.connect(gain);

        gain.connect(audioContext.destination);

        oscillator.start();

        oscillator.stop(audioContext.currentTime + 1.8);

        index++;

        setTimeout(playNote, 1500);

    }

    playNote();

}


// Animasi hati melayang
setInterval(() => {

    const heart = document.createElement("span");

    heart.innerText = Math.random() > 0.5 ? "♡" : "✦";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
    (5 + Math.random() * 8) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 12000);

}, 500);