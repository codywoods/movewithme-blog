import Footer from './components/footer/Footer'

import Home from './pages/Home'
import PostList from './components/postlist/PostList'
import TopBar from './components/topbar/TopBar'
import data from './data';

export default function App() {
  return (
    <div className='App'>
      <TopBar />
      <div className='appContent'>
        <Home />
      
      
        <main>
          <PostList posts={data} />
        </main>
        <Footer />
      </div>
    </div>
  );
};
