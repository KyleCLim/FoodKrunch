import { useState } from "react";

export const useFormState = (initialState, validateForm) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleValidation = () => {
        const validationError = validateForm(values);
        setError(validationError);
        return !validationError;
    };

    return {
        values,
        error,
        handleChange,
        handleValidation,
    };
};
