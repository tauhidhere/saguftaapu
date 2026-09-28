const music =
    document.getElementById("bgMusic");


function nextScreen(number) {

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
}



function startBirthday() {

    music.play().catch(() => {
        console.log(
            "Music could not autoplay."
        );
    });


    nextScreen(4);

    createHearts();

    setInterval(
        createHeart,
        700
    );
}



function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML =
        ["❤️", "💕", "💖", "💗", "✨"]
        [
            Math.floor(
                Math.random() * 5
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
        "1000";

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



function createHearts() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }
}
