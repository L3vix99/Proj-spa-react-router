import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProductListPage.css";

const stuffs = ["car", "bike", "motocycle"];

const ProductListPage = () => {

    const list = stuffs.map(stuff => (
        <li key={stuff}>
            <Link to = {`/product/${stuff}`}>{stuff}</Link>
        </li>
    ))

    return(
         <div className='productss'>
       <h2> Lista Produktów </h2>
       <ul>
           {list}
       </ul>
    </div> 
    );
}
 
export default ProductListPage;