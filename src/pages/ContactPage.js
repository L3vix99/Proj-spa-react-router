import React from "react";
import "../styles/ContactPage.css";
import {Prompt} from "react-router-dom";

 class ContactPage extends React.Component {
    
    state = {
       value: "",
       isEmply: true,
       

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
            isEmply: true
        })
    }

    handleChange = (e) => {
        if(e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmply: false
            })
        } else {
            this.setState ({
                value: e.target.value,
                isEmply: true
            })
        }
      
    } 


    render() {

     return(
        <div className="contact">
        <form onSubmit={this.handleSubmit}>
        <h3>Napisz do nas</h3>
        <textarea value = {this.state.value}
         onChange = {this.handleChange} 
         placeholder = "Wpisz wiadomość"></textarea>
        <button>Wyślij</button>
        </form>
        <Prompt 
        when = {!this.state.isEmply}
        message = "Masz niewypełniony formualrz. Czy na pewno chcessz opóścić tą stronę"
        />
        </div>
     );
    }}
 export default ContactPage;