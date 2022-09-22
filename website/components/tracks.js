const Track = () => { 
  return (
    <div className="flex gap-12">
      <div className="w-96">
        <p className="mb-2">28-29 Oct</p>
        <h4 className="text-xl text-teal-400 font-bold" >Content Routing</h4>
      </div>
      <div className="">
        <p>Approaches and protocols to content routing in IPFS, what we've learned  so far, and talks about possible directions for the future... Details → </p>
      </div>
    </div>
  )
}

export default function Tracks({ config }) {
  const events = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="relative text-white w-full px-6 my-20">
      <div className="container max-w-6xl mx-auto lg:h-full">

        {/* <div className="absolute right-1/2 left-0 top-0 bottom-0">
          <img className="absolute h-full right-20" src="./about-collage.jpg" />
        </div> */}
        <h1 className="text-5xl font-bold mb-8">Tracks</h1>
        <div>
          <div className="h-full w-px bg-white absolute left-1/2 opacity-20"></div>
          <div className="grid grid-cols-2 gap-24 p-16">
            {events.map((event) => {
              return (
                <Track />
              )
            })}
          </div>
        </div>
        <a href="#" className="border mx-auto">Propose a Track</a>

      </div>
    </div>
  )
}