// Creatinგ variables

const metricSection = document.querySelector("#metric_section");
const imperialSection = document.querySelector("#imperial_section");
const metricButton = document.querySelector("#metric");
const imperialButton = document.querySelector("#imperial");

// First create variables of input values;

// metric values
const metricHeightInput = document.querySelector("#cm");
const metricWeightInput = document.querySelector("#kg");
// imperial values
const imperialHeightInputFt = document.querySelector("#ft");
const imperialHeightInputIn = document.querySelector("#in");
const imperialWeightInputLbs = document.querySelector("#lbs");
const imperialWeightInputSt = document.querySelector("#st");

const span = document.querySelector("#span");
const bmiExplanation = document.querySelector("#what_bmi_means");

// Then take output place from html

const calculationBMI = document.querySelector("#calculation_of_bmi");

// creating simple function for metric

function bmiDescription(bmi) {
    if (bmi < 18.5) {
        span.innerText = "an underweight";
        bmiExplanation.innerText = `
        A BMI under 18.5 is categorized as underweight, which can sometimes indicate malnutrition, nutrient deficiencies, or underlying health problems. Being underweight may also increase the risk of weakened immunity and other complications.
        `;
    } else if (bmi > 24.9) {
        span.innerText = "an overweight";
        bmiExplanation.innerText = `
        A BMI in the range of 25 to 29.9 is considered overweight. Being overweight increases the risk of developing health issues such as type 2 diabetes, heart disease, and certain cancers. It’s important to work on managing weight to prevent further health complications.
        `;
    } else {
        span.innerText = "a healthy weight";
        bmiExplanation.innerText = `
        A BMI in the range of 18.5 to 24.9 is considered a healthy weight. Maintaining a healthy weight can help reduce the risk of chronic health conditions such as heart disease, diabetes, and high blood pressure.
        `;
    }
}

function calculateBMI() {
    const heightInCM = Number(metricHeightInput.value);
    const weightInKG = Number(metricWeightInput.value);

    let metricBmi = 0;
    if (heightInCM <= 0 || weightInKG <= 0) {
        const bmiTittle = document.querySelector("#bmi_tittle");
        bmiTittle.innerText = "Please enter valid height and weight values.";
        calculationBMI.innerText = "00.0";
    } else if (
        typeof heightInCM === "number" &&
        typeof weightInKG === "number"
    ) {
        metricBmi = weightInKG / ((heightInCM / 100) * (heightInCM / 100));

        calculationBMI.innerText = String(metricBmi.toFixed(1));
    } else {
        calculationBMI.innerText = "00.0";
    }
    bmiDescription(metricBmi);
}

// now create function for imperial
function calculateImperialBMI() {
    const heightFt = Number(imperialHeightInputFt.value);
    const heightIn = Number(imperialHeightInputIn.value);
    const weightSt = Number(imperialWeightInputSt.value);
    const weightLbs = Number(imperialWeightInputLbs.value);

    const totalHeightInches = heightFt * 12 + heightIn;
    const totalWeightLbs = weightSt * 14 + weightLbs;

    let imperialBmi = 0;

    if (totalHeightInches <= 0 || totalWeightLbs <= 0) {
        const bmiTittle = document.querySelector("#bmi_tittle");
        bmiTittle.innerText = "Please enter valid height and weight values.";
        calculationBMI.innerText = "00.0";
    } else {
        imperialBmi =
            (totalWeightLbs / (totalHeightInches * totalHeightInches)) * 703;
        calculationBMI.innerText = String(imperialBmi.toFixed(1));
    }

    bmiDescription(imperialBmi);
}
// Switching options(metric or imperial)

metricButton.addEventListener("click", () => {
    metricSection.classList.remove("hide");
    imperialSection.classList.add("hide");
    imperialButton.classList.remove("active");
    metricButton.classList.add("active");
    calculationBMI.innerText = "00.0";
});
imperialButton.addEventListener("click", () => {
    metricSection.classList.add("hide");
    imperialSection.classList.remove("hide");
    metricButton.classList.remove("active");
    imperialButton.classList.add("active");
    calculationBMI.innerText = "00.0";
});

// Now add our functions to the inputs as  event listeners to work

metricHeightInput.addEventListener("input", calculateBMI);
metricWeightInput.addEventListener("input", calculateBMI);
imperialHeightInputFt.addEventListener("input", calculateImperialBMI);
imperialHeightInputIn.addEventListener("input", calculateImperialBMI);
imperialWeightInputSt.addEventListener("input", calculateImperialBMI);
imperialWeightInputLbs.addEventListener("input", calculateImperialBMI);
