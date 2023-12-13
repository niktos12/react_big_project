import React from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { WeeklyTop } from './components/WeeklyTop';
function App() {
  return (
    <div> 
      <Header />
      <Presentation/>
      <WeeklyTop/>
    </div>
  );
}

export default App;
