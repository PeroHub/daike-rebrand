import { useState } from 'react'
import daikelogo from './assets/daikelogo.png';
import gapics from './assets/gapics.png';
import team from './assets/team.png';
import code from './assets/code.png';
import woman from './assets/woman.png';
import project from './assets/project.png';
import dashboard from './assets/dashboard.png';
import gallery from './assets/gallery.png';
import { Outlet, Link } from "react-router-dom";
import { ImageCom } from './components/ImageCon';

import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar';
// import './App.css'

// function ImageCom({img}) {
//   return (
//     <>
//       <img
//           loading="lazy"
//           src={img}
//           className="shrink-0 max-w-full aspect-square w-[200px]"
//         />
//     </>
//   )
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{overflowX: "hidden"}}>
        <header className='flex' style={{overflowX: "hidden"}}>
          <section className='pr-10 pl-40 pb-10 pt-5 hidden md:block'>
            <div className="flex  items-center max-md:flex-wrap">
              <img
                loading="lazy"
                src={daikelogo}
                alt='daike logo'
                className=" w-18 h-10 max-w-full"
              />
              <div className="flex-auto my-auto text-sm">DAIKESGLOBAL BUSINESS</div>
            </div>

            <div className="mt-20 text-3xl font-bold tracking-wide leading-[45px] text-neutral-700  max-md:text-4xl max-md:leading-[60px]">
              Best technology hub
              <br />
              that offers training & corporate <br />
              services!
            </div>

            <div className="mt-5  max-md:max-w-full">
              Professional delivery of technology solutions to global businesses sphere in marketing, Engineering and software industries.
            </div>
          </section>

          <section className='hidden xl:flex  flex-col  pl-10 pb-10 pt-5 w-full  rounded-bl-3xl max-md:px-5  max-md:mt-10 max-md:max-w-full' style={{background: "#0037FF"}}>
            <ul className="flex gap-5  items-center text-sm  text-white max-md:flex-wrap max-md:max-w-full">
                <li className="">Sign in</li>
                <li className="">Sign up</li>
                <li className="">Market Place</li>
                <li className="">
                  <Link to={'about'}>About Us</Link>
                  
                  </li>
                <li className="self-stretch my-auto">Contact Us</li>
                <div className="flex gap-2.5 self-stretch px-8 py-3 text-sm text-blue-900 whitespace-nowrap rounded-2xl bg-zinc-100 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e17e75e9765f3f6c1b7d6e4dcf6a065703d882eeed7f7d1459e48f87f20aaee1?"
                    className="shrink-0 aspect-square fill-blue-900 w-[15px]"
                  />
                  <div>Search</div>
                </div>
              </ul>

              <div className="flex mt-10 ml-20 flex-col grow text-lg text-white">
                <div className="text-lg ">We Provide:</div>
                <div className="mt-3">
                  Software Dev and vulnerability analysis
                </div>
                <div className="mt-2">Solar system</div>
                <div className="mt-2">Python programming</div>
                <div className="mt-2">Project research works</div>
                <div className="mt-2">Cctv and access door and control system</div>
                <div className='mt-2'>Electrical wiring system ( design and installation)</div>
              </div>
          </section>

        </header>

          <section style={{overflowX: "hidden"}}>
            <div className="flex md:hidden mt-10  items-center max-md:flex-wrap">
              <img
                loading="lazy"
                src={daikelogo}
                alt='daike logo'
                className=" w-18 h-10 max-w-full"
              />
              <div className="flex-auto my-auto text-sm">DAIKESGLOBAL BUSINESS </div>
            </div>

              <section className='flex md:hidden flex-col pr-40 pl-10 pb-10 pt-5 w-full rounded-bl-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full' style={{backgroundColor: "#0037FF"}}>
              <div className="flex gap-5  flex-wrap items-center w-full text-sm  text-white max-md:flex-wrap max-md:max-w-full">
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

                <section>
                  <div className="mt-10 text-lg font-bold text-white">
                    Best technology hub
                    <br />
                    that offers training & corporate <br />
                    services!
                  </div>

                  <div className="mt-5 text-sm text-white  max-md:max-w-full">
                    Professional delivery of technology solutions to global businesses sphere in marketing, Engineering and software industries.
                  </div>
                </section>

                <div className="flex mt-10 md:ml-20 flex-col grow text-lg text-white">
                  <div className="text-lg ">We Provide:</div>
                  <div className="mt-3 text-sm">
                    Software Dev and vulnerability analysis
                  </div>
                  <div className="mt-2 text-sm ">Solar system</div>
                  <div className="mt-2 text-sm ">Python programming</div>
                  <div className="mt-2 text-sm ">Project research works</div>
                  <div className="mt-2 text-sm ">Cctv and access door and control system</div>
                  <div className='mt-2 text-sm '>Electrical wiring system ( design and installation)</div>
                </div>
            </section>
          </section>

        
        <section className='hidden lg:block'>
          <div className="flex pl-40  justify-between self-center mt-24 w-full max-w-[1790px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <ImageCom img={gapics} />
            <ImageCom img={team} />
            <ImageCom  img={code} />
            <ImageCom img={gapics} />
            <ImageCom img={woman} />

          </div>
        </section>

        <main>
          <section className='flex gap-10 mt-20 w-50'>
            <div>
                <div className="flex flex-col grow items-start p-4 md:p-6 md:pl-20 pt-11 h-full min-w-full rounded-xl" style={{background: "#0037FF"}}>
                  <div className="flex flex-col md:ml-20 max-w-full w-[612px]">
                    <div className="text-xl md:text-3xl tracking-tighter text-white max-md:max-w-full ">
                      360-degree Solution to your Business
                    </div>
                    <div className="mt-10 text-sm md:text-lg text-white max-md:max-w-full">
                      Software Dev and vulnerability analysis
                      <br />
                      <br />
                      Electrical wiring system ( design and installation)
                      <br />
                      <br />
                      Cctv and access door and control system
                      <br />
                      <br />
                    </div>
                  </div>
              </div>
            </div>

            <div className='w-50'>
              <div className="flex gap-5 flex-wrap">
                  <ImageCom img={gapics} />
                  <ImageCom img={team} />
                  <ImageCom  img={code} />
                  <ImageCom img={woman} />
              </div>
            </div>
          </section>

          <section className='p-6 lg:pl-40 mt-20'>
            <div className='flex flex-wrap gap-10'>
              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="text-2xl" style={{color: "#0037FF"}}>
                  1. Software Development
                </div>
                <div className="mt-5 text-sm text-neutral-500">
                We follow due process or sequence activities when developing a project. This include software specifications, development, validation and evaluation. We also use innovative software tools to analyze on vulnerability or defect of software that could permit attackers to have illegal access of a system.
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="text-2xl" style={{color: "#0037FF"}}>
                  Electrical wiring system
                </div>
                <div className="mt-5 text-sm text-neutral-500">
                  Since the world of electrical power system is changing and growing rapidly, daikesglobal team have been making a lot of efforts towards working on software that will enhance professionalism in this area. Through our experience and expertise we have endeavor to harness our innovative ideas in contribution to the world of electrical power system..{" "}
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="text-2xl" style={{color: "#0037FF"}}>Solar system</div>
                <div className="mt-5 text-sm text-neutral-500">
                  Solar system has become most of the dominant source of energy in today's
                  world and we are not ignorant of that fact. So we make use of
                  the best solar products during our selection and installation.
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
              <div className='text-2xl' style={{color: "#0037FF"}}>Python programming</div>
                <div className="mt-5 text-sm text-neutral-500">
                Python programming is one of the most popular programing language and due to it's
                  simplicity compare to other language we have to adopt and use it
                  for most of our projects.
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
              <div className="text-2xl"style={{color: "#0037FF"}}>
                  Project research works
                </div>
                <div className="mt-5 text-lg text-neutral-500">
                  we employ the best brains and creative minds in diverse
                  areas of specialization to work on project for
                  companies, organizations and governments. Etc.
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="text-2xl max-md:max-w-full" style={{color: "#0037FF"}}>
                  Cctv and access door and control system
                </div>
                <div className="mt-5 text-sm text-neutral-500 max-md:max-w-full">
                  Daikesglobal space has experience technicians and
                  engineers that can handle your installation
                  professionally anytime, any moment.
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="mt-20 max-md:mt-10 text-2xl" style={{color: "#0037FF"}}>Business risers</div>
                <div className="mt-5 text-sm text-neutral-500">
                  Coming soon...
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="mt-5 lg:mt-20 text-2xl" style={{color: "#0037FF"}}>Marketplace</div>
                <div className="mt-5 text-sm text-neutral-500">
                  Coming soon...
                </div>
              </div>

              <div className='lg:w-[30%] min-h-[20px]'>
                <div className="mt-5 lg:mt-20 text-2xl" style={{color: "#0037FF"}}>Keep your innovations and research work</div>
                <div className="mt-5 text-sm text-neutral-500">
                  Coming soon...
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
              <button className=' rounded-[36px] px-10 py-4 justify-center text-white items-center' style={{backgroundColor: "#0037FF"}}>Read More</button>
            </div>
          </section>

          <section className='' style={{overflowX: "hidden"}}>
            <div className=" w-full max-md:max-w-full">
              <div className="flex gap-10 justify-between max-md:flex-col max-md:gap-0">
                <div className="flex flex-col md:w-[57%] mt-40 max-md:ml-0 max-md:w-full">
                  <div className='md:flex  md:items-center justify-between' style={{backgroundColor: "#0037FF", borderRadius: "0px 162px 162px 0px", padding: "15vh"}}>
                    <div className='mt-5 md:mt-0 md:flex flex-col items-center justify-center'>
                      <p className='text-2xl  text-white'>99%</p>
                      <p className='mt-1  text-white'>Client Retention</p>
                    </div>
                    <div className='mt-5 md:mt-0 md:flex flex-col items-center justify-center'>
                      <p className='text-2xl  text-white'>7</p>
                      <p className='mt-1  text-white'>Years of Service</p>
                    </div>
                    <div className='mt-5 md:mt-0 md:flex flex-col items-center justify-center'>
                      <p className='text-2xl  text-white'>30+</p>
                      <p className='mt-1  text-white'>Team of Professional</p>
                    </div>
                    <div className='mt-5 md:mt-0 md:flex flex-col items-center justify-center'>
                      <p className='text-2xl  text-white'>221+</p>
                      <p className='mt-1  text-white'>Satisfied clients</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col mt-4 max-md:mt-10 w-[40%] justify-center items-center">
                  <div className='mr-40'>
                    <ImageCom img={team} />
                  </div>

                  <div className='ml-60'>
                    <ImageCom img={woman} />
                  </div>

                  <div className='mr-60'>
                    <ImageCom img={gapics} />
                  </div>

                  </div>
              </div>
          </div>
          </section>

          <section style={{overflowX: "hidden"}}>
            <div className=''>
              <div className="flex flex-col px-5 mt-2 max-md:max-w-full">
                <div className="self-start mt-20 md:mt-0 ml-[140px] text-4xl max-md:ml-2.5 max-md:text-2xl" style={{color: "#0037FF"}}>
                  Projects
                </div>
                <div className="flex justify-center items-center px-16 py-16 mt-16  rounded-none max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{backgroundColor: "#0037FF"}}>
                  <div className="mt-7 max-w-full w-[1157px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-4xl text-neutral-800 max-md:mt-10">
                          <img
                            loading="lazy"
                            src={project}
                            className="w-full aspect-[1.33]"
                          />
                          <div className="self-center mt-5 text-lg text-white">Expense tracker</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-4xl whitespace-nowrap text-neutral-800 max-md:mt-10">
                          <img
                            loading="lazy"
                            src={gallery}
                            className="w-full aspect-[1.33]"
                          />
                          <div className="self-center mt-5 text-lg text-white">Gallery</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-4xl text-neutral-800 max-md:mt-10">
                          <img
                            loading="lazy"
                            src={dashboard}
                            className="w-full aspect-[1.33]"
                          />
                          <div className="mx-5 text-center mt-5 text-lg max-md:mx-2.5 text-white">Centered Image</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/*   testimonies */}
            <div>
              <div>
                <div className="flex flex-col self-end mt-20 mr-32 text-right max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  <div className="text-4xl tracking-tighter max-md:max-w-full max-md:text-2xl" style={{color: "#0037FF"}}>
                    Happy Clients About Us
                  </div>
                  <div className="self-end mt-2 text-sm tracking-tighter text-neutral-800">
                    We are happy to hear from you
                  </div>
                </div>
              </div>
              
              <div className=' pt-10 rounded mt-5 md:hidden' style={{backgroundColor: "#0037FF"}}>
                <div className="p-12 text-sm text-center  text-white bg-blue-500 rounded-[67px] max-md:px-5 md:w-[50%]">
                  I really enjoyed using daikesglobal services, the professionalism was top
                  notch
                </div>

                <div className='mt-4'>
                  <div className="flex flex-col">
                    <div className="flex gap-5 items-center justify-center w-full max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c63bcd5b043f6a7e5e587c005cf79069060e9aead1371930bdecc9d54dc50c2?"
                        className="shrink-0 my-auto aspect-[0.51] fill-blue-400 w-[10px]"
                      />
                      <div className="flex gap-5 justify-between items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/381b253d2d48bbf0807a130e4a25a741fb33eeb1cd789b0e26920cee4c417001?"
                          className="shrink-0 w-[20px] aspect-[1.05] fill-yellow-500"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/114328b432cdc8b6d20bdbbe42967987555e4605e4b1a5eb54257b339fd06046?"
                          className="shrink-0 w-[20px] aspect-[1.05] fill-yellow-500"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/120630bac0fc829d967080a8fafa206a731c0c90f21038778e1d280c73430a5c?"
                          className="shrink-0 w-[20px] aspect-[1.05] fill-yellow-500"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/120630bac0fc829d967080a8fafa206a731c0c90f21038778e1d280c73430a5c?"
                          className="shrink-0 w-[20px] aspect-[1.05] fill-yellow-500"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/120630bac0fc829d967080a8fafa206a731c0c90f21038778e1d280c73430a5c?"
                          className="shrink-0 w-[20px] aspect-[1.05] fill-yellow-500"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/555ef72b70bdf73cb8d0e65ae80c4c8973f5c71a31874df9f397608dee30a297?"
                        className="shrink-0 mt-15 aspect-[0.59] fill-blue-400 w-[10px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className='mt-5 text-lg tracking-tight text-white'>Mr.David</p>
                      <p className='text-sm tracking-normal text-white'>CEO</p>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className=' hidden lg:flex justify-end'>
                <div className="flex flex-col p-10 md:w-[70%] mt-10 rounded-none  max-md:px-5 " style={{backgroundColor: "#0037FF", borderRadius: "162px 0px 0px 162px"}}>
                  <div className="flex gap-5 mt-9 ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c63bcd5b043f6a7e5e587c005cf79069060e9aead1371930bdecc9d54dc50c2?"
                      className="shrink-0 my-auto aspect-[0.51] fill-blue-400 w-[15px]"
                    />
                    <div className="p-12 text-2xl  text-white bg-blue-500 rounded-[67px] max-md:px-5 md:w-[50%]">
                      I really enjoyed using daikes services, the professionalism was top
                      notch
                    </div>
                    <div className="flex gap-4 self-end mt-5 max-md:flex-wrap max-md:mt-10">
                      {/* <div className="grow self-end  text-4xl tracking-tighter text-black">
                        -
                      </div> */}
                      <div className="flex flex-col">
                        <div className="flex gap-5 items-start w-full max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-auto gap-5 justify-between items-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/381b253d2d48bbf0807a130e4a25a741fb33eeb1cd789b0e26920cee4c417001?"
                              className="shrink-0 w-[25px] aspect-[1.05] fill-yellow-500"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/114328b432cdc8b6d20bdbbe42967987555e4605e4b1a5eb54257b339fd06046?"
                              className="shrink-0 w-[25px] aspect-[1.05] fill-yellow-500"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/120630bac0fc829d967080a8fafa206a731c0c90f21038778e1d280c73430a5c?"
                              className="shrink-0 w-[25px] aspect-[1.05] fill-yellow-500"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/120630bac0fc829d967080a8fafa206a731c0c90f21038778e1d280c73430a5c?"
                              className="shrink-0 w-[25px] aspect-[1.05] fill-yellow-500"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/120630bac0fc829d967080a8fafa206a731c0c90f21038778e1d280c73430a5c?"
                              className="shrink-0 w-[25px] aspect-[1.05] fill-yellow-500"
                            />
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/555ef72b70bdf73cb8d0e65ae80c4c8973f5c71a31874df9f397608dee30a297?"
                            className="shrink-0 mt-15 aspect-[0.59] fill-blue-400 w-[15px]"
                          />
                        </div>
                        <div className="mt-5 text-xl tracking-tight text-white max-md:max-w-full">
                          Mr.David
                        </div>
                        <div className=" text-sm tracking-normal text-white max-md:max-w-full">
                          Director
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 self-center mt-16 max-md:mt-10">
                    <div className="shrink-0 w-6 h-6 bg-blue-400 rounded-full" />
                    <div className="shrink-0 w-6 h-6 bg-blue-200 rounded-full" />
                    <div className="shrink-0 w-6 h-6 bg-blue-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

          </section>
        </main>

        <footer style={{overflowX: "hidden"}}>
          <div className="flex justify-between items-center px-16 py-20 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{backgroundColor: "#0037FF"}}>
            <div className="flex justify-between gap-5 items-start mt-5 mb-1.5 w-full flex-wrap">
              <div className="flex flex-col mt-1.5 w-full xl:w-[20%]">
                <div className="text-lg lg:text-2xl tracking-wide text-white">Phone number:</div>
                <div className="mt-7 text-sm lg:text-lg tracking-wide leading-8 text-white">
                  +234 806 6408 289, <br />
                  +234 813 2386 576
                  <br />
                </div>
                <div className="flex gap-5  mt-16 max-md:mt-10 max-md:mr-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/96678ca720e07668027adc60c6f1431e4d76202a39bd9b1377f6f3f04ad4c9f6?"
                    className="shrink-0 aspect-[0.98] fill-white w-[45px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc21680901e4621b808e5c2fe8f7672cba25823fc63427a3944d58875ebd5a70?"
                    className="shrink-0 aspect-[0.98] fill-white w-[45px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3889105ff4c43d358ab7f91f6118bf41a2f899c9579b6c5d0e9b394534926c67?"
                    className="shrink-0 aspect-[0.98] fill-white w-[45px]"
                  />
                </div>
              </div>
              <div className="flex flex-col text-white w-full xl:w-[20%]">
                <div className="text-lg lg:text-2xl tracking-wide">Email:</div>
                <div className="mt-6 text-sm lg:text-lg tracking-wide leading-8">
                  {" "}
                  daikesglobalspace@gmail.com
                </div>
              </div>
              <div className="flex flex-col justify-center text-white w-full xl:w-[20%]">
                <div className="text-lg lg:text-2xl tracking-wide">Address:</div>
                <div className="mt-6 text-sm lg:text-lg  tracking-wide leading-8">
                  #87 Uyo Road, Ikot Ekpene,
                  <br />
                  Akwa Ibom State, Nigeria

                </div>
              </div>
              <div className="w-full xl:w-[20%]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-white max-md:mt-10">
                      <div className="text-lg lg:text-2xl tracking-wide">Other</div>
                      <div className="mt-8 text-sm lg:text-lg tracking-wide leading-10">
                        <ul>
                          <li>
                            Event
                          </li>
                          <li>
                            Company
                          </li>
                          <li>
                            Events
                          </li>
                          <li>
                            Terms Of Use
                          </li>
                          <li>
                            Copyright
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
