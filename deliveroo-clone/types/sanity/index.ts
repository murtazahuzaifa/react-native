import * as T from './generated';
// import {Featured} from './generated';


//@ts-ignore
export interface Category extends T.Category {

}

//@ts-ignore
export interface Dish extends T.Dish {

}

//@ts-ignore
export interface Restaurant extends T.Restaurant {
    type: T.Category,
    dishes: T.Dish[],
}

//@ts-ignore
export interface Featured extends T.Featured {
    restaurants: Restaurant[],
}