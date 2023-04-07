import './App.css';
import Dispaly from './Componenet/Display';
import Registration from './Componenet/Registration';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch()
  return (
    <div  style={{}}>
    
   <Registration /> 
   <Dispaly/> 
    </div>
  );
}

export default App;
