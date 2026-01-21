import React from 'react'
import { supabase } from '../supabase'

export const getNotes = async () => { 

    const { data , error } = await supabase. from('notes').select('*') ;

    if (error) {
        console.log('Error fetching notes:', error);
        throw error;
    }
    return data
}


export const getProfile = async () => {
    const { data, error } = await supabase.from('profiles').select('*');
    if (error) {
        console.log('Error fetching profile:', error);
        throw error;
    }
    return data;
};


export const createNote = async (title_notes, content = "") => {
    const { data, error } = await supabase
        .from('notes')
        .insert([{ title_notes, content }])
        .select()
        .single();
    if (error) {
        console.log('Error creating note:', error);
        throw error;
    }
    return data;
};


export const updateNote = async (id, title_notes, content) => {
    const { data, error } = await supabase
        .from('notes')
        .update({ title_notes, content })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.log('Error updating note:', error);
        throw error;
    }

    return data;
};

export const deleteNote = async (id) => {
    const { data, error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id)
        .select()
        .single();
    if (error) {
        console.log('Error deleting note:', error);
        throw error;
    }
    return data;
}