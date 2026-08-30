const translations = {

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

        brideHomeTime: "12:00",
        brideHomeTitle: "Հարսի տուն",
        brideHomeCity: "Գ․ Ոսկեհատ",
        brideHomeAddress: "Մուսալեռան 35",

        churchTime: "14:00",
        churchTitle: "Պսակադրություն",
        churchCity: "Ք․ Էջմիածին",
        churchAddress: "Սբ․ Հռիփսիմե եկեղեցի",

        hallTime: "17:30",
        hallTitle: "Հարսանյաց հանդիսություն",
        hallCity: "Փարաքար",
        hallAddress: "Կարեն Դեմիրճյան 28",
        hallName: "Joy Hall",

        map: "Ինչպես հասնել",

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

        send: "Ուղարկել"
    },


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

        brideHomeTime: "12:00",
        brideHomeTitle: "Дом невесты",
        brideHomeCity: "с. Воскехат",
        brideHomeAddress: "ул. Мусалера, 35",

        churchTime: "14:00",
        churchTitle: "Венчание",
        churchCity: "г. Эчмиадзин",
        churchAddress: "Церковь Святой Рипсиме",

        hallTime: "17:30",
        hallTitle: "Свадебный банкет",
        hallCity: "Паракар",
        hallAddress: "ул. Карена Демирчяна, 28",
        hallName: "Joy Hall",

        map: "Как добраться",

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

        send: "Отправить"
    }

};


function changeLanguage(lang) {

    if (!translations[lang]) return;

    const t = translations[lang];

    document.documentElement.lang = lang;

    document.title = t.title;


    /* =========================
       ՀԻՄՆԱԿԱՆ ՏԵՔՍՏԵՐ
       ========================= */

    document.getElementById("bride").textContent = t.bride;

    document.getElementById("groom").textContent = t.groom;

    document.getElementById("invite").textContent = t.invite;

    document.getElementById("dear1").textContent = t.dear1;

    document.getElementById("dear2").textContent = t.dear2;

    document.getElementById("dear3").textContent = t.dear3;

    document.getElementById("intro").textContent = t.intro;

    document.getElementById("saveDate").textContent = t.saveDate;

    document.getElementById("weddingDate").textContent = t.weddingDate;


    /* =========================
       ՀԱՐՍԻ ՏՈՒՆ
       ========================= */

    document.getElementById("brideHomeTime").textContent = t.brideHomeTime;

    document.getElementById("brideHomeTitle").textContent = t.brideHomeTitle;

    document.getElementById("brideHomeCity").textContent = t.brideHomeCity;

    document.getElementById("brideHomeAddress").textContent = t.brideHomeAddress;


    /* =========================
       ԵԿԵՂԵՑԻ
       ========================= */

    document.getElementById("churchTime").textContent = t.churchTime;

    document.getElementById("churchTitle").textContent = t.churchTitle;

    document.getElementById("churchCity").textContent = t.churchCity;

    document.getElementById("churchAddress").textContent = t.churchAddress;


    /* =========================
       ՀԱՆԴԻՍՈՒԹՅՈՒՆ
       ========================= */

    document.getElementById("hallTime").textContent = t.hallTime;

    document.getElementById("hallTitle").textContent = t.hallTitle;

    document.getElementById("hallCity").textContent = t.hallCity;

    document.getElementById("hallAddress").textContent = t.hallAddress;

    document.getElementById("hallName").textContent = t.hallName;


    /* =========================
       ՔԱՐՏԵԶԻ ԿՈՃԱԿՆԵՐ
       ========================= */

    document.getElementById("brideHomeMap").textContent = t.map;

    document.getElementById("churchMap").textContent = t.map;

    document.getElementById("hallMap").textContent = t.map;


    /* =========================
       RSVP
       ========================= */

    document.getElementById("rsvpTitle").textContent = t.rsvpTitle;

    document.getElementById("deadline").textContent = t.deadline;

    document.getElementById("name").placeholder = t.namePlaceholder;

    document.getElementById("phone").placeholder = t.phonePlaceholder;

    document.getElementById("sidePlaceholder").textContent = t.sidePlaceholder;

    document.getElementById("brideSide").textContent = t.brideSide;

    document.getElementById("groomSide").textContent = t.groomSide;

    document.getElementById("guestCount").placeholder = t.guestCountPlaceholder;

    document.getElementById("yesText").textContent = t.yes;

    document.getElementById("noText").textContent = t.no;

    document.getElementById("send").textContent = t.send;


    /* =========================
       LANGUAGE BUTTON
       ========================= */

    document.querySelectorAll(".lang-btn").forEach(button => {

        button.classList.remove("active");

    });

    if (lang === "hy") {

        document.querySelector(
            ".lang-btn[onclick=\"changeLanguage('hy')\"]"
        ).classList.add("active");

    }

    if (lang === "ru") {

        document.querySelector(
            ".lang-btn[onclick=\"changeLanguage('ru')\"]"
        ).classList.add("active");

    }

}

