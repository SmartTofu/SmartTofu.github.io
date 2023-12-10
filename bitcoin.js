let from_amount = document.getElementById('from_amount');
let to_amount = document.getElementById('to_amount');
let btnRevert = document.getElementById('btnRevert');
function calc() {
    to_amount.value = from_amount.value * to_amount.dataset.price;
}
function revert() {
    let to_amount_value = to_amount.value
    let from_amount_value = from_amount.value
    let to_amount_dataset_price = to_amount.dataset.price
    let from_symbol = document.getElementById('from_symbol').innerText;
    let to_symbol = document.getElementById('to_symbol').innerText;
    to_amount.value = from_amount_value;
    from_amount.value = to_amount_value;
    to_amount.dataset.price = (1.0 / to_amount_dataset_price);
    document.getElementById('from_symbol').innerText = to_symbol;
    document.getElementById('to_symbol').innerText = from_symbol;
}
from_amount.addEventListener('change', calc);
btnRevert.addEventListener('click', revert);