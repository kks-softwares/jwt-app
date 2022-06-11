import { combineReducers } from "redux";
import {productReducers} from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducers,
});

export default reducers;