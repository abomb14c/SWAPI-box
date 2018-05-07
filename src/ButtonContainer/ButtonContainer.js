import React, { Component } from 'react'

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
                <button className="data-button">people</button>
                <button className="data-button">people</button>
            </div>
        )
    }
}

export default ButtonContainer