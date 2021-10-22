const INIT_DRIVERS = "INIT_DRIVERS"



let initialState = {

    drivers: [
        {
            activeStatus: 0, adminNote: '', avatar: "http://77.223.97.105:1337/api/driver/image/image-679521770.jpg", bankAccount: "",
            bankAddress: "",
            bankName: "",
            bankNumber: "",
            cancellationNum: 0,
            carLicense: "http://77.223.97.105:1337/api/driver/image/image-264167963.jpg",
            carModel: "Ferrari ",
            carNumber: "345688766",
            carType: 0,
            currentLocationLatitude: 0,
            currentLocationLongitude: 0,
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
            taxiLicenseText: ""
        },
        {
            activeStatus: 1, adminNote: "sssssss", avatar: "http://77.223.97.105:1337/api/driver/image/image-747871351.jpg", bankAccount: "", bankAddress: "",
            bankName: "vtb",
            bankNumber: "",
            cancellationNum: 4,
            carLicense: "http://77.223.97.105:1337/api/driver/image/image-750375468.jpg",
            carModel: "Mersedesss",
            carNumber: "1234567",
            carType: 0,
            currentLocationLatitude: 32.30600273707893,
            currentLocationLongitude: 34.86879826029236,
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
            taxiLicenseText: ""
        },
        {
            activeStatus: 1,
            adminNote: "",
            avatar: "http://77.223.97.105:1337/api/driver/image/image-572833943.jpg",
            bankAccount: "",
            bankAddress: "",
            bankName: "",
            bankNumber: "",
            cancellationNum: 0,
            carLicense: "http://77.223.97.105:1337/api/driver/image/image-808262410.jpg",
            carModel: "porsche 911",
            carNumber: "11111",
            carType: 0,
            currentLocationLatitude: 59.979849567347195,
            currentLocationLongitude: 30.366887829589764,
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
            taxiLicenseText: ""
        },
        {
            activeStatus: 1,
            adminNote: "jkhjklhj k'",
            avatar: "",
            bankAccount: "44",
            bankAddress: "ףלחלךח",
            bankName: "יעליךע",
            bankNumber: "574",
            cancellationNum: 1,
            carLicense: "http://77.223.97.105:1337/api/driver/image/image-628089792.jpg",
            carModel: "rino",
            carNumber: "99999",
            carType: 0,
            currentLocationLatitude: 32.3426635,
            currentLocationLongitude: 34.863024,
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
            taxiLicenseText: ""
        },
        {
            activeStatus: 1,
            adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
            avatar: "",
            bankAccount: "",
            bankAddress: "",
            bankName: "",
            bankNumber: "",
            cancellationNum: 5,
            carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
            carModel: "Honda S",
            carNumber: "4784",
            carType: 0,
            currentLocationLatitude: 55.7961907,
            currentLocationLongitude: 37.5771154,
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
            rating: 5,
            ridesNum: 18,
            taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
            taxiLicenseText: ""
        }
    ],

}



const driverReducer = (state = initialState, action) => {
    switch (action.type) {

        case INIT_DRIVERS:
            return { ...state, drivers: [...state.drivers, ...action.payload] }

        default:
            return state;
    }

}

// export const GoodActive = (item) => ({ type: ACTIVE, payload: item })

export default driverReducer;