import { AddEventModal } from "./event"

const Track = ({name, date, description, link}) => {
  return (
    <div className="flex gap-4 lg:gap-12 flex-col lg:flex-row">
      <div className="lg:w-1/3">
        <p className="text-body1 mb-2">{date}</p>
        <h4 className="text-h5 text-teal-400" >{name}</h4>
      </div>
      <div className="lg:w-2/3 text-body1">
        <p>{description} <a className="text-yellow-400" href="./#schedule">Details&nbsp;→</a> </p>
      </div>
    </div>
  )
}

export default function Tracks({ config, events }) {
  const tracks = config.tracks
  return (
    <div id="tracks" className="relative w-full py-20">
      <div className="absolute inset-0 overflow-hidden">
        <img src="./tracks-ornament-top.svg" width="716" className="absolute top-0 left-1/2 transform translate-x-40"  />
        <img src="./tracks-ornament-bottom.svg" width="907" className="absolute bottom-0 right-1/2 transform -translate-x-96"  />
      </div>
      <div className="relative z-20 container max-w-6xl mx-auto lg:h-full text-white">
        <h1 className="text-h1 mb-8">{config.tracksSection.title}</h1>
        <div className="relative">
          <div className="h-full w-px bg-white absolute left-1/2 opacity-20 hidden lg:block"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:p-10 lg:gap-24 lg:mb-20">
            {events.map((track, i)  => {
              return (
                <Track name={track.name} date={track.date} description={track.description} link="" key={i} />
              )
            })}
          </div>
        </div>
        {config.tracksSection.proposeLink &&
          <div className="text-center">
            <a onClick={() => window && window.showAddEventModal()} className="mx-auto inline-block h-10 py-2 px-6 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-500">{config.tracksSection.proposeLabel || "Propose a Track"}</a>
          </div>
        }
      </div>
    </div>
  )
}