db.books.find().sort({ price: 1})
db.books.find().sort({ price: -1})

db.books.find({ publisher: "新朝社"}).sort({ launch: -1 })