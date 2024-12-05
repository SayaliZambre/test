import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-gray-800">
        <h1 className="text-4xl py-8 mb-10 text-center">MoneyMap</h1>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
          <div className="chart-container bg-purple text-white p-6 rounded shadow-md">
          <Form />
          </div>

       
          <div className="form-container bg-gray-800 text-white p-6 rounded shadow-md">
           <Graph/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
