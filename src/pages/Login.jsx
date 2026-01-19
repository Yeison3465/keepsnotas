import React from 'react'
import { Backpages } from '../components/Backpages'
import { useAuth } from '../contexts/AuthProvider';
import { Link, Navigate, useNavigate } from 'react-router';
import { useState } from 'react';
import { Logo } from '../components/Logo';

export const Login = () => {

    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, password);
            Navigate('/notes')
        } catch (error) {
            alert(error.message);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                <p className="text-gray-600">Cargando sesión...</p>
            </div>
        </div>
    );

    return (

        <div className="min-h-screen bg-gray-50 flex flex-col">
            
            <header className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-sm">
                <Backpages />
                <Logo />
                <div className="w-24"></div>
            </header>

            
            <main className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    
                    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                        
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold text-gray-900">Iniciar Sesión</h1>
                            <p className="text-gray-500">Accede a tus notas personales</p>
                        </div>

                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                Iniciar sesión
                            </button>
                        </form>

                        
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">¿No tienes cuenta?</span>
                            </div>
                        </div>

                        
                        <Link to="/register" className="block w-full py-3 text-center text-gray-900 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"> Crear cuenta </Link>
                       
                    </div>
                </div>
            </main>
        </div>
    )
}
