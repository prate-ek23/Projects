import NavBar from './AppNav';
import DiscussionForum from './DiscussionForum';

function Community() {
  return (
    // Navigate to discussion forum
    <>
      <NavBar />

      <div>
        <p>Community</p>
        <p>Join the DiscussionForum</p>

        <DiscussionForum />
      </div>
    </>
  );
}

export default Community;
