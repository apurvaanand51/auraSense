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

        let generalhr = (hr_inputVal - 79.2714) / 12.7141;
        let generalhrInt = parseFloat(generalhr.toFixed(4));

        let generalhrv = (-(hrv_inputVal - 0.1010)) / 0.0291;
        let generalhrvInt = parseFloat(generalhrv.toFixed(4));

        let generalbt = Math.abs((bt_inputVal - 36.7844) / 0.4138);
        let generalbtInt = parseFloat(generalbt.toFixed(4));

        let stressIndex = (0.5 * generalhrvInt) + (0.3 * generalhrInt) + (0.2 * generalbtInt);
        let stressIndexInt = parseFloat(stressIndex.toFixed(4));

        if (stressIndexInt < 1.0) {
            result.innerHTML = `<h3>Stress Index: ${stressIndexInt}</h3><br><h3>Stress Level: Low</h3>`;
        } else if(stressIndexInt >= 1.0 && stressIndexInt <= 2.5){
            result.innerHTML = `<h3>Stress Index: ${stressIndexInt}</h3><br><h3>Stress Level: Medium</h3>`;
        } else if(stressIndexInt > 2.5){
            result.innerHTML = `<h3>Stress Index: ${stressIndexInt}</h3><br><h3>Stress Level: High</h3>`;
        }

        console.log(generalhrInt);
        console.log(generalhrvInt);
        console.log(generalbtInt);
        console.log(stressIndex);
    }
}