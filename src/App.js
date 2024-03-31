import './App.css';
import Header from './components/Header';
import InterviewAccord from './components/InterviewAccord';
import questions from './helper/data';

function App() {
  return (
    <div className="App">
      <Header/>
      <InterviewAccord questions={questions}/>
    </div>
  );
}

export default App;
