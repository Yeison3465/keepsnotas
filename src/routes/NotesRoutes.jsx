import React, { use } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import { Home, Notes, Register, Login, ProtectedRoute ,PublicRoute } from '../barrel/barrel'



export const NotesRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={
                    <PublicRoute>
                        <Home />
                    </PublicRoute>

                } />
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>

                } />
                <Route path="/register" element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                } />
                <Route path="/" element={
                    <PublicRoute>
                        <Home />
                    </PublicRoute>

                } />
                <Route
                    path="/notes"
                    element={
                        <ProtectedRoute>
                            <Notes />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
}
