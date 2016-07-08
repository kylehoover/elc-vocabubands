'use strict'

const router = require('koa-router')()

module.exports = router

const initialState = {
  currentList: 0,
  allLists: [],
  listData: [],
  rowsDone: []
}

router.get('/lists*', function * (next) {
  let ctx = this

  const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

  ctx.render('base', {
    pageTitle: 'Vocabubands',
    bundleSrc: '/js/lists-bundle.js',
    html: html
  })
})
