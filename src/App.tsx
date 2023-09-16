import React from 'react'
import './App.css'
import img from './assets/react.svg';
// import * as SetUtil from './util/set.ts';
import versionCompare from './util/version-compare.ts';
function App() {
  console.log('版本比较：123.23.5 / 1.23', versionCompare('13.23.5', '22.23'))
  return (
    <img src={ img } alt=""/>
  )
}

export default App
