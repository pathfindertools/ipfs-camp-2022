export default function About({ config }) {
  return (
    <div className="relative text-white w-full px-6 my-20">
      <div className="container max-w-6xl mx-auto lg:h-full">
        <div className="absolute right-1/2 left-0 top-0 bottom-0">
          <img className="absolute h-full right-20" src="./about-collage.jpg" />
        </div>
        <div className="relative w-1/2 min-h-xl ml-auto py-48">
          <h1>What to expect</h1>
          <p>This unique experience is designed to bring together 150 pioneers in the Distributed Web space and is an opportunity to develop your ideas and learn from the IPFS core team and community.</p>
          <p>Curabitur blandit tempus porttitor. Curabitur bladit tempus porttitor. Duis mollis, est non commodo luct us, nisi erat porttitor ligula, eget lacinia odio snec elit. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
      </div>
    </div>
  )
}