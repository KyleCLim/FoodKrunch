import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const useAuth = () => {
    const { currentUser, login, logout } = useContext(AuthContext);
    return { currentUser, login, logout };
};
