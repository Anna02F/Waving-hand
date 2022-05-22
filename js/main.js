const body = document.body;
const modalButton = document.querySelector(".modal-btn");
const modalCloseButton = document.querySelector(".modal-close-btn");

//Point hand animation
gsap.to(".point-hand", {
    duration: 2,
    opacity: 1,
    y: 30,
    ease: "back.out(1.7)",
});

//Wave hand animation
const wave = (_) => {
    const wavingHand = document.querySelector(".wave-hand");
    const tl = gsap.timeline({
        defaults: { duration: 0.2 },
        delay: 0.3,
        pause: true,
    });
    tl.set(wavingHand, { transformOrigin: "bottom center" });
    tl.from(wavingHand, {
        duration: 0.5,
        opacity: 0,
        scale: 0.25,
        ease: "back.out(1.4)",
    })
        .to(wavingHand, { rotation: 10 })
        .to(wavingHand, { rotation: -10 })
        .to(wavingHand, { rotation: 10 })
        .to(wavingHand, { rotation: -10 })
        .to(wavingHand, { rotation: 10 })
        .to(wavingHand, { rotation: 0 });
};

modalButton.addEventListener("click", (event) => {
    body.classList.add("modal-is-opened");
    wave();
});

modalCloseButton.addEventListener("click", (event) => {
    body.classList.remove("modal-is-opened");
});

//Closing the modal by clicking modal overlay
const modalOverlay = document.querySelector(".modal-overlay");
const modal = modalOverlay.querySelector(".modal");

modalOverlay.addEventListener("click", (e) => {
    //if the click event doesn't happen inside the modal or on the modal close overlay
    if (!e.target.closest(".modal")) {
        body.classList.remove("modal-is-opened");
    }
});
