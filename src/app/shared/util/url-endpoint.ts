import { environment } from 'src/environments/environment.prod';

export class UrlEndpoint {
    static SPRING = {
        AUTHOR: `${environment.SPRING_API_URL}/author`,
        POSTS: `${environment.SPRING_API_URL}/post`
    };

    static EXPRESS = {
        PERSON: `${environment.EXPRESS_API_URL}/person`,
        ADDRESS: `${environment.EXPRESS_API_URL}/address`,
        CAR: `${environment.EXPRESS_API_URL}/car`,
        STOCK: `${environment.EXPRESS_API_URL}/stock`,
    };
}
