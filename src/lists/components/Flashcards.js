'use strict'

import React from 'react'
// import Loader from 'react-loader'
import { $ } from '../../../resources/js/util'

const Flashcards = ({ data, index, decrementIndex, incrementIndex }) => {
  let animationStatus = 'SET'

  const prev = () => {
    if (animationStatus === 'ACTIVE') {
      return
    }

    if (index === 0) {
      fakeRight()
      return
    }

    animationStatus = 'ACTIVE'
    $('left').style.transition = 'opacity .75s, transform .75s'
    $('left').classList.add('slide-origin')
    $('middle').style.transition = 'opacity .75s, transform .75s'
    $('middle').classList.add('slide-right')

    setTimeout(() => {
      $('left').style.transition = 'transform 0s'
      $('left').classList.remove('slide-origin')
      $('middle').style.transition = 'transform 0s'
      $('middle').classList.remove('flipped')
      $('middle').classList.remove('slide-right')
      animationStatus = 'SET'
      decrementIndex()
    }, 750)
  }

  const next = () => {
    if (animationStatus === 'ACTIVE') {
      return
    }

    if (index === data.length - 1) {
      fakeLeft()
      return
    }

    animationStatus = 'ACTIVE'
    $('right').style.transition = 'opacity .75s, transform .75s'
    $('right').classList.add('slide-origin')
    $('middle').style.transition = 'opacity .75s, transform .75s'
    $('middle').classList.add('slide-left')

    setTimeout(() => {
      $('right').style.transition = 'transform 0s'
      $('right').classList.remove('slide-origin')
      $('middle').style.transition = 'transform 0s'
      $('middle').classList.remove('flipped')
      $('middle').classList.remove('slide-left')
      animationStatus = 'SET'
      incrementIndex()
    }, 750)
  }

  const flip = () => {
    if (animationStatus === 'ACTIVE') {
      return
    }

    $('middle').style.transition = 'transform .75s'
    $('middle').classList.toggle('flipped')
  }

  const fakeRight = () => {
    if (animationStatus === 'ACTIVE') {
      return
    }

    animationStatus = 'ACTIVE'
    $('middle').style.transition = 'transform .25s'
    $('middle').classList.toggle('fake-right')

    setTimeout(() => {
      $('middle').classList.toggle('fake-right')
      animationStatus = 'SET'
    }, 250)
  }

  const fakeLeft = () => {
    if (animationStatus === 'ACTIVE') {
      return
    }

    animationStatus = 'ACTIVE'
    $('middle').style.transition = 'transform .25s'
    $('middle').classList.toggle('fake-left')

    setTimeout(() => {
      $('middle').classList.toggle('fake-left')
      animationStatus = 'SET'
    }, 250)
  }

  return (
    <div className='flashcards'>
      <section className='flashcard-container'>
        <div className='flashcard' id='left'>
          <div className='front align-center'>
            <h1 id='left-text'>
              {data.length > 0 && index > 0 ? data[index - 1].word : ''}
            </h1>
          </div>
          <div className='back align-center'>
            <h1>
            </h1>
          </div>
        </div>

        <div className='flashcard' id='middle'>
          <div className='front align-center'>
            <h1 id='middle-text'>
              {data.length > 0 ? data[index].word : ''}
            </h1>
          </div>
          <div className='back align-center'>
            <h1>
              {data.length > 0 ? data[index].definition : ''}
            </h1>
          </div>
        </div>

        <div className='flashcard' id='right'>
          <div className='front align-center'>
            <h1 id='right-text'>
            {data.length > 0 && index < data.length - 1 ? data[index + 1].word : ''}
            </h1>
          </div>
          <div className='back align-center'>
            <h1>
            </h1>
          </div>
        </div>
      </section>

      <div className='buttons align-center'>
        <div className='btn-group' role='group' aria-label='...'>
          <button className='btn btn-default' id='btn-prev' type='button' onClick={prev}>
            Prev
          </button>
          <button className='btn btn-default' id='btn-flip' type='button' onClick={flip}>
            Flip
          </button>
          <button className='btn btn-default' id='btn-next' type='button' onClick={next}>
            Next
          </button>
        </div>
      </div>

      <div className='flashcard-count align-center'>
        <div className='form-group index-container align-center'>
          <input type='text' className='form-control input-sm' value={index} id='index-input' />
        </div>
        of {data.length}
      </div>
    </div>
  )
}

// <div className='container'>
//   <div className='row'>
//     <div className='form-group col-xs-1'>
//       <input type='text' className='form-control' value={index} id='index-input' /> of {data.length}
//     </div>
//   </div>
// </div>



export default Flashcards
