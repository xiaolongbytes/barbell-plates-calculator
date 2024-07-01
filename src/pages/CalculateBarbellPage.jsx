import { useEffect, useState } from 'react';
import { TargetWeightInput } from '../components/TargetWeightInput';
import {
    loadBarWeight,
    loadTargetWeight,
    loadWeightInventory,
    updateTargetWeight,
} from '../data/state';
import { BAR_WEIGHTS } from '../data/constants';
import { isWeightsInventoryValid } from '../utils/isWeightsInventoryValid';
import { BarbellResultDisplay } from '../components/BarbellResultDisplay';
import { BarWeightPicker } from '../components/BarWeightPicker';

export const CalculateBarbellPage = () => {
    // Render using default weight of 0
    const [targetWeight, setTargetWeight] = useState(0);
    const [weightInventory, setWeightInventory] = useState();
    const [barWeight, setBarWeight] = useState(BAR_WEIGHTS.WOMENS);

    // Update targetWeight when input is changed
    const onTargetWeightChange = (weight) => {
        if (weight >= 0) {
            setTargetWeight(weight);
            updateTargetWeight(weight);
        }
    };

    // Loads target weight, barbell weight, and weight inventory
    // If weight inventory is empty, prompts user to update inventory
    useEffect(() => {
        const weightInventory = loadWeightInventory();
        if (!isWeightsInventoryValid(weightInventory)) {
            window.alert('Weight inventory is empty, please add plates.');
            // TODO: Google "react router programmatic redirect"
            window.location.href = '/inventory';
        }
        setWeightInventory(weightInventory);

        const barbellWeight = loadBarWeight();
        setBarWeight(barbellWeight);

        const targetWeight = loadTargetWeight();
        if (targetWeight) {
            setTargetWeight(targetWeight);
        }
    }, []);

    return (
        <>
            <h2>Calculate Barbell Page</h2>
            <p>
                Using a{' '}
                <BarWeightPicker
                    barWeight={barWeight}
                    setBarWeight={setBarWeight}
                />
                , I want to lift a total of
            </p>
            <TargetWeightInput
                targetWeight={targetWeight}
                onTargetWeightChange={onTargetWeightChange}
            />
            {!!weightInventory && (
                <BarbellResultDisplay
                    targetWeight={targetWeight}
                    barbellWeight={barWeight}
                    weightInventory={weightInventory}
                />
            )}
        </>
    );
};
