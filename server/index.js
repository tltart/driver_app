const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const mass = [
    {
        activeStatus: 0, adminNote: '', avatar: "images/user/Ellipse18.png", bankAccount: "",
        bankAddress: "",
        bankName: "",
        bankNumber: "",
        cancellationNum: 0,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-264167963.jpg",
        carModel: "Ferrari ",
        carNumber: "345688766",
        carType: 0,
        currentLocationLatitude: 55.724337,
        currentLocationLongitude: 37.641391,
        driverID: "Y8XHuD6skXdoU2PuQw1zauH8ZO23",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-511230124.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-559246401.jpg",
        email: "Test@gmail.com",
        fullName: "",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-483011333.jpg",
        name: "Коля",
        officeNumber: "",
        onDuty: 0,
        passport: "",
        phoneNumber: "+972504441893",
        rating: 5,
        ridesNum: 0,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-778754750.jpg",
        taxiLicenseText: "",
        ide: 1
    },
    {
        activeStatus: 1, adminNote: "sssssss", avatar: "images/user/Ellipse18.png", bankAccount: "", bankAddress: "",
        bankName: "vtb",
        bankNumber: "",
        cancellationNum: 4,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-750375468.jpg",
        carModel: "Mersedesss",
        carNumber: "1234567",
        carType: 0,
        currentLocationLatitude: 55.745700,
        currentLocationLongitude: 37.621126,
        driverID: "p7YLYEE6XbU4gy8Ib6n9Z8pUVjt2",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-287884225.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-922356074.jpg",
        email: "Gghhhh123@gmail.com",
        fullName: "",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-200156222.jpg",
        name: "Вася1",
        officeNumber: "",
        onDuty: 1,
        passport: "",
        phoneNumber: "+972502167078",
        rating: 5,
        ridesNum: 5,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-300427163.jpg",
        taxiLicenseText: "",
        ide: 2
    },
    {
        activeStatus: 1,
        adminNote: "",
        avatar: "images/user/Ellipse18.png",
        bankAccount: "",
        bankAddress: "",
        bankName: "",
        bankNumber: "",
        cancellationNum: 0,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-808262410.jpg",
        carModel: "porsche 911",
        carNumber: "11111",
        carType: 0,
        currentLocationLatitude: 55.833191,
        currentLocationLongitude: 37.642440,
        driverID: "0poIs1bljcZkenxbliPKTx690hT2",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-153823948.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-180098491.jpg",
        email: "kzegrya@gmail.com",
        fullName: "",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-996311006.jpg",
        name: "Kirill",
        officeNumber: "",
        onDuty: 0,
        passport: "",
        phoneNumber: "+79312291718",
        rating: 4.666666666666667,
        ridesNum: 7,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-100741857.jpg",
        taxiLicenseText: "",
        ide: 3
    },
    {
        activeStatus: 1,
        adminNote: "jkhjklhj k'",
        avatar: "images/user/Ellipse18.png",
        bankAccount: "44",
        bankAddress: "ףלחלךח",
        bankName: "יעליךע",
        bankNumber: "574",
        cancellationNum: 1,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-628089792.jpg",
        carModel: "rino",
        carNumber: "99999",
        carType: 0,
        currentLocationLatitude: 55.8632,
        currentLocationLongitude: 37.648411,
        driverID: "ZBJ9o3Zap9hGTtqunmklcoO3AbM2",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-917312677.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-630886110.jpg",
        email: "emun20012@gmail.com",
        fullName: "ףלךחל ךחלחיךףיףחךףח י",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-277623538.jpg",
        name: "Rudik",
        officeNumber: "54",
        onDuty: 1,
        passport: "54354",
        phoneNumber: "+9720504445588",
        rating: 5,
        ridesNum: 28,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-034209823.jpg",
        taxiLicenseText: "",
        ide: 4
    },
    {
        activeStatus: 1,
        adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        avatar: "images/user/Ellipse18.png",
        bankAccount: "",
        bankAddress: "",
        bankName: "",
        bankNumber: "",
        cancellationNum: 5,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
        carModel: "Lada Priore",
        carNumber: "47774",
        carType: 0,
        currentLocationLatitude: 55.704188,
        currentLocationLongitude: 37.722569,
        driverID: "3vUQexZBpmTCxKB5dDGdwhhwmr21",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        email: "dmitrydan1@gmail.com",
        fullName: "Shivov Kirill",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        name: "Копатыч",
        officeNumber: "",
        onDuty: 1,
        passport: "",
        phoneNumber: "+79111111375",
        rating: 5,
        ridesNum: 18,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        taxiLicenseText: "",
        ide: 5
    },
    {
        activeStatus: 1,
        adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        avatar: "images/user/Ellipse18.png",
        bankAccount: "",
        bankAddress: "",
        bankName: "",
        bankNumber: "",
        cancellationNum: 5,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
        carModel: "Honda S",
        carNumber: "4784",
        carType: 0,
        currentLocationLatitude: 55.724302,
        currentLocationLongitude: 37.607212,
        driverID: "3vUQexZBpmTCxKB5dDGdwhhwmrk1",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        email: "dmitrydan1@gmail.com",
        fullName: "Shivov Kirill",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        name: "Дмитрий Беляш",
        officeNumber: "",
        onDuty: 1,
        passport: "",
        phoneNumber: "+79880126375",
        rating: 3.64,
        ridesNum: 78,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        taxiLicenseText: "",
        ide: 6
    },
    {
        activeStatus: 1,
        adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        avatar: "images/user/Ellipse18.png",
        bankAccount: "",
        bankAddress: "",
        bankName: "",
        bankNumber: "",
        cancellationNum: 5,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
        carModel: "Икарус",
        carNumber: "4333",
        carType: 0,
        currentLocationLatitude: 55.735128,
        currentLocationLongitude: 37.516575,
        driverID: "3vUQexZBpmTCxKB5dD4dwhhwmrk1",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        email: "dmitrydan1@gmail.com",
        fullName: "Дмитрий Нагиев",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        name: "Дмитрий Нагиев",
        officeNumber: "",
        onDuty: 1,
        passport: "",
        phoneNumber: "+79880100005",
        rating: 5,
        ridesNum: 13,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        taxiLicenseText: "",
        ide: 7
    },
    {
        activeStatus: 0,
        adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        avatar: "images/user/Ellipse18.png",
        bankAccount: "",
        bankAddress: "",
        bankName: "",
        bankNumber: "",
        cancellationNum: 5,
        carLicense: "http://77.223.97.105:1337/api/driver/image/image-261114716.jpg",
        carModel: "Велосипед",
        carNumber: "00000",
        carType: 0,
        currentLocationLatitude: 55.758317,
        currentLocationLongitude: 37.478123,
        driverID: "3vUQexZBpmTCxKB5dD4dwhhwHrk1",
        driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        email: "dmitrydan1@gmail.com",
        fullName: "Кот Леопольд",
        insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        name: "Леопольд",
        officeNumber: "",
        onDuty: 1,
        passport: "",
        phoneNumber: "+796660005",
        rating: 2,
        ridesNum: 15,
        taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        taxiLicenseText: "",
        ide: 8
    }
]


