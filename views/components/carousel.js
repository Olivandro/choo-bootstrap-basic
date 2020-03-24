const html = require('choo/html')

module.exports = (state) => {
  return html `
    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="./imgs/1-zero.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="./imgs/2-rabbit.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="./imgs/4-kumori.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="./imgs/5-krakend.jpg" class="d-block w-100" alt="...">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
  `
}