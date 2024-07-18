import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms">
        <a href='https://play.google.com/store/games?device=windows&pli=1' target='_blank'>
          <img src={assets.play_store} alt="" />
        </a>
        <a href='https://www.apple.com/app-store/' target='_blank'>
          <img src={assets.app_store} alt="" />
        </a>
        </div>
    </div>
  )
}

export default AppDownload