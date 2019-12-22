import { environment } from 'src/environments/environment.prod';

export class UrlEndpoint {
    static AUTH = {
        LOGIN: `${environment.AUTH_API_URL}/auth/login`,
    };

    static SPRING = {
        AUTHOR: `${environment.SPRING_API_URL}/author`,
        POSTS: `${environment.SPRING_API_URL}/post`
    };

    static EXPRESS = {
        PERSON: {
            GET: `${environment.EXPRESS_API_URL}/person`,
            SAVE: `${environment.EXPRESS_API_URL}/person`,
            UPDATE: `${environment.EXPRESS_API_URL}/person`,
            DELETE: `${environment.EXPRESS_API_URL}/person`
        },
        ADDRESS: `${environment.EXPRESS_API_URL}/address`,
        CAR: `${environment.EXPRESS_API_URL}/car`,
        STOCK: `${environment.EXPRESS_API_URL}/stock`,
    };
}
