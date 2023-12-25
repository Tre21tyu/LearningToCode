class Vegetable {
    veggie(veg) {
        this.veg = veg;
    }
    eater() {
        console.log(`I'm gonna eat ${this.veg}`);
    }
}

const aubergine = new Vegetable('aubergine');

aubergine.eater();