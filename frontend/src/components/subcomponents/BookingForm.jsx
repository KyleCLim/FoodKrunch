import React from "react";

const BookingForm = ({
    values,
    handleChange,
    // handleSelectChange,
    handleSubmit,
    error,
}) => {
    return (
        <form className="bookingData" onSubmit={handleSubmit}>
            <input
                className="bookingInputArea"
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                className="bookingInputArea"
                type="email"
                name="email"
                id="bookingEmail"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <select
                className="bookingInputArea"
                name="numPeople"
                id="numberOfCustomer"
                value={values.numPeople}
                onChange={handleChange}
                required
            >
                <option value="">How many people?</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9+</option>
            </select>
            <input
                className="bookingInputArea"
                type="date"
                name="bookingDate"
                value={values.bookingDate}
                onChange={handleChange}
                id="date"
                required
            />
            {error && <p>{error}</p>}
            <button className="bookingSubmitButton" type="submit">
                Submit
            </button>
        </form>
    );
};

export default BookingForm;
