import React, { Component } from 'react'
import { render } from 'react-dom';

import '../css/style.css'
import keenImage from '../assets/keen.jpg'; // Importing image -> ADDED IN THIS STEP

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello from react es6

                {/* ADDED IN THIS STEP */}
                <img src={ keenImage } alt='Commander Keen' />
            </div>
        )
    }
}

render(<Hello/>, document.getElementById('root'))