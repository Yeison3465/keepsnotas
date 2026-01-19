import React from 'react'
import { Link } from 'react-router'

export const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            
            <header className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12"><path fill="#cccccc" d="M9.46 6.24a.48.48 0 0 1-.32.15L6 6.56A.51.51 0 0 1 5.44 6l.17-3.17a.48.48 0 0 1 .15-.32L7.29 1H1.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V4.71zm-1.04-.82L7 5.5a.48.48 0 0 1-.5-.5l.08-1.42a.48.48 0 0 1 .13-.32L9.84.14a.46.46 0 0 1 .67 0l1.35 1.35a.46.46 0 0 1 0 .67L8.74 5.29a.48.48 0 0 1-.32.13"/></svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">S&P</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">MY NOTES</h1>
                <div className="w-24"></div>
            </header>

            
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="max-w-2xl w-full text-center space-y-8">
                    
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Organiza tus ideas
                        </h2>
                        <p className="text-lg text-gray-500 max-w-md mx-auto">
                            Captura tus pensamientos, crea listas y mantén todo organizado en un solo lugar.
                        </p>
                    </div>

                    
                    <div className="flex justify-center gap-4 py-8">
                        <div className="w-32 h-40 bg-pink-100 rounded-2xl p-4 transform -rotate-6 shadow-lg">
                            <div className="w-8 h-8 bg-pink-300 rounded-lg mb-2"></div>
                            <div className="h-2 bg-pink-200 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-pink-200 rounded w-1/2"></div>
                        </div>
                        <div className="w-32 h-40 bg-yellow-100 rounded-2xl p-4 shadow-lg z-10">
                            <div className="w-8 h-8 bg-yellow-300 rounded-lg mb-2"></div>
                            <div className="h-2 bg-yellow-200 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-yellow-200 rounded w-1/2"></div>
                        </div>
                        <div className="w-32 h-40 bg-blue-100 rounded-2xl p-4 transform rotate-6 shadow-lg">
                            <div className="w-8 h-8 bg-blue-300 rounded-lg mb-2"></div>
                            <div className="h-2 bg-blue-200 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                        </div>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/login"
                            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Iniciar Sesión
                        </Link>
                        <Link
                            to="/register"
                            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                            Registrarse
                        </Link>
                    </div>
                </div>
            </main>

            
            <footer className="py-6 text-center text-sm text-gray-400">
                <p>Hecho por Yeison De Jesus</p>
            </footer>
        </div>
    )
}
