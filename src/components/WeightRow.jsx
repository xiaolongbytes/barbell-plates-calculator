export const WeightRow = ({ weight, quantity, onWeightChange }) => {
    return (
        <>
            <tr>
                <td>
                    <input
                        type="number"
                        value={quantity}
                        name={quantity}
                        onChange={(e) =>
                            onWeightChange(weight, e.currentTarget.value)
                        }
                    />
                </td>
                <td>{weight}</td>
            </tr>
        </>
    );
};
