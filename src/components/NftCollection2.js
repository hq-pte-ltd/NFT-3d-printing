function NFTCollection2() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
      <img src='../Home-Design.png'  alt=""  style={{
        width: '100%'
      }}/>
        {/* <div class="container">
          <h1 class="system-title text-start">
            HOME <p class="concepts-title text-start">DESIGN</p>
          </h1>
        </div> */}
      </div>
      <div className="container-grid cards-content container mb-3 cards">
        <div className="card">
          <div className="imgcon">
            <img className="imgNFT img-fluid" src="../img1.svg" />
            <div className="cubeName">
            <div className="mt-2 name-container">
            <p className="name text-uppercase">
                Cagbalete sand
                <br />
                cluster, winner of <br />
                waf by calma
                <br />
                properties
              </p>
            </div>
              
              <hr></hr>
              <div className="">
              <p className="desname">
                  5 SOL
                  <p>BUY NOW</p>
              </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NFTCollection2;