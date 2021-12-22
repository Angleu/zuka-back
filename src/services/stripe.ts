import Stripe from "stripe";

const secretKey = "sk_test_51K3dtoF9im6ZmFp2MCTksOhu7T87uTncuTpPx3b7vsz9ABekS2uwHzEBUjgCShrYoZEyKtxz6iui5X2KPRPb9jko00d3ep3dy8"

const stripe = new Stripe(secretKey, {
    apiVersion: "2020-08-27"
    // typescript: true
});

// stripe.customers.create({
//     email: 'angleuzua99@gmail.com',
// });


export default stripe;