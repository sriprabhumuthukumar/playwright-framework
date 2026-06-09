import { generateData } from "../utils/faker.js"

const data = generateData()

const userData = {
    signupName :data.signUpname,
    signupEmail :data.signUpemail,
    signupPassword :data.signUppassword,
    userName:'leon',
    days :'15',
    months : 'May',
    years : '1993',
    firstName: data.firstName,
    lastName: data.lastName,
    buyerName:'Mr. buyer  buy',
    company : "abc company",
    address1 :"12 cena street",
    address2 : "hhh street",
    state:"Tamil nadu",
    country :"India",
    city : "Erode",
    zipcode : '965874',
    mobile : '458794561',
    invalidEmail :'dfdfw@egef.com',
    invalidPassword :'ejgfjefg',
    productName:'Blue Top',
    R_name:'sri',
    R_email:'sri@seven.com',
    R_review:'Thank you'


}

export default userData