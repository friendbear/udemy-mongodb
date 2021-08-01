db.users.update({
    email: "sachiko.sato@sample.co.jp",
}, {
    $set: { password: "qwerty" }
}, {
    multi: true
})