const html = require('choo/html')

const carousel = require('./components/carousel')
const footer = require('./components/footer')

module.exports = (state) => {
  return html `
  <body>


      <div class="p-3 pr-md-5 pl-md-5 pb-md-5 pt-md-1 m-md-3 row bg-light">

        <div class="text-center col-lg-4 p-lg-5 mx-auto my-5">
          <img src="./imgs/logo-example.png" class="card-img-top" />
          <h2 class="display-6 font-weight-normal">Your Logo Here</h2>
          <p class="lead font-weight-normal">Sumo consequuntur mea et. Melius repudiare id sit. Pro te wisi oportere assentior. In clita molestie nam, scaevola assueverit comprehensam sit te. Usu viris efficiendi et, <em>eu iusto ceteros mea.</em></p>
          <br>
          <p class="font-weight-normal">In ponderum quaestio gubergren mel, diam integre sit te. Movet quaestio ei mel, possit inimicus persecuti pro et. An choro animal duo. His at impedit maiorum iracundia. Est dicant facilisi assentior id. Ei rebum summo nostro sed, eos at fugit quando suscipit.
          </p>
          <a class="btn btn-outline-dark" href="https://m.me/mosesthechatbot" target="_blank">Chat to Moses</a>
        </div>

        <div class="col-lg-8 p-lg-5 mx-auto my-5">
          <h2 class="display-7 font-weight-normal">You company or Project moto here.</h2>

          <!-- Implementation Image Carousel -->
          ${carousel(state)}
          <p class="font-weight-normal mt-3">Ut quas ferri illud sea, hendrerit scripserit persequeris ei his, sit an fabulas complectitur. Munere dignissim constituto ut pro. Nec eu labitur phaedrum, te eirmod feugiat senserit pri. Ad mel probatus consulatu conclusionemque. Esse percipit sed ei, per ex dicit pericula. Cibo option nam ne, commune voluptaria theophrastus pri an.</p>
          <p class="font-weight-normal">Et fuisset disputando cum, pro quando ridens legimus ex. Quot utamur ancillae sea cu, natum iisque pertinax ne vix. Eos id ancillae intellegebat consequuntur. Iudico adipisci mea eu, ne vis prima nostrum, tractatos theophrastus ne pro. Cu esse tota mea.</p> 
          <p class="font-weight-normal">Duo ei veritus scaevola torquatos, autem definitionem eum id. Has iisque diceret eu, iracundia incorrupte scriptorem est te. Sumo nonumy mea et, commodo platonem ius in. Tincidunt intellegebat eu vim, sit graece vivendo id. Oblique habemus an mea, ea stet mundi epicurei mea. Ut posse affert molestie sea. Mea ne eius movet omnium, fabulas dissentiunt et cum, ea ius error legere.</p>
        
        </div>

      </div>

      ${footer(state)}

      <script src="./js/jquery-3.3.1.slim.min.js"></script>
      <script src="./js/popper.min.js"></script>
      <script src="./js/bootstrap.min.js"></script>
  </body>
  `
}
