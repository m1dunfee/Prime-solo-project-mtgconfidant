import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App/App.css'
import cards from "./img/cards.jpg"

class Checkout extends Component {

    state = {
        order_ID: 0
    }

    removeFromCart = (id) => {
        for (let i = 0; i < this.props.reduxState.CartReducer.length; ++i) {
            if (this.props.reduxState.CartReducer[i].id === id) {
                return this.props.reduxState.CartReducer.splice(i, 1)
            }
        }
    }

    checkoutOrder = () => {
        this.props.dispatch({
            type: 'ORDER_ID',
            payload: {
                cart: this.props.reduxState.CartReducer,
                user: this.props.reduxState.user.id
            }
        })
        alert('Your order has been received!')
    }



    render() {
        return (
            <table className="table table-hover table-dark">
                    <thead >
                            <tr>
                                <th scope="col">Card Art:</th>
                                <th scope="col">Name:</th>
                                <th scope="col">Set:</th>
                                <th scope="col">Price:</th>
                                <th scope="col">Quantity:</th>
                                <th scope="col">Remove:</th>
                            </tr>
                    </thead>

                    <tbody>
                    {/* {JSON.stringify(this.props.reduxState.CartReducer)} */}
                    {this.props.reduxState.CartReducer.map((card) => {
                        return (
                                <tr>
                                    <td>
                                            <img className="w-25" src={cards} ></img>
                                    </td>
                                    <td>
                                        {card.card_name}
                                    </td>
                                    <td>
                                        {card.set}
                                    </td>
                                    <td>
                                        {/* {card.price} */}
                                        n/a
                                    </td>
                                    <td>
                                        {card.quantity}
                                    </td>
                                    <td>
                                        {/* needs to refresh the dom */}
                                        <button className="btn btn-danger btn-sm" onClick={() => { this.removeFromCart(card.id) }}>Remove</button>
                                    </td>
                            </tr>)
                    })}

</tbody>
                    <div >
                        {this.props.reduxState.user.id ?
                            <button className="btn btn-success" onClick={this.checkoutOrder}>Check out</button>
                            :
                            <Link to='/home'><button className="btn btn-success" >login to continue</button></Link>
                        }
                    </div>
                
            </table>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
    EditCard: reduxState.EditCard
});

export default connect(mapStateToProps)(Checkout)