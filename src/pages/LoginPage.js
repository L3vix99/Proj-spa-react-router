import React from 'react';
const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor=''>Podaj Login:<input type= "text"></input></label>
            <br />
            <label htmlFor=''>Podaj Hasło:<input type= "text"></input></label> 
            <br />

            <button style={{
                border: "2px solid black",
                fontSize: "20px",
                padding: 10,
                margin:10,
                textAlgin: "center",
            }}>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;