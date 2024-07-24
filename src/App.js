// src/index.js
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Player } from "@remotion/player";
import {MyVideo} from './MyVideo';

const App = () => {
  const [name,setName] = useState("");
  const playerRef = useRef();

  const onInputValueChange = (e)=>{
    setName(e?.target?.value);
  }
  const onSubmitAndPlayHandler = (e)=>{
    playerRef.current.play();
  }
  return (
    <div style={{padding: '20px'}}>
      <h1>Remotion demo for </h1>
      <div style={{display:"flex",marginBottom:"50px",cursor:"pointer"}}><input type='text' placeholder='Peter Wang' onChange={onInputValueChange} style={{height:"30px", fontSize:"25px"}}/><div onClick={onSubmitAndPlayHandler} style={{height:"30px", padding:"3px 10px",fontSize:"16px",backgroundColor:"black",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>Submit and Play</div></div>
      <Player
        component={MyVideo}
        durationInFrames={90}
        compositionWidth={900}
        compositionHeight={500}
        fps={30}
        inputProps={{name}}
        ref={playerRef}
      />
    </div>
  );
};

export default App;

