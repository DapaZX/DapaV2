import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, 'โ๐๐๐๐ ๐๐ ๐๐๐๐๐!!', cap, 'แดษดแดสสแด', '.on nsfw', null, adReply)
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${global.lolkey}`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Random Pict feets', author, fimgb, [['next', '.feets']], m)
}
handler.help = ['feets']
handler.tags = ['nsfw']
handler.command = /^(feets)$/i
handler.limit = true

export default handler