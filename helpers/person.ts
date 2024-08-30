export class Person {
    readonly firstName;
    readonly lastName;
    readonly email;
    readonly password;
    readonly confirmPassword;

    constructor(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password,
        this.confirmPassword = confirmPassword
    }

    static create(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
        return new Person(firstName, lastName, email, password, confirmPassword)
    }
}