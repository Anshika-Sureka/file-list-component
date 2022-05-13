import logo from './logo.svg';
import './App.css';
import FileListComponent from './components/file-list-component';

function App() {
  return (
    <div className="app">
      <header className="app-header">
      List of Files
      </header>
      <div className="app-container">
      
        <FileListComponent/>
      </div>
    </div>
  );
}

export default App;
