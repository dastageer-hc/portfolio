import style from './HomePage.module.css';
function HomePage() {
  return (<>
    <div className={style.main_container}>
      <div className={style.outer_border}>
        <div className={style.card_container}>
          <div className={style.bg_image}>
            <img src={require('../../assets/images/headshot.jpg')} alt='profile pic'></img>
          </div>
          <div className={style.content_container}>
            <div>
              test lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest lorem
              test loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest loremtest lorem

            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default HomePage;