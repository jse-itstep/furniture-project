
let music = [
    { name: "I kissed A girl", genre: "pop", singerName: "Katy Perry", albumName: "first album", year: 2010 },
    { name: "Bring Me To Life", genre: "rock", singerName: "Evanescence", albumName: "Fallen", year: 2005},
    { name: "Животные", genre: "rap", singerName: "Скриптонит", albumName: "Уроборос", year: 2016},
    { name: "Як 2", genre: "rap", singerName: "Скриптонит", albumName: "2004", year: 2018},
    { name: "Praise The Lord", genre: "niggas rap", singerName: "A$AP Rocky", albumName: "Testing", year: 2016},
    { name: "I'm Real", genre: "rap", singerName: "Ulukmanapo", albumName: "I'm Real", year: 2020},
    { name: "Homicide", genre: "rap", singerName: "Eminem, Logic", albumName: "IDK", year: 2022},
    { name: "В одного", genre: "rap", singerName: "Скриптонит, Truwer", albumName: "Улица 36", year: 2015},
    { name: "Mama Makusa", genre: "rap", singerName: "Kizaru", albumName: "Bandana", year: 2021},
]


localStorage.setItem("music", JSON.stringify(music));