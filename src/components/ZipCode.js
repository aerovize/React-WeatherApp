import { useState } from "react";
import styles from "./Zipcode.module.css";

export default function ZipCode({ submitHandler }) {
    const [ziput, setZiput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submitHandler(ziput.toString());
    };

    const handleZipChange = (event) => {
        setZiput(event.target.value);
    };
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Zipcode"
                    onChange={handleZipChange}
                />
                <button className={styles.button} type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}
