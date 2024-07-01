import { loadWeightInventory, updateWeightInventory } from '../data/state';
import { DEFAULT_WEIGHTS } from '../data/constants';
import { useState, useEffect, useCallback } from 'react';
import { WeightRow } from './WeightRow';

export const WeightTable = () => {
    // Render using the default weights
    const [weightInventory, setWeightInventory] = useState(DEFAULT_WEIGHTS);

    // Update weightInventory when row quantity is changed
    const onWeightChange = useCallback(
        (weight, quantity) => {
            const newWeightInventory = {
                ...weightInventory,
                [weight]: quantity,
            };
            setWeightInventory(newWeightInventory);
            updateWeightInventory(newWeightInventory);
        },
        [weightInventory]
    );

    // Load inventory
    useEffect(() => {
        const weights = loadWeightInventory();
        if (weights) {
            setWeightInventory(weights);
        }
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Number of Plates</th>
                        <th>Weight of Plate (lbs)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(weightInventory)
                        .sort(([a], [b]) => {
                            return parseFloat(a) - parseFloat(b);
                        })
                        .map(([weight, quantity]) => (
                            <WeightRow
                                weight={weight}
                                key={weight}
                                quantity={quantity}
                                onWeightChange={onWeightChange}
                            />
                        ))}
                </tbody>
            </table>
        </>
    );
};
