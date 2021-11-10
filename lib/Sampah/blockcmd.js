const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const blockcmd = (command, _data) => {
    const obj = {
        command
    }
    _data.push(obj)
    fs.writeFileSync('./database/blockcmd.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
const unblockcmd = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/blockcmd.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkcmdblock = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === commands) {
            status = true
        }
    })

    return status
}



module.exports = {
    blockcmd,
    checkcmdblock,
    unblockcmd
}