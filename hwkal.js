// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/LHEV9GKbWiVDMRc8CWR10t'
global.ig = '@ReyZe1193 // ubah aja
global.email = 'ReyZe1194@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Rey' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285855430747'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Legion md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'LEGION - MD' // ubah aja ini nama sticker
global.author = 'LEGION - MD' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'leg' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 50
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})