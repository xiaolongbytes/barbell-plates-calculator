import { findPlates } from '../utils/findPlates';
import { BarbellResultsRow } from './BarbellResultsRow';

export const BarbellResultDisplay = ({
    targetWeight,
    barbellWeight,
    weightInventory,
}) => {
    const platesUsed = findPlates(targetWeight, barbellWeight, weightInventory);
    return (
        <>
            <h3>Put the following plates on each end of your bar:</h3>
            {Object.entries(platesUsed)
                .sort(([a], [b]) => {
                    return parseFloat(b) - parseFloat(a);
                })
                .map(([weight, quantity]) => (
                    <BarbellResultsRow
                        weight={weight}
                        quantity={quantity}
                        key={weight}
                    />
                ))}
        </>
    );
};
