import React, { useState } from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Textinput = (props) => {
    //setText("Enter text here to analyze");
    //here we can modify the state

    let [text, setText] = useState("Enter Text Here");

    //this is the state is holding the information about component we can modify the state according to state 
    /*properties can not modified*/
    const handleUpclic = () => {

        let newText = text.toUpperCase();

        setText(newText);
        document.title='TextUtils -CapitalCase'

    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);
    }

    const handleDownClic = () => {

        let newText = text.toLowerCase();
        setText(newText);
        document.title='TextUtils -LowerCase'

    }

    return <div >


        <h1>{props.heading}</h1>
        <div className="mb-3" >{props.mode}
            <label htmlFor="mybox" className="form-label">{props.input}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" ></textarea>
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={handleUpclic}>CAPITAL LETTERS</button>
        <button type="button" className="btn btn-outline-secondary" onClick={handleDownClic}>SMALL LETTERS</button>
       
       
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length }words and {text.length} charactors</p>
        </div>
    </div>
    

}

Textinput.propTypes = { heading: PropTypes.string };
Textinput.defaultProps = { heading: "Text Analyzer", input: "Input Text Here" };
// #endregion

export default Textinput;