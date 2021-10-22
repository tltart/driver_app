const INIT_USERS = "INIT_USERS"
const COUNT_USERS = "COUNT_USERS"


let initialState = {

    users: [
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
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case INIT_USERS:
            return { ...state, drivers: [...state.users, ...action.payload] }

        default:
            return state;
    }

}


// export const GoodActive = (item) => ({ type: ACTIVE, payload: item })



export default userReducer;