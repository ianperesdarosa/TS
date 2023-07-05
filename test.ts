class Car2 {
    private name!:String;
    private color!:String;
    private age!:number;


    public setName(name: String): void {
        this.name = name;
    }

    public setColor(color: String): void {
        this.color = color;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getInfo(): void {
        console.log(`Nome: ${this.name}, Color: ${this.color}, Age: ${this.age}`);
    }    
}

const myCar = new Car2();
myCar.setName("Honda Civic Si");
myCar.setColor("Preto");
myCar.setAge(2009);
myCar.getInfo();