const translations = {

    /* =====================================================
       ՀԱՅԵՐԵՆ
       ===================================================== */

    hy: {

        title: "Արարատ & Մարիամ",

        bride: "ԱՐԱՐԱՏ",

        groom: "ՄԱՐԻԱՄ",

        invite: "Սիրով հրավիրում ենք Ձեզ",

        dear1: "ՍԻՐԵԼԻ ԲԱՐԵԿԱՄՆԵՐ",

        dear2: "և",

        dear3: "ԸՆԿԵՐՆԵՐ",

        intro: "Մեր կյանքում կարևոր իրադարձություն է սպասվում․ մենք ընտանիք ենք կազմում և ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի լուսավոր օրը։",

        saveDate: "Save the Date",

        weddingDate: "26|10|2026",


        /* Հարսի տուն */

        brideHomeTime: "12:00",

        brideHomeTitle: "Հարսի տուն",

        brideHomeCity: "Գ․ Ոսկեհատ",

        brideHomeAddress: "Մուսալեռան 35",


        /* Եկեղեցի */

        churchTime: "14:00",

        churchTitle: "Պսակադրություն",

        churchCity: "Ք․ Էջմիածին",

        churchAddress: "Սբ․ Հռիփսիմե եկեղեցի",


        /* Հանդիսություն */

        hallTime: "17:30",

        hallTitle: "Հարսանյաց հանդիսություն",

        hallCity: "Փարաքար",

        hallAddress: "Կարեն Դեմիրճյան 28",

        hallName: "Joy Hall",


        /* Քարտեզ */

        map: "Ինչպես հասնել",


        /* RSVP */

        rsvpTitle: "Խնդրում ենք հաստատել Ձեր ներկայությունը",

        deadline: "մինչև 20․10․2026",

        namePlaceholder: "Անուն Ազգանուն",

        phonePlaceholder: "Հեռախոսահամար",

        sidePlaceholder: "Որ կողմն եք",

        brideSide: "Հարսի կողմ",

        groomSide: "Փեսայի կողմ",

        guestCountPlaceholder: "Հյուրերի քանակ",

        yes: "Կգանք",

        no: "Չենք կարող գալ",

        send: "Ուղարկել",

        sending: "Ուղարկվում է...",

        fillAll: "Խնդրում ենք լրացնել բոլոր դաշտերը։",

        sendError: "Տվյալները չհաջողվեց ուղարկել։ Խնդրում ենք կրկին փորձել։"

    },


    /* =====================================================
       РУССКИЙ
       ===================================================== */

    ru: {

        title: "Арарат & Мариам",

        bride: "АРАРАТ",

        groom: "МАРИАМ",

        invite: "С любовью приглашаем Вас",

        dear1: "ДОРОГИЕ БЛИЗКИЕ",

        dear2: "И",

        dear3: "ДРУЗЬЯ",

        intro: "В нашей жизни наступает особенный день. Мы создаём семью и будем счастливы разделить этот светлый и незабываемый день вместе с Вами.",

        saveDate: "Save the Date",

        weddingDate: "26|10|2026",


        /* Дом невесты */

        brideHomeTime: "12:00",

        brideHomeTitle: "Дом невесты",

        brideHomeCity: "с. Воскехат",

        brideHomeAddress: "ул. Мусалера, 35",


        /* Церковь */

        churchTime: "14:00",

        churchTitle: "Венчание",

        churchCity: "г. Эчмиадзин",

        churchAddress: "Церковь Святой Рипсиме",


        /* Банкет */

        hallTime: "17:30",

        hallTitle: "Свадебный банкет",

        hallCity: "Паракар",

        hallAddress: "ул. Карена Демирчяна, 28",

        hallName: "Joy Hall",


        /* Карта */

        map: "Как добраться",


        /* RSVP */

        rsvpTitle: "Пожалуйста, подтвердите Ваше присутствие",

        deadline: "до 20․10․2026",

        namePlaceholder: "Имя и Фамилия",

        phonePlaceholder: "Номер телефона",

        sidePlaceholder: "С чьей стороны?",

        brideSide: "Со стороны невесты",

        groomSide: "Со стороны жениха",

        guestCountPlaceholder: "Количество гостей",

        yes: "Придём",

        no: "Не сможем прийти",

        send: "Отправить",

        sending: "Отправляется...",

        fillAll: "Пожалуйста, заполните все поля.",

        sendError: "Не удалось отправить данные. Пожалуйста, попробуйте ещё раз."

    }

};


function getText(key, lang) {

    return translations[lang][key];

}

function changeLanguage(lang) {

    if (!translations[lang]) return;

    document.documentElement.lang = lang;

    /* Տեքստեր */
    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.getAttribute("data-lang");

        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }

    });

    /* Placeholder-ներ */
    document.querySelectorAll("[data-placeholder]").forEach(element => {

        const key = element.getAttribute("data-placeholder");

        if (translations[lang][key] !== undefined) {
            element.placeholder = translations[lang][key];
        }

    });

    /* Select-ի option-ներ */
    document.querySelectorAll("[data-lang-value]").forEach(element => {

        const key = element.getAttribute("data-lang-value");

        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }

    });

    /* Ակտիվ լեզվի կոճակ */
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(
        `.lang-btn[onclick="changeLanguage('${lang}')"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }

    /* Էջի title */
    document.title = translations[lang].title;
}

