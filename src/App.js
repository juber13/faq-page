import React , {useState} from 'react';
import Accordian from './components/Accoedian';
import './App.css'

function App() {
  const [data] = useState([
      {question : 'Why An FAQ Resource?' , answer : "Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved."},
      {question : 'Why FAQ Pages Are A Priority' , answer : "Your FAQ section should be seen as a constantly expanding source of value provided to your audience. It is a place where their ever-changing and growing requirements are not only met but anticipated and exceeded frequently."},
      {question : 'Why An FAQ Resource?' , answer : "Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved."},
      {question : 'Why An FAQ Resource?' , answer : "Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved."},
      {question : 'Why An FAQ Resource?' , answer : "Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved."},
    ])
  return (
      <div class="container" key="container_1">
        <h2>Frequently Asked Questions</h2>
         {data.map((item) => <Accordian data={item}/>)}
      </div>
    )
}

export default App;