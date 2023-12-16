import React from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { WeeklyTop } from './components/WeeklyTop';
import { RecentViewed } from './components/RecendViewed';
import { TopCollection } from './components/TopCollection';
import { Marketplace } from './components/Marketplace';
import { Collector } from './components/Collector';
import { Community } from './components/Community';

function App() {
  return (
    <div> 
      <Header />
      <Presentation/>
      <WeeklyTop/>
      <RecentViewed/>
      <TopCollection/>
      <Marketplace/>
      <Collector/>
      <Community/>
    </div>
  );
}

export default App;
