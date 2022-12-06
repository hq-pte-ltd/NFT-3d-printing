import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import TweetEmbed from 'react-tweet-embed';
import ClaimQubesButton from '../components/ClaimQubesModal/ClaimQubesButton';
import raffleImg from '../img/Pablo_Residence_2.png';
import raffleImg2 from '../img/ReworkRaf.png';
import raffleImgmobile from '../img/Pablo_Residence_2.png';
import ClaimQubesImg from '../img/ClaimQubes.png';
import { NavLink } from 'react-router-dom';

class ClaimQubesAWS extends Component {
  state = {
    URL: '',
    isTrueVal: false,
    email: '',
    subject: '',
  };
  urlPatternValidation = (URL) => {
    const SOLSCAN = 'explorer.solana.com/address/';
    const regex = new RegExp('(https?://)?' + SOLSCAN + '[/\\w .-]*/?');
    return regex.test(URL);
  };
  changeUrl = (event) => {
    const { value } = event.target;
    const isTrueVal = this.urlPatternValidation(value) || value;
    this.setState({
      URL: value,
      isTrueVal,
    });
  };

  // onSubmit = () => {
  //   const { URL, user_email, user_name } = this.state;
  //   console.log("Here is the site url: ", URL);
  //   let templateParams = {
  //     from_name: user_email,
  //     to_name: user_email,
  //     // subject: user_name,
  //     message: URL,
  //   };
  //   emailjs.send(
  //     "service_7lhctnf",
  //     "template_hb7zy83",
  //     templateParams,
  //     "GAyktw5BJ0aDCY2Wb"
  //   );
  //   this.resetForm();
  // };
  // resetForm() {
  //   this.setState({
  //     URL: "",
  //   });
  //   alert("  explorer solana com address has been send.")
  // }

