import Button from "./button";

const Track = ({name, date, description, days}) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const startDate = new Date(`${date} 00:00:00`)
  const day = startDate.getDate() || ''
  const month = startDate.getMonth()

  return (
    <div className="flex gap-4 lg:gap-8 flex-col lg:flex-row">
      <div className="lg:w-1/3">
        <p className="text-body1 mb-2">{day} {months[month]}</p>
        <h4 className="text-h5 text-teal-400" >{name}</h4>
      </div>
      <div className="lg:w-2/3 text-body1">
        <p>{description} <a className="text-yellow-400" href="./#schedule">Details&nbsp;→</a> </p>
      </div>
    </div>
  )
}

export default function Tracks({ config, events }) {
  const tracks = events.sort((a, b) => {
    return a.name - b.name
  })
  return (
    <div id="tracks" className="relative w-full p-6 lg:px-10 pt-20 pb-40">
      <div className="absolute inset-0 overflow-hidden">
        <img src="./tracks-ornament-top.svg" width="716" className="absolute top-0 left-1/2 transform translate-x-40"  />
        <img src="./tracks-ornament-bottom.svg" width="907" className="absolute bottom-0 right-1/2 transform -translate-x-96"  />
      </div>
      <div className="relative z-20 container max-w-7xl mx-auto lg:h-full text-white">
        <h1 className="text-h1 mb-8 lg:mb-32">{config.tracksSection.title}</h1>
        <div className="relative">
          <div className="h-full w-0.5 opacity-30 bg-blue-300 absolute left-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:p-10 lg:gap-20 mb-8">
            {tracks.map((track, i)  => {
              return (
                <Track name={track.name} date={track.date} description={track.description} days={track.days} key={i} />
              )
            })}
          </div>
        </div>
        {config.tracksSection.proposeLink &&
          <div className="text-center">
            <a onClick={() => window && window.showAddEventModal()} className="inline-flex text-h5 leading-10 rounded-lg px-6 lg:px-12 outline-none focus:outline-none text-white bg-gradient-to-tr from-blue-900 to-cyan-400 py-2 cursor-pointer">{config.tracksSection.proposeLabel || "Propose a Track"}</a>
          </div>
        }
      </div>
    </div>
  )
}