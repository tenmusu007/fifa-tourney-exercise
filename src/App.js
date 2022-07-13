import './App.css';
import MatchList from './components/MatchList';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className='App'>
      <h1>Fifa Tourney</h1>
      <main>
        <PlayersList />
        <MatchList />
      </main>
    </div>
  );
}

export default App;
