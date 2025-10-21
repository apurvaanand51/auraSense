let btn = document.querySelector("#btn");
let btnReset = document.querySelector("#btnReset");
let hr_input = document.querySelector("#hrInp");
let bt_input = document.querySelector("#btInp")
let hrv_input = document.querySelector("#hrvInp");
let result = document.querySelector(".result");

btnReset.addEventListener("click", () => {
    location.reload();
})

btn.addEventListener("click", () => {
    calculateStress();
})

function calculateStress() {
    let hr_inputVal = hr_input.value;
    let hrv_inputVal = hrv_input.value;
    let bt_inputVal = bt_input.value;

    if (hr_inputVal == "" || hrv_inputVal == "" || bt_inputVal == "") {
        alert("Enter all values correctly");
    } else {

        let generalhr = (hr_inputVal - 81.6625) / 13.6585;
        let generalhrInt = parseFloat(generalhr.toFixed(4));

        let generalhrv = (-(hrv_inputVal - 0.0952)) / 0.0315;
        let generalhrvInt = parseFloat(generalhrv.toFixed(4));

        let generalbt = Math.abs((bt_inputVal - 36.8126) / 0.3961);
        let generalbtInt = parseFloat(generalbt.toFixed(4));

        let stressIndex = (0.5 * generalhrvInt) + (0.3 * generalhrInt) + (0.2 * generalbtInt);
        let stressIndexInt = parseFloat(stressIndex.toFixed(4));

        if (stressIndexInt < 0.8) {
            result.innerHTML = `<h3>Stress Index: ${stressIndexInt}</h3><br><h3>Stress Level: Low</h3>`;
        } else if(stressIndexInt >= 0.8 && stressIndexInt <= 1.8){
            result.innerHTML = `<h3>Stress Index: ${stressIndexInt}</h3><br><h3>Stress Level: Medium</h3>`;
        } else if(stressIndexInt > 1.8){
            result.innerHTML = `<h3>Stress Index: ${stressIndexInt}</h3><br><h3>Stress Level: High</h3>`;
        }

        console.log(generalhrInt);
        console.log(generalhrvInt);
        console.log(generalbtInt);
        console.log(stressIndex);
    }
}