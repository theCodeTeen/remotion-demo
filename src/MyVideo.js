// src/MyVideo.js
import React from 'react';
import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const MyVideo = ({name}) => {
  return (
    <HelloWorld name={name}/>
  );
};
