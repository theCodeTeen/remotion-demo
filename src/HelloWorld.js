// src/HelloWorld.js
import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const HelloWorld = ({name}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const springAnimation = spring({
    frame:(frame/5),
    fps,
    from: 0,
    to: 1,
  });

  return (
    <AbsoluteFill
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: frame<40?'red':'green',
        transition:"all 1.2s"
      }}
    >
      <h1
        style={{
          position:"absolute",
          fontSize: '5em',
          color:"white",
          opacity: ((frame<30?frame/30:1)),
          transform: `scale(${frame<30?(frame/30) * 1:1}) translateY(${frame>30?(frame<40?-(((frame/10)-3) * 50):-50):0}px`
        }}
      >
        Hello, {name}!
      </h1>
      <h1
        style={{
          fontSize: '5em',
          color:"white",
          position:"absolute",
          transform:`translateY(${frame<40?400:400-(((frame-40)/50)*350)}px)`
        }}
        >
        Let's Build Together
      </h1>
    </AbsoluteFill>
  );
};
