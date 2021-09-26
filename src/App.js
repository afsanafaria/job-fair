import Company from "./components/Company/Company";
import Header from "./components/Header/Header";
import './App.css'

function App() {

  return (
    <>
      <div className="App" >
        <Header />
      </div>
      <div className="company">
        <Company />
      </div>

      {/* <button onMouseOver={MouseOver} onMouseOut={MouseOut}>Hover over me!</button> */}

    </>
  );
}

export default App;
