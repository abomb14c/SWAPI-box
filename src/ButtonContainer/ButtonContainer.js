import React, { Component } from 'react'
import './ButtonContainer.css'

class ButtonContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        } 
    }


    render() {
        return (
            <div className="button-container">
                <button className="data-button">people</button>
                <button className="data-button">planets</button>
                <button className="data-button">vehicles</button>
            </div>
        )
    }
}

export default ButtonContainer