import React, { useState } from "react";
import "./Form.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

export default function SignUpForm() {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tieColor, setTieColor] = useState("");

    const [signedUp, setSignedUp] = useState(false);
    console.log(tieColor);

        const handleSubmit = async () => {
            console.log("Submitting:", { name, email, tieColor }); // Log form data
            try {
                await addDoc(collection(db, "Students"), {
                    name: name,
                    email: email,
                    tieColor: tieColor
                });
                setSignedUp(true);  // Set signedUp to true after successful write
            } catch (error) {
                console.error("Error adding document: ", error);  // Log the error
            }
        };

    if (!signedUp) {
        return (
            <>
                <h1 className="sign-up">SIGN UP</h1>
                <div className="form-container">
                 <div className="form-box">
                    <form id="email-form">
                         <label htmlFor="email">Email: </label>
                         <input 
                             type="text" 
                             id="email" 
                             required
                             onChange={(event) => setEmail(event.target.value)}
                         />
                     </form>
                     <form id="name-form">
                         <label htmlFor="name">Name: </label>
                         <input 
                             type="text" 
                             id="name" 
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
