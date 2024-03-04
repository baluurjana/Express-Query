const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()

const dbpath = path.join(__dirname, 'cricketTeam.db')

let db = null

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    })

    app.listen(3000, () => {
      console.log('server Running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error${e.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()
