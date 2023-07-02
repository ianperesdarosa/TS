class Car {
    private model: String;
    private age: number;
    private brand: String;


    public setModel(model: String): void {
        this.model = model;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public setBrand(brand: String): void {
        this.brand = brand;
    }


    public diplay(): String {
        return `Model: ${this.model}, Age: ${this.age}, Brand; ${this.brand}`;
    }
}

const car = new Car();
car.setModel("Civic Si");
car.setAge(2002);
car.setBrand("Honda");
car.diplay();