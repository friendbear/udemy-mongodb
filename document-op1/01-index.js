db.users.createIndex({ email: 1}, {name: "IX_EMAIL"})

db.users.getIndexes()

db.users.dropIndex("IX_EMAIL")