'use strict'

import React from 'react'
import { $ } from '../../../resources/js/util.js'

export const hidePopup = () => {
  $('popup').style.display = 'none'
}

export const showPopup = () => {
  $('popup').style.display = 'block'
  $('popup-contents').focus()
}

const PopupOverlay = ({ children }) => {
  return (
    <div className='popup' id='popup'>
      <div className='popup-contents' id='popup-contents'>
        <a className='popup-exit' href='javascript:void(0)' onClick={hidePopup}>
          <span className='glyphicon glyphicon-remove pull-right' aria-hidden='true' />
        </a>
        <div className='popup-children'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PopupOverlay
