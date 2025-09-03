import { warn } from "vue"

const uz = {
    navigation:{
        home: "Uy",
        portfolio: "Portfolio",
        about: "Men haqimda",
        skill: "Tajribam",
        contact: "Bog'lanish"
    },

    home: {
        aboutCodeDna: "Zamonaviy web texnologiyalar va innovatsion yechimlar bilan sizning g'oyalaringizni hayotga tatbiq etuvchi CodeDNA",
        about: "Men haqimda",
    },

    about: {
        about: "Men haqimda",
        aboutMe: "Salom! Men zamonaviy veb-ilovalarni yaratishga qiziqadigan frontend dasturchiman. Asosiy e’tiborim Vue.js ekotizimiga qaratilgan bo‘lib, shu bilan birga JavaScript, HTML, CSS bilan mustahkam tajribaga egaman. Real loyihalarda Pinia orqali holat boshqaruvi, Axios bilan API integratsiyasi, Ant Design Vue orqali foydalanuvchi interfeyslarini ishlab chiqish, hamda Sass bilan stil yozishni optimallashtirish bo‘yicha samarali ishlayman.",
        more: "Batafsil"
    },

    skill: {
        mySkill: "Mening Tajribalarim",

        webDeveloper:{
            name: "Web Dasturchi",
            description:"HTML, CSS, JAVASCRIPT, VUE JS va boshqa zamonaviy web texnologiyalaridan foydalanib web saytlar yaratish tajribasiga egaman",
        },

        mobileDeveloper: {
            name: "Mobile Dasturchi",
            description: "VUE JS, SASS, Capacitor yordamida smartfonlar uchun ilovalar yaratish tajribasiga egaman"
        },

        library: {
            name: "Kutubxonalar",
            description: "VUE JSdagi asosiy kutubxonalardan biri 'PINIA' global ma'lumotlarni barcha componentlar yordamida boshqara olaman"
        }
    },

    portfolio: {
        starboi: {
            name: "STARBOI",
            description: "STARBOI — ijodkorlik va texnik mahoratning mukammal uyg‘unligi. Ushbu portfolio sayti zamonaviy dizayn va intuitiv interfeys orqali Starboi'ning montaj san'atiga bo‘lgan yondashuvini namoyon etadi. Saytda uning eng yaxshi ishlari, kreativ video loyihalari va xizmatlari jamlangan. Har bir sahifa — bu montajda ustalik, tafakkurda original yondashuv va harakatdagi hikoya."
        },

        maximus: {
            name: "MAXIMUS",
            description: "MAXIMUS — otlar bilan bog‘liq xizmatlarga ixtisoslashgan kompaniya uchun ishlab chiqilgan zamonaviy va ishonchli veb-sayt. Ushbu sayt orqali foydalanuvchilar kompaniya faoliyati, xizmat turlari, otlar parvarishi, treninglar va bog‘lanish imkoniyatlari haqida to‘liq ma'lumotga ega bo‘lishadi."
        },

        weather: {
            name: "WEATHER APP",
            description: "WEATHER — real vaqtli ob-havo ma'lumotlarini aniq, sodda va chiroyli interfeysda taqdim etuvchi zamonaviy ilova. Foydalanuvchilar joriy ob-havo holati, harorat, namlik, shamol tezligi va 7 kunlik prognoz kabi muhim ma'lumotlarga tezkor kirish imkoniga ega. Ilova minimalistik dizayn, foydalanuvchi uchun qulay interfeys va responsiv (mobilga mos) tuzilma asosida ishlab chiqilgan."
        },

        postroy: {
            name: "POSTROY LANDING",
            description: "POSTROY LANDING — zamonaviy va ishonchli qurilish materiallari kompaniyasi uchun ishlab chiqilgan funksional va estetikasiga mos veb-sayt. Sayt foydalanuvchilarga mahsulotlar katalogi, narxlar, tavsiflar va tezkor buyurtma berish imkonini taqdim etadi. Sayt dizayni qat’iy, ishonch uyg‘otuvchi uslubda yaratilgan bo‘lib, professional korporativ imidjni aks ettiradi."
        },

        savdoX: {
            name: "Savdo X",
            description: "SAVDO X — bu web sahifa texnikalar online bozori hisoblanadi. Ya'ni bizning sotuvchilar o'z mahsulotlarini online tarzda qulay sahifamizda sotuvga qo'yishlari, mijozlar esa qulay tarzda uyda o'tirgan holda mahsulotlarni harid qila olishlari mumkin hisoblanadi. Sahifamizda mijozlar va sotuvchilarning xavfsizliklari to'laqonli ta'minlangan."
        },

        seeProject: "Loyihani korish"
    },

    contact: {
        readyConnect:"BOG'LANISHGA TAYYORMAN !",
        nameInput: "Ismingiz",
        numberInput: "Raqamingiz",
        messageInput: "Xabaringiz",
        sendBtn: "Yuborish",
        
        warn: {
            lettersWarn: "Ismingizni harflarda kiriting",
            fullName: "Ismingizni to'liq kiritishingizni soraymiz",
            trueNumber: "Raqamingizni togri kiriting",
            fullNumber: "Xabaringizda raqamlar soni yetarli !"
        },
        
        error: {
            failedMessage: "Xabar yuborilmadi",
            ErrorServer: "Server bilan bog'lana olmadik",
            invalidRequest: "Serverga notogri turda ma'lumot jonatildi"
        },
        
        sending: "Yuborilmoqda...",
        sendedMessage: "Xabar yuborildi. Javobimni kuting",
    }
}

export default uz