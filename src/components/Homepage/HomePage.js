import style from './HomePage.module.css';
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
      <div>

        <h2>
          Website Under Construction....
          <br />
          Hi Abhishek Bhai
        </h2>
      </div>
    </div>

    {/* <div className={style['glow-container']}>

      <div class="glowing">

        <span style={--i: 1}></span>

        <span style="--i:2;"></span>

        <span style="--i:3;"></span>

      </div>

      <div class="glowing">

        <span style={--i: 1}></span>

        <span style="--i:2;"></span>

        <span style="--i:3;"></span>

      </div>

      <div class="glowing">

        <span style={--i: 1}></span>

        <span style="--i:2;"></span>

        <span style="--i:3;"></span>

      </div>

      <div class="glowing">

        <span style={--i: 1}></span>

        <span style="--i:2;"></span>

        <span style="--i:3;"></span>

      </div>
    </div> */}
  </>)
}

export default HomePage;