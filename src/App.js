import './App.css';
import Counter from './Componenet/Counter';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch()
  return (
    <div  style={{}}>
    
   <Counter /> 
    
    </div>
  );
}

export default App;
