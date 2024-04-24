document.querySelector('#tip-form').onchange = function() {


var bill = Number(document.getElementById('billTotal').value);
var tip = document.getElementById('tipInput').value;
document.getElementById('tipOutput').innerHTML = `${tip}%`;
var tipValue = bill * (tip/100);
var finalBill = bill + tipValue;
console.log(finalBill);
var tipAmount = document.querySelector('#tipAmount');
var totalBillWithTip = document.querySelector('#totalBillWithTip');
var statement = document.getElementById('statement');
if (tip <= 10) {
	statement.innerHTML = "Cheap a**"
} else if (tip > 10 && tip < 15){
	statement.innerHTML = "Come on you can do better than that!"
} else if (tip >= 15 && tip < 25) {
	statement.innerHTML = "$$$ Big Money $$$"
} else if (tip >= 25 && tip < 50) {
	statement.innerHTML = "Alright buddy relax..."
} else if (tip >= 50 && tip < 100) {
	statement.innerHTML = "Stop playing you ain't got money like that"
} else if (tip == 100) {
	statement.innerHTML = "..."
}
tipAmount.value = tipValue.toFixed(2);
totalBillWithTip.value = finalBill.toFixed(2);

document.getElementById('results').style.display = "block"

}