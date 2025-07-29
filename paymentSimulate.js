const fakePaymentAPI = (amount) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Payment of ${amount} success`);
        }, 2000);
    });
};

const makePayment = async () => {
    console.log("Processing payment");
    const message = await fakePaymentAPI(500);
    console.log(message);
};

makePayment();

