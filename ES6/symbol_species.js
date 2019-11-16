class MyClass {
    static get [Symbol.species]() {
        return this
    }
    
    constructor(value) {
        this.value = value 
    }

    clone() {
        return new this.constructor[Symbol.species](this.value)
    }
}

// 子类覆盖父类的Symbol.species
class MyDerivedClass extends MyClass {
    static get [Symbol.species]() {
        return MyClass
    }
}