import './App.css';
import { AppProvider } from './context/AppContext';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}

export default App;
