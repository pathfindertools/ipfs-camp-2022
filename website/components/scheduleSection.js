import { useRef, useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { BlankCard } from './event.js'

import { ScheduleTable } from "./scheduletable.js"
import { AddEventModal } from "./event.js"
import Markdown from './markdown.js'
import annotateEvents from '../lib/annotateEvents.js'

export default function ScheduleSection({ events, config }) {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo(860, 0);
    }
  });

  return (
    <article>
      <div className='relative w-full py-20 min-h-[10vh] text-white' id='schedule'>
        <div className="absolute inset-0 overflow-hidden">
          <img src="./schedule-ornament-top.svg" width="991" className="absolute top-10 left-1/2 transform -translate-x-10" />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto max-w-6xl pb-10 px-6 lg:px-0">
            <header>
              <h1 className="text-4xl font-bold block">Schedule</h1>
              {config.schedule?.description && <Markdown>{config.schedule.description}</Markdown>}
            </header>
            <ScrollContainer innerRef={scrollContainer} className="scroll-container py-10 mx-auto max-w-6xl">
              <div className="flex-none min-h-full w-full">
                <div className="content">
                  <ScheduleTable events={annotateEvents(events, config)} config={config} />
                </div>
              </div>
            </ScrollContainer>
            <BlankCard />
          </div>
          <AddEventModal config={config} />
        </div>
      </div>
    </article>
  )
}