  render() {
    const { isTrueVal, URL } = this.state;

    const handleClick = (e) => {};
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!isTrueVal) {
        fetch(
          'https://b2tsd7c1zl.execute-api.ap-southeast-1.amazonaws.com/claimqubes',
          {
            mode: 'no-cors',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              senderName: 'claim.qubes@gmail.com',
              senderEmail: 'about@homeqube.com',
              message: URL,
              date: new Date(),
            }),
          },
        ).then(() => {
          this.setState({
            URL: '',
          });
          alert('  explorer solana com address has been send.');
        });
      }
    };

    return (
      <>
        <section className='p-5'>
          <div className='container mb-5'>
            <div className='d-sm-flex'>
              <div>
                <h1 className='claimqubes-text text-start pt-5 ms-2'>
                  CLAIM YOUR <br />
                  QUBE TOKENS HERE
                </h1>
                <p className='ms-2 mt-5 lh-base claimqubes-subtext'>
                  Your QUBE can be claimed within 2 days upon <br />
                  sending the token address.
                </p>
                <form id='form-contact'>
                  <div className='form-outline mb-4'>
                    <label
                      className='form-label pt-5 ms-2'
                      for='form3Example3'
                    >
                      <span className='details'>
                        Input Solana Explorer address below:&nbsp;
                      </span>
                    </label>
                    <input
                      required
                      type='text'
                      name='URL'
                      value={URL}
                      onChange={this.changeUrl}
                      className='form-control ms-1'
                      placeholder='Enter a Valid Address'
                    />
                    {this.state.isTrueVal ? (
                      <div
                        className='ms-2'
                        id='errorMsg'
                        style={{
                          color: 'red',
                        }}
                      >
                        Enter Valid explorer.solana.com address
                      </div>
                    ) : (
                      <div
                        id='errorMsg'
                        style={{
                          display: 'none',
                        }}
                      ></div>
                    )}
                  </div>
                  {/* <button
                    className="contact-send-button btn btn-lg rounded-pill"
                    id="sendbtn"
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isTrueVal}
                  >
                    submit
                  </button> */}
                  <button
                    className='button1 btn btn-lg rounded-pill'
                    type='button'
                    id='sendbtn'
                    onClick={handleSubmit}
                    disabled={!isTrueVal}
                  >
                    Submit
                    <img
                      src='/icons8-right-24.png'
                      className='p-1'
                      alt='image'
                    />
                  </button>
                </form>
              </div>
              <img
                className='img-fluid ms-auto'
                src={ClaimQubesImg}
                alt=''
              />
            </div>
          </div>
        </section>
        <section className='pt-5 text-sm-start text-light bg-raffle-sec'>
          <h1 className='raff-sub-text text-center '>
            Prize awaits when you buy our nfts!
          </h1>
          <div className='raffle-sec'>
            <div className='raffle-img-main'>
              <img
                src={raffleImg2}
                alt=''
              />
            </div>
            <div className='raffle-img-main-mobile'>
              <img
                src={raffleImgmobile}
                alt=''
              />
            </div>
            <h1 className='raff-sub-text-mobile text-center '>
              Prize awaits when you buy our nfts!
            </h1>
            <div className='raffle-des-main'>
              <h1 className='text-uppercase raffle-sub-title pt-3'>
                Homeqube Raffle Draw!
              </h1>
              <h3 className='raffle-sub-title-2 text-uppercase text-light'>
                Lucky winner of A condominium from calma properties inc
              </h3>
              <p className='raffle-sub-title-3 text-light pt-5 text-start m-0'>
                For the first 1000 NFTs sold, we will give away one brand new
                condo in Paranaque, Philippines.
              </p>
              <h4 className='raffle-sub-title-4 pt-5 text-start m-0'>
                Get your system architecture NFT (9$Sol)
              </h4>
              <p className='text-light sub-text-raff-1 mb-4'>
                Transfer fees are included
              </p>
              <div className='pt-3'>
                <NavLink
                  to='/home-designs'
                  className='a-link'
                >
                  <button
                    className='button1 btn btn-lg rounded-pill secure-entry-btn'
                    type='button'
                  >
                    Secure your entry
                    <img
                      src='/icons8-right-24.png'
                      className='ms-1'
                      alt='image'
                    />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          {/* <div className="text-center pt-3">
            <h1 className="raff-sub-text">
              Prize awaits when you buy our nfts!
            </h1>
          </div>
          <div className="raffle-sec">
            <div className="col-6 sub-raff img-fluid">
              <img src={raffleImg2} alt="" />
            </div>
            <div className="col-6 sub-text-raf">
              <h1 className="text-uppercase raffle-sub-title pt-3">
                Homeqube Raffle Draw
              </h1>
              <h3 className="raffle-sub-title-2 text-uppercase text-light">
                Lucky winner of A condominium from <br /> calma properties inc
              </h3>
              <p className="raffle-sub-title-3 text-light pt-5">
                For the first 1000 NFTs sold, we will give away one brand new
                condo in <br />
                Paranaque, Philippines.
              </p>
              <h4 className="raffle-sub-title-4 pt-5">
                Get your system architecture NFT (9$Sol)
              </h4>
              <p className="text-light sub-text-raff-1">
                Transfer fees are included
              </p>
              <div className="pt-3">
                <button
                  className="button1 btn btn-lg rounded-pill"
                  type="button"
                >
                  Secure your entry
                  <img
                    src="/icons8-right-24.png"
                    className="ms-1"
                    alt="image"
                  />
                </button>
              </div>
            </div>
          </div> */}
          {/* </div> */}
        </section>

        {/* <section className="showcase1 text-dark p-2 text-center text-sm-start">
          <div className="if-container container-fluid">
            <section className="mt-5 text-center">
              <p className="people-title">CLAIM YOUR QUBES HERE</p>
              <p className="q-tokenomics-showcase-intro-lead text-uppercase">
                UPON SENDING THE TOKEN ADDRESS, YOU WILL BE ABLE TO CLAIM YOUR
                QUBE WITHIN 2 DAYS.
              </p>
            </section>
          </div>
        </section>
        <section className="p-3">
          <div className="container contacts">
            <form id="form-contact">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div className="col-md-3">
                  <span className="details text-uppercase">
                    explorer solana com address&nbsp;
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    required
                    type="text"
                    name="URL"
                    value={URL}
                    onChange={this.changeUrl}
                  />
                </div>
              </div>
              <div className="col link d-flex align-items justify-content-center">
                <div
                  className=""
                  style={{
                    width: "100px",
                  }}
                >
                  <button
                    className="contact-send-button btn btn-lg rounded-pill"
                    id="sendbtn"
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isTrueVal}
                  >
                    submit
                  </button>
                </div>
              </div>
              {!this.state.isTrueVal ? (
                <div
                  id="errorMsg"
                  style={{
                    color: "red",
                  }}
                >
                  Enter Valid explorer.solana.com address
                </div>
              ) : (
                <div
                  id="errorMsg"
                  style={{
                    display: "none",
                  }}
                ></div>
              )}
            </form>
          </div>
        </section> */}

        {/* <section className="pt-5 content-eco1-bg text-sm-start">
          <div className="claim-qubes-banner">
            <div className="claim-qubes-slider">
              <img id="sliderImg" src={raffleImg} />
            </div>
            <div className="claim-qubes-overlayBack">
              <div className="text-center text-white">
                <p className="raffle-title">
                  PRIZES AWAITS WHEN YOU BUY OUR NFTs
                </p>
                <div className="container"> */}
        {/* <ClaimQubesButton /> */}
        {/* <TweetEmbed
                    tweetId="1562007029539307520"
                    className="hqtweet"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="text-center">
          <div className="container">
            <ClaimQubesButton />
            <TweetEmbed tweetId="1562007029539307520" className="hqtweet" />
          </div>
        </section> */}
        {/* Twitter */}
      </>
    );
  }
}
export default ClaimQubesAWS;

