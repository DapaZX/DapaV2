import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, args, usedPrefix, command }) => {

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
if (command == 'hartacustom') {
    let stiker = `https://api.lolhuman.xyz/api/hartacustom?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'attp1') {
    let stiker = `https://api.lolhuman.xyz/api/attp?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp',  m, adReply)
}
if (command == 'attp2') {
    let stiker = `https://api.lolhuman.xyz/api/attp2?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp8') {
    let stiker = `https://leyscoders-api.herokuapp.com/api/ttp2?text=${teks}&apikey=MIMINGANZ`
    return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp7') {
    let stiker = `https://leyscoders-api.herokuapp.com/api/ttp1?text=${teks}&apikey=MIMINGANZ`
    return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp6') {
    let stiker = `https://api.lolhuman.xyz/api/ttp6?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp5') {
    let stiker = `https://api.lolhuman.xyz/api/ttp5?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp4') {
    let stiker = `https://api.lolhuman.xyz/api/ttp4?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp3') {
    let stiker = `https://api.lolhuman.xyz/api/ttp3?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp2') {
    let stiker = `https://api.lolhuman.xyz/api/ttp2?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'ttp1') {
    let stiker = `https://api.lolhuman.xyz/api/ttp?apikey=${global.lolkey}&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp',  m, adReply)
}
if (command == 'ttpg') {
    let stiker = `https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'attpg') {
    let stiker = `https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'attpg2') {
    let stiker = `https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${teks}`
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', m, adReply)
}
if (command == 'quotex') {
    let images = `https://violetics.pw/api/canvas/quotes?apikey=beta&text=${teks}&author=HinataNew`
        await conn.sendButton(m.chat, `${teks}`, author, images, [
                ['Next', `${usedPrefix}${command} ${teks}`]
            ], m, adReply)
}
if (command == 'tahta') {
let images = `https://violetics.pw/api/jimp/tahta?apikey=beta&text=${teks}`
                await conn.sendButton(m.chat, `${teks}`, author, images, [
                ['Next', `${usedPrefix}${command} ${teks}`]
            ], m, adReply)
}

}
handler.help = ['ttpg', 'attpg', 'attpg2', 'quotex', 'tahta', 'ttp1', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'ttp7', 'ttp8', 'attp1', 'attp2', 'hartacustom'].map(v => v + ' <text>')
handler.command = ['ttpg', 'attpg', 'attpg2', 'quotex', 'tahta', 'ttp1', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'ttp7', 'ttp8', 'attp1', 'attp2', 'hartacustom']
handler.tags = ['sticker']
export default handler