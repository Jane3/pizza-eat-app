import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import classes from './BurgerIngredient.css';



class BurgerIngredient extends Component {
    render() {

        let ingredient =null;

        switch (this.props.type){

             case('pizza'):
             ingredient =(
                 <div className={classes.Pizza}>
                 </div>
             );
             break;

             case('pepperoni'):
                 ingredient = <div className={classes.Pepperoni}></div>;
                 break;
             case ('beef'):
                 ingredient =<div className={classes.Beef}></div>;
                 break;

                 case ('chicken'):
                 ingredient =<div className={classes.Chicken}></div>;
                 break;
    
                 case ('cheese'):
                 ingredient =<div className={classes.Cheese}></div>;
                 break;
    
                 default:
                     ingredient=null;
    
    
        }
    
        return ingredient; 
    }
}

BurgerIngredient.propsTypes ={
    type:PropsTypes.string.isRequired
};

export default BurgerIngredient;