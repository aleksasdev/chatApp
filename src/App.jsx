import { Navbar } from '@/components/main/Navbar';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '@/contexts/UserProvider';
import { Login } from '@/components/authentication/Login';
import '@/components/main/common.css';

function App() {

   return (
      <>
      {/* Routes with header */}
      <UserProvider>
         <Routes>
            <Route element={<Navbar />}>
               <Route path="/" />
               <Route path="/login" element={<Login />} />
               <Route path="/chat" />
            </Route>
         </Routes>
      </UserProvider>
      </>
   );
}

export default App;
