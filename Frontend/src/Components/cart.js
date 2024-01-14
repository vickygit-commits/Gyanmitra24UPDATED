import { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux'

export default function Cart()
{
    const {workshops}=useSelector(state=>state.workregState)
    return (
    <Fragment>
     {workshops.length==0? <h2 className="mt-5"><b>Nothing to Pay</b></h2>:
     <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {workshops.map(workshop => (
                                <Fragment key={workshop.workshop}>
                                    <hr />
                                    <div className="cart-item">
                                        <div className="row">

                                            <div className="col-5 col-lg-3">
                                                <p id="workshop_name">{workshop.name}</p>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price text-dark">{workshop.registration_fee}</p>
                                            </div>

                                            

                                            {/* <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" onClick={() => dispatch(removeItemFromCart(item.product))} className="fa fa-trash btn btn-danger"></i>
                                            </div> */}

                                        </div>
                                    </div>
                                </Fragment>
                                )
                            )
                            }

                         
                            <hr />
                        </div>

                        
                    </div>
                    </Fragment>

}

                </Fragment>
    )
}