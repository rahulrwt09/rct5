import {legacy_createStore} from "redux"
import { reducer } from "./Reducer";

const initialSate= {
    counter:0,
    totos:[],
}
export const Store= legacy_createStore(reducer, initialSate);
