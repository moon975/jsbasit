const btn = document.querySelector('.btn');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const error = document.querySelector('.error');

const hideError = () => {
    setTimeout(() => {
        error.style.display = 'none';
    }, 5000);
}

const calculateTip = () =>{
    const bill = document.querySelector('.bill').value;
    const rate = document.querySelector('.rate').value;

    if(bill === "" || rate == ""){
        error.style.display = "block";
        hideError();
    }
    else if(isNaN(bill)){
        error.innerHTML = "Please enter a number"
        error.style.display = "block";
        error.style.color = 'red';
        hideError();
    }
    else{
        let tipAmt = bill * rate;
        tipAmt = Math.ceil(tipAmt);
        tip.innerHTML = `Tip: $${tipAmt}`;

        let totalBill = Number(bill) + tipAmt;
        total.innerHTML = `Total Bill : $${totalBill}`;
    }
}

btn.addEventListener('click', calculateTip);





















/* <input type="text" class="t">
    <button class="tikla">tıkla</button>
    <p id="result"></p>

    <script>
        
        const t = document.querySelector('.t');
        const r = document.querySelector('#result');
        const tikla = document.querySelector('.tikla');
        const goster = () =>{
            setTimeout(() => {
                result.innerHTML = `${t.value}`
            }, 9000)
        }

        tikla.addEventListener('click', goster);
        
    </script> */




















