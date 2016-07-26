'use strict'

const router = require('koa-router')()
const UserModel = require('../models/User')

module.exports = router

router.get('/users', function * (next) {
  let ctx = this
  const errorRedirect = '/'

  if (ctx.session.isAdmin) {
    const initialState = {
      isAdmin: true
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/new', function * (next) {
  let ctx = this
  const errorRedirect = '/'

  if (ctx.session.isAdmin) {
    const initialState = {
      isAdmin: true
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else if (ctx.session.isAuthenticated) {
    ctx.redirect(errorRedirect)
  } else if (ctx.session.user) {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/edit/:id', function * (next) {
  let ctx = this
  const errorRedirect = '/'

  if (ctx.session.isAdmin) {
    const initialState = {
      isAdmin: true
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})