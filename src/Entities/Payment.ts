
export default class Payment {
    amount: number;
    currency: string;
    methodPayment: Array<string>;
    customer: string;
    customer_details?: object;
    url?: string;
    cancelUrl?: string;
    successUrl?: string;

    constructor(amount: number, currency: string, methodPayment: Array<string>, customer: string, customer_details?: object, cancelUrl?: string, successUrl?: string, url?:string) {
        this.amount = amount;
        this.currency = currency;
        this.methodPayment = methodPayment;
        this.customer = customer;
        this.customer_details = customer_details;
        this.cancelUrl = cancelUrl || '';
        this.successUrl = successUrl || '';
        this.url = url || '';
    }
}