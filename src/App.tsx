import './index.css'
import logo from './assets/Logo.png'
import hero from './assets/hero.jpg'
import check1 from './assets/Google.png'
import check2 from './assets/Vector.png'
import check3 from './assets/spot.png'
import check4 from './assets/mail.png'
import check5 from './assets/air.png'
import check6 from './assets/uber.png'
import feature from './assets/features.jpg'
import feature2 from './assets/features-2.png'
import svg1 from './assets/book.svg'
import svg2 from './assets/people.svg'
import svg3 from './assets/cart.svg'
import svg4 from './assets/earth.svg'
import quote from './assets/quote.svg'
import { useState } from 'react'

function App() {

  const [state, setState] = useState(true)

  return (
    <div>
      <div className='w-full px-20 max-w-7xl mx-auto'>
        <div className='flex items-center justify-between py-6'>
          <div className='flex gap-x-8 items-center'>
            <img src={logo}/>
            <div className='text-base font-medium text-gray-900'>Company</div>
            <div className='text-base font-medium text-gray-900'>Marketplace</div>
            <div className='text-base font-medium text-gray-900'>Features</div>
            <div className='text-base font-medium text-gray-900'>Team</div>
            <div className='text-base font-medium text-gray-900'>Contact</div>
          </div>
          <div>
            <button type='button' className='text-sm font-medium text-gray-900 mr-4'>Log In</button>
            <button type='button' className='text-sm font-medium text-white py-2 px-3 bg-purple-600 rounded-lg'>Get started</button>
          </div>
        </div>
        <div className='py-16 flex items-center gap-x-3'>
          <div className='flex flex-col'>
            <p className='leading-none text-6xl font-black mb-6'>Building digital products & brands.</p>
            <p className='text-xl font-normal text-gray-500 mb-10'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className='flex'>
              <button type='button' className='text-sm font-medium text-white px-5 py-3 bg-purple-600 rounded-lg mr-4'>Start 30 day free trial</button>
              <button type='button' className='text-sm font-medium text-gray-900 border border-gray-200 px-5 py-3 bg-transparent rounded-lg'>Pricing & FAQ</button>
            </div>
          </div>
          <div>
            <img src={hero} className=''/>
          </div>
        </div>
        <div className='pb-24 flex justify-between'>
          <div>
            <img src={check1}/>
          </div>
          <div>
            <img src={check2}/>
          </div>
          <div>
            <img src={check3}/>
          </div>
          <div>
            <img src={check4}/>
          </div>
          <div>
            <img src={check5}/>
          </div>
          <div>
            <img src={check6}/>
          </div>
        </div>
        <div className='py-24 flex flex-col gap-y-20'>
          <div className='flex items-center gap-x-16'>
            <div className='flex flex-col'>
              <p className='leading-tight text-4xl font-extrabold text-gray-900 mb-4'>Work with tools you already use</p>
              <p className='text-xl font-normal text-gray-500 mb-8'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
              <div className='pt-8'>
                <div className='flex gap-x-2 items-center'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Continuous integration and deployment</span></div>
                <div className='flex gap-x-2 items-center mt-4'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Development workflow</span></div>
                <div className='flex gap-x-2 items-center mt-4'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Knowledge management</span></div>
              </div>
              <p className='mt-6 text-xl font-normal text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
            <div className='shrink-0'><img src={feature}/></div>
          </div>
          <div className='flex items-center gap-x-16'>
            <div className='shrink-0'><img src={feature2}/></div>
            <div className='flex flex-col'>
              <p className='leading-tight text-4xl font-extrabold text-gray-900 mb-4'>We invest in the world’s potential</p>
              <p className='text-xl font-normal text-gray-500 mb-8'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
              <div className='pt-8'>
                <div className='flex gap-x-2 items-center'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Dynamic reports and dashboards</span></div>
                <div className='flex gap-x-2 items-center mt-4'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Templates for everyone</span></div>
                <div className='flex gap-x-2 items-center mt-4'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Development workflow</span></div>
                <div className='flex gap-x-2 items-center mt-4'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Limitless business automation</span></div>
                <div className='flex gap-x-2 items-center mt-4'><div className='w-4 h-4 rounded-full bg-purple-600' /><span className='text-base font-medium'>Knowledge management</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-24 flex gap-x-24'>
          <div className='flex flex-col'>
            <p className='leading-none text-lg font-medium text-purple-600'>Trusted Worldwide</p>
            <p className='leading-tight text-4xl font-extrabold text-gray-900 mb-4 mt-3'>Trusted by over 600 million users and 10,000 teams</p>
            <p className='text-xl font-light text-gray-500'>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
            <p className='leading-none text-base font-medium text-purple-600 mb-4 mt-10'>Explore Legality Guide</p>
            <p className='leading-none text-base font-medium text-purple-600'>Visit the Trust Center</p>
          </div>
          <div className='flex gap-8 flex-wrap'>
            <div className='flex flex-col w-[calc(50%-18px)]'>
              <img src={svg1} width={48} height={48}/>
              <p className='leading-tight text-2xl font-bold mt-4 mb-2 text-gray-900'>99.99% uptime</p>
              <span className='text-base font-light text-gray-500'>for Flowbite, with zero maintenance downtime</span>
            </div>
            <div className='flex flex-col w-[calc(50%-18px)]'>
              <img src={svg2} width={48} height={48}/>
              <p className='leading-tight text-2xl font-bold mt-4 mb-2 text-gray-900'>600M+ Users</p>
              <span className='text-base font-light text-gray-500'>trusted by over 600 milion users around the world</span>
            </div>
            <div className='flex flex-col w-[calc(50%-18px)]'>
              <img src={svg3} width={48} height={48}/>
              <p className='leading-tight text-2xl font-bold mt-4 mb-2 text-gray-900'>Millions</p>
              <span className='text-base font-light text-gray-500'>of transactions per day</span>
            </div>
            <div className='flex flex-col w-[calc(50%-18px)]'>
              <img src={svg4} width={48} height={48}/>
              <p className='leading-tight text-2xl font-bold mt-4 mb-2 text-gray-900'>100+ countries</p>
              <span className='text-base font-light text-gray-500'>have used Flowbite to create functional websites</span>
            </div>
          </div>
        </div>
        <div className='py-24 flex flex-col gap-y-6 items-center'>
          <div>
            <img src={quote}/>
          </div>
          <p className='leading-relaxed text-2xl font-bold text-gray-900 text-center px-64'>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          <p className='leading-tight text-base font-semibold text-gray-900'>Micheal Gough  / <span className='text-sm font-normal text-gray-500'>CEO at Google</span></p>
        </div>
        <div className='py-24 flex flex-col items-center'>
          <p className='leading-tight text-4xl font-extrabold'>Pay as you grow</p>
          <p className='text-xl font-normal text-gray-500 text-center px-64'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <div className='flex gap-x-10 mt-12'>
            <div className='p-8 flex flex-col items-center w-full'>
              <p className='text-2xl font-semibold text-gray-900'>Starter</p>
              <p className='text-lg font-normal text-gray-500 mt-4 mb-8 text-center'>Great for personal use and for your side projects.</p>
              <p className='leading-none text-5xl font-extrabold text-gray-900'>$49 <span className='text-lg font-medium text-gray-500'>/month</span></p>
              <div className='my-8 self-start'>
                <p className='text-base font-normal text-gray-900'>Individual configuration</p>
                <p className='text-base font-normal text-gray-900'>No setup, monthly, or hidden fees</p>
                <p className='text-base font-normal text-gray-900'>Team size: 1 developer</p>
                <p className='text-base font-normal text-gray-900'>Premium support: 6 months</p>
                <p className='text-base font-normal text-gray-900'>Free updates: 6 months</p>
              </div>
              <button type='button' className='w-full text-sm font-medium text-white py-2.5 bg-purple-600 rounded-lg'>Get started</button>
            </div>
            <div className='p-8 flex flex-col items-center w-full'>
              <p className='text-2xl font-semibold text-gray-900'>Company</p>
              <p className='text-lg font-normal text-gray-500 mt-4 mb-8 text-center'>Best for large scale uses and extended redistribution rights.</p>
              <p className='leading-none text-5xl font-extrabold text-gray-900'>$99 <span className='text-lg font-medium text-gray-500'>/month</span></p>
              <div className='my-8 self-start'>
                <p className='text-base font-normal text-gray-900'>Individual configuration</p>
                <p className='text-base font-normal text-gray-900'>No setup, monthly, or hidden fees</p>
                <p className='text-base font-normal text-gray-900'>Team size: 1 developer</p>
                <p className='text-base font-normal text-gray-900'>Premium support: 6 months</p>
                <p className='text-base font-normal text-gray-900'>Free updates: 6 months</p>
              </div>
              <button type='button' className='w-full text-sm font-medium text-white py-2.5 bg-purple-600 rounded-lg'>Get started</button>
            </div>
            <div className='p-8 flex flex-col items-center w-full'>
              <p className='text-2xl font-semibold text-gray-900'>Enterprise</p>
              <p className='text-lg font-normal text-gray-500 mt-4 mb-8 text-center'>Best for large scale uses and extended redistribution rights.</p>
              <p className='leading-none text-5xl font-extrabold text-gray-900'>$499 <span className='text-lg font-medium text-gray-500'>/month</span></p>
              <div className='my-8 self-start'>
                <p className='text-base font-normal text-gray-900'>Individual configuration</p>
                <p className='text-base font-normal text-gray-900'>No setup, monthly, or hidden fees</p>
                <p className='text-base font-normal text-gray-900'>Team size: 1 developer</p>
                <p className='text-base font-normal text-gray-900'>Premium support: 6 months</p>
                <p className='text-base font-normal text-gray-900'>Free updates: 6 months</p>
              </div>
              <button type='button' className='w-full text-sm font-medium text-white py-2.5 bg-purple-600 rounded-lg'>Get started</button>
            </div>
          </div>
        </div>
        <div className='pb-24 flex flex-col items-center'>
          <p className='leading-tight text-4xl font-extrabold text-gray-900 pb-8'>Frequently asked questions</p>
          <div className='mx-72'>
            <div>
              <p className='leading-none text-lg font-medium text-gray-900 py-6' onClick={() => setState(!state)}>Can I use FlowBite in open-source projects?</p>
              <div className={`h-0 text-gray-500 text-base font-normal transition-all overflow-hidden ${state ? 'h-fit' : ''}`}>
                <div>
                  Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. With that being said, feel free to use this design kit for your open-source projects. Find out more information by reading the license.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-24 flex flex-col items-center'>
          <p className='leading-tight text-4xl font-extrabold text-gray-900 mb-6'>Start your free trial today</p>
          <p className='text-xl font-normal text-gray-500 mb-6'>Try Flowbite Platform for 30 days. No credit card required.</p>
          <button className='py-3 px-5 bg-purple-600 rounded-lg text-base font-medium text-white'>Free trial for 30 days</button>
        </div>
      </div>
    </div>
  )
}

export default App
