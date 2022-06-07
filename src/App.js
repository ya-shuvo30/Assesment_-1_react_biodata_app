
import './App.css';
import BioData from './components/BioData';
import Works from './components/latestWork'
// import { Component } from 'react/cjs/react.production.min';




function App() {
  return (
    <div className="App">

      <BioData 
        name = "Shuvo"
        email = "shuvo@gmail.com"
        mobile = "01851257710"
        github = "github/shuvo"
        linkedIn = "shuvo"
        skills = {["Js", "node", "react"]}
        interests = {["Sprinbg", "Go"]}
        demo = {{title: "demo title"}}
      />

      <hr />

      <BioData 
        name = "Yeasin Arafat"
        email = "123yeasinarafat@gmail.com"
        mobile = "0151257710"
        github = "github/yeasinarafat"
        linkedIn = "yeasinarafat"
        skills = {["Js", "python", "react", "django"]}
        interests = {["api", "backend", "django"]}
        demo = {{title: "BSC in CS"}}
      />

    <BioData 
        name = "Raihain"
        email = "srsetu@gmail.com"
        mobile = "0143545454534574"
        github = "github/srsetu"
        linkedIn = "srsetu"
        skills = {["Js", "node", "react", "php"]}
        interests = {["Sprinbg", "Go", "laravel"]}
        demo = {{title: "demo title"}}
      />  
    </div>
  );
}

function Apps() {
  return (
    <div className="Apps">

      <Works 
        name = "Shuvo"
        email = "shuvo@gmail.com"
        mobile = "01851257710"
        github = "github/shuvo"
        linkedIn = "shuvo"
        skills = {["Js", "node", "react"]}
        interests = {["Sprinbg", "Go"]}
        demo = {{title: "demo title"}}
      />

      <hr />

      
    </div>
  );
}


export default App;
