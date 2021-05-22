import React from 'react';
import './Order.css';

function Order(props) {

    const {orderdata} = props;
    console.log(orderdata);

    const total = (orderdata)=>{
      var subtotal =  orderdata?.items?.reduce((sum,i)=>(
                                                    sum+=i.quantity * i.price
                                                ),0);
                                                console.log(subtotal);
       var tax = 2.5;
       console.log(tax);
       var tot_tax = subtotal * (tax/100);
       var totalbill = subtotal    + tot_tax;     
       return totalbill;                             
    }

    return (
        <>
            <div className="container rounded bg-white mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="invoice-title">
                            <h2 className="float-right pt-3">ORDER ID : {orderdata?.order_id}</h2>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <address>
                                    <h6><strong>RESTAURANT DETAILS</strong></h6>
                                    {orderdata?.restaurant?.name}
                                    <br />
                                    {orderdata?.restaurant?.street}
                                    <br />
                                    {orderdata?.restaurant?.city}
                                    <br />
                                    {orderdata?.restaurant?.state}
                                    <br />
                                    {orderdata?.restaurant?.zipcode}
                                </address>
                            </div>
                            <div className="col-md-6 text-right float-right mx-60">
                                <address>
                                    <h6><strong>CUSTOMER DETAILS</strong></h6>
                  {orderdata && orderdata.user?.name}
                  <br />
                  {orderdata && orderdata.user?.id}
                  <br />
                  {orderdata && orderdata.user?.phone}
                  <br />
                 {orderdata && orderdata.user?.address}
                </address>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <strong>Order summary</strong>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-condensed">
                                        <thead>
                                            <tr>
                                                <td>
                                                    <strong>Name</strong>
                                                </td>
                                                <td className="text-center">
                                                    <strong>Category</strong>
                                                </td>
                                                <td className="text-center">
                                                    <strong>Currency</strong>
                                                </td>
                                                <td className="text-center">
                                                    <strong>Quantity</strong>
                                                </td>

                                                <td className="text-right">
                                                    <strong>Price</strong>
                                                </td>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                orderdata?.items?.map((val) => {
                                                    return (
                                                        <tr>
                                                        <td>{val?.name}</td>

                                                        <td className="text-center">{val?.category}</td>
                                                        <td className="text-center">{val?.currency}</td>
                                                        <td className="text-center">{val?.quantity}</td>
                                                        <td className="text-right">{val?.price}</td>
                                                    </tr>
                                                    )

                                                }
                                                )
                                            }
                                           
                                            <tr>
                                                <td className="thick-line" />
                                                <td className="thick-line" />
                                                <td className="thick-line" />
                                                <td className="thick-line text-center">
                                                    <strong>Subtotal</strong>
                                                </td>

                                               
                                                <td className="thick-line text-right">{orderdata?.items?.reduce((sum,i)=>(
                                                    sum+=i.quantity * i.price
                                                ),0)}</td>
                                            </tr>
                                            <tr>
                                                <td className="no-line" />
                                                <td className="no-line" />
                                                <td className="no-line" />
                                                <td className="no-line text-center">
                                                    <strong>Tax</strong>
                                                </td>
                                                <td className="no-line text-right">2.5%</td>
                                            </tr>
                                            <tr>
                                                <td className="no-line" />
                                                <td className="no-line" />
                                                <td className="no-line" />
                                                <td className="no-line text-center">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="no-line text-green text-right">{total(orderdata)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;
