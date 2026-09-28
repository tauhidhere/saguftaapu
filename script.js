const music =
    document.getElementById("bgMusic");


/* CHANGE SCREEN */

function goTo(number) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    const next =
        document.getElementById(
            "screen" + number
        );

    next.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts(8);
}


/* FINAL SURPRISE */

function finalSurprise() {

    music.play().catch(() => {
        console.log(
            "Music requires user interaction."
        );
    });

    goTo(5);

    createHearts(40);

    setTimeout(() => {
        createHearts(30);
    }, 2000);
}


/* CREATE HEART */

function createHeart() {

    const heart =
        document.createElement("div");

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "✨"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        (Math.random() * 20 + 15)
        + "px";

    heart.style.zIndex =
        "9999";

    heart.style.pointerEvents =
        "none";

    heart.style.animation =
        "floatUp 4s linear forwards";

    document.body.appendChild(
        heart
    );

    setTimeout(() => {
        heart.remove();
    }, 4000);
}


/* MANY HEARTS */

function createHearts(number) {

    for (
        let i = 0;
        i < number;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 80
        );

    }
}
