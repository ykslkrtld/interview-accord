import './App.css';
import Header from './components/Header';
import InterviewAccord from './components/InterviewAccord';
import questions from './helper/data';
import { arrowdown, arrowup } from './helper/icons';

function App() {
  return (
    <div className="App">
      <Header/>
      <InterviewAccord questions={questions} arrowdown={arrowdown} arrowup={arrowup}/>
    </div>
  );
}

export default App;
