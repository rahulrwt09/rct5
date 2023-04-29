 import { ADD } from "./ActionType";
import {REDUCE} from "./ActionType";
 export const addaction = (payload)=>{
    return {
        type:ADD,
        payload
    };
 }

 export const reduceaction= (payload)=>{
    return {
        type:REDUCE,
        payload
    };
 }