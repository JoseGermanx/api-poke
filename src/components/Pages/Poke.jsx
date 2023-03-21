import { useState } from "react";
import { POKE_URL } from "../../../config";
import Data from "../../Data/Data";
import Card from "../Cards/Card";
import Footer from "../Footer/Footer";

const Poke = () => {
  const [ url, setUrl ] = useState(POKE_URL);
  const state = Data(url);
  const { loading, data } = state;

  return (
    <div>
      {
        loading 
        ? 
        <h1>Loading...</h1> 
        : 
        <div>
          <Card results={data.results}/>
          <div className="container m-auto">
             <button onClick={() => setUrl(data.previous)} className="m-2 btn btn-dark">Previus</button>
             <button onClick={() => setUrl(data.next)} className="btn btn-dark">Next</button>
          </div>
        </div>
      }
    <Footer/>  
    </div>
  );
};

export default Poke;
