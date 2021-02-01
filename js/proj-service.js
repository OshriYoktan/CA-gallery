'use strict'

var gProj = [
    {
        id: 1,
        name: "Mine Sweeper",
        title: "find the mines",
        desc: "you have 2 lives and if you press the mine you lose!",
        url: "img/portfolio/1.png",
        publishedAt: 1448693940000,
        labels: ["Matrixes", " ,keyboard events"]
    },
    {
        id: 2,
        name: "Touch Nums",
        title: "Touch on the series of numbers",
        desc: "you start from number 1 and every time touch the next number!",
        url: "img/portfolio/2.png",
        publishedAt: 1448693940000,
        labels: ["Matrixes", " ,keyboard events"]
    }
]


function getProjs(){
    return gProj;
}


function getProjById(projId) {
    var proj = gProj.find(function (proj) {
        return projId === proj.id
    })
    return proj
}
