import Fetch from './components/Fetch';
import Display from './components/Display';
import Button from './components/Button';
import fetchTodos from './components/Fetch';

import './styles/App.css';

function App() {

return (
<div>
  <Fetch/>
  <Display/>
  <Button msg={fetchTodos}/>

</div>

)
}

export default App;
