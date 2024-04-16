import React from 'react'
import daikelogo from '../assets/daikelogo.png';
import gapics from '../assets/gapics.png';
import team from '../assets/team.png';
import writecode from '../assets/writecode.png';
import flyer from '../assets/flyer.png';



import { ImageCom } from './ImageCon';
import { Link } from 'react-router-dom';



export const About = () => {
  return (
    <div className="flex flex-col items-center  bg-white">
      <div className="hidden md:flex gap-5 justify-between pr-10 pl-10 lg:pl-40 pb-10 pt-5 w-full text-black max-w-[1723px] max-md:flex-wrap max-md:max-w-full">
        <Link to={'/'}>
          <div className="flex items-center gap-0 text-2xl max-md:flex-wrap">
            <img
              loading="lazy"
              src={daikelogo}
              className="w-18 h-10 max-w-full"
            />
            <div className="flex-auto my-auto text-sm">DAIKESGLOBAL BUSINESS</div>
          </div>
        </Link>
        <div className="flex gap-5 justify-between items-center self-start px-px text-sm max-md:flex-wrap max-md:max-w-full">
          <div className=" my-auto">Sign in</div>
          <div className=" my-auto">Sign up</div>
          <div className=" my-auto">Market Place</div>
          <div className=" my-auto">About Us</div>
          <div className=" my-auto">Contact Us</div>
          <div className="flex flex-col justify-center self-stretch text-2xl whitespace-nowrap text-neutral-700">
            <div className="flex gap-2.5 px-8 py-3 text-sm text-blue-500 rounded-2xl bg-zinc-100 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e17e75e9765f3f6c1b7d6e4dcf6a065703d882eeed7f7d1459e48f87f20aaee1?"
                className="shrink-0 aspect-square fill-blue-500 w-[15px]"
              />
              <div>Search</div>
            </div>
          </div>
        </div>
      </div>

      <section>
            <div className="flex md:hidden mt-10  items-center max-md:flex-wrap">
              <Link to={'/'} className='flex'>
              <img
                loading="lazy"
                src={daikelogo}
                alt='daike logo'
                className=" w-18 h-10 max-w-full"
              />
                <div className="flex-auto my-auto text-sm">DAIKESGLOBAL BUSINESS</div>
              </Link>
            </div>

              <section className='flex md:hidden flex-col pr-40 pl-10 pb-10 pt-5 w-full  rounded-bl-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full'>
              <div className="flex gap-5  flex-wrap items-center w-full text-sm  text-black max-md:flex-wrap max-md:max-w-full">
                  <div className="self-stretch my-auto px-3 py-2 text-sm text-blue-500 rounded-2xl bg-zinc-100">Sign in</div>
                  <div className="self-stretch my-auto">Sign up</div>
                  <div className="self-stretch my-auto ">Market Place</div>
                  <div className="self-stretch my-auto">
                    <Link to={'about'}>About Us</Link>
                    
                    </div>
                  <div className="self-stretch my-auto">Contact Us</div>
                  <div className="flex gap-2.5 self-stretch px-8 py-3 text-sm text-blue-500 whitespace-nowrap rounded-2xl bg-zinc-100 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e17e75e9765f3f6c1b7d6e4dcf6a065703d882eeed7f7d1459e48f87f20aaee1?"
                      className="shrink-0 aspect-square fill-blue-500 w-[15px]"
                    />
                    <div>Search</div>
                  </div>
                </div>

               

                
            </section>
          </section>
     
     <div className='lg:w-[50%]'>
        <section>
          <div className="mt-20 text-2xl p-2 font-bold tracking-wide text-center leading-[48.96px] text-neutral-700 max-md:mt-10 max-md:max-w-full">
            GENERAL BUSINESS ACTIVITIES
          </div>

          <div className="mt-10 text-center p-2 tracking-wide text-black max-md:max-w-full">
            Daikesglobal Business is a cooperate and professional company founded
            2018 with cooperate affairs registration. The company is established to
            provide tech solutions, innovations and entrepreneurial services to global
            business sphere in marketing, engineering and software industries. We are
            well empowered with a group of excellent and skilled professionals. We
            utilized the best brains and creative minds within the scopes of our
            services. Our badge is known for quality service
          </div>

          <div className='hidden lg:block' style={{position: "absolute", left: "60px", top: "380px"}}>
            <ImageCom img={gapics} />
          </div>
        </section>

        <section>
          <div className=" mt-10 text-2xl p-2 font-bold tracking-wide text-center leading-[48.96px] text-neutral-700">
            MISSION
          </div>

          <div className="mt-10  p-2 tracking-wide  max-md:mt-10 max-md:max-w-full">
            {/* We аre аn аgenсy thаt believe in the роwer оf digitаl tо trаnsfоrm yоur
            business. Whether it be а new website, mаrketing саmраign оr рrоduсtivity
            imрrоving sоftwаre, digitаl саn trаnsfоrm аnd grоw yоur business. */}

            <ol>
              <li>
                To provide professional delivery of technology solutions to global business sphere in marketing, Engineering and software industries.
              </li>
              <li className='mt-4'>
              To employ the best human and technological resources in providing the best of services to our clients without compromising quality and standard.
              </li>
              <li className='mt-4'>
                To lead the way in different areas, such as governance; sustainability and environmental conservation and set a good example for other companies to follow
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl p-2 font-bold tracking-wide text-center leading-[48.96px] text-neutral-700">
            VISION
          </div>

          <div className="mt-10 text-center p-2 tracking-wide  max-md:mt-10 max-md:max-w-full">
          Our aim is to build a digital continent with the largest market size and work size where 80% of human activities can be done digitally.
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl p-2 font-bold tracking-wide text-center leading-[48.96px] text-neutral-700">
            GOAL
          </div>
          
          <div className="mt-10 text-center p-2 tracking-wide  max-md:mt-10 max-md:max-w-full">
            To develop a strong base to all customers and build a good reputation in
            the world of technology. becoming a key player in the business.
          </div>

          <div className='hidden lg:block' style={{position: "absolute", right: "60px", top: "1080px"}}>
            <ImageCom img={writecode} />
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl p-2 font-bold tracking-wide text-center leading-[48.96px] text-neutral-700 max-md:mt-10">
            CORE VALUE
          </div>

          <div className="mt-10 text-center p-2  tracking-wide text-black  max-md:mt-10 max-md:max-w-full">
            As a top class company we believe in serving and satisfying our customer.
            We integrate honesty, integrity and business ethics into all aspect of our
            business functioning.
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl font-bold p-2 tracking-wide text-center leading-[48.96px] text-neutral-700 max-md:mt-10">
            ENTREPRENEURSHIP
          </div>

          <div className="mt-10 text-center tracking-wide p-2 text-black  max-md:mt-10 max-md:max-w-full">
            We constantly seek and develop new business ideas, employing the best
            method to retain our market leadership.
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl font-bold p-2 tracking-wide text-center leading-[48.96px] text-neutral-700 max-md:mt-10">
            LEADERSHIP
          </div>

          <div className="text-center max-md:max-w-full p-2">
            We thrive on being a pace setter in our business markets and communities.
            To accelerate this, we focus on constant improvement, partnership and
            professionalism.
          </div>

          <div className='hidden lg:block' style={{position: "absolute", left: "60px", top: "1680px"}}>
            <ImageCom img={team} />
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl font-bold p-2 tracking-wide text-center leading-[48.96px] text-neutral-700 max-md:mt-10">
            EXCELLENCE
          </div>

          <div className="text-center max-md:max-w-full p-2">
            We are coorporate firm knitted together to deliver quality products and
            services to our valuable customer and stake holder and to achieve this we
            demonstrate team work and respect.
          </div>
        </section>

        <section>
          <div className="mt-10 text-2xl font-bold tracking-wide p-2 text-center leading-[48.96px] text-neutral-700 max-md:mt-10">
          SAFETY POLICY
          </div>

          <div className="text-center max-md:max-w-full p-2">
            The Company  believes that  accident is preventable and this will Comply with  international, national, state, local and recognize industrial safety  laws. The management accepts responsibility for providing a safe working  environment and well spelt out accident prevention procedure at each  site.
          </div>
        </section>

        <section>
          <div className=" mt-10 text-2xl font-bold tracking-wide p-2 text-center leading-[48.96px] text-neutral-700 max-md:mt-10">
          SCOPE OF WORK
          </div>

          <div className="max-md:max-w-full text-center p-2">
          Our scope of work encompassed all areas of our services. We provide expertise and process monitoring to the final execution of any project. We also carry out other functionalities like project planning, project control,  and project management during our job execution. <br />

          <br /><p className='text-lg'>Below are the list of our services.</p>
          <br />
          <ul>

          <li>
            Software development and vulnerability analysis.
          </li><br />
          <li>
          Electrical wiring system( Design and installation)
          </li>
          <br />

          <li>
            Solar System
          </li>
          <br />

          <li>
            Python development
          </li>
          <br />
          <li>
          Project research works.
          </li>
          <br />

          <li>
          Cctv and access door control system.
          </li>
          <br />
          </ul>

          </div>
        </section>

        <section className='mb-20'>
        
        </section>
     </div>

    </div>
  )
}
