import { useEffect, useState } from 'react';
import { BAR_WEIGHTS } from '../data/constants';
import { loadBarWeight, updateBarWeight } from '../data/state';

export const BarWeightPicker = ({ barWeight, setBarWeight }) => {
    console.log(barWeight);

    const onBarChange = (weight) => {
        setBarWeight(weight);
        updateBarWeight(weight);
        console.log('Updated Bar weight');
        console.log(weight);
    };

    // Selects the stored barbell weight, if applicable
    useEffect(() => {
        const bar = loadBarWeight();
        if (bar) {
            setBarWeight(bar);
        } else {
            updateBarWeight(BAR_WEIGHTS.WOMENS);
        }
    }, []);

    return (
        <select value={barWeight} onChange={(e) => onBarChange(e.target.value)}>
            <option value={BAR_WEIGHTS.TRAINER}>15 lb Trainer Bar</option>
            <option value={BAR_WEIGHTS.WOMENS}>35 lb Women's Bar</option>
            <option value={BAR_WEIGHTS.MENS}>45 lb Men's Bar</option>
        </select>
    );
};
