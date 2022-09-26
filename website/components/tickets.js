const TicketCard = () => {
  return (
    <div className="bg-navy/60 rounded-lg py-10 px-6 text-center">
      <h3 className="text-h4">General</h3>
      <h4 className="text-h4">($400)</h4>
      <p className="text-body2 py-6">The essential ticket for attending IPFS Camp 2022. This is for everyone!</p>
      <a className="text-body1 block rounded-lg border border-orange-400 p-2" href="#">Purchase General Ticket</a>
    </div>
  )
}

export default function Tickets({ config }) {
  return (
    <div className="relative w-full px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" style={{"background": "rgb(224,22,51)", "background": "linear-gradient(45deg, rgba(224,22,51,1) 5%, rgba(241,130,0,1) 15%, rgba(246,165,0,1) 20%, rgba(89,217,202,1) 50%, rgba(0,169,229,1) 80%, #045d81 100%)"}}></div>
      </div>
      <div className="relative z-10 py-20 container max-w-6xl mx-auto lg:h-full text-white ">
        <h1 className="text-h1 mb-4">Tickets</h1>
        <p className="text-body-lg mb-20">All tickets include entry to the full 3-day event and breakfast, lunch, snacks, and dinner at the IPFS Camp venue.</p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </div>
  )
}