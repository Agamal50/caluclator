function num1(x) {
    document.getElementById("result").value += x
}
function equals() {
    document.getElementById("result").value = eval(document.getElementById("result").value)
}
function c1() {
    document.getElementById("result").value = "";
}