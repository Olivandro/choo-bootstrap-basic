const html = require('choo/html')

const footer = require('./components/footer')

module.exports = (state) => {
  return html `
  <body>


      <div class="p-3 p-md-5 m-md-3 row bg-light">

        <div class="text-center col-lg-4 p-lg-5 mx-auto my-5">
          <img src="./imgs/profile-round.png" class="card-img-top" />
          <h2 class="display-6 font-weight-normal">Moses Aloetta</h2>
          <p class="lead font-weight-normal">This is Moses, an AI power chatbot that was built off of Sam Selvon's fictional novel <em>The Lonely Londoners</em>.</p>
          <br>
          <p class="font-weight-normal">To connect and chat with Moses it is require to have Facebook. Please click on the botton below to connect with Moses on FB messenger.</p>
          <a class="btn btn-outline-secondary" href="#">Coming soon</a>
        </div>

        <div class="col-lg-8 p-lg-5 mx-auto my-5">
          <h2 class="display-7 font-weight-normal">Come take a journey with Moses.</h2>
          <!-- Implementation of iframe DOM for Journey with Moses... -->
          <iframe src="https://www.google.com/maps/d/embed?mid=1C7930ZHJs6XtL4HBfg3eoMBio3Eh1iVI" style="position:relative;top:0;bottom:0;left:0;right:0;height:85%;width:100%;" frameborder="0"></iframe>
          <p class="font-weight-normal">For those in London come experience a conversation with Moses through the city streets of London.</p>
        </div>

      </div>

      ${footer(state)}

  </body>
  `
}
