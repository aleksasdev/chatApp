import { Navbar } from '@/components/main/Navbar';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '@/contexts/UserProvider';
import { Login } from '@/components/authentication/Login';
import '@/components/main/common.css';
import { Register } from './components/authentication/Register';
import { Chat } from './components/chat/Chat';
import { Logout } from './components/authentication/Logout';

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
               <Route path="/logout" element={<Logout />} />
               <Route path="/chat" element={<Chat />} />
            </Route>
         </Routes>
      </UserProvider>
      </>
   );
}

export default App;
