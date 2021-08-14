// レビューのスコアを全体的に1加算
db.reviews.update(
    {},
    { $inc: { score: 1 } },
    { multi: true }
)

// レビューのスコアを全体的に1減算
db.reviews.update(
    {},
    { $inc: { score: -1 } },
    { multi: true }
)

// レビューのスコアを全体的に2乗算
db.reviews.update(
    {},
    { $mul: { score: 2 } },
    { multi: true }
)

// レビューのスコアを全体的に0.5乗算
db.reviews.update(
    {},
    { $mul: { score: 0.5 } },
    { multi: true }
)