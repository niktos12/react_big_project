import React from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { WeeklyTop } from './components/WeeklyTop';
import { RecentViewed } from './components/RecendViewed';
import { TopCollection } from './components/TopCollection';
function App() {
  return (
    <div> 
      <Header />
      <Presentation/>
      <WeeklyTop/>
      <RecentViewed/>
      <TopCollection/>
    </div>
  );
}

export default App;
