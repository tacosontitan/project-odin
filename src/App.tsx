import { ConfigProvider } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppContextProvider } from './AppContext';
import Chat from './pages/chat/Chat';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/settings/Settings';
import Workflows from './pages/workflows/Workflows';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#DCF763',
          colorBgBase: '#1F2425',
          colorBgContainer: '#1F2425',
          colorError: '#FF7C7C',
          colorWarning: '#FFED75',
          colorSuccess: '#BAF2B1',
          colorInfo: '#97ECFF',
          colorTextBase: '#FFF8E8',
          colorBgTextHover: 'rgba(0, 0, 0, 0.25)'
        },
      }}
    >
      <AppContextProvider>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
       </Routes>
       </AppContextProvider>
    </ConfigProvider>
  );
}

export default App;
