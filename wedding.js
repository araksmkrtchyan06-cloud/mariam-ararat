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

    const form =
        document.getElementById("rsvpForm");

    if (!form) {
        console.error("RSVP form not found!");
        return;
    }


    form.addEventListener("submit", async function (e) {

        e.preventDefault();


        /* ======================================
           ԼԵԶՈՒ
           ====================================== */

        const lang =
            document.body.classList.contains("ru")
                ? "ru"
                : "hy";

        const t =
            translations[lang];


        /* ======================================
           ՈՒՂԱՐԿԵԼ ԿՈՃԱԿ
           ====================================== */

        const sendButton =
            document.getElementById("send");


        if (sendButton) {

            sendButton.disabled = true;

            sendButton.textContent =
                t.sending ||
                (lang === "ru"
                    ? "Отправляется..."
                    : "Ուղարկվում է...");
        }


        /* ======================================
           ՏՎՅԱԼՆԵՐ
           ====================================== */

        const name =
            document.getElementById("name")?.value.trim();

        const phone =
            document.getElementById("phone")?.value.trim();

        const guestCount =
            document.getElementById("guestCount")?.value;

        const side =
            document.getElementById("side")?.value;


        /* ======================================
           ԿԳԱՆՔ / ՉԵՆՔ ԳԱ
           ====================================== */

        const selectedAnswer =
            document.querySelector(
                'input[type="radio"]:checked'
            );

        const answer =
            selectedAnswer
                ? selectedAnswer.value
                : "";


        /* ======================================
           ՍՏՈՒԳՈՒՄ
           ====================================== */

        if (
            !name ||
            !phone ||
            !guestCount ||
            !side ||
            !answer
        ) {

            alert(
                t.fillAll ||
                (lang === "ru"
                    ? "Пожалуйста, заполните все поля."
                    : "Խնդրում ենք լրացնել բոլոր դաշտերը։")
            );


            if (sendButton) {

                sendButton.disabled = false;

                sendButton.textContent =
                    t.send;
            }

            return;
        }


        /* ======================================
           ՏՎՅԱԼՆԵՐ WORKER-Ի ՀԱՄԱՐ
           ====================================== */

        const data = {

            name: name,

            phone: phone,

            guestCount: guestCount,

            side: side,

            answer: answer

        };


        console.log("RSVP DATA:", data);


        /* ======================================
           CLOUDFLARE WORKER
           ====================================== */

        try {

            const response =
                await fetch(
                    "https://polished-wildflower-a173.araksmkrtchyan06.workers.dev/",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(data)
                    }
                );


            const result =
                await response.json();


            console.log(
                "WORKER RESPONSE:",
                result
            );


            /* ==================================
               ՍԽԱԼ
               ================================== */

            if (
                !response.ok ||
                !result.success
            ) {

                throw new Error(
                    result.error ||
                    "Worker error"
                );
            }


            /* ==================================
               ՀԱՋՈՂՈՒԹՅՈՒՆ
               ================================== */

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
