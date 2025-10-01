document.querySelector("#currentyear").textContent = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

document.querySelector("#lastmodified").textContent = `Last modified: ${lastModifiedDate}`;

const temperature = 22;
const windSpeed = 10;
const conditions = "Partly Cloudy";

document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;
document.getElementById("conditions").textContent = conditions;

function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        const wc = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
        return `${Math.round(wc)} °C`;
    } else {
        return `N/A`;
    }
}

const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").textContent = windChill;
