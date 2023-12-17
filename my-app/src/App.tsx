import React from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { WeeklyTop } from './components/WeeklyTop';
import { RecentViewed } from './components/RecendViewed';
import { TopCollection } from './components/TopCollection';
import { Marketplace } from './components/Marketplace';
import { Collector } from './components/Collector';
import { Community } from './components/Community';
import { Faq } from './components/Faq';
import { CreateInvite } from './components/CreateInvite';
import { Footer } from './components/Footer';
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
      <Faq/>
      <CreateInvite/>
      <Footer/>
    </div>
  );
}

export default App;
