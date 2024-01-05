export const OrderList = async () => {
    //Get the orders from the API
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size");
    const orders = await fetchResponse.json();

    //Copy the orders and create HTML sections to list orders
    let ordersHTML = orders.map((order) => {
        const orderPrice = order.metal.price + order.style.price + order.size.price;
        return`<section class="order">Order #${order.id} cost $${orderPrice}</section>` 
    });

    return ordersHTML.join("");
};