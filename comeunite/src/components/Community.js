import NavBar from './AppNav';
import DiscussionForum from './DiscussionForum';
import Footer from './Footer';

function Community() {
  return (
    // Navigate to discussion forum
    <>
      <NavBar />

      <div>
        <p>Community</p>
        <p>Join the DiscussionForum</p>

        <DiscussionForum />
        <Footer />
      </div>
    </>
  );
}

export default Community;
