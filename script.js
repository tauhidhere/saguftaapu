/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("bgMusic");

const transition =
    document.getElementById("transition");

const effects =
    document.getElementById("effects");


/* =========================
   GO TO NEXT SCREEN
========================= */

function goTo(number) {

    /* Start music after first click */

    music.play().catch(error => {

        console.log(
            "Music waiting for user interaction:",
            error
        );

    });


    /* Click transition */

    transition.classList.add("active");


    /* Flash */

    createFlash();


    /* Sparkles + hearts */

    createHearts(18);

    createSparkles(12);


    /* Change screen */

    setTimeout(() => {

        const screens =
            document.querySelectorAll(".screen");


        screens.forEach(screen => {

            screen.classList.add("hidden");

        });


        const next =
            document.getElementById(
                "screen" + number
            );


        if (next) {

            next.classList.remove("hidden");

        }


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 280);


    /* Remove transition */

    setTimeout(() => {

        transition.classList.remove("active");

    }, 650);

}



/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise() {

    /* Strong final animation */

    transition.classList.add("active");

    createFlash();

    createHearts(50);

    createSparkles(35);


    setTimeout(() => {

        const screens =
            document.querySelectorAll(".screen");


        screens.forEach(screen => {

            screen.classList.add("hidden");

        });


        document
            .getElementById("screen5")
            .classList.remove("hidden");


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    }, 300);


    setTimeout(() => {

        transition.classList.remove("active");

    }, 700);


    /* Extra heart explosion */

    setTimeout(() => {

        createHearts(35);

        createSparkles(20);

    }, 1500);

}



/* =========================
   FLASH EFFECT
========================= */

function createFlash() {

    const flash =
        document.createElement("div");

    flash.className =
        "click-flash";

    document.body.appendChild(flash);


    setTimeout(() => {

        flash.remove();

    }, 600);

}



/* =========================
   CREATE HEART
========================= */

function createHeart() {

    const heart =
        document.createElement("div");


    const emojis = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "✨"

    ];


    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];


    heart.className =
        "effect";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (Math.random() * 22 + 16)
        + "px";


    heart.style.animationDuration =
        (Math.random() * 2 + 3)
        + "s";


    effects.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 5500);

}



/* =========================
   CREATE SPARKLE
========================= */

function createSparkles(number) {

    const sparkleSymbols = [

        "✨",
        "⭐",
        "💫",
        "🌟"

    ];


    for (
        let i = 0;
        i < number;
        i++
    ) {

        setTimeout(() => {

            const sparkle =
                document.createElement("div");


            sparkle.className =
                "effect";


            sparkle.innerHTML =
                sparkleSymbols[
                    Math.floor(
                        Math.random() *
                        sparkleSymbols.length
                    )
                ];


            sparkle.style.left =
                Math.random() * 100 + "vw";


            sparkle.style.fontSize =
                (Math.random() * 18 + 12)
                + "px";


            sparkle.style.animationDuration =
                (Math.random() * 2 + 2.5)
                + "s";


            effects.appendChild(
                sparkle
            );


            setTimeout(() => {

                sparkle.remove();

            }, 5000);

        }, i * 60);

    }

}



/* =========================
   MANY HEARTS
========================= */

function createHearts(number) {

    for (
        let i = 0;
        i < number;
        i++
    ) {

        setTimeout(() => {

            createHeart();

        }, i * 50);

    }

}
