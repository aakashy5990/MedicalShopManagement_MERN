import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();

    const [token, setToken] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const onScroll = () => setIsScrolled(window.scrollY > 10);
      window.addEventListener('scroll', onScroll);
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const value = {
        toast,
        axios,
        navigate,
        isScrolled,
        setIsScrolled,
        isMenuOpen,
        setIsMenuOpen,
        token,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider> 

}

export const useAppContext = () =>{
    return useContext(AppContext);
}
