import { useCallback, useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import ZipCode from "./components/ZipCode";
import "./App.css";

const APIKEY = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

const countryCode = "us";

function App() {
    const [weather, setWeather] = useState({});
    const [zipcode, setZipcode] = useState("43055");
    const [isLoading, setIsLoading] = useState(true);

    const submitHandler = (data) => {
        console.log(`ZIPCODE: ${data}`);
        setZipcode(data);
    };

    const fetchWeather = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch(
            `${baseUrl}zip=${zipcode},${countryCode}&units=imperial&appid=${APIKEY}`
        );
        const data = await response.json();
        setWeather(data);
        setIsLoading(false);
    }, [zipcode]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return (
        <main className="app">
            <div className="container">
                <ZipCode submitHandler={submitHandler} />

                <div className="data-wrapper">
                    {!isLoading && <CurrentWeather weather={weather} />}
                </div>
            </div>
        </main>
    );
}

export default App;
