import { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
    msg:message,
    type: type
  })
  setTimeout(() => {  
    setalert(null);
  }, 3000);
}

  const togglemode=()=>{
    if(mode==='light'){
      showalert("  dark mode enabled", "success");
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      document.title = 'TextUtils - dark mode';
      // setInterval(()=>{
      //   document.title = 'amazing'
      // },2000);
      // setInterval(()=>{
      //   document.title = 'zong zong'
      // },1000);
    }
    else{
      showalert("  light mode enabled", "success");

      setmode('light');
      document.body.style.backgroundColor='white';
      document.title = 'TextUtils - light mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="textutils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
          <TextForm showalert={showalert} heading="enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;






// import { useState } from 'react';
// // import { Routes, Route } from 'react-router-dom';

// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// // import { BrowserRouter as Router } from 'react-router-dom';

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       showAlert('Dark mode enabled', 'success');
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       document.title = 'TextUtils - Dark Mode';
//     } else {
//       showAlert('Light mode enabled', 'success');
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.title = 'TextUtils - Light Mode';
//     }
//   };

//   return (
//     <>
//       {/* <Router> */}
//         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           {/* <Routes> */}
//             {/* <Route exact path="/about" element={<About />} /> */}
//             {/* <Route exact path="/" element={ */}
//               <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
//               {/* } /> */}
//           {/* </Routes> */}
//         </div>
//       {/* </Router> */}
//     </>
//   );
// }

// export default App;
