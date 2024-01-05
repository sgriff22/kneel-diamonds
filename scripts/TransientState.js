//Set up transient state data structure
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
};

//Functions to modify each property of transient state
export const setMetalChoice = (userChoice) => {
    transientState.metalId = userChoice;
    console.log(transientState)
}

export const setSizeChoice = (userChoice) => {
    transientState.sizeId = userChoice;
    console.log(transientState)
}

export const setStyleChoice = (userChoice) => {
    transientState.styleId = userChoice;
    console.log(transientState)
}

//Function to convert transient state to permanent state
export const placeOrder = async () => {
  /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(transientState)
    };

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions);

    //Create a custom event so that the DOM is updated with the new order submitted
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
};