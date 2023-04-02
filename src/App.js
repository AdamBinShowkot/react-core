import Clock from "./components/Clock";

function App() {
  const myArr=[1,2,3,4];
  return (
    <>
      {
        myArr.length?myArr.map((data)=>{
          return <Clock key={data}/>
        }):""
      }
    </>
  );
}

export default App;
