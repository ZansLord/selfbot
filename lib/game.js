const {
	MessageType,
	Mimetype
} = require("@adiwajshing/baileys");
const toMs = require('ms');

// TEBAK GAMBAR
const addgambar = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTG = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakGambar = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTG = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTGPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// TEBAK LIRIK
const addtebaklirik = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTL = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakLirik = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTL = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTLPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// SUSUN KATA
const addsusunkata = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanSK = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isSusunKata = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuSK = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getSKPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
//GAME SIAPA AKU
const addsyiko = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanSA = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isSiapaAku = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuSA = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getSAPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// Family 100
const addfam = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getjawaban100 = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isfam = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuFam = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            var juwu = `*Waktu habis*\n\n*Jawaban yang belum terjawab :*\n\n`
            aae = _dir[position].jawaban
            for (let i of aae){
                juwu += `${i}\n`
            }
            client.sendMessage(_dir[position].id, juwu, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getfamposi = (chatId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// mtk
const addmtk = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanMtk = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isMtk = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuMtk = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getMtkPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// TEBAK KATA
const addkata = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTK = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakKata = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTK = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTKPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// TEBAK UNSUR KIMIA
const addkimia = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTU = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakKimia = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTU = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐈𝐌𝐈𝐀\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTUPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// TEBAK JENAKA
const addtebakjenaka = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTJ = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakJenaka = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTJ = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐈𝐌𝐈𝐀\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTJPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// TEBAK BENDERA
const addbendera = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTB = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakBendera = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTB = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTBPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// TEBAK ANIME
const addanime = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTA = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakAnime = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTA = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTAPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// Ckl
const addckl = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanCkl = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isCkl = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuCkl = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getCklPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
module.exports = { 
    addkata,
    getJawabanTK,
    isTebakKata,
    cekWaktuTK,
    getTKPosi,
    isSusunKata, 
    getJawabanSK, 
    cekWaktuSK, 
    getSKPosi, 
    addkimia,
    getJawabanTU,
    isTebakKimia,
    cekWaktuTU,
    getTUPosi,
    addbendera,
    getJawabanTB,
    isTebakBendera,
    cekWaktuTB,
    getTBPosi,
  addanime,
  getJawabanTA,
  isTebakAnime,
  cekWaktuTA,
  getTAPosi,
  addckl,
  getJawabanCkl,
  isCkl,
  cekWaktuCkl,
  getCklPosi,
  addtebaklirik,
  getJawabanTL,
  isTebakLirik,
  cekWaktuTL,
  getTLPosi, 
  addsyiko,
  getJawabanSA,
  isSiapaAku,
  cekWaktuSA,
  getSAPosi,
  addmtk,
  getJawabanMtk,
  isMtk,
  cekWaktuMtk,
  getMtkPosi,  
  addgambar,
  getJawabanTG,
  isTebakGambar,
  cekWaktuTG,
  getTGPosi,
  addfam,
  getjawaban100,
  isfam,
  cekWaktuFam,
  addtebakjenaka, 
  addsusunkata, 
  getJawabanTJ, 
  isTebakJenaka, 
  cekWaktuTJ, 
  getTJPosi, 
  getfamposi
}