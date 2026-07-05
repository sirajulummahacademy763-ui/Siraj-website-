document.addEventListener("DOMContentLoaded", () => {
    console.log("Sirajul Ummatul Islamiyah Loaded Successfully");

    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    cards.forEach(card=>{
        card.style.opacity="0";
        card.style.transform="translateY(40px)";
        card.style.transition="0.8s";
        observer.observe(card);
    });
});
