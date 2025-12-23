import { useState } from "react";
import"./App.css";
function App(){
  const [input,setlnput]=useState("");
  const [history,setHistory]= useState([]);
  const handleClick =(value) => {
    setlnput(input + value);
  };
  const clearlnput = ()=>{
    setlnput("");
  };
  const calculateResult =()=>{
    try{
      const result = eval(input);
      setHistory([...history,`${input}=${result}`]);
        setlnput(result.toString());
    }catch{
      setlnput("Error");
    }
  };
  return(
    <div className="calculator">
      <h2>React calculator</h2>
      <input type="text" value={input}
      readOnly/> 
      <div className="buttons">
        {["7","8","9","/",
          "4","5","6","*",
          "1","2","3","-",
          "0",".","+"
        ].map((btn)=>(
          <button key={btn} onClick={()=> 
             handleClick(btn)
          }>{btn}</button>
        ))}
        <button className="equal" onClick={calculateResult}>=</button>
        <button className="clear" onClick={clearlnput}>c</button>
      </div>
      <div className="history">
        <h3>History</h3>
        {history.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
      </div>
        </div>
  );
     }
     export default App;
     
    