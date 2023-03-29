import React from 'react'
import "./SubCard.css"

function SubCard() {
  return (
    <div>
        <div className="card">
            <h2 className="title">Want to subscribe to our Newsletter?</h2>
            <p className="text">Just click on the following button and get updates every single week.</p>
            <div className="button">Subscribe</div>
            <div className="button">Cancel</div>
        </div>
    </div>
  )
}

export default SubCard