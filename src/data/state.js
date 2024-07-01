// Local storage keys
const LOCAL_STORAGE_KEYS = {
    WEIGHT_INVENTORY: 'weightInventory',
    BAR_WEIGHT: 'barbellWeight',
    TARGET_WEIGHT: 'targetWeight',
};

// TODO: add JSDoc comments for each function (see updateWeightInventory)
/**
 *
 * TODO: Generalize functions into "storeDataObject" and "storeDataPrimitive" (and
 * respective "load" functions) where object handles json parsing and the other
 * handles parse int. Pass in the key and value.
 */

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

/**
 * Updates saved weight inventory
 * @param {object} weightInventory
 * @returns {void}
 */
export const updateWeightInventory = (weightInventory) => {
    localStorage.setItem(
        LOCAL_STORAGE_KEYS.WEIGHT_INVENTORY,
        JSON.stringify(weightInventory)
    );
};

// Attempt to retrieve stored data from local storage
export const loadBarWeight = () => {
    const barWeight = localStorage.getItem(LOCAL_STORAGE_KEYS.BAR_WEIGHT);
    if (barWeight) {
        return parseInt(barWeight);
    }
    return null;
};

// Update saved barbell weight
export const updateBarWeight = (barWeight) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.BAR_WEIGHT, barWeight);
};

// Attempt to retrieve stored target weight data from local storage
export const loadTargetWeight = () => {
    const targetWeight = localStorage.getItem(LOCAL_STORAGE_KEYS.TARGET_WEIGHT);
    if (targetWeight) {
        return parseInt(targetWeight);
    }
    return null;
};

// Update saved target weight
export const updateTargetWeight = (targetWeight) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.TARGET_WEIGHT, targetWeight);
};
