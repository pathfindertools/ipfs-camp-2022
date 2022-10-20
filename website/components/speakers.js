const Speaker = ({ name, image, company, twitterProfile }) => {
  return (
    <div className="mb-4 lg:mb-16">
      <div className="relative w-full mb-4" style={{ paddingTop: "120%"}} >
        <div
          className="absolute -top-[3px] -bottom-[3px] -left-[3px] -right-[3px]"
          style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", "background": "rgb(224,22,51)", "background": "linear-gradient(270deg, rgba(224,22,51,1) 0%, rgba(241,130,0,1) 25%, rgba(246,165,0,1) 35%, rgba(89,217,202,1) 50%, rgba(0,169,229,1) 100%)"}}
        />
        <div className="absolute inset-0" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}>
          <img src={`./${image}`} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-body-lg text-white">
          {twitterProfile ? (<a className="" href={`https://twitter.com/${twitterProfile}`}>{name}</a>) : name}
          </h3>
        <p className="text-body1 text-navy">{company}</p>
      </div>
    </div>
  )
}

const SpeakerButton = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <div className="relative w-full" style={{ paddingTop: "120%"}} >
        <svg className="absolute inset-0" viewBox="0 0 202 244" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 62.0139V181.986L101 242L201 181.986V62.0139L101 2L1 62.0139Z" stroke="#13506F" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-center">
          <svg className="inline-block" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0782 26.9741C21.2092 26.9741 26.9901 21.1933 26.9901 14.0623C26.9901 6.93123 21.2092 1.15039 14.0782 1.15039C6.94716 1.15039 1.16632 6.93123 1.16632 14.0623C1.16632 21.1933 6.94716 26.9741 14.0782 26.9741Z" stroke="#13506F" strokeWidth="1.5" strokeMiterlimit="10"/>
            <path d="M14.0782 7.75537V20.3731" stroke="#13506F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.389 14.0625H7.7713" stroke="#13506F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-navy">Apply to speak</p>
        </div>
      </div>
    </a>
  )
}

export default function Speakers({ config }) {
  return (
    <div id="speakers" className="relative w-full px-6 pt-24 lg:px-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" style={{"background": "rgb(224,22,51)", "background": "linear-gradient(225deg, rgba(224,22,51,1) 5%, rgba(241,130,0,1) 15%, rgba(246,165,0,1) 20%, rgba(89,217,202,1) 50%, rgba(0,169,229,1) 80%, #045d81 100%)"}}></div>
        <img src="./speakers-ornament-top.svg" width="884" className="absolute -top-32 left-1/2" />
      </div>
      <div className="relative z-10 container max-w-7xl mx-auto lg:h-full text-white">
        <h1 className="text-h1 mb-4">Speakers &amp; Facilitators</h1>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 lg:p-16">
        {config.speakers.map((speaker, i) => {
            return (
              <Speaker name={speaker.name} image={speaker.image} company={speaker.company} twitterProfile={speaker.twitterProfile} key={i} />
            )
          })}
          { config.devent.speakLink && <SpeakerButton link={config.devent.speakLink} /> }
        </div>
      </div>
    </div>
  )
}