/*****  React Component & Props ****/



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM  from 'react-dom';


// function Clock({locale}){
//   return(
//     <h1 className='heading'>
//       <span>
//         Hello {new Date().toLocaleTimeString(locale)}
//       </span>
//     </h1>
//   )
// }

class Clock{
  print(){
    return(
      <h1 className='heading'>
        <span>
          Hello {new Date().toLocaleTimeString()}
        </span>
      </h1>
    )
  }
}

class Clocks extends React.Component{
  render(){
    return(
      <h1 className='heading'>
        <span>
          Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    )
  }
}

// ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));
// const ClockComponent=new Clock();
// ReactDOM.render(ClockComponent.print(),document.getElementById('root'));
ReactDOM.render(<Clocks locale='bn-BD'>
  Test
</Clocks>,document.getElementById('root'));