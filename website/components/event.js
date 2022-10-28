import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Modal, Button } from 'flowbite-react'
import dayjs from 'dayjs'
import classNames from 'classnames'

import Markdown from './markdown'

export function Card({ children, color, onClick }) {
  return (
    <div
      className={classNames(
        'eventcard',
        'p-0.5 shadow-md h-full whitespace-normal',
      )}
      onClick={onClick}
    >
      <div
        className={classNames('rounded-lg block p-3 lg:p-6 h-full')}
        style={{
          background: 'rgb(2,34,50)',
          background:
            'linear-gradient(0deg, rgba(2,34,50,.85) 0%, rgba(7,58,83,.85) 100%)',
        }}
      >
        <div className="text-body1 text-white">{children}</div>
      </div>
    </div>
  )
}

// hover:ml-1 hover:-mr-1 hover:mt-1 hover:-mb-1
export function EventCard({ event }) {
  const isWorkInProgress = event.tags?.some((el) => el.toLowerCase() === 'wip')

  return (
    <EventModal event={event}>
      <div
        className={classNames('w-full', 'h-full', 'overflow-hidden', {
          'opacity-70': isWorkInProgress,
        })}
      >
        {event.timeslots ? (
          <TrackCard event={event} />
        ) : (
          <BlockCard event={event} />
        )}
      </div>
    </EventModal>
  )
}

function BlockCard({ event }) {
  return (
    <Card color={event.color}>
      <h5 className="text-h5 mb-4">{event.name}</h5>
      <div className="track-card text-body1 mb-4">
        {event.times}
        {event.venueName && <Markdown>{`${event.venueName}`}</Markdown>}
      </div>
      <div className="text-body1 mb-4">
        👤 {event.attendees} - {event.difficulty}
      </div>
      {event.dri && <div className="text-body1 mb-4">{event.dri}</div>}
      <div className="text-body1 mb-4">{event.org}</div>
      <div className="event-tags">
        {event.tags.map((tag, i) => tag && <Tag key={i}>{tag}</Tag>)}
      </div>
    </Card>
  )
}

