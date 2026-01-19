import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthProvider';

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
};
