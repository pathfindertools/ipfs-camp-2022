// import { Accordion } from 'flowbite-react'
import Accordian from './accordian'
import Markdown from './markdown'


function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function FAQ({ config }) {
  const faq = (config.faq) || {}
  const title = "FAQ"

  return (
    <div className={`w-full p-6 lg:p-20 min-h-[10vh]`} id={ slugify(title) }>
      <div className='container max-w-6xl mx-auto text-white'>
        <div className="container max-w-6xl mx-auto py-10">
          <h1 className="text-h1 mb-8">{title}</h1>
          <Accordian items={faq}></Accordian>
        </div>
      </div>
    </div>
  )
}
