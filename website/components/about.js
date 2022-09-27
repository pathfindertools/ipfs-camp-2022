export default function About({ config }) {
  return (
    <div id="about" className="relative text-white w-full px-6 my-40">
      <div className="container max-w-6xl mx-auto lg:h-full">
        <div className="absolute right-1/2 left-0 top-0 bottom-0">
          <img className="absolute h-full w-auto right-20 object-cover" src="./about-collage.jpg" />
        </div>
        <div className="relative w-1/2 min-h-xl ml-auto py-24">
          <h1 className="text-h1 mb-8">What to expect</h1>
          <div className="text-body-lg">
            <p className="mb-8">Set in the colorful and inspiring city of Lisbon, this unique experience is designed to bring together hundreds of pioneers in the Distributed Web space.</p>
            <p>100+ talks, dozens of hands-on workshops and problem-solving sessions, and plenty of space for hacking and serendipity. It’s an opportunity to learn from the IPFS core team and community, and discover how you can use or contribute to IPFS to build a better web.</p>
          </div>
        </div>
      </div>
    </div>
  )
}