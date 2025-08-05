// UseIdHook.jsx
import React, { useId } from 'react';


const UseIdHook = () => {
    // Generate unique IDs
    const emailId = useId();
    const passwordId = useId();
    const checkboxId = useId();

    return (
        <div className="useIdContainer">
            <h2 className="useIdTitle">useId Hook Example</h2>
            
            <div className="useIdFormGroup">
                <label htmlFor={emailId} className="useIdLabel">
                    Email Address
                </label>
                <input
                    type="email"
                    id={emailId}
                    className="useIdInput"
                    placeholder="Enter your email"
                />
            </div>

            <div className="useIdFormGroup">
                <label htmlFor={passwordId} className="useIdLabel">
                    Password
                </label>
                <input
                    type="password"
                    id={passwordId}
                    className="useIdInput"
                    placeholder="Enter your password"
                />
            </div>

            <div className="useIdCheckboxGroup">
                <input
                    type="checkbox"
                    id={checkboxId}
                    className="useIdCheckbox"
                />
                <label htmlFor={checkboxId} className="useIdCheckboxLabel">
                    Remember me
                </label>
            </div>

            <button className="useIdButton">Submit</button>

            <div className="useIdInfo">
                <p>Generated IDs:</p>
                <ul>
                    <li>Email ID: {emailId}</li>
                    <li>Password ID: {passwordId}</li>
                    <li>Checkbox ID: {checkboxId}</li>
                </ul>
            </div>
        </div>
    );
};

export default UseIdHook;