function TrackCard({ event }) {
  return (
    <Card color={event.color}>
      <h5 className="text-h5 mb-4">{event.name}</h5>
      <div className="track-card text-body1 line-he mb-4">
        {event.times}
        {event.venueName && <Markdown>{`${event.venueName}`}</Markdown>}
      </div>
      <div className="text-body1 mb-4">
        👤 {event.attendees} - {event.difficulty}
      </div>
      {event.dri && <div className="text-body1 mb-4">{event.dri}</div>}
      <div className=" text-white text-sm mt-3 text-ellipsis overflow-hidden">
        {event.org}
      </div>

      <div className="event-tags">
        {event.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </div>
    </Card>
  )
}

export function BlankCard() {
  return (
    <Card onClick={() => window && window.showAddEventModal()}>
      <div className="place-content-center w-full m-0 py-5 text-center text-gray-300 hover:text-gray-500">
        <div className="text-6xl">+</div>
        <div className="text-xl font-bold">Add your event</div>
      </div>
    </Card>
  )
}

/**
 * @see https://github.com/ipfs-shipyard/ipfs-thing-2022/issues/125
 */
function getLocationHash() {
  if (typeof window !== 'undefined') {
    return window.location.hash
  }
}

/**
 * @see https://github.com/ipfs-shipyard/ipfs-thing-2022/issues/125
 */
function setLocationHash(hash) {
  if (typeof window !== 'undefined') {
    if (history?.pushState) {
      history.pushState(null, null, hash)
    } else {
      window.location.hash = hash
    }
  }
}

export function EventModal({ children, event }) {
  let defaultOpenState = false
  if (getLocationHash() === event.hash) {
    defaultOpenState = true
  }
  const [openModal, setOpenModal] = useState(defaultOpenState)
  const open = () => {
    if (getLocationHash() !== event.hash) {
      setLocationHash(event.hash)
    }
    setOpenModal(true)
  }
  const close = () => {
    if (getLocationHash() === event.hash) {
      setLocationHash('#')
    }
    setOpenModal(false)
  }
  const isOpen = () => openModal === true

  const [hashChangeEventRegistered, setHashChangeEventRegistered] =
    useState(false)
  if (typeof window !== 'undefined' && !hashChangeEventRegistered) {
    window.addEventListener('hashchange', (hashChangeEvent) => {
      const oldUrlHash = new URL(hashChangeEvent.oldURL).hash
      const newUrlHash = new URL(hashChangeEvent.newURL).hash
      if (newUrlHash === event.hash) {
        open()
      } else if (oldUrlHash === event.hash) {
        close()
      }
    })
    setHashChangeEventRegistered(true)
  }

  bindKey('Escape', close)

  return (
    <>
      <div className="h-full w-full" onClick={open}>
        {children}
      </div>
      <Modal show={isOpen()} onClose={close} size="3xl">
        <div
          className="rounded-lg text-white"
          style={{
            background: 'rgb(2,34,50)',
            background:
              'linear-gradient(0deg, rgba(2,34,50,1) 0%, rgba(7,58,83,1) 100%)',
          }}
        >
          <div class="relative flex justify-between items-start p-6 pb-4 rounded-t">
            <div className="absolute bottom-0 h-px left-6 right-6 bg-white/20" />
            <h3 class="text-h5 text-white">{event.name}</h3>
            <button
              onClick={close}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <Modal.Body className="rounded-b space-y-6 overflow-y-scroll max-h-[90vh] pb-6">
            <ul className="list-disc ml-4">
              <li>
                <b>Date</b>: {dateStr(event.date, event.days)}
              </li>
              <li>
                <b>Times</b>: {event.times}
              </li>
              {event.venueName && (
                <li>
                  <b>Room</b>:{' '}
                  <span className="venue-name inline-block">
                    <Markdown>{event.venueName}</Markdown>
                  </span>
                </li>
              )}
              <li>
                <b>Attendees</b>: {event.attendees} {event.difficulty}
              </li>
            </ul>
            <div className="event-tags">
              {event.tags.map((tag, i) => tag && <Tag key={i}>{tag}</Tag>)}
            </div>
            <p className="text-base text-white leading-relaxed prose">
              <Markdown>{event.description}</Markdown>
            </p>
            {event.timeslots && <TimeslotTable timeslots={event.timeslots} />}
          </Modal.Body>
          {/* <div class="flex items-center p-6 space-x-2 rounded-b">
            {event.website &&
              <Link href={event.website} prefetch={false} target="_blank">
                <a target="_blank" rel="noreferrer"><Button>Website</Button></a>
              </Link>
            }
            <Button color="alternative" onClick={close}>Close</Button>
          </div> */}
        </div>
      </Modal>
    </>
  )
}

function TimeslotTable({ timeslots }) {
  return (
    <div>
      <h4 className="py-3 text-sm text-white">Schedule</h4>
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs text-gray-700 uppercase text-white">
          <tr className="border-b border-white/20">
            <th scope="col" className="px-2 md:px-6 py-3">
              time
            </th>
            <th scope="col" className="px-2 md:px-6 py-3">
              speaker
            </th>
            <th scope="col" className="px-2 md:px-6 py-3">
              info
            </th>
          </tr>
        </thead>
        <tbody>
          {timeslots.map((timeslot, i) => (
            <tr key={i} className="even:bg-cyan-900">
              <th
                scope="row"
                className="px-2 md:px-6 py-2 font-medium text-white align-top whitespace-nowrap"
              >
                {timeslot.startTime}
              </th>
              <td className="px-2 md:px-6 py-2 align-top">
                {timeslot.speakers && timeslot.speakers.join(', ')}
              </td>
              <td className="px-2 md:px-6 py-2">
                <span className="font-bold">{timeslot.title}</span>
                <br />
                <p>
                  <Markdown>{timeslot.description}</Markdown>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function AddEventModal({ config }) {
  const [openModal, setOpenModal] = useState(false)
  const open = () => setOpenModal(true)
  const close = () => setOpenModal(false)
  const isOpen = () => openModal === true

  // add opener to window.
  if (typeof window !== 'undefined') {
    window.showAddEventModal = open
  }

  bindKey('Escape', close)

  return (
    <>
      <Modal show={isOpen()} onClose={close}>
        <div
          className="rounded-lg text-white"
          style={{
            background: 'rgb(2,34,50)',
            background:
              'linear-gradient(0deg, rgba(2,34,50,1) 0%, rgba(7,58,83,1) 100%)',
          }}
        >
          <div className="dark:bg-gray-400">
            <Modal.Header>
              <span className="text-white">Add your event</span>
            </Modal.Header>
            <Modal.Body className="space-y-6">
              The event listings in this website are coordinated through GitHub.
              Steps to list your event:
              <ol className="list-decimal ml-4 mt-3">
                <li>
                  <b>Step 1</b>: Read & file a pull-request in this repo: <br />
                  <a
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href={config.devent.repo}
                    target="_blank"
                  >
                    {config.devent.repo}
                  </a>
                </li>
                <li>
                  <b>Step 2</b>: Address any comments until your PR is merged.
                </li>
                <li>
                  <b>Step 3</b>: Blastoff! ⭐️💙
                </li>
              </ol>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  )
}

export function Tag({ children }) {
  const bgColors = {
    talks: 'bg-cyan-500',
    panels: 'bg-orange-400',
    panel: 'bg-orange-400',
    demos: 'bg-yellow-400',
    'job-fair': 'bg-sky-500',
    unconference: 'bg-teal-500',
    workshops: 'bg-violet-400',
  }
  const category = slugify(children)
  return (
    <div
      className={`inline-block px-4 py-1 mr-2 my-1 text-navy rounded-full text-body1 ${
        bgColors[category] || 'bg-green-400'
      }`}
    >
      <span className="relative top-0.5">{children}</span>
    </div>
  )
}

function bindKey(bindKey, handler) {
  const kHandler = ({ key }) => {
    if (key === bindKey) handler()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', kHandler)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', kHandler)
      }
    }
  }, [])
}

function dateStr(date, days) {
  const d1 = dayjs(date)

  if (days === 1) {
    return d1.format('MMM DD')
  }

  const d2 = d1.add(days - 1, 'day')
  return d1.format('MMM DD') + ' - ' + d2.format('MMM DD')
}

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default EventCard
