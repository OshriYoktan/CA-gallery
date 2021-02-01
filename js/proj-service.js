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