const users = [
        {
            activeStatus: 1,
            adminNote: "",
            avatarURL: "",
            cancellationCount: 3,
            clientID: "saFMOKp2i7beji7WqM9l6VBVN542",
            debt: 0,
            email: "dr.swagen@gmail.com",
            homeAddress: "",
            homeLatitude: 0,
            homeLongitude: 0,
            name: "Дмитрий Беляш",
            phoneNumber: "+79880126375",
            rating: 4.659090909090909,
            ridesCount: 16,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0

        },
        {
            activeStatus: 0,
            adminNote: "щдлджшжшлж",
            avatarURL: "http://77.223.97.105:1337/api/client/avatar/avatar-000334754.jpg",
            cancellationCount: 20,
            clientID: "u3CopJOGCThb12UJjPjD19a7Z203",
            debt: 0,
            email: "info@taxiemun.com",
            homeAddress: "הכרמל 31",
            homeLatitude: 32.5195688,
            homeLongitude: 34.9169813,
            name: "Рудик",
            phoneNumber: "+9720504445588",
            rating: 3.8053033922599138,
            ridesCount: 25,
            workAddress: "הרצל 63",
            workLatitude: 32.3269218,
            workLongitude: 34.8627206
        },
        {
            activeStatus: 1,
            adminNote: "skkkkkkk",
            avatarURL: "http://77.223.97.105:1337/api/client/avatar/avatar-655726370.jpg",
            cancellationCount: 0,
            clientID: "bIWVaQMDSAMazb7PNezpezeRWlo2",
            debt: 0,
            email: "kzegrya@gmail.com",
            homeAddress: "FAT COW, Dizengoff Street, Tel Aviv-Yafo, Israel",
            homeLatitude: 32.0946594,
            homeLongitude: 34.7764085,
            name: "Кирилл",
            phoneNumber: "+79312291718",
            rating: 5,
            ridesCount: 2,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0
        },
        {
            activeStatus: 0,
            adminNote: "",
            avatarURL: "http://77.223.97.105:1337/api/client/avatar/avatar-108018162.jpg",
            cancellationCount: 0,
            clientID: "Xkmg9UhJa4cU79i9ZIZ647MUAgm1",
            debt: 0,
            email: "dmitrydan1@gmail.com",
            homeAddress: "",
            homeLatitude: 0,
            homeLongitude: 0,
            name: "Дмитрий 909",
            phoneNumber: "+79093816339",
            rating: 5,
            ridesCount: 1,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0
        },
        {
            activeStatus: 0,
            adminNote: "",
            avatarURL: "",
            cancellationCount: 0,
            clientID: "upaG5bpiHwXEqZixGpbCoR1N85h1",
            debt: 0,
            email: "",
            homeAddress: "",
            homeLatitude: 0,
            homeLongitude: 0,
            name: "",
            phoneNumber: "+79312291718",
            rating: 5,
            ridesCount: 0,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0
        },
        {
            activeStatus: 0,
            adminNote: "",
            avatarURL: "http://77.223.97.105:1337/api/client/avatar/avatar-143427744.jpg",
            cancellationCount: 4,
            clientID: "cIzFhz1BmhQROtnU0bFEDVeSCpF3",
            debt: 0,
            email: "Emun2002@gmail.com",
            homeAddress: "Krinitsi Street 44, Ramat Gan",
            homeLatitude: 32.0812323,
            homeLongitude: 34.8190101,
            name: "Петя",
            phoneNumber: "+972502167078",
            rating: 3.625,
            ridesCount: 7,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0
        },
        {
            activeStatus: 0,
            adminNote: "",
            avatarURL: "",
            cancellationCount: 0,
            clientID: "WLYvB7x3hpWg4FbHRDWWtmF6ewS2",
            debt: 0,
            email: "test@gmai.com",
            homeAddress: "",
            homeLatitude: 0,
            homeLongitude: 0,
            name: "Сергей",
            phoneNumber: "+9720504441893",
            rating: 4,
            ridesCount: 1,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0
        },
        {
            activeStatus: 0,
            adminNote: "",
            avatarURL: "http://77.223.97.105:1337/api/client/avatar/avatar-530638200.jpg",
            cancellationCount: 8,
            clientID: "Dju2OcLYHkNosLwD7SI7aUHZ6an1",
            debt: 0,
            email: "kzegrya@gmail.com",
            homeAddress: "",
            homeLatitude: 0,
            homeLongitude: 0,
            name: "Kirill",
            phoneNumber: "+79312291718",
            rating: 2.9999876022338867,
            ridesCount: 6,
            workAddress: "",
            workLatitude: 0,
            workLongitude: 0
        }
    ]

