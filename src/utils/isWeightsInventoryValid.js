export const isWeightsInventoryValid = (weightInventory) => {
    return (
        weightInventory &&
        !Object.values(weightInventory).every((weight) => weight <= 1)
    );
};
