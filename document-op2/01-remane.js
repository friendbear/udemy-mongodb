// 性別をsex から genderに変更
db.authors.update(
    {},  // すべてのドキュメント
    { $rename: { sex: "gender"}},
    { multi: true }
    
)