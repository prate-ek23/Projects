import NavBar from './AppNav';
import EventList from './EventList';
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
    </>
  );
}

export default Content;
