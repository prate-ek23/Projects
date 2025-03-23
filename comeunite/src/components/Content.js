import NavBar from './AppNav';
import EventList from './EventList';
import Footer from './Footer';
function Content() {
  const status = ['concluded', 'ongoing', 'upcoming'];

  return (
    <>
      <NavBar />
      <div className="displayContent">
        {status.map((st) => (
          <EventList status={st} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Content;
