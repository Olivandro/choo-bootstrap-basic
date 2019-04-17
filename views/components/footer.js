const html = require('choo/html')

module.exports = (state) => {
  return html `
  <footer class="container py-3 my-5 text-center">
    <div class="row">

      <div class="col-lg-4">
        <h5>About</h5>
      </div>

      <div class="col-lg-4">
        <h5>Privacy Policy</h5>
      </div>

      <div class="col-lg-4">
        <h5>Terms of Service</h5>
      </div>

    </div>
  </footer>
  `
}
