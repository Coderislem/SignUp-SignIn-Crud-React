
import "./App.css";

import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
 

  return (
    <div>

 <Header/>
    <div className="container" style={{width:'60%'}}>
     <Form button="register"url={`/register`} hostLocation='/' windowLocation={true}/>
    </div>
    </div>
  );
}

export default App;
