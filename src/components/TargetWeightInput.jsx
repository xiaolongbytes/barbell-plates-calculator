export const TargetWeightInput = ({ targetWeight, onTargetWeightChange }) => {
    return (
        <>
            <input
                type="number"
                id="targetWeight"
                value={targetWeight}
                name="targetWeight"
                onChange={(e) => onTargetWeightChange(e.currentTarget.value)}
            />
            <label htmlFor="targetWeight"> lbs</label>
        </>
    );
};
