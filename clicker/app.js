
let money = 0;
let clickVal = 1;
let accelerators = [];
let globalGpuMulti = 1;

const CLICKMULTI = 1; // Not implemented yet...
const GPU = 2;

class Accelerator {
    constructor(name, price, value, type) {
        this.name = name;
        this.price = price;
        if(type === GPU) {
            this.genPerLoop = value;
            this.clickMulti = null;
        }
    }
}

window.onload = () => {

    document.getElementById('clicker').onclick = () => {
        money = money + clickVal;
        update();
    }

    document.getElementById('buy1060').onclick = () => {
        const gpu = new Accelerator('Nvidia Geforce GTX 1060', 400, 1, GPU);
        if(money >= gpu.price) {
            accelerators.push(gpu);
            money = money - gpu.price;
        }
    }

    document.getElementById('buy1070').onclick = () => {
        const gpu = new Accelerator('Nvidia Geforce GTX 1070', 500, 1.2, GPU);
        if(money >= gpu.price) {
            accelerators.push(gpu);
            money = money - gpu.price;
        }
    }

    document.getElementById('buy1080').onclick = () => {
        const gpu = new Accelerator('Nvidia Geforce GTX 1080', 800, 1.5, GPU);
        if(money >= gpu.price) {
            accelerators.push(gpu);
            money = money - gpu.price;
        }
    }

}

function update() {
    document.getElementById('money').innerHTML = 'Money: $' + Math.floor(money);
    if(accelerators.length > 0) {
        let accelList = '';
        for(accel  of accelerators) {
            accelList += accel.name + '<br/>';
        }
        document.getElementById('accelList').innerHTML = accelList;
    }
}

// Draw loop
setInterval(() => {
    if(accelerators.length > 0) {
        for(accel of accelerators) {
            if(accel.genPerLoop !== null) {
                money = money + accel.genPerLoop;
            }
        }
    }
    update();
}, 100);
