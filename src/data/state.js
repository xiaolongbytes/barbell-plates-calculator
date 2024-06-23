// Local storage keys
const LOCAL_STORAGE_KEYS = {
    WEIGHT_INVENTORY: 'weightInventory',
    BARBELL_WEIGHT: 'barbellWeight',
};

// Attempt to retrieve stored data from local storage
export const loadWeightInventory = () => {
    const weightInventory = localStorage.getItem(
        LOCAL_STORAGE_KEYS.WEIGHT_INVENTORY
    );
    if (weightInventory) {
        return JSON.parse(weightInventory);
    }
    return null;
};

// Update saved weight inventory
export const updateWeightInventory = (weightInventory) => {
    localStorage.setItem(
        LOCAL_STORAGE_KEYS.WEIGHT_INVENTORY,
        JSON.stringify(weightInventory)
    );
};

// Attempt to retrieve stored data from local storage
export const loadBarbellWeight = () => {
    const barbellWeight = localStorage.getItem(
        LOCAL_STORAGE_KEYS.BARBELL_WEIGHT
    );
    if (barbellWeight) {
        return parseInt(barbellWeight);
    }
    return null;
};

// Update saved barbell weight
export const updateBarbellWeight = (barbellWeight) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.BARBELL_WEIGHT, barbellWeight);
};
