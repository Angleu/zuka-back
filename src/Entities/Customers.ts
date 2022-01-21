import Stripe from 'stripe'

interface Address{
    city: string;
    postal_code ?: string;
    state: string;
    country:string
}

export default class Customer{

    id?: string;
    name: string;
    email: string;
    address: Address;
    phone: string;

    constructor(id: string,name:string, email:string, address:Address, phone:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}