import styles from "./CurrentWeather.module.css";

export default function CurrentWeather({ weather }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.city}>{weather.name}</h2>
            <h1 className={styles.temp}>{Math.round(weather.main.temp)}</h1>
            <p className={styles.desc}>{weather.weather[0].description}</p>
        </div>
    );
}
