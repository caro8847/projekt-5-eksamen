//Rebecca


const discountBadge = document.querySelector(".discount__badge-img");


if (discountBadge) {

    const discountInfo = {
        percent: 10,
        code: "HESSELGAARD10",
        minDays: 2,
        active: true
    };

    const discountSteps = [
    "Book mindst " + discountInfo.minDays + " dage i eventsalen.",
    "Skriv rabatkoden '" + discountInfo.code + "' i kommentarfeltet efter du har trykket Book.",
    "Rabatten på " + discountInfo.percent + "% bliver fratrukket den endelige pris i bekræftelsen."
];


  
    function showDiscountInfo() {


        if (!discountInfo.active) {
            alert("Rabatkampagnen er desværre udløbet.");
            return;
        }

        let message = "Sådan får du " + discountInfo.percent + "% rabat:\n\n";

 
        for (let i = 0; i < discountSteps.length; i++) {
            message += "• " + discountSteps[i] + "\n";
        }

        alert(message);


        console.log("Bruger klikkede på rabat-badge for at læse rabat-info.");
    }

    discountBadge.addEventListener("click", showDiscountInfo);
}