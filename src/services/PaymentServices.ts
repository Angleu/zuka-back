import Stripe from "stripe";
import Payment from "../Entities/Payment";
const stripe = new Stripe('sk_test_51K3dtoF9im6ZmFp2MCTksOhu7T87uTncuTpPx3b7vsz9ABekS2uwHzEBUjgCShrYoZEyKtxz6iui5X2KPRPb9jko00d3ep3dy8', {
    apiVersion: '2020-08-27',
});

export default class PaymentServices{
    
    async execute(): Promise<Payment[] | Error> {
        const payments: Array<Payment> = [];

        try {
            const result = (await stripe.checkout.sessions.list()).data;

            result.map(payment => {
                const { amount_total, currency, payment_method_types, customer, customer_details, cancel_url } = payment;
                payments.push(new Payment(amount_total as number, currency as string, payment_method_types, customer as string, customer_details as object, cancel_url));

            })
            return payments;

        } catch (error) {
            return new Error('Something wrong with server');
        }

    }


    /**
     * @function save 
     * @param customer token to identify user
     * @param amount value 
     * @param currency coin
     * @param methodPayment
     * @returns Payment or Error
     */
    async save(customer: string, amount: number, currency: string, methodPayment: string): Promise<Payment | Error> {


        if (!currency || !amount || !methodPayment)
            return new Error('Missing data to request');
        if (!customer)
            return new Error("Missing a customers");

        const checkout = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                name: 'Pagamento',
                amount,
                currency,
                quantity: 1,
            }],
            cancel_url: 'http://localhost:3000/cancel.html',
            success_url: 'http://localhost:3000/sucess.html',
            customer
        });

        const {payment_method_types, customer_details, cancel_url, success_url, url} = checkout

        const payment = new Payment(amount, currency, payment_method_types, customer, customer_details as object, cancel_url, success_url, url as string);

        return payment;
    }
}