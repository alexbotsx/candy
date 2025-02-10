let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `💖Bot baby te invoca💖${pesan}`
  let teks = `@ventas.candy_
           🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨 

➜ ETIQUETA:*\n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `￫ 📣 @${mem.id.split('@')[0]}\n`}
  teks += `ㅤㅤㅤㅤBabyBot`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler