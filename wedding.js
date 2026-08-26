function changeLanguage(lang) {

    if (!translations[lang]) return;


    /* ==========================================
       ՍԻՐՈՎ ՀՐԱՎԻՐՈՒՄ ԵՆՔ ՁԵԶ
       ========================================== */

    const invite = document.getElementById("invite");

    if (invite) {
        invite.textContent = translations[lang].invite;
    }


    /* ==========================================
       "ԻՆՉՊԵՍ ՀԱՍՆԵԼ" ԲՈԼՈՐ ԿՈՃԱԿՆԵՐԸ
       ========================================== */

    document.querySelectorAll(".map-btn").forEach(function(button) {

        button.textContent = translations[lang].map;

    });


    /* ==========================================
       RSVP — ԱՆՈՒՆ
       ========================================== */

    const nameInput = document.getElementById("name");

    if (nameInput) {

        nameInput.placeholder =
            translations[lang].namePlaceholder;

    }


    /* ==========================================
       RSVP — ՀԵՌԱԽՈՍ
       ========================================== */

    const phoneInput = document.getElementById("phone");

    if (phoneInput) {

        phoneInput.placeholder =
            translations[lang].phonePlaceholder;

    }


    /* ==========================================
       RSVP — ՀՅՈՒՐԵՐԻ ՔԱՆԱԿ
       ========================================== */

    const guestCount =
        document.getElementById("guestCount");

    if (guestCount) {

        guestCount.placeholder =
            translations[lang].guestCountPlaceholder;

    }


    /* ==========================================
       RSVP — ՈՐ ԿՈՂՄՆ ԵՔ
       ========================================== */

    const side =
        document.getElementById("side");

    if (side) {

        const options =
            side.querySelectorAll("option");

        if (options[0]) {

            options[0].textContent =
                translations[lang].sidePlaceholder;

        }

        if (options[1]) {

            options[1].textContent =
                translations[lang].brideSide;

            options[1].value =
                lang === "hy"
                    ? "Հարսի կողմ"
                    : "Со стороны невесты";

        }

        if (options[2]) {

            options[2].textContent =
                translations[lang].groomSide;

            options[2].value =
                lang === "hy"
                    ? "Փեսայի կողմ"
                    : "Со стороны жениха";

        }

    }


    /* ==========================================
       RSVP — ԿԳԱՆՔ / ՉԵՆՔ ԿԱՐՈՂ ԳԱԼ
       ========================================== */

    const yesText =
        document.getElementById("yesText");

    const noText =
        document.getElementById("noText");


    if (yesText) {

        yesText.textContent =
            translations[lang].yes;

    }


    if (noText) {

        noText.textContent =
            translations[lang].no;

    }


    /* Radio value */

    const yes =
        document.getElementById("yes");

    const no =
        document.getElementById("no");


    if (yes) {

        yes.value =
            translations[lang].yes;

    }


    if (no) {

        no.value =
            translations[lang].no;

    }


    /* ==========================================
       ՈՒՂԱՐԿԵԼ
       ========================================== */

    const send =
        document.getElementById("send");

    if (send) {

        send.textContent =
            translations[lang].send;

    }


    /* ==========================================
       ՄՆԱՑԱԾ ՏԵՔՍՏԵՐ
       ========================================== */

    const elements = [
        "bride",
        "groom",
        "dear1",
        "dear2",
        "dear3",
        "intro",
        "saveDate",
        "weddingDate",
        "brideHomeTime",
        "brideHomeTitle",
        "brideHomeCity",
        "brideHomeAddress",
        "churchTime",
        "churchTitle",
        "churchCity",
        "churchAddress",
        "hallTime",
        "hallTitle",
        "hallCity",
        "hallAddress",
        "hallName",
        "rsvpTitle",
        "deadline"
    ];


    elements.forEach(function(id) {

        const element =
            document.getElementById(id);

        if (
            element &&
            translations[lang][id] !== undefined
        ) {

            element.textContent =
                translations[lang][id];

        }

    });


    /* ==========================================
       BODY — ՀԱՅ / ՌՈՒՍ ՖՈՆՏ
       ========================================== */

    document.body.classList.remove("hy", "ru");

    document.body.classList.add(lang);


    /* ==========================================
       ԼԵԶՎԻ ԿՈՃԱԿԻ ACTIVE
       ========================================== */

    document.querySelectorAll(".lang-btn").forEach(function(button) {

        button.classList.remove("active");

    });


    const activeButton =
        document.querySelector(
            `.lang-btn[onclick="changeLanguage('${lang}')"]`
        );


    if (activeButton) {

        activeButton.classList.add("active");

    }


    /* ==========================================
       ՀԻՇՈՒՄ ԵՆՔ ԸՆՏՐՎԱԾ ԼԵԶՈՒՆ
       ========================================== */

    localStorage.setItem(
        "weddingLanguage",
        lang
    );

}


/* ==========================================
   ԷՋԸ ԲԱՑԵԼԻՍ
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedLanguage =
            localStorage.getItem("weddingLanguage") || "hy";

        changeLanguage(savedLanguage);

    }
);
/* ==========================================
   RSVP — ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ
   ========================================== */

function showSimpleThankYou() {

    const message =
        document.getElementById("simpleThankYou");

    if (!message) return;

    message.classList.remove("hy", "ru");

    if (document.body.classList.contains("ru")) {

        message.classList.add("ru");

    } else {

        message.classList.add("hy");

    }

    message.style.display = "block";
}
