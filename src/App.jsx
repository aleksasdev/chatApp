import { Navbar } from '@/components/main/Navbar';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '@/contexts/UserProvider';
import { Login } from '@/components/authentication/Login';
import '@/components/main/common.css';
import { Register } from './components/authentication/Register';

function App() {

   return (
      <>
      {/* Routes with header */}
      <UserProvider>
         <Routes>
            <Route element={<Navbar />}>
               <Route path="/" />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/chat" />
            </Route>
         </Routes>
      </UserProvider>
      </>
   );
}

export default App;
