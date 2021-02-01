'use strict'
console.log('Starting up');




function initPage() {
    renderProj()
}


function renderProj() {
    var projs = getProjs()
    var strHTML = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div onclick="renderModal(${proj.id})" class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid"  src="img/portfolio/${proj.id}.png" alt="">
              </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">Illustration</p>
            </div>
            </div> `
    })
    $('.grid').html(strHTML)
}

function renderModal(projId) {
    var proj = getProjById(projId)
    $('.portfolio-modal h2').text(proj.name)
    $('.item-intro').text(proj.title)
    document.querySelector('.proj-image').src = proj.url
    $('.desc').text(proj.desc)
    $('.date').text(proj.publishedAt)
    $('.clients').text(proj.labels)

}

function getUrl(){
    var clientEmail = $('#clientEmail').val();
    var clientSubject = $('#clientSubject').val();
    var clientBody = $('#clientTextArea').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${clientEmail}&su=${clientSubject}&body=${clientBody}&bcc=someone.else@example.com`)
    
}

