class Main {
    constructor(
        private name: string,
    ) {}

    public sayName() {
        console.log(this.name);
    }
}

const m = new Main('korambo');

m.sayName();
