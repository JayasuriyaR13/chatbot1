
import './App.css';
import Chatbot from "./component/Chatbot";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './image/chat.jpg'
function App() {
return(

  <div>
 
    <div className="string">
      <img src={Chat} height={200} width={200} class="center" />
      <h1>welcome</h1>
      
      </div>
  <div>
  <Chatbot></Chatbot>
  </div>
    </div>
  
)
}

export default App;
