import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 ">
        <div className="relative grid grid-cols-2 font-mono text-white border-8 rounded-lg shadow-2xl border-yellow-50 text-9xl">
          <div className="absolute inset-x-0 flex justify-center mx-auto -bottom-5">
            <div className="w-3/4 h-5 rounded shadow-lg bg-yellow-50"></div>
          </div>
          <div className="relative p-8 bg-gray-800">
            <div className="absolute inset-0 grid grid-rows-2 mr-px">
              <div className="bg-gradient-to-br from-gray-900 to-black"></div>
              <div className="bg-gradient-to-br from-gray-800 to-black"></div>
            </div>
            <span className="relative">05</span>
          </div>
          <div className="relative p-8 bg-gray-800">
            <div className="absolute inset-0 grid grid-rows-2 ml-px">
              <div className="bg-gradient-to-br from-gray-900 to-black"></div>
              <div className="bg-gradient-to-br from-gray-800 to-black"></div>
            </div>
            <span className="relative">47</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
