import React from "react";
import { supabase } from "../supabase";

export const serviceAunt = async (
    email,
    password,
    name,
    lastname,
    username
) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name_profile: name,
                last_name_profile: lastname,
                username_profile: username,
            },
        },
    });

    if (error) throw error;
    return data;
};

export const loginAunt = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
    return data;
}

export const logoutAunt = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return true;
}
