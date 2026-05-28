const CORRECT_PASSWORD = "3105";


// LOADING SCREEN

setTimeout(() => {

    document.getElementById("loadingPage").classList.remove("active");
    document.getElementById("loadingPage").classList.add("hidden");

    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("loginPage").classList.add("active");

}, 2500);




// PASSWORD CHECK

function checkPassword() {

    const input = document.getElementById("password").value;

    if (input === CORRECT_PASSWORD) {

        document.getElementById("loginPage").classList.remove("active");
        document.getElementById("loginPage").classList.add("hidden");

        document.getElementById("wishPage").classList.remove("hidden");
        document.getElementById("wishPage").classList.add("active");

        startTyping();

    } else {

        alert("Wrong password ❤️");

    }
}




// TYPEWRITER EFFECT

const message = `
Thank you for being my everyday person even from far away.

No matter how stressful or random the day gets,
sharing things with you somehow makes it better.

You became one of the most important parts of my daily life,
and I genuinely feel lucky to have you.

So this small website is just a tiny reminder that
you are really special to me.
`;

let index = 0;

function startTyping() {

    const target = document.getElementById("typedMessage");

    function type() {

        if (index < message.length) {

            target.innerHTML += message.charAt(index);

            index++;

            setTimeout(type, 35);
        }
    }

    type();
}




// OPEN MEMORIES PAGE

function openMemories() {

    document.getElementById("wishPage").classList.remove("active");
    document.getElementById("wishPage").classList.add("hidden");

    document.getElementById("memoryPage").classList.remove("hidden");
    document.getElementById("memoryPage").classList.add("active");


    const audio = document.getElementById("birthdaySong");

    audio.play();

    startSlideshow();
}




// SLIDESHOW

let currentSlide = 0;

function startSlideshow() {

    const slides = document.querySelectorAll(".slide");

    setInterval(() => {

        slides[currentSlide].classList.remove("active-slide");

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active-slide");

    }, 3000);
}