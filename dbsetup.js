
let res = [
    db.games.drop(),
    db.games.createIndex({ playerName: 1 }),
    db.games.createIndex({ currentFrame: 1 }),
    db.games.createIndex({ frames: 1 }),
    db.games.insert({ _id: 602, playerName: "Joe", frameNumber: 1, frames: {frame1: {score: [1,2], strike: false, spare: false}}, totalScore:6 })
  ]
  
  printjson(res)
  