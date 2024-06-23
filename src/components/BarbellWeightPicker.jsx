import { useEffect, useState } from 'react';
import { BARBELL_WEIGHTS } from '../data/constants';
import { loadBarbellWeight, updateBarbellWeight } from '../data/state';

const BARBELL_WEIGHT_IDS = {
    TRAINER: 'trainer',
    WOMENS: 'womens',
    MENS: 'mens',
};

export const BarbellWeightPicker = () => {
    const [barbellWeight, setBarbellWeight] = useState(BARBELL_WEIGHTS.WOMENS);

    const onBarbellChange = (weight) => {
        setBarbellWeight(weight);
        updateBarbellWeight(weight);
    };

    useEffect(() => {
        const barbell = loadBarbellWeight();
        if (barbell) {
            setBarbellWeight(barbell);
        }
    }, []);

    return (
        <fieldset>
            <legend>Select barbell weight:</legend>
            <div>
                <input
                    value={BARBELL_WEIGHTS.TRAINER}
                    type="radio"
                    name="barbell"
                    id={BARBELL_WEIGHT_IDS.TRAINER}
                    checked={barbellWeight === BARBELL_WEIGHTS.TRAINER}
                    onChange={() => onBarbellChange(BARBELL_WEIGHTS.TRAINER)}
                />
                <label htmlFor={BARBELL_WEIGHT_IDS.TRAINER}>
                    Trainer bar - 15 lbs
                </label>
            </div>
            <div>
                <input
                    value={BARBELL_WEIGHTS.WOMENS}
                    type="radio"
                    name="barbell"
                    id={BARBELL_WEIGHT_IDS.WOMENS}
                    checked={barbellWeight === BARBELL_WEIGHTS.WOMENS}
                    onChange={() => onBarbellChange(BARBELL_WEIGHTS.WOMENS)}
                />
                <label htmlFor={BARBELL_WEIGHT_IDS.WOMENS}>
                    Women's bar - 35 lbs
                </label>
            </div>
            <div>
                <input
                    value={BARBELL_WEIGHTS.MENS}
                    type="radio"
                    name="barbell"
                    id={BARBELL_WEIGHT_IDS.MENS}
                    checked={barbellWeight === BARBELL_WEIGHTS.MENS}
                    onChange={() => onBarbellChange(BARBELL_WEIGHTS.MENS)}
                />
                <label htmlFor={BARBELL_WEIGHT_IDS.MENS}>
                    Men's bar - 45 lbs
                </label>
            </div>
        </fieldset>
    );
};
