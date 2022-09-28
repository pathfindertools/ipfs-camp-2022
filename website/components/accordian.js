import { useState } from 'react'
import Markdown from './markdown'

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}


const AccordianItem = ({question, answer}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="border-b border-cyan-400 first:border-t-0 last:border-b-0">
      <div className="relative p-4 pb-3 cursor-pointer" onClick={() => setActive(!active)}>
        <h4 className="text-body1 lg:text-body-lg">{question}</h4>
        <div className={`absolute right-5 top-5 ${active ? 'opacity-10 transform rotate-180' : ''}`}>
          <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.92265 0.551269L7.5125 0.551269C7.04245 0.551269 6.78934 0.804374 6.78934 1.27442L6.78934 13.3873L2.48657 9.66303C2.16115 9.37377 1.76341 9.37377 1.47415 9.73535L0.64252 10.7839C0.353258 11.1455 0.389415 11.4709 0.750993 11.7963L7.5125 17.7624C7.7656 17.9793 7.91023 18.0878 8.1995 18.0878C8.56107 18.0878 8.63339 17.9793 8.8865 17.7624L15.6842 11.7963C16.0457 11.4709 16.0819 11.1455 15.7926 10.7839L14.961 9.73535C14.6717 9.33761 14.274 9.33761 13.9124 9.62687L9.64581 13.3511L9.64581 1.27442C9.64581 0.804374 9.3927 0.551269 8.92265 0.551269Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div className={`text-body1 lg:text-body-lg p-4 pt-0 border-cyan-400 ${active ? '' : 'hidden'}`}>
        <Markdown>{answer}</Markdown>
      </div>
    </div>
  )
}

export default function Accordian({items}) {

  return (
    <div className={`rounded-xl bg-navy-light border border-cyan-400`}>
      <div className='container max-w-7xl mx-auto text-white'>
        {Object.keys(items).map((item, i) => (
          <AccordianItem question={item} answer={items[item]} key={i} />
        ))}
      </div>
    </div>
  )
}
