import React, { useState } from "react";
import "./Form.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [tieColor, setTieColor] = useState("");
    const [signedUp, setSignedUp] = useState(false);
    console.log(tieColor);

    const handleSubmit = () => {
        setSignedUp(true);
    }

    if (!signedUp) {
        return (
            <>
                <h1 className="sign-up">SIGN UP</h1>
                <div className="form-container">
                 <div className="form-box">
                     <form id="name-form">
                         <label htmlFor="name">Name: </label>
                         <input 
                             type="text" 
                             id="name" 
                             name="name" 
                             required
                             onChange={(event) => setName(event.target.value)}
                         />
                     </form>
                     <form id="tiecolor-form">
                         <label htmlFor="tiecolor">Tie Color: </label>
                         <select 
                             id="tiecolor" 
                             name="tiecolor" 
                             required
                             onChange={(event) => setTieColor(event.target.value)}
                         >
                             <option value="blue">Blue</option>
                             <option value="green">Green</option>
                             <option value="red">Red</option>
                             <option value="yellow">Yellow</option>
                         </select>
                     </form>
     
                     <button onClick={handleSubmit}>Submit</button>
                 </div>
            </div> 
            </>
            
         );
    }
    else {
        return (
            <div className="thanks">
            <video autoPlay muted loop className="background-video">
                <source src="videos/party.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <h1>{`Thank you ${name.split(' ')[0]}!`}</h1>
            <h2>Our first meeting will be on Monday September 30th in Mr. Considine's Room!</h2>
            
            
            </div>
        );
    }

    
}
