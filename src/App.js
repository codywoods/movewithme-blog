import Footer from './components/footer/Footer'
/*import Header from './components/header/Header'*/
import PostList from './components/postlist/PostList'
import TopBar from './components/topbar/TopBar'
import data from './data';

export default function App() {
  return (
    <div className='App'>
      <TopBar />
      
      
      <main>
        <PostList posts={data} />
      </main>
      <Footer />
    </div>
  );
};
