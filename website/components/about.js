export default function About({ config }) {
  return (
    <div className="relative text-white w-full px-6 my-20">
      <div className="container max-w-6xl mx-auto lg:h-full">
        <div className="absolute right-1/2 left-0 top-0 bottom-0">
          <img className="absolute h-full right-20" src="./about-collage.jpg" />
        </div>
        <div className="relative w-1/2 min-h-xl ml-auto py-48">
          <h1 className="text-4xl mb-8">What to expect</h1>
          <p className="text-lg mb-8">Set in the colorful and inspiring city of Lisbon, this unique experience is designed to bring together hundreds of pioneers in the Distributed Web space.</p>
          <p  className="text-lg">100+ talks, dozens of hands-on workshops and problem-solving sessions, and plenty of space for hacking and serendipity. It’s an opportunity to learn from the IPFS core team and community, and discover how you can use or contribute to IPFS to build a better web.</p>
        </div>
      </div>
    </div>
  )
}