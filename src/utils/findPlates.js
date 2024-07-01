export const findPlates = (targetWeight, barbellWeight, weightInventory) => {
    const [platesUsed] = Object.entries(weightInventory)
        .sort(([a], [b]) => {
            return parseFloat(b) - parseFloat(a);
        })
        .reduce(
            ([acc, remainingWeight], [weight, quantity]) => {
                const multiples = Math.floor(
                    remainingWeight / parseInt(weight)
                );
                if (
                    remainingWeight >= 0 &&
                    quantity >= 2 * multiples &&
                    multiples
                ) {
                    return [
                        {
                            ...acc,
                            [weight]: multiples,
                        },
                        remainingWeight - multiples * weight,
                    ];
                }
                return [acc, remainingWeight];
            },
            [{}, (targetWeight - barbellWeight) / 2]
        );
    return platesUsed;
};
