import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthProvider';

export const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    
    if (user) {
        return <Navigate to="/notes" replace />;
    }

    return children;
};
