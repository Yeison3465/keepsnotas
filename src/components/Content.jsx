import React from 'react'

export const Content = ({ allnotes, loading, setIsActive, setIsActive2, setEditingId, setEditTitle, setEditContent, setDeleteId }) => {
    if (loading) {
            return (
                <div className="flex items-center justify-center py-20">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                        <p className="text-gray-600">Cargando notas...</p>
                    </div>
                </div>
            );
        }
        else if (allnotes.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">No hay notas disponibles</h3>
                    <p className="text-gray-500">Crea tu primera nota para comenzar</p>
                </div>
            );
        }
        else {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {allnotes.map((note, index) => (
                        <div
                            key={note.id}
                            className={` rounded-2xl p-5 border transition-all hover:shadow-lg hover:-translate-y-1`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{note.title_notes}</h3>
                                <div className="flex items-center gap-1">
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setIsActive(true)
                                            setEditingId(note.id)
                                            setEditTitle(note.title_notes)
                                            setEditContent(note.content)
                                        }}
                                        className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                                    >
                                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setIsActive2(true)
                                            setDeleteId(note.id)
                                        }}
                                        className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                                    >
                                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-4">{note.content}</p>
                        </div>
                    ))}
                </div>
            )
        }
}
