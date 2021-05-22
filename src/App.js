import React ,{useEffect , useState} from 'react';
import './App.css';
import Profile from './Profile';
import Order from './Order';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {

   const [orderdata, setOrderdata] = useState([]);




    useEffect(() => {

        const getUsers = async () => {
            await fetch(" https://react-express-order-summary.herokuapp.com/order").then((res) => res.json()).then((data) => setOrderdata(data))
        }
       getUsers();
    }, [])

    console.log(orderdata);
  return (
    <div>
    <Router>
     <Switch>
     <Route exact path="/">
 <Profile orderdata={orderdata}/>
     </Route>
      <Route path="/orderroute">
      <Order orderdata={orderdata}/>
     </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;