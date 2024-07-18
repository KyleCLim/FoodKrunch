import { useState } from "react";

export const useModal = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isRegistrationOpen, setRegistrationOpen] = useState(false);

    const openLogin = () => setLoginOpen(true);
    const closeLogin = () => setLoginOpen(false);

    const openRegistration = () => setRegistrationOpen(true);
    const closeRegistration = () => setRegistrationOpen(false);

    return {
        isLoginOpen,
        openLogin,
        closeLogin,
        isRegistrationOpen,
        openRegistration,
        closeRegistration,
    };
};
