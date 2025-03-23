import styled from 'styled-components';
import Button from './Button';

const ComCard = styled.div`
  background-color: teal;
  /* justify-content: center; */
  /* align-content: center; */
  display: flex;
  flex-direction: column;
  /* align-self: baseline; */
  justify-self: center;
  width: 280px;
  height: 310px;
  padding: 5px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const CoverImg = styled.img`
  object-fit: cover;
  display: block;
  width: 100%; /* Make it span the entire width */
  height: 96px; /* Adjust height as needed */
  object-fit: cover; /* Ensures it covers the area */
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoContainer = styled.div`
  margin: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 60px; /* Adjust positioning */
  left: 20%;
  transform: translateX(-50%);
  background: white; /* Optional: Background for contrast */
  border: 3px solid white; /* Optional: Border to make it stand out */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Optional shadow */
`;

const Name = styled.span`
  margin: 130px 5px 2px 10px;
  font-size: 18px;
  color: beige;
  font-weight: bold;
`;

const About = styled.span`
  margin: 4px 8px;
  padding: 2px 5px;
  color: beige;
  font-size: 14px;
`;

const Members = styled.span`
  margin: 0px 5px 0px 0px;
  color: beige;
  padding: 2px 5px;
  font-size: 13px;
`;
const EventsCount = styled.span`
  margin: 0px 5px 0px 10px;
  padding: 2px 5px;
  font-size: 13px;
  color: beige;
`;

const InfoContainer = styled.div`
  display: flex; /* Use flexbox to align items side by side */
  flex-direction: row; /* Ensure items are in a row */
  justify-content: flex-start; /* Add space between Members and EventsCount */
  margin: 5px 10px; /* Adjust margin as needed */
`;

const Tag = styled.span`
  border-color: black;
  border-radius: 8px;
  background-color: beige;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  margin: 5px;
  padding: 5px 8px;
`;

const TagContainer = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 10px 5px;
`;

function CommunityCard({
  name = '',
  about = '',
  members = 0,
  eventsCount = 0,
  tags = [],
}) {
  return (
    <ComCard>
      <CoverImg src="/images/cover1.jpg" alt="cover image is shown" />

      <LogoContainer>
        <Logo src="/images/logo.jpg" alt="cover image is shown" />
      </LogoContainer>
      <Name>{name}</Name>
      <About>{about}</About>

      <InfoContainer>
        <Members>
          <i className="fa fa-users"></i> {Number(members)}
        </Members>
        <EventsCount>
          <i className="fa-solid fa-calendar"></i> {Number(eventsCount)}
        </EventsCount>
      </InfoContainer>

      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>

      <Button
        style={{
          width: '95%',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          margin: 'auto auto 10px auto',
        }}
        onClick={() => {
          alert('Joining the community');
        }}
      >
        + Join
      </Button>
    </ComCard>
  );
}

export default CommunityCard;
