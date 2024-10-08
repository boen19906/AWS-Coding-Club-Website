import React, { useState } from "react";
import "./Form.css"; // Ensure this file has the CSS provided above
import "../App.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js"; 

export default function SignUpForm() {
    const [name, setName] = useState("");
    const [tieColor, setTieColor] = useState("blue"); 
    const [email, setEmail] = useState(""); 
    const [signedUp, setSignedUp] = useState(false);
    const [message, setMessage] = useState(""); 

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        if (!validateEmail(email)) {
            setMessage("Invalid email format. Please try again."); 
            return;
        }

        try {
            await addDoc(collection(db, "Students"), {
                name: name,
                email: email,
                tieColor: tieColor
            });

            setSignedUp(true);
            console.log("Form Submitted and Data Added:", { name, email, tieColor });
        } catch (error) {
            console.error("Error writing document: ", error);
            setMessage("Error saving data. Please try again.");
        }
    };

    if (!signedUp) {
        return (
            <>
                <h1 className="sign-up">SIGN UP</h1>
                <div className="form-container">
                    <div className="form-box">
                        <form id="signup-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name: </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={name}
                                required
                                onChange={(event) => setName(event.target.value)}
                            />
                            <br />

                            <label htmlFor="email">Email: </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                required
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <br />

                            <label htmlFor="tiecolor">Tie Color: </label>
                            <select 
                                id="tiecolor" 
                                name="tiecolor" 
                                value={tieColor}  
                                required
                                onChange={(event) => setTieColor(event.target.value)}
                            >
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="red">Red</option>
                                <option value="yellow">Yellow</option>
                            </select>
                            <br />
                            
                            <button type="submit">Submit</button>
                        </form>

                        {message && <p className="error-message">{message}</p>}
                    </div>
                </div> 
            </>
        );
    } else {
        return (
            <div className="thanks">
                <video autoPlay muted loop className="background-video">
                    <source src="videos/party.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1>{`Thank you ${name.split(' ')[0]}!`}</h1>
                <h2>Our first meeting will be on Monday, September 30th in Mr. Considine's Room!</h2>
            </div>
        );
    }
}
