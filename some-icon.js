//Maria
console.log('It works:)')

const footer = document.getElementById('footer-right');


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

    socials.forEach((social) => {
        const link = document.createElement("a");
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
    });
}

document.addEventListener("DOMContentLoaded", addSocials);