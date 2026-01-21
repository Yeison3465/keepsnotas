
import './App.css'
import { NotesRoutes } from './routes/NotesRoutes'
import { Toaster } from 'react-hot-toast';
function App() {
  

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <NotesRoutes/>
    </>
  )
}

export default App
