//Rebecca
// ---------------- Rabat-badge (10% cirklen) ----------------

// finder rabat-cirklen i DOM
const discountBadge = document.querySelector(".discount__badge-img");

// tjekker om vi er på en side, hvor den findes
if (discountBadge) {

    // objekt med grund-data om rabatten
    const discountInfo = {
        percent: 10,
        code: "HESSELGAARD10",
        minDays: 2,
        active: true
    };

    // array med trin, der forklarer, hvordan man får rabatten
    const discountSteps = [
    "Book mindst " + discountInfo.minDays + " dage i eventsalen.",
    "Skriv rabatkoden '" + discountInfo.code + "' i kommentarfeltet efter du har trykket Book.",
    "Rabatten på " + discountInfo.percent + "% bliver fratrukket den endelige pris i bekræftelsen."
];


    // funktion der bygger en tekst ud fra arrayet og viser den
    function showDiscountInfo() {

        // hvis rabatten ikke er aktiv, får man en anden besked
        if (!discountInfo.active) {
            alert("Rabatkampagnen er desværre udløbet.");
            return;
        }

        let message = "Sådan får du " + discountInfo.percent + "% rabat:\n\n";

        // loop igennem alle trin i arrayet
        for (let i = 0; i < discountSteps.length; i++) {
            message += "• " + discountSteps[i] + "\n";
        }

        // viser info i en simpel popup
        alert(message);

        // debugging i konsollen
        console.log("Bruger klikkede på rabat-badge for at læse rabat-info.");
    }

    // event – når man klikker på cirklen
    discountBadge.addEventListener("click", showDiscountInfo);
}