import React from 'react'
import './App.css';


function App() {

//   const []
// console.log(data);

  return (
    <div className="App">
      <main className="testimonial-grid m-5">
        <article className='testimonial grid-col-span-2 first py-5 pl-8 pr-[1.3em] lg:px-7 rounded-xl   text-white text-left lg:py-2 '>
          <section className='pb-5  pt-3 content-start flex '>
            <img  className='w-9 h-9 rounded-full border-2 border-color-white' src="./images/image-daniel.jpg" alt="" />
            <div className='flex-column items-start pl-4 text-white '>
              <h2 className='text-left text-sm text-white text-opacity-80 '>Daniel Clifford</h2>
              <h3 className='text-left text-white text-opacity-40 text-sm '> Verified Graduate</h3>
            </div>
          </section>
          <section>
            <p className='text-[22px] '>  
              I received a job offer mid-course, and the subjects I learned were current, if not more so, 
              in the company I joined. I honestly feel I got every penny’s worth.
            </p>
            <p className='text-white text-opacity-40 pt-3 lg:text-sm pb-5 pr-5 lg:pr-0'>
              “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
            </p>
          </section>
        </article>

        <article className='testimonial second py-5 px-7 rounded-xl  text-white text-left  lg:py-2 '>
        <section className='pb-5  pt-3 content-start flex'>
            <img className='w-9 h-9 rounded-full border-2 border-color-white' src="./images/image-jonathan.jpg" alt="" />
            <section className='flex-column items-start pl-4 text-white'>
              <h2 className='text-left text-sm text-white text-opacity-80 '>Jonathan Walters</h2>
              <h3 className='text-left text-white text-opacity-40 text-sm'>Verified Graduate</h3>
            </section>
          </section>
          <section className=''>
            <p className='text-[22px]'>
              The team was very supportive and kept me motivated
            </p>
            <p className='text-white text-opacity-40 lg:text-sm py-5 pr-5'>
              “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments I’ve made in myself. ”
            </p>
          </section>
        </article>
        <article className='testimonial third py-5 px-7 rounded-xl  text-black text-left lg:py-2 '>
        <section className='pb-5  pt-3 content-start flex'>
            <img  className='w-9 h-9 rounded-full border-2 border-color-white' src="./images/image-jeanette.jpg" alt="" />
            <section className='flex-column items-start pl-4 '>
              <h2 className='text-left text-sm text-black text-opacity-80 '>Jeanette Harmon</h2>
              <h3 className='text-left text-black text-opacity-40 text-sm'> Verified Graduate</h3>
            </section>
          </section>
          <section>
            <p className='text-[23px]'>An overall wonderful and rewarding experience</p>
            <p className='text-black text-opacity-40 lg:text-sm py-5 pr-5'>
                “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                while doing something I love. ”
            </p>
          </section>
        </article>
        <article className='testimonial  grid-col-span-2 fourth py-5 px-7 rounded-xl  text-white text-left lg:py-2 '>
          <section className='pb-5  pt-3 content-start flex'>
            <img  className='w-9 h-9 rounded-full border-2 border-color-white' src="./images/image-patrick.jpg" alt="" />
            <section className='flex-column items-start pl-4 text-white'>
              <h2 className='text-left text-sm text-white text-opacity-80 '>Patrick Abrams</h2>
              <h3 className='text-left text-white text-opacity-40 text-sm'> Verified Graduate</h3>
            </section>
          </section>
          <section>
            <p className='text-[22px]'>
              Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
              learning from their experiences was easy.
            </p>
            <p className='text-white text-opacity-40 lg:text-sm py-5 pr-5'>
              “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
              gave me the confidence necessary to be able to go out in the world and present myself as a capable 
              junior developer. The standard is above the rest. You will get the personal attention you need from 
              an incredible community of smart and amazing people. ”
            </p>
          </section>
        </article>
        <article className='testimonial fifth py-5 px-7 rounded-xl  text-black text-left lg:py-2'>
        <section className='pb-5  pt-3 content-start flex'>
            <img  className='w-9 h-9 rounded-full border-2 border-color-white' src="./images/image-jeanette.jpg" alt="" />
            <section className='flex-column items-start pl-4 '>
              <h2 className='text-left text-sm text-black text-opacity-80 '>Kira Whittle</h2>
              <h3 className='text-left text-black text-opacity-40 text-sm'> Verified Graduate</h3>
            </section>
          </section>
          <section>
            <p className='text-[22px]'>Such a life-changing experience. Highly recommended!</p>
            <p className='text-black text-opacity-40 lg:text-sm py-5 pr-5'>
              “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
              100% recommend! ”
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
