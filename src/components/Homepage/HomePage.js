import style from './HomePage.module.css'
function HomePage() {
  return (<>
    <div className={style.main}>
      <h1>
        <span className={style.name}>
        Dastageer
        </span>.
        <span className={style?.['sub-text']}>
          portfolio  
        </span>
      </h1>
    </div>
  </>)
}

export default HomePage;