import './styles/App.scss';
import Header from './components/header';
import StarWarsPeople from './containers/starWarsPeople';

function App() {
  return (
    <div className="App">
        <Header />
        <StarWarsPeople />
    </div>
  );
}

export default App;
