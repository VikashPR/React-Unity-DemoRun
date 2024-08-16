import logo from './logo.svg';
import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "UnityBuild/imaginary_7.16.1.loader.js",
    dataUrl: "UnityBuild/imaginary_7.16.1.data",
    frameworkUrl: "UnityBuild/imaginary_7.16.1.framework.js",
    codeUrl: "UnityBuild/imaginary_7.16.1.wasm",
  });

  return (
    <div className='unityContainer'>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}


export default App;
