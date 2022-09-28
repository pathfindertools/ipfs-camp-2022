import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

export function Layout({ children, config }) {
  return (
    <div className="flex flex-col min-h-screen bg-navy">
      <Head>
        <title>{config.devent.name}</title>
        <BaseScript />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KS6XFW3');`,
          }}
        />
      </Head>
      {/* Google Tag Manager */}
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-KS6XFW3`} height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe>
      </noscript>

      <Header config={config} />

      <div className="flex-none items-center min-h-full w-full">
        <main className="content">
            {children}
        </main>
      </div>

      <Footer config={config} />
    </div>
  )
}

export function Section({ title, className, children }) {
  className = className || ""
  return (
    <div className={`w-full p-6 lg:px-20 lg:py-10 min-h-[10vh] ${className}`} id={ slugify(title) }>
      <div className="container max-w-7xl mx-auto pb-10">
        <h1 className="text-3xl text-center font-bold">
          {title}
        </h1>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

const ipfsBaseScript = `
(function () {
  const { pathname } = window.location
  const ipfsMatch = /.*\\/\\w{40,100}\\//.exec(pathname)
  const base = document.createElement('base')

  base.href = ipfsMatch ? ipfsMatch[0] : '/'
  document.head.append(base)
})();
`

export function BaseScript() {
  return (
    <script dangerouslySetInnerHTML={{__html: ipfsBaseScript}} />
  )
}

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default Layout
