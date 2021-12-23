let count = 0;

function increase() {
    const num = document.querySelector("#num");
    count += 1;
    num.innerHTML = count;
    color();
}

function reset() {
    const num = document.querySelector("#num");
    count = 0;
    num.innerHTML = count;
    color();
}

function decrease() {
    const num = document.querySelector("#num");
    count -= 1;
    num.innerHTML = count;
    color();
}

function color() {
    if (count > 0) {
        document.querySelector("#num").style.color = "green"
    } else if (count < 0) {
        document.querySelector("#num").style.color = "red"
    } else if (count == 0) {
        document.querySelector("#num").style.color = "black"
    }
}