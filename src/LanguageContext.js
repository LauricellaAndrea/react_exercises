import React from "react";
import { createContext } from "react";
export const LanguageContext = React.createContext("eng");

export class DisplayLanguage extends React.Component {
    state = {
        language: 'en'
    }

   handleLanguageChange=(e) => {
    this.setState({
        language: e.target.value
    })
   }

  render() {
    console.log(this.state.language);
    return (
      <>
        <select onChange={this.handleLanguageChange}>
          <option lang={this.context}>Italiano</option>
          <option lang={this.context}>English</option>
        </select>
        <h1>{this.state.Languaget} </h1>
      </>
    );
  }
}