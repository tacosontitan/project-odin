import { ConfigProvider } from 'antd';
import './App.scss';
import DashboardLayout from './components/layouts/DashboardLayout';

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
          colorTextBase: '#FFF8E8'
        },
      }}
    >
      <DashboardLayout>
        <span>Pong!</span>
      </DashboardLayout>
    </ConfigProvider>
  );
}

export default App;
