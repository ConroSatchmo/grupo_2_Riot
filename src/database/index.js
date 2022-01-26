const fs = require('fs')
const path = require('path')

const dbPath = path.join(__dirname, './db.json')

const data = fs.readFileSync(dbPath, 'utf8')
const db = JSON.parse(data)
const tables = Object.keys(db)

const dbFunctions = {}

tables.forEach(table => {
    dbFunctions[table] = {
        select: () => {
            return db[table]
        },
        selectById: (id) => {
            return db[table].find(data => data.id == id)
        },
        selectByField: (field, value) => {
            return db[table].find(data => data[field] == value)
        },
        insert: (data) => {
            db[table].push(data)
            fs.writeFileSync(dbPath, JSON.stringify(db, null))
        },
        update: (id, data) => {
            const index = db[table].findIndex(data => data.id == id)
            db[table][index] = data
            fs.writeFileSync(dbPath, JSON.stringify(db, null))
        },
        delete: (id) => {
            const index = db[table].findIndex(data => data.id == id)
            db[table].splice(index, 1)
            fs.writeFileSync(dbPath, JSON.stringify(db, null))
        }
    }
})

module.exports = dbFunctions