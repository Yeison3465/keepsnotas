'use client';

import React, { useEffect, useState } from 'react'
import { Logout } from '../components/Logout'
import { createNote, deleteNote, getNotes, getProfile, updateNote } from '../api/service/serviceCrud'
import { Navbar } from '../components/Navbar'
import { Content } from '../components/Content'

export const Notes = () => {

    const [allnotes, setAllnotes] = useState([])
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [tittle, setTittle] = useState('')
    const [content, setConten] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editContent, setEditContent] = useState('')
    const [deleteId, setDeleteId] = useState(null)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const data = await getNotes();
                setAllnotes(data);
            } catch (err) {
                console.error('Error fetching notes:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfile();
                setProfile(data);
            } catch (err) {
                console.error('Error fetching profile:', err);
            }
        };

        fetchProfile();
    }, []);

    const addNote = async (e) => {
        e.preventDefault();
        try {
            const newNote = await createNote(tittle, content);
            setAllnotes([...allnotes, newNote]);
            setTittle('');
            setConten('');
            alert('Nota creada con exito');
            setIsActive3(false);
        }
        catch (err) {
            alert('No se pudo crear la nota');
        }

    };


    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const editNote = await updateNote(
                editingId,
                editTitle,
                editContent
            )

            setAllnotes(allnotes.map(note =>
                note.id === editingId ? editNote : note
            ))

            setIsActive(false)
            setEditingId(null)
            setEditTitle('')
            setEditContent('')

            alert('Nota actualizada con éxito')
        } catch (err) {
            alert('No se pudo actualizar la nota')
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteNote(id);
            setAllnotes(allnotes.filter(note => note.id !== id));
            alert('Nota eliminada con éxito');
        } catch (error) {

        }
    }



    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar profile={profile} />

            
            <button
                onClick={() => setIsActive3(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 text-white rounded-2xl shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center z-40"
            >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Mis Notas</h2>
                </div>

                
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Todas las Notas</h3>
                    <Content allnotes={allnotes} loading={loading} setIsActive={setIsActive} setIsActive2={setIsActive2} setEditingId={setEditingId} setEditTitle={setEditTitle} setEditContent={setEditContent} setDeleteId={setDeleteId} />
                </div>
            </main>


            {isActive && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Editar Nota</h2>
                            <button
                                type="button"
                                onClick={() => setIsActive(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Título</label>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Contenido</label>
                                <textarea
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                                >
                                    Actualizar Nota
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsActive(false)}
                                    className="px-6 py-3 text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            {isActive2 && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 space-y-4 text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Eliminar Nota</h2>
                        <p className="text-gray-500">¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.</p>
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setIsActive2(false)}
                                className="flex-1 py-3 text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDelete(deleteId)}
                                className="flex-1 py-3 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition-colors"
                            >
                                Sí, Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            
            {isActive3 && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Nueva Nota</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsActive3(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={addNote} className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Título</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el título"
                                    value={tittle}
                                    onChange={(e) => setTittle(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Contenido</label>
                                <textarea
                                    placeholder="Ingrese el contenido"
                                    value={content}
                                    onChange={(e) => setConten(e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                                >
                                    Guardar Nota
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsActive3(false)}
                                    className="px-6 py-3 text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
