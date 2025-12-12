//Maria
// Har hentet inspiration fra denne youtube video - https://www.youtube.com/watch?v=9_TQFwodpDc

console.log('It works:)')

const socials = [
    {
        href:  "https://www.instagram.com/hesselgaard_glamping/",
        imgSrc: "img/instagram.svg",
        alt:  "instagram logo",
        class:  "footer_socials-link--ig",
    },
    {
        href:  "https://www.facebook.com/profile.php?id=100093300235879",
        imgSrc:  "img/facebook.svg",
        alt: "Facebook logo",
        class: "footer_socials-link--fb",
    },
];

function addSocials() {
    const socialsContainer = document.querySelector(".footer_socials");

    if (!socialsContainer) {
        console.warn("kunne ikke finde  .footer_socials i DOM'en");
        return;
    }

    for (let i = 0; i < socials.length; i++) {
        const social = socials[i];

        const link = document.createElement ("a");
        link.href = social.href;
        link.target = "_blank";
        link.rel = "noopener";
        link.classList.add("footer_socials-link");

        if (social.class) {
            link.classList.add(social.class);
        }

        const icon = document.createElement("img");
        icon.src = social.imgSrc;
        icon.alt = social.alt;

        link.appendChild(icon);
        socialsContainer.appendChild(link);
    }
}

document.addEventListener("DOMContentLoaded", addSocials);