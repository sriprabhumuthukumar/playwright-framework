import { faker, Faker } from "@faker-js/faker";

export function generateData(){

    return{
    signUpname : faker.person.fullName(),
    signUpemail : faker.internet.email(),
    signUppassword : faker.internet.password(),
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    }
    
    
}