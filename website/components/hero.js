import dayjs from 'dayjs'
import Markdown from './markdown'
import Button from './button'

const Lockup = (props) => {
  return (
    <img src={props.logo} className='mr-auto my-10 lg:my-20 h-16 lg:h-24'/>
  )
}

export default function Hero({ config }) {
  return (
    <div className="relative text-white w-full px-6 lg:px-10 min-h-[70vh] lg:flex lg:items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" style={{"background": "rgb(224,22,51)", "background": "linear-gradient(225deg, rgba(224,22,51,1) 5%, rgba(241,130,0,1) 15%, rgba(246,165,0,1) 20%, rgba(89,217,202,1) 50%, rgba(0,169,229,1) 80%, #045d81 100%)"}}></div>
        <img className="absolute left-1/2 transform translate-x-20 mix-blend-color-burn" width="830" height="823" src="./hero-ornament.svg" />
      </div>
      <div className="container max-w-7xl mx-auto lg:h-full">



        <div className="relative w-full pt-10 pb-8 lg:pb-28 lg:pt-12">
          <div className="relative z-1 mx-auto min-h-full lg:ml-0 flex flex-col gap-y-3">
            <Lockup name={config.devent.name} logo={config.devent.logo} tagline={config.devent.tagline} />
            <div className='lg:basis-1/3 mb-5'>
              {/* <div className="text-2xl">
                {dateRangeStr(config.devent.dateStart, config.devent.dateEnd)}{config.devent.location && ` • ${config.devent.location}`}
              </div> */}
              <div className="text-h2 mb-8 lg:w-3/4">
                {config.devent.tagline}
              </div>
              <div className="text-body-lg lg:w-3/4">
                <Markdown >{config.devent.description}</Markdown>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 mt-16">
                {config.devent.youtubePlaylist &&
                  <Button href={config.devent.youtubePlaylist} target="_blank">Watch the Talks</Button>
                }
                {config.devent.recapBlog &&
                  <Button href={config.devent.blogRecap} target="_blank">Read the Recap</Button>
                }
                {config.devent.speakLink &&
                  <Button href={config.devent.speakLink} target="_blank" variation="outline">Apply to Speak</Button>
                }
                {config.devent.rsvpLink &&
                  <Button href={config.devent.rsvpLink} target="_blank">Get Updates</Button>
                }
                {config.devent.recapLink &&
                  <Button href={config.devent.recapLink} target="_blank">Recap</Button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function dateRangeStr(startDate, endDate) {
  const start = dayjs(startDate)
  const end = dayjs(endDate)
  if (dayjs(start).year() != dayjs(end).year()) {
    return start.format('YYYY MMMM D - ') + end.format('YYYY MMMM D')
  } else if (dayjs(start).month() != dayjs(end).month()) {
    return start.format('YYYY MMMM D - ') + end.format('MMMM D')
  } else {
    return start.format('YYYY MMMM D - ') + end.format('D')
  }
}
