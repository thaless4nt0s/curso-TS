import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
// 4 - Importacao de components
import FirstComponent from './components/FirstComponent';
// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
// 6 - UseState
import State from './components/State';
import Context from './components/Context';

// 1 - Variáveis
const name: string = "Thales";
const age: number = 30;
const isWorking: boolean = true;

// 2 - Funções
const userGreeting = (nome: string): string =>{
  return (
    `Olá, ${nome}`
  );
}

// 8 - Types
type textOrNull = string | null;
const myText : textOrNull = "Algum texto aq";
let mySecondText: textOrNull = null;
//mySecondText = "Opa";

type fixed = "isso" | "ou" | "aquilo";

const fixado:fixed = "ou"; 

// 9 - context


interface IAppContext{
  language: string,
  framework: string,
  projects: number

}

export const AppContext = createContext<IAppContext | null> (null)

function App() {
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React !!!!</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando !</p>}

        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>

        <SecondComponent name="Segundo"/>

        <Destructuring title="Primeiro post" content='Alguma coisa'
          commentsQty={15} tags={['typescript', 'javascript']}
          category={Category.JS}
        />
        <Destructuring title="Segundo Post" content='Alguma outra coisa'
          commentsQty={36} tags={['HTML', 'CSS']}
          category={Category.P}
        />
        <hr/>
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}

        {/** 10 Utilizando contexto */}
        <Context />

      </div>
      
    </AppContext.Provider>
  );
}

export default App;
