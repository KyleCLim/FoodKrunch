import axios from "axios";
import { useState } from "react";

export const useBooking = (currentUser) => {
    const [notice, setNotice] = useState(null);

    const bookTable = async (bookingData) => {
        if (!currentUser) return "login";

        try {
            const res = await axios.post(
                "http://localhost:8800/api/posts/book",
                bookingData,
                { withCredentials: true }
            );
            setNotice(res.data);
            return null;
        } catch (err) {
            console.log(err);
        }
    };

    return {
        notice,
        bookTable,
    };
};
