import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App/App.css'

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
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                Name:
                            </div>
                            <div className="col">
                                Set:
                            </div>
                            <div className="col">
                                Price:
                            </div>
                            <div className="col">
                                Quantity:
                            </div>
                            <div className="col">
                                Remove:
                            </div>
                        </div>
                    </div>


                    {/* {JSON.stringify(this.props.reduxState.CartReducer)} */}
                    {this.props.reduxState.CartReducer.map((card) => {
                        return (
                                <div className="row p-1">
                                    <div className="col">
                                        {card.card_name}
                                    </div>
                                    <div className="col">
                                        {card.set}
                                    </div>
                                    <div className="col">
                                        {/* {card.price} */}
                                    </div>
                                    <div className="col">
                                        {card.quantity}
                                    </div>
                                    <div className="col">
                                        {/* needs to be corrected */}
                                        <button className="btn btn-danger btn-sm" onClick={() => { this.removeFromCart(card.id) }}>Remove</button>
                                    </div>
                            </div>)
                    })}


                    <div>
                        {this.props.reduxState.user.id ?
                            <button className="btn btn-success" onClick={this.checkoutOrder}>Check out</button>
                            :
                            <Link to='/home'><button>login to continue</button></Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
    EditCard: reduxState.EditCard
});

export default connect(mapStateToProps)(Checkout)