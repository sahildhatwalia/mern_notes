// UseIdHook.jsx
import React, { useId } from 'react';
import styles from '../App.css';

const UseIdHook = () => {
    // Generate unique IDs
    const emailId = useId();
    const passwordId = useId();
    const checkboxId = useId();

    return (
        <div className={styles.useIdContainer}>
            <h2 className={styles.useIdTitle}>useId Hook Example</h2>
            
            <div className={styles.useIdFormGroup}>
                <label htmlFor={emailId} className={styles.useIdLabel}>
                    Email Address
                </label>
                <input
                    type="email"
                    id={emailId}
                    className={styles.useIdInput}
                    placeholder="Enter your email"
                />
            </div>

            <div className={styles.useIdFormGroup}>
                <label htmlFor={passwordId} className={styles.useIdLabel}>
                    Password
                </label>
                <input
                    type="password"
                    id={passwordId}
                    className={styles.useIdInput}
                    placeholder="Enter your password"
                />
            </div>

            <div className={styles.useIdCheckboxGroup}>
                <input
                    type="checkbox"
                    id={checkboxId}
                    className={styles.useIdCheckbox}
                />
                <label htmlFor={checkboxId} className={styles.useIdCheckboxLabel}>
                    Remember me
                </label>
            </div>

            <button className={styles.useIdButton}>Submit</button>

            <div className={styles.useIdInfo}>
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