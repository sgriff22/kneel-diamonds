import { placeOrder } from "./TransientState.js";

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder();
    }
};

export const placeOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return "<div><button id='placeOrder'>Place Order</button></div>";
};
