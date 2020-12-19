import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Pepperoni', type:'pepperoni'},
    {label:'Cheese', type:'cheese'},
    {label:'Beef', type:'beef'},
    {label:'Chicken', type:'chicken'},
   
];

const buildControls=(props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        
       

        {controls.map(ctrl => (
            <BuildControl   key={ctrl.label} 
                            label={ctrl.label} 
                            value={ctrl.value}
                            added={() =>props.ingredientAdded(ctrl.type)}
                            removed={() =>props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}
                            />
                        
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN IN TO ORDER'}</button>
    </div>
);


export default buildControls; 
