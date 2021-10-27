import { GetDriverFromServer } from '../http/driverApi'

const SET_DRIVERS_TO_STORE = "SET_DRIVERS_TO_STORE";
const INIT_DRIVERS_LIST = "INIT_DRIVERS_LIST";
const SELECT_DRIVER = "SELECT_DRIVER";
const SORT_DRIVERS_LIST = "SORT_DRIVERS_LIST"

const _ = require('lodash');

let initialState = {

    drivers: [
        // {
        //     activeStatus: 0, adminNote: '', avatar: "images/user/Ellipse18.png", bankAccount: "",
        //     bankAddress: "",
        //     bankName: "",
        //     bankNumber: "",
        //     cancellationNum: 0,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-264167963.jpg",
        //     carModel: "Ferrari ",
        //     carNumber: "345688766",
        //     carType: 0,
        //     currentLocationLatitude: 55.724337,
        //     currentLocationLongitude: 37.641391,
        //     driverID: "Y8XHuD6skXdoU2PuQw1zauH8ZO23",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-511230124.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-559246401.jpg",
        //     email: "Test@gmail.com",
        //     fullName: "",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-483011333.jpg",
        //     name: "Коля",
        //     officeNumber: "",
        //     onDuty: 0,
        //     passport: "",
        //     phoneNumber: "+972504441893",
        //     rating: 5,
        //     ridesNum: 0,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-778754750.jpg",
        //     taxiLicenseText: "",
        //     ide: 1
        // },
        // {
        //     activeStatus: 1, adminNote: "sssssss", avatar: "images/user/Ellipse18.png", bankAccount: "", bankAddress: "",
        //     bankName: "vtb",
        //     bankNumber: "",
        //     cancellationNum: 4,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-750375468.jpg",
        //     carModel: "Mersedesss",
        //     carNumber: "1234567",
        //     carType: 0,
        //     currentLocationLatitude: 55.745700,
        //     currentLocationLongitude: 37.621126,
        //     driverID: "p7YLYEE6XbU4gy8Ib6n9Z8pUVjt2",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-287884225.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-922356074.jpg",
        //     email: "Gghhhh123@gmail.com",
        //     fullName: "",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-200156222.jpg",
        //     name: "Вася1",
        //     officeNumber: "",
        //     onDuty: 1,
        //     passport: "",
        //     phoneNumber: "+972502167078",
        //     rating: 5,
        //     ridesNum: 5,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-300427163.jpg",
        //     taxiLicenseText: "",
        //     ide: 2
        // },
        // {
        //     activeStatus: 1,
        //     adminNote: "",
        //     avatar: "images/user/Ellipse18.png",
        //     bankAccount: "",
        //     bankAddress: "",
        //     bankName: "",
        //     bankNumber: "",
        //     cancellationNum: 0,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-808262410.jpg",
        //     carModel: "porsche 911",
        //     carNumber: "11111",
        //     carType: 0,
        //     currentLocationLatitude: 55.833191,
        //     currentLocationLongitude: 37.642440,
        //     driverID: "0poIs1bljcZkenxbliPKTx690hT2",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-153823948.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-180098491.jpg",
        //     email: "kzegrya@gmail.com",
        //     fullName: "",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-996311006.jpg",
        //     name: "Kirill",
        //     officeNumber: "",
        //     onDuty: 0,
        //     passport: "",
        //     phoneNumber: "+79312291718",
        //     rating: 4.666666666666667,
        //     ridesNum: 7,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-100741857.jpg",
        //     taxiLicenseText: "",
        //     ide: 3
        // },
        // {
        //     activeStatus: 1,
        //     adminNote: "jkhjklhj k'",
        //     avatar: "images/user/Ellipse18.png",
        //     bankAccount: "44",
        //     bankAddress: "ףלחלךח",
        //     bankName: "יעליךע",
        //     bankNumber: "574",
        //     cancellationNum: 1,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-628089792.jpg",
        //     carModel: "rino",
        //     carNumber: "99999",
        //     carType: 0,
        //     currentLocationLatitude: 55.8632,
        //     currentLocationLongitude: 37.648411,
        //     driverID: "ZBJ9o3Zap9hGTtqunmklcoO3AbM2",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-917312677.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-630886110.jpg",
        //     email: "emun20012@gmail.com",
        //     fullName: "ףלךחל ךחלחיךףיףחךףח י",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-277623538.jpg",
        //     name: "Rudik",
        //     officeNumber: "54",
        //     onDuty: 1,
        //     passport: "54354",
        //     phoneNumber: "+9720504445588",
        //     rating: 5,
        //     ridesNum: 28,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-034209823.jpg",
        //     taxiLicenseText: "",
        //     ide: 4
        // },
        // {
        //     activeStatus: 1,
        //     adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        //     avatar: "images/user/Ellipse18.png",
        //     bankAccount: "",
        //     bankAddress: "",
        //     bankName: "",
        //     bankNumber: "",
        //     cancellationNum: 5,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
        //     carModel: "Lada Priore",
        //     carNumber: "47774",
        //     carType: 0,
        //     currentLocationLatitude: 55.704188,
        //     currentLocationLongitude: 37.722569,
        //     driverID: "3vUQexZBpmTCxKB5dDGdwhhwmr21",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        //     email: "dmitrydan1@gmail.com",
        //     fullName: "Shivov Kirill",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        //     name: "Копатыч",
        //     officeNumber: "",
        //     onDuty: 1,
        //     passport: "",
        //     phoneNumber: "+79111111375",
        //     rating: 5,
        //     ridesNum: 18,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        //     taxiLicenseText: "",
        //     ide: 5
        // },
        // {
        //     activeStatus: 1,
        //     adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        //     avatar: "images/user/Ellipse18.png",
        //     bankAccount: "",
        //     bankAddress: "",
        //     bankName: "",
        //     bankNumber: "",
        //     cancellationNum: 5,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
        //     carModel: "Honda S",
        //     carNumber: "4784",
        //     carType: 0,
        //     currentLocationLatitude: 55.724302,
        //     currentLocationLongitude: 37.607212,
        //     driverID: "3vUQexZBpmTCxKB5dDGdwhhwmrk1",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        //     email: "dmitrydan1@gmail.com",
        //     fullName: "Shivov Kirill",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        //     name: "Дмитрий Беляш",
        //     officeNumber: "",
        //     onDuty: 1,
        //     passport: "",
        //     phoneNumber: "+79880126375",
        //     rating: 3.64,
        //     ridesNum: 18,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        //     taxiLicenseText: "",
        //     ide: 6
        // },
        // {
        //     activeStatus: 1,
        //     adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        //     avatar: "images/user/Ellipse18.png",
        //     bankAccount: "",
        //     bankAddress: "",
        //     bankName: "",
        //     bankNumber: "",
        //     cancellationNum: 5,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-264914716.jpg",
        //     carModel: "Икарус",
        //     carNumber: "4333",
        //     carType: 0,
        //     currentLocationLatitude: 55.735128,
        //     currentLocationLongitude: 37.516575,
        //     driverID: "3vUQexZBpmTCxKB5dD4dwhhwmrk1",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        //     email: "dmitrydan1@gmail.com",
        //     fullName: "Дмитрий Нагиев",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        //     name: "Дмитрий Нагиев",
        //     officeNumber: "",
        //     onDuty: 1,
        //     passport: "",
        //     phoneNumber: "+79880100005",
        //     rating: 5,
        //     ridesNum: 18,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        //     taxiLicenseText: "",
        //     ide: 7
        // },
        // {
        //     activeStatus: 0,
        //     adminNote: "sldalsdfdfdfgdfghffdgjhkglkhjm",
        //     avatar: "images/user/Ellipse18.png",
        //     bankAccount: "",
        //     bankAddress: "",
        //     bankName: "",
        //     bankNumber: "",
        //     cancellationNum: 5,
        //     carLicense: "http://77.223.97.105:1337/api/driver/image/image-261114716.jpg",
        //     carModel: "Велосипед",
        //     carNumber: "00000",
        //     carType: 0,
        //     currentLocationLatitude: 55.758317,
        //     currentLocationLongitude: 37.478123,
        //     driverID: "3vUQexZBpmTCxKB5dD4dwhhwHrk1",
        //     driverLicenseBack: "http://77.223.97.105:1337/api/driver/image/image-580913777.jpg",
        //     driverLicenseFront: "http://77.223.97.105:1337/api/driver/image/image-317174490.jpg",
        //     email: "dmitrydan1@gmail.com",
        //     fullName: "Кот Леопольд",
        //     insurancePolicy: "http://77.223.97.105:1337/api/driver/image/image-005346990.jpg",
        //     name: "Леопольд",
        //     officeNumber: "",
        //     onDuty: 1,
        //     passport: "",
        //     phoneNumber: "+796660005",
        //     rating: 3,
        //     ridesNum: 18,
        //     taxiLicense: "http://77.223.97.105:1337/api/driver/image/image-479208395.jpg",
        //     taxiLicenseText: "",
        //     ide: 8
        // }
    ],
    listDrivers: [],
    selectDriver: null

}



const driverReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DRIVERS_TO_STORE:
            if (!state.drivers.length) {
                console.log("Установка водителей в стейт");
                return { ...state, drivers: [...state.drivers, ...action.payload] }
            }
            return state
        case INIT_DRIVERS_LIST:
            console.log("Инит редуссер листа водителей");
            let vv = state.drivers.map(item => ({
                    fullname: item.fullName,
                    activeStatus: item.activeStatus,
                    id: item.ide,
                    driverId: item.driverID,
                    currentLocationLatitude: item.currentLocationLatitude,
                    currentLocationLongitude: item.currentLocationLongitude
                }))            
            return { ...state, listDrivers: [...vv] }
        
        case SORT_DRIVERS_LIST:
            console.log("Сортировка водителей");
            return { ...state, listDrivers: [...action.payload]}
        case SELECT_DRIVER:
            console.log("Select Driver reducer");
            return { ...state, selectDriver: [...state.drivers.filter(item => item.driverID == action.payload)][0] }

        default:
            return state;
    }
}



const setDriversToStore = (item) => ({ type: SET_DRIVERS_TO_STORE, payload: item })
export const setDriverList = () => ({ type: INIT_DRIVERS_LIST});
export const setDriverListSort = (item) => ({ type: SORT_DRIVERS_LIST, payload: item});
export const selectDriverAction = (item) => ({ type: SELECT_DRIVER, payload: item });


export const getDriversThunk = () => {
    console.log("Запрос на сервер");
    return (dispatch) => {

        GetDriverFromServer().then((response) => {
            dispatch(setDriversToStore(response.data));
            dispatch(setDriverList());
            
            
        });
    }
}

export default driverReducer;