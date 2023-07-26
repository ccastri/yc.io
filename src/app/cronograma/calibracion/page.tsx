'use client'
import { DatePicker } from '@mui/x-date-pickers'
import {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import LanguageIcon from '@mui/icons-material/Language';


const Calibracion = () => {
   const [events, setEvents] = useState<any>([]);


    const handleSelect = (info:any) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start: start.toISOString(), // Convert to ISO string format
          end: end.toISOString(),
          title: eventNamePrompt,
          // id: uuid(),
        },
      ]);
    }
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

export default Calibracion