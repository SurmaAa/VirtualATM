// Won't use Number.isInteger() because I want to handle numeric strings too.
const isInteger = (amount) => {
    try {
        const parsedAmount = parseInt(amount);

        if (!parsedAmount && parsedAmount !== 0) {
            parsedAmount = undefined;
        }
        
        return parsedAmount;
    } catch {
        return;
    }
};

export default isInteger;