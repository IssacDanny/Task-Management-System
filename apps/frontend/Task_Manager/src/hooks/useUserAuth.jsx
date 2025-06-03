import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useUserAuth = () => {
  const { user, loading, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return;

    // If user is not authenticated
    clearUser();
    navigate("/login");
  }, [user, loading, clearUser, navigate]);
};
