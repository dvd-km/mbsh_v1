import logo from './mock_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mbsh is a collection of work in collaboration between Ji and David.</h1>
        <p>Ji is a multidisciplinary graphic designer and interactive enthusiast.</p>
        <p>David likes to code.</p>
        <p>Here are some projects we’ve made together:</p>

        <ul>
          <li>Vis-a-thon</li>
          <li>Oral traditions</li>
          <li>Many sceneries</li>
          <li>Perspective reading</li>
          <li>Learning machine learning</li>
          <li>Signal processor</li>
        </ul>

      </header>
    </div>
  );
}

export default App;
