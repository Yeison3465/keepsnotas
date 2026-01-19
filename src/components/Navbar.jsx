import React from 'react'

import { Logout } from './Logout';
import { Logo } from './Logo';

export const Navbar = ({ profile }) => {

    return (
        <header className="w-full px-6 py-4 bg-white border-b border-gray-100 flex items-center justify-between">

            <Logo />


            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">MY NOTES</h1>


            <div className="flex items-center gap-4">
                <nav className="flex items-center gap-3">
                    {profile.map((user) => (
                        <div key={user.id} className="flex items-center gap-3">

                            <div className="w-9 h-9 bg-linear-120 from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                                <span className="text-pink-700 text-sm font-semibold">
                                    {user.username_profile?.charAt(0)?.toUpperCase() || 'U'}
                                </span>
                            </div>

                            <p className="text-sm font-medium text-gray-700 hidden sm:block">
                                {user.username_profile}
                            </p>
                        </div>
                    ))}
                </nav>
                <Logout />
            </div>
        </header>
    )
}
