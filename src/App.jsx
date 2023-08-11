import Homepage from './components/pages/Homepage';
import { createSignal } from 'solid-js';
import "./App.less";
import { Route, Routes } from '@solidjs/router';
import HowItWorks from './components/pages/HowItWorks';
function App() {
  return (
    <Routes>
      <Route path={"/"} element={Homepage}></Route>
      <Route path={"/howitworks"} element={HowItWorks}></Route>
    </Routes>
  );
}

export default App;
