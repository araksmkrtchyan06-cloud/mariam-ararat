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
/* ==========================================
   RSVP — ՏՎՅԱԼՆԵՐԻ ՈՒՂԱՐԿՈՒՄ
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("rsvpForm");

    if (!form) return;

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const lang =
            document.body.classList.contains("ru")
                ? "ru"
                : "hy";

        const t = translations[lang];

        const sendButton =
            document.getElementById("send");

        /* Ուղարկվում է */

        if (sendButton) {
            sendButton.disabled = true;
            sendButton.textContent =
                t.sending || (lang === "ru"
                    ? "Отправляется..."
                    : "Ուղարկվում է...");
        }

        /* Դաշտեր */

        const name =
            document.getElementById("name")?.value.trim();

        const phone =
            document.getElementById("phone")?.value.trim();

        const guestCount =
            document.getElementById("guestCount")?.value;

        const side =
            document.getElementById("side")?.value;

        const attendance =
            document.querySelector(
                'input[name="attendance"]:checked'
            )?.value;


        /* Բոլոր դաշտերը լրացվա՞ծ են */

        if (
            !name ||
            !phone ||
            !guestCount ||
            !side ||
            !attendance
        ) {

            alert(
                t.fillAll ||
                (lang === "ru"
                    ? "Пожалуйста, заполните все поля."
                    : "Խնդրում ենք լրացնել բոլոր դաշտերը։")
            );

            if (sendButton) {
                sendButton.disabled = false;
                sendButton.textContent = t.send;
            }

            return;
        }


        /* Տվյալներ */

        const data = {

            name: name,

            phone: phone,

            guestCount: guestCount,

            side: side,

            answer: attendance

        };


        try {

            /* ======================================
               CLOUDFLARE WORKER
               ====================================== */

            const response = await fetch(
                "https://polished-wildflower-a173.araksmkrtchyan06.workers.dev/",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );


            const result =
                await response.json();


            if (!response.ok || !result.success) {

                throw new Error(
                    result.error || "RSVP error"
                );

            }


            /* Հաջող ուղարկվեց */

            form.reset();

            showSimpleThankYou();


        } catch (error) {

            console.error(
                "RSVP ERROR:",
                error
            );

            alert(
                t.sendError ||
                (lang === "ru"
                    ? "Не удалось отправить данные. Пожалуйста, попробуйте ещё раз."
                    : "Տվյալները չհաջողվեց ուղարկել։ Խնդրում ենք կրկին փորձել։")
            );


        } finally {

            if (sendButton) {

                sendButton.disabled = false;

                sendButton.textContent =
                    t.send ||
                    (lang === "ru"
                        ? "Отправить"
                        : "Ուղարկել");

            }

        }

    });

});
