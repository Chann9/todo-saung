import {Routes, Route} from 'react-router-dom';
import LoginPage from './pages/Login';
import DashboardPages from './pages/Dashboard';
import ChatbotPage from './pages/Chatbot';

//1. app login
//2. app dashboard
//3. app/chatbot (new)
//4. app/user-statistic (new)

export default function App() {
  return (
    <Routes>
      {/*bisa mendefinisikan routing yg diperlukan*/}
      <Route path= 'app/login' element= {<LoginPage/>} />
      <Route path= 'app/dashboard' element= {<DashboardPages/>} />
      <Route path= 'app/chatbot' element= {<ChatbotPage/>} />
      <Route path= '*' element= {<p>Page not found</p>} />
      </Routes>
  )
}