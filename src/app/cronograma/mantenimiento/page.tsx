'use client'
import { DatePicker } from '@mui/x-date-pickers'
import {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import LanguageIcon from '@mui/icons-material/Language';


const Mantenimiento = () => {
   const [events, setEvents] = useState<any>([]);



  const handleSelect = (info: any) => {
    const { start, end } = info;

    // Get the event name from the user
    const eventNamePrompt = prompt('Enter event name:');
    if (!eventNamePrompt) return;

    // Get the time from the user
    const timePrompt = prompt('Enter event time (e.g., 08:30 AM):');
    if (!timePrompt) return;

    // Convert the time to a valid format for start and end times
    const [hours, minutes, meridiem] = (timePrompt.match(/\d+|AM|PM/g) || []).map((match) =>
      isNaN(parseInt(match, 10)) ? match : parseInt(match, 10)
    );

    let hour = typeof hours === 'number' ? hours : 0;
    if (meridiem === 'PM' && hour !== 12) {
      hour += 12;
    } else if (meridiem === 'AM' && hour === 12) {
      hour = 0;
    }

    // Adjust start and end times to local timezone
    const localStart = new Date(start.setHours(hour, typeof minutes === 'number' ? minutes : 0, 0));
    const localEnd = new Date(localStart); // Copy the localStart to avoid modifying it directly
    localEnd.setMinutes(localEnd.getMinutes() + 60);

    setEvents([
      ...events,
      {
        start: localStart.toISOString(),
        end: localEnd.toISOString(),
        title: eventNamePrompt,
      },
    ]);

    // Set the slotMinTime for the FullCalendar
    // You can store the timeFormatted in a state variable and pass it directly here
    // const calendarApi = info.view.calendar;
    // calendarApi.setOption('slotMinTime', timeFormatted);
  };
  return (
    // <main>

    <div className='flexh-full mt-12 border-2 border-green-500 w-full ' >
      {/* <DatePicker/> */}
      <div
        className='w-full p-4 bg-[#FDF7E9] border-2 border-blue-500'>

      <FullCalendar
      editable
        selectable
        events={events}
        select={handleSelect}
        eventColor= '#378006'
        eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
            hour12: true,
          }}
      headerToolbar={{
    start: "today prev next",
    center: 'title',
    end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[dayGridPlugin, interactionPlugin ]}
        // views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        initialView="dayGridMonth"
        
        // events={[
        //   { title: 'event 1', date: '2023-07-05' },
        //   { title: 'event 2', date: '2019-04-02' }
        // ]}
        />
        </div>
    </div>
    // </main>
  )
}

export default Mantenimiento