import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/home';
import PracticeAreaDetail from '@/pages/practice-areas/detail';
import NotFound from '@/pages/404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/areas-atuacao/:slug" element={<MainLayout><PracticeAreaDetail /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
