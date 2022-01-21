import Stripe from "stripe";
import Customer from "../Entities/Customers";
const stripe = new Stripe('sk_test_51K3dtoF9im6ZmFp2MCTksOhu7T87uTncuTpPx3b7vsz9ABekS2uwHzEBUjgCShrYoZEyKtxz6iui5X2KPRPb9jko00d3ep3dy8',{
    apiVersion:'2020-08-27',
});


interface Address{
    city: string;
    postal_code ?: string;
    state: string;
    country:string
}

export default class CustomerServices{

    async execute():Promise<Customer[]|Error>{
        const customers = Array<any>();
        const result = (await stripe.customers.list()).data
        if(!result)
            return new Error("Something wrong happened");
        result.map(customer => {
            const {id, name, email,address, phone } = customer
            customers.push(new Customer(id, name as string, email as string, address as Address, phone as string));
        })
        return customers;
    }

    /**
     * @function save realize and create a payment
     * @param name name 
     * @param email email 
     * @param address address object (city, country, state and postal_code)
     * @param phone address object
     */
    async save({name, email, address, phone} : Customer): Promise<Customer|Error>{

        const {city, country, state, postal_code} = address;

        const custumer = await stripe.customers.create({
            name,
            email,
            address: {
                line1: '',
                city,
                country,
                state,
                postal_code: postal_code || ''
            },
            phone,
        })

        if(custumer instanceof Error)
            return new Error("Missing date")

        const cus = new Customer(custumer.id,name,email,address,phone);
        
        return cus;
    }
}