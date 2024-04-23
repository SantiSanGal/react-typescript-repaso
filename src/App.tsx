import { Counter } from "./components/Counter";
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';

function App() {
  return (
    <div>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
    </div>
  );
}

export default App;
