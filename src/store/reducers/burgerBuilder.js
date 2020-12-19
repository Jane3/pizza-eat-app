import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'; 

const initialState = {
    ingredients: null, 
    totalPrice:4,
    error: false,
    building: false
  
};
const INGREDIENT_PRICES= {
    pepperoni: 0.9,
    cheese: 0.4,
    beef:1.3,
    chicken: 1.1,
    
};

const addIngredient = (state, action) => {
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] +1};
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedState); 
};
const removeIngredient =(state,action) => {
            const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] -1};
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedSt); 
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            pepperoni: action.ingredients.pepperoni,
            cheese: action.ingredients.cheese,
            beef: action.ingredients.beef,
            chicken: action.ingredients.chicken
        },
        totalPrice: 6.99,
        error: false,
        building: false

    });
}

const fetchIngredientsFailed = (state, action)=> {
    return updateObject(state, {error:true});
};


const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_INGREDIENTS: return addIngredient (state,action);
        case actionTypes.REMOVE_INGREDIENTS: return removeIngredient (state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);   
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed (state, {error: true}); 
        default: return state;
    }
};

export default reducer; 