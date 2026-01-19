import React from 'react'
import { supabase } from '../api/supabase';
import { loginAunt, logoutAunt } from '../api/service/serviceAunt';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const login = async (email, password) => {
        const data = await loginAunt(email, password);
        setUser(data.user);
        setSession(data.session);
        return data;
    };

   
    const logout = async () => {
        await logoutAunt();
        setUser(null);
        setSession(null);
    };

   
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{
        user,
        session,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}>
            {children}
        </AuthContext.Provider>
    )
    
}
export const useAuth = () => useContext(AuthContext);
