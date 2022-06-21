import React from 'react'; 
import styled from 'styled-components';
import Seconds from './Seconds';
import Minutes from './Minutes';
import Hours from './Hours';

const NavStyles = styled.div`
  padding: 0;
  text-transform: uppercase;

  .nav-top, .nav-bottom {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .nav-top-left, .nav-time {
    grid-column: 1/3;
  }

  .nav-top-right {
    grid-column: 3/8;
  }

  .nav-top-cv {
    grid-column: 10/12;
  }

  .nav-time {
    display: flex;
  }

  .nav-padding {
    padding-top: 20px;
  }

  .nav-bottom {
    position: absolute; 
    width: 100%;
    top: 50%;
  }

  .nav-date {
    grid-column: 3/4;
  }


  @media screen and (max-width: 599px) {
 
    .nav-top {
      display: flex;
      flex-direction: column;
    }

    .nav-bottom  {
      position: relative;
      padding-top: 20px;
    }

    .nav-top-cv, .nav-top-right {
      padding-top: 20px;
      max-width: 320px;
    }

    .nav-bottom {
      display: flex;
      gap: 40px; 
    }


  }

`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="nav-top">
        <div className="nav-top-left">
          <h1>Lachlan Richards</h1>
          <h1>Graphic Design</h1> 
          <h1 className="nav-padding">Naarm(Melbourne)</h1>
          <h1>Australia</h1> 
          <a target="blank" href="mailto:lachlantrichards@gmail.com"><h1 className="nav-padding">Email</h1></a> 
          <a target="blank" href="https://www.instagram.com/lachy_richards/"><h1>Instagram</h1></a> 
          </div>
        <div className="nav-top-right">
          <p>I RESPECTFULLY ACKNOWLEDGE THE TRADITIONAL OWNERS OF THE LAND ON WHICH I WORK, THE BOON WURRUNG AND WOIWURRUNG (WURUNDJERI) PEOPLES OF THE KULIN NATION AND PAY RESPECT TO THEIR ELDERS, PAST AND PRESENT.</p>
        </div>
        <div className="nav-top-cv">          
          <p>YMD 2018 — 2021</p>
          <p>MAUD 2022 — Present</p>
          </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-time">
          <Hours />
          <Minutes />
          <Seconds /> 
        </div>
        <div className="nav-date">
          <p>
            {''}
            {(new Date().getDate() + 0 < 10 ? '0' : '') +
              (new Date().getDate() + 0)}
            {'/'}
            {(new Date().getMonth() + 1 < 10 ? '0' : '') +
            (new Date().getMonth() + 1)}
            {'/'}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </NavStyles>
  );
}
