import React  from 'react';
//import {Link} from "react-router-dom";
import './App.css';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button"


function Profile(props) {
   // console.log(props.orderdata);
    const history = useHistory();
    const {orderdata} = props;
    console.log(orderdata);
    // const [orderdata, setorderdata] = useState([]);




    // useEffect(() => {

    //     const getorderdata = async () => {
    //         await fetch("/order").then((res) => res.json()).then((data) => setorderdata(data))
    //     }
    //    getorderdata();
    // }, [])

    // console.log(orderdata);


    return (
        <>
            <h1 className="text-center p-2">RESTAURANT APP</h1>
            <div className="container rounded bg-white mt-5">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="180" height="180" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center">
                                    <h2>Customer Profile</h2>
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><h6>Name: {orderdata && orderdata.user?.name}
                                </h6>

                                </div>
                                <div className="col-md-6"><h6>ID :{orderdata && orderdata.user?.id}
                                </h6>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><h6>Address: {orderdata && orderdata.user?.address}
                                </h6></div>
                                <div className="col-md-6"><h6>Phone: {orderdata && orderdata.user?.phone}</h6></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><h6>
                                    About: {orderdata && orderdata.user?.about}
                                </h6></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <ul>
                                        <h6>Likes</h6>
                                        <li>{orderdata && orderdata.user?.likes[0]}</li>
                                        <li>{orderdata && orderdata.user?.likes[1]}</li>
                                        <li>{orderdata && orderdata.user?.likes[2]}</li>
                                       
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <h6>Dislikes</h6>
                                        <li>{orderdata && orderdata.user?.dislikes[0]}</li>
                                        <li>{orderdata && orderdata.user?.dislikes[1]}</li>
                                        <li>{orderdata && orderdata.user?.dislikes[2]}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-2 text-right"><Button onClick={() => history.push({
                                pathname: `/orderroute`,
                            })} className="btn btn-primary profile-button" type="button">Order Summary</Button></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;