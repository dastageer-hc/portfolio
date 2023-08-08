import style from './HomePage.module.css';
import './HomePage.css'
import { FaLinkedin, FaYoutube, FaInstagramSquare } from 'react-icons/fa'
function HomePage() {
  return (<>
    <div className={style.main_container}>
      <div className={style.outer_border}>
        <div className={style.card_container}>

          <div className={style.bg_image}>

          </div>
          <div className={style.dp_container}>
            <img src={require('../../assets/images/headshot2.jpg')} alt='profile pic'></img>
            <div className={style.header}>
              <h3 className={style?.['name-tag']}>
                Dastageer HC
              </h3>
              <span className={style?.['sub-text']}>
                FRONT-END DEVELOPER
              </span>
            </div>
            <span className='mt-6 text-1xl'>
              •
            </span>

          </div>
          <div className={style.content_container}>
            <div className='-mt-20'>
              <div className='-mt-20'>
                <h1 className='text-4xl mb-6 text-center'>
                  About me

                </h1>
                <span style={{
                  width: "2rem",
                  height: "2rem",
                  backgroundColor: "red",

                }
                }>
                </span>
              </div>
              <div className='mb-6  text-center'>
                Greetings, Earthlings! I, an interstellar voyager, traverse your realm as a front-end code conjurer for 1.6 stellar rotations.
                Crafting web odysseys with React, Angular, and celestial JavaScript/TypeScript.
              </div>


              <div className='text-center'>

                Together, let's embark on cosmic coding quests.
                🚀🌌 #GalacticWebWeaver #FrontEndCosmicExplorer  #ReactStarflare #AngularAstrotraverse
              </div>
            </div>

            <div className='w-full absolute -bottom-20 -mb-20 h-full pt-12 flex justify-around items-center'>
              <a href={'https://www.linkedin.com/in/dastageer-hc/'}><FaLinkedin size={50} /></a>
              <a href={'https://www.youtube.com/@DastageerHC'}><FaYoutube size={60} /></a>
              <a href={'https://www.instagram.com/dastageer_hc/'}> <FaInstagramSquare size={50} /></a>

            </div>
          </div>
        </div>
      </div>
    </div >
  </>);
}

export default HomePage;