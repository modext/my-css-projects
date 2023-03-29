import React, {useState} from 'react'
import "./customcard.css"
import info from "./info.png"

function CustomCard() {

    const [click, setClick] = useState(true)

    const handleClick =()=> {
        setClick(!click)
    }

    return (
    
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className={click ? "bottom" : "bottom clicked"}>
                    <div className="left">
                        <div className="details">
                            <h1>VR Headset</h1>
                            <p className="p1">$2500</p>
                        </div>
                        <div className="buy" onClick= {handleClick}> <img src={require ("./cart.png")} alt=" added-to-cart" /> </div>
                    </div>
                    <div className="right">
                        <div className="done"> <img src={require ("./tick.png")} alt="done" /> </div>
                        <div className="details">
                            <h1 className="headgame">VR Gaming</h1>
                            <p className='p2' >Added to your cart</p>
                        </div>
                        <div className="remove" onClick ={handleClick}> <img src={require ("./cancel.png")} alt="cancel" /> </div>
                    </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon"> <img src={require ("./info.png")} alt="info icon" /> </div>
                <div className="contents">
                <table>
                    <thead>
                        <tr>
                        <th>Display Tech</th>
                        <th>Resolution</th>
                        </tr>
                        <tr>
                        <td>OLED</td>
                        <td>2160x1200</td>
                        </tr>
                        <tr>
                        <th>Display Elements</th>
                        <th>Optical Design</th>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Hybrid</td>
                        </tr>
                        <tr>
                        <th>Refresh Rate</th>
                        <th>Field of View</th>
                        </tr>
                        <tr>
                        <td>90Hz</td>
                        <td>105°h x 105°v</td>
                        </tr>
                        <tr>
                        <th>Interpolation</th>
                        <th>Tracking device</th>
                        </tr>
                        <tr>
                        <td>Async Timewarp</td>
                        <td>IR Camera</td>
                        </tr>
                    </thead>
                </table>
                </div>
            </div>
        </div>
    
    )
}

export default CustomCard