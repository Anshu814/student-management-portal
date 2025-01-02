import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SelectedStudentProvider from './context/SelectedStudentContext';
import StudentProvider from './context/StudentContext';
import Main from './pages/Main';

function App() {
    return (
        <Router>
            <StudentProvider>
            <SelectedStudentProvider>
            <Routes>
              <Route path="/" element={<Main/>} />
                {/* <Route path="/add" element={<AddStudent />} />
                <Route path="/edit/:id" element={<EditStudent />} /> */}
            </Routes>
            </SelectedStudentProvider>
            </StudentProvider>
        </Router>
    );
}

export default App;
