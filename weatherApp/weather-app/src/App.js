import './App.css';
import Container from './components/container/Container';
import { WeatherProvider } from './context/Weather';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;
