function NFTCollection3() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <img
          src="../Other System.png"
          alt=""
          style={{
            width: "100%",
          }}
        />
        {/* <div class="container">
          <h1 class="system-title text-start">
            OTHER SYSTEM
            <p class="concepts-title2 text-start">ARCHITECTURE PRODUCTS</p>
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
                  yachts,
                  <br />
                  architectyourlife14,
                  <br />
                  by cideation pte ltd.
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
        <div className="card">
          <div className="imgcon">
            <img className="imgNFT img-fluid" src="../img1.svg" />
            <div className="cubeName">
            <div className="mt-2 name-container">
            <p className="name text-uppercase">
                sphere bathroom <br />
                by homeqube
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

export default NFTCollection3;