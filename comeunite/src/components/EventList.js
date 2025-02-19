import { Carousel } from 'react-responsive-carousel';

const eventData = [
  {
    name: 'Fest',
    code: 'EVT001',
    start: '23-Oct-2023',
    end: '28-Oct-2023',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    ],
  },
  {
    name: 'Tech Expo',
    code: 'EVT002',
    start: '15-Nov-2023',
    end: '18-Nov-2023',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1556761175-129418cb2dfe',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    ],
  },
  {
    name: 'Hackathon',
    code: 'EVT003',
    start: '05-Dec-2023',
    end: '07-Dec-2023',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    ],
  },
  {
    name: 'Cultural Night',
    code: 'EVT004',
    start: '12-Jan-2024',
    end: '12-Jan-2024',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1485579149621-3123dd979885',
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
    ],
  },
  {
    name: 'Startup Meet',
    code: 'EVT005',
    start: '20-Feb-2024',
    end: '22-Feb-2024',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83',
    ],
  },
  {
    name: 'AI Conference',
    code: 'EVT006',
    start: '05-Mar-2024',
    end: '07-Mar-2024',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1556761175-129418cb2dfe',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    ],
  },
  {
    name: 'Web Dev Bootcamp',
    code: 'EVT007',
    start: '18-Mar-2024',
    end: '25-Mar-2024',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    ],
  },
  {
    name: 'Cyber Security Summit',
    code: 'EVT008',
    start: '02-Apr-2024',
    end: '04-Apr-2024',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1598032896581-57965e14e7c4',
      'https://images.unsplash.com/photo-1610546826995-59268db1fb59',
    ],
  },
  {
    name: 'Blockchain Meetup',
    code: 'EVT009',
    start: '10-May-2024',
    end: '11-May-2024',
    status: 'concluded',
    images: [
      'https://images.unsplash.com/photo-1532635241-17e820acc59b',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    ],
  },
  {
    name: 'AI Hackathon',
    code: 'EVT010',
    start: '20-May-2024',
    end: '22-May-2024',
    status: 'ongoing',
    images: [
      'https://images.unsplash.com/photo-1581092335155-87886a05427a',
      'https://images.unsplash.com/photo-1532634876-5a755ddcb3d5',
    ],
  },
  {
    name: 'Gaming Tournament',
    code: 'EVT011',
    start: '18-Sep-2024',
    end: '20-Sep-2024',
    status: 'ongoing',
    images: [
      'https://images.unsplash.com/photo-1598032896581-57965e14e7c4',
      'https://images.unsplash.com/photo-1610546826995-59268db1fb59',
    ],
  },
  {
    name: 'Music Fest',
    code: 'EVT012',
    start: '12-Oct-2024',
    end: '14-Oct-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      'https://images.unsplash.com/photo-1561489396-e09fc2b6c717',
    ],
  },
  {
    name: 'Photography Expo',
    code: 'EVT013',
    start: '28-Oct-2024',
    end: '30-Oct-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1532635241-17e820acc59b',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    ],
  },
  {
    name: 'Film Festival',
    code: 'EVT014',
    start: '10-Nov-2024',
    end: '12-Nov-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83',
    ],
  },
  {
    name: 'E-Sports Championship',
    code: 'EVT015',
    start: '15-Nov-2024',
    end: '17-Nov-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1598032896581-57965e14e7c4',
      'https://images.unsplash.com/photo-1610546826995-59268db1fb59',
    ],
  },
  {
    name: 'Fashion Show',
    code: 'EVT016',
    start: '01-Dec-2024',
    end: '03-Dec-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    ],
  },
  {
    name: 'Robotics Workshop',
    code: 'EVT017',
    start: '05-Dec-2024',
    end: '07-Dec-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    ],
  },
  {
    name: 'Literary Fest',
    code: 'EVT018',
    start: '12-Dec-2024',
    end: '14-Dec-2024',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83',
    ],
  },
  {
    name: 'New Year Bash',
    code: 'EVT019',
    start: '31-Dec-2024',
    end: '01-Jan-2025',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      'https://images.unsplash.com/photo-1561489396-e09fc2b6c717',
    ],
  },
];

export default function EventList({ status }) {
  // first display the past events along with photos
  // current ongoing events
  // upcoming events

  // do above things based on status

  // return (
  //   <Carousel
  //     centerMode={true}
  //     infiniteLoop={true}
  //     autoPlay={true}
  //     useKeyboardArrows={true}
  //     width={30}
  //   >
  //     <div>
  //       <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" />
  //       <p>IMAGE</p>
  //     </div>
  //     <div>
  //       <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" />
  //       <p>IMAGE</p>
  //     </div>
  //     <div>
  //       <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" />
  //       <p>IMAGE</p>
  //     </div>

  //   </Carousel>
  // );

  return (
    <>
    <div className="listContainer">
      <ul className="eventList">
        {eventData.map(
          (event) =>
            event.status === status && (
              <Event
                name={event.name}
                start={event.start}
                end={event.end}
                images={event.images}
                status={event.status}
                key={event.code}
                />
              )
            )}
      </ul>
    </div>
            </>
  );
}

function Event({ name, start, end, status, images }) {
  return (
    <li>
      <div className="eventCard">
        <span>Name: {name}</span>
        <span>Start: {start}</span>
        <span>End: {end}</span>
        <span>Status: {status}</span>
      </div>
    </li>
  );
}
