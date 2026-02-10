const inputs = document.querySelectorAll("input");

const half = inputs.length / 2;

for (let i = 0; i < half; i++) {
    inputs[i].addEventListener("input", function () {
        inputs[i + half].value = this.value;
    });
}

function printForm(){
    window.print();
}
