module.exports = {
    name: "iloveumiku",
    alias: ["loveu"],
    desc: "proposed",
    cool:3,
    react: "❤",
    category: "fun",
    start: async(Miku, m,{pushName}) => {
        await Miku.sendMessage(m.from,{text:`I love you too *${pushName}*`},{quoted:m})
    }
}
