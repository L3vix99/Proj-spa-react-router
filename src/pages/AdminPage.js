import React from "react";
import { Route, Redirect } from "react-router-dom";


const permission = true;

 const AdminPage = () => {
     return(
         <Route render={()=> (
             permission ? (<h3>Panel Admina "Dzień Dobry"</h3>) : (
                 <Redirect to = "/login"/>
             )
         )}/>
     );
 }
 export default AdminPage;