import React, {Component} from 'react'; 
import Aux from '../../../hoc/Aux/Aux'; 
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this code could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        //console.log('[OrderSummary] WillUpdate'); 
    }
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            if(this.props.ingredients[igKey]!=0){
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'captialize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>);
            }
        
    });
        return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your pizza with the following ingredients:</p>
            <ur>
                {ingredientSummary}
             </ur>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CHECKOUT</Button>
        </Aux>
        );
    }
}

export default OrderSummary; 