let po = 0.001;



let mass2 = []
setInterval(() => {
    if (po) {
        mass2 = [...mass, { ...mass[7].currentLocationLatitude = parseFloat(mass[7].currentLocationLatitude) + po }, { ...mass[7].currentLocationLongitude = parseFloat(mass[7].currentLocationLongitude) + po }]
    }
    else {
        mass2 = [...mass, { ...mass[7].currentLocationLatitude = parseFloat(mass[7].currentLocationLatitude) + po }, { ...mass[7].currentLocationLongitude = parseFloat(mass[7].currentLocationLongitude) + po }]
    }

    mass2 = mass2.slice(0, 8);
    console.log(mass2);
}, 3000)


let de = 0;

let users2 = []
setInterval(() => {
    if (!de) {
        users2 = [...users, { ...users[7].activeStatus = 1 }]
        users2 = [...users, { ...users[6].activeStatus = 0 }]
        de = 1
    }
    else {
        users2 = [...users, { ...users[7].activeStatus = 0 }]
        users2 = [...users, { ...users[6].activeStatus = 1 }]
        de = 0
    }

    users2 = users2.slice(0, 8);
    console.log(users2);
}, 2000)

setInterval(() => {
    if (!de) {
        users2 = [...users, { ...users[5].activeStatus = 1 }]
    }
    else {
        users2 = [...users, { ...users[5].activeStatus = 0 }]
    }

    users2 = users2.slice(0, 8);
    console.log(users2);
}, 1500)


app.get('/', (req, res) => {
    res.json(mass2);
});

app.get('/users', (req, res) => {
    res.json(users2);
})

app.listen(5000, () => {
    console.log("Сервер шарашит на порту 5000");
});