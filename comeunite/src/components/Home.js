import styled from 'styled-components';

import NavBar from './AppNav';
import Button from './Button';
import CommunityCard from './CommunityCard';
import Footer from './Footer';
import Header from './Header';

const ComContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  flex-direction: column;
  margin: 50px 180px;
`;

function Home() {
  const tags = ['tag1', 'tag2', 'tag3'];

  return (
    <div className="home">
      <NavBar />
      <Header />
      <ComContainer>
        <div
          style={{
            color: 'beige',
            fontSize: '25px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Join the community
        </div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '20px',
            flexDirection: 'row',
          }}
        >
          {[...Array(3)].map((_, index) => (
            <CommunityCard
              key={index}
              name="Community Name"
              about="Here ambitions meet vision"
              tags={tags}
              members={700}
              eventsCount={8}
            />
          ))}
        </div>

        <Button
          onClick={() => {
            alert('Going to communities page!');
          }}
        >
          See all Communities &rarr;
        </Button>
      </ComContainer>
      <Footer />
    </div>
  );
}

export default Home;
