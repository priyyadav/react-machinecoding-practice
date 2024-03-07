import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import  Child  from './components/Child';
import ClassComponet from './components/ClassComponet';
import { State } from './components/State';
import Ref from './components/Ref';
import Name from './components/Name';
import Result from './components/Result';
import Memo from './components/Memo';
import Call from './components/Call';
import Reducer from './components/Reducer';
import Counter from './components/Counter';
import Context from './components/Context';

import { CounterContext, CounterProvider } from './context/Counteri';


function App() {

  return (
    <div>
      {/* <Parent name="priyanka"></Parent>
      <Child
></Child>
<ClassComponet name="shalu"></ClassComponet>
<State></State>
<Ref></Ref> */}
{/* <Name name="priyanka"></Name>
<Result result={80}></Result> */}
{/* <Memo></Memo> */}
{/* <Call></Call> */}
{/* <Reducer></Reducer> */}

    </div>
  );
}

export default App;
