const Track = () => { 
  return (
    <div className="flex gap-12">
      <div className="w-96">
        <p className="text-body1 mb-2">28-29 Oct</p>
        <h4 className="text-h5 text-teal-400" >Content Routing</h4>
      </div>
      <div className="text-body1">
        <p>Approaches and protocols to content routing in IPFS, what we've learned  so far, and talks about possible directions for the future... Details → </p>
      </div>
    </div>
  )
}

export default function Tracks({ config }) {
  const events = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="relative w-full px-6 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <img src="./tracks-ornament-top.svg" width="716" className="absolute top-0 left-1/2 transform translate-x-40"  />
        <img src="./tracks-ornament-bottom.svg" width="907" className="absolute bottom-0 right-1/2 transform -translate-x-96"  />
      </div>
      {/* <div className="absolute left-1/2 left-0 top-0 bottom-0">
      </div> */}
      <div className="container max-w-6xl mx-auto lg:h-full text-white">

        <h1 className="text-h1 mb-8">Tracks</h1>
        <div className="relative">
          <div className="h-full w-px bg-white absolute left-1/2 opacity-20 hidden lg:block"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 p-16 gap-24 p-16">
            {events.map((event, i) => {
              return (
                <Track key={i} />
              )
            })}
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="mx-auto inline-block h-10 py-2 px-6 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-500">Propose a Track</a>
        </div>

      </div>
    </div>
  )
}