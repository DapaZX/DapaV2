import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
let text = `πππ§ππΌπΊ ππ‘πΌπ­πΌ ππ’π€ππ¬π`
    let anu = await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/mikasa?apikey=BetaBotz`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, text, author, fimgb, [['ππππ', '.mikasa']], null, adReply)
}
handler.help = ['mikasa']
handler.tags = ['anime']
handler.command = /^(mikasa)$/i
handler.limit = true

export default handler