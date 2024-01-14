import { CardCvcElement,CardExpiryElement,CardNumberElement,useElements,useStripe} from "@stripe/react-stripe-js"
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState,Fragment } from "react";
import MetaData from '../MetaData'
import mepco from '../../Images/Mepco_Schlenk_Engineering_College_logo.png';
import axios from 'axios'
import { toast } from "react-toastify";
import { orderCompleted } from "../../slices/workshopRegister";
export default function Payment()
{

    const stripe=useStripe();
    const elements=useElements();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {user} =useSelector(state=>state.authState);

    const {workshops}=useSelector(state=>state.workregState)
    const totalAmount = workshops.reduce((sum, workshop) => sum + workshop.registration_fee, 0);

    const paymentData={
        
        amount:totalAmount
    }
    const submitHandler=async(e)=>
    {
        e.preventDefault();
        document.querySelector('#paybtn').disabled=true;
        try
        {
            const{data}=await axios.post('/api/v1/payment/process',paymentData)
            const clientSecret=data.client_secret
            const result=stripe.confirmCardPayment(clientSecret,
                {
                    payment_method:{
                        card:elements.getElement(CardNumberElement),
                        billing_details:{
                            name:user.name,
                            email:user.email
                        }
                    }
                })


                toast('Payment Success',
                        {
                            type:'sucesss',
                            position:toast.POSITION.BOTTOM_CENTER
                        })
                        navigate('/')

                        dispatch(orderCompleted())
                    
                   
                
        }
        catch(error)
        {
          toast('Please try again',
                        {
                            type:'warning',
                            position:toast.POSITION.BOTTOM_CENTER
                        })
        }
        document.querySelector('#paybtn').disabled=false;
        }
    
    return(
        <Fragment>
            <MetaData title={`Payment`}/>
        
        <section className="ftco-section" style={{background: 'linear-gradient(to left bottom, #d60fc6, #137e30)',}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-5">
            <h2
              className="heading-section"
              style={{
                fontFamily: "'Poppins', Times, serif",
                color: 'white',
              }}
            >
              Gyan Mitra'24<br />
              An Inter-college Technical Symposium
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div
              className="wrap"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(7.5px)',
                WebkitBackdropFilter: 'blur(7.5px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
              
              
            >
              <div>
            <img src={mepco} width="30%" className="d-block mx-auto mt-5" />

              </div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: 'poppins',
                        color: 'white',
                      }}
                    >
                      Payment
                    </h3>
                  </div>
                </div>
                <form onSubmit={submitHandler} className="signin-form">
                  <div className="form-group mt-3">
                  <label
                      className="form-control-placeholder"
                      htmlFor="card_num_field"
                    >
                      Card Number
                    </label>
                    <CardNumberElement
                      type="text"
                      id="card_num_field"
                      className="form-control"
                      
                      value=""
                    />

                  </div>
                  <div className="form-group">
                  <label
                      className="form-control-placeholder"
                      htmlFor="card_exp_field"
                    >
                      Card Expiry
                    </label>
                    <CardExpiryElement
                      id="card_exp_field"
                      type="text"
                      className="form-control"
                      
                      value=""
                    />
                    
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group">
                  <label
                      className="form-control-placeholder"
                      htmlFor="card_cvv_field"
                    >
                      Card CVV{workshops.registration_fee}
                    </label>
                    <CardCvcElement
                      id="card_cvv_field"
                      type="number"
                      className="form-control"
                      
                      value=""
                    />
                    
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      id="paybtn"
                      className="form-control btn btn-primary rounded submit px-3 mt-3"
                    >
                      Proceed to Payment.  Rs.{totalAmount}
                    </button>
                  </div>
                
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
    )
}