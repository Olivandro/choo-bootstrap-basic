const html = require('choo/html')

module.exports = (state) => {
  return html `
  <footer class="container py-3 my-5 text-center">
    <div class="row">

      <div class="col-lg-4">

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#about">
          About
        </button>

        <!-- Modal -->
        <div class="modal fade" id="about" tabindex="-1" role="dialog" aria-labelledby="aboutTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="aboutTitle">About</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">Dismiss</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="font-weight-normal text-left"><em>Moses the Lonely Londoner</em> is a project set on investigating the concept of intimate digital spaces, namely that of the telecocoon - first described in Japanese teen keitai culture as an invisible space linked to an individual's mobile device, where intimacy at a distance is possible through a person being connected to their inner circle of friends, family and contacts at all times.</p>

                <p class="font-weight-normal text-left">This project takes inspiration from Moses Aloetta, the main character in Sam Selvon’s novel <em>The Lonely Londoners</em>, which follows the lives of various Caribbean immigrants around the period of the Windrush generation in London. By drawing passages from the book and feeding them into an AI chatbot, developed using machine learning, Moses is reimagined in the 21st century.</p>

                <p class="font-weight-normal text-left">Drawing parallels between the loneliness expressed in Selvon’s 1950s London and the notions of isolation propelled by Social Media, users are invited to connect with Moses on their mobile device share content with him and enter his telecocoon. A virtual mosaic featuring images, videos, and gifs shared with Moses online will be comprised and presented in the forthcoming exhibition and event:</p>

                <ul class="font-weight-normal text-left">
                  <li>Raven Row Openday, Raven Row Gallery (4 to 5 May, 2019)</li>
                  <li>For the Time Being, The Photographers' Gallery (11 to 12 May, 2019)</li>
                </ul>

                <p class="font-weight-normal text-left"><em>Moses the Lonely Londoner</em> is a artistic project developed by <a href="https://home.agorama.org.uk" terget="_blank">Agorama</a></p>

                <p class="font-weight-normal text-left">This project has been commissioned by the Royal College of Art in partnership with the Photographers' Gallery.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#privacy">
          Privacy Policy
        </button>

        <!-- Modal -->
        <div class="modal fade" id="privacy" tabindex="-1" role="dialog" aria-labelledby="privacyTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="privacyTitle">Privacy Policy</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">Dismiss</span>
                </button>
              </div>
              <div class="modal-body">
                <h3 class="text-left">Introduction</h3>
                <p class="font-weight-normal text-left">Data privacy is a core ideal to Agorama. We take the privacy of our users and audiences very seriously. The following notice will outline our data privacy policy for users that participate in the artistic project <em>Moses the Lonely Londoner</em>. Please note by agreeing with our terms of service, you are also agreeing with Agorama's data practice for this project.</p>

                <h3 class="text-left">Who we are?</h3>
                <p class="font-weight-normal text-left">Agorama is a creative collective of artists, curators, designers and developers that operate in the field of art, research and design.</p>

                <h3 class="text-left">What information do we collect?</h3>
                <p class="font-weight-normal text-left">For the project <em>Moses the Lonely Londoner</em>, the only portion of this project that collects data is Moses the chatbot. As part of Moses's operation, the chatbot records all text content and media content sent by the user.</p>
                <p class="font-weight-normal text-left">All text content sent to Moses is recorded to a datebase. This data is used for two purposes, for the chatbot to keep track of who it's conversing with and where to reply, and for the purpose of obtaining further training data for machine learning purposes.</p>
                <p class="font-weight-normal text-left">Digital media (gifs, images and videos) collected by Moses the chatbot is captured <em>anonymously</em>. The purpose for this collection is for the development of a creative moving image piece. Thus, by participating in the project and sharing digital media with Moses the chatbot, you are directly agreeing with the terms of service for this project and this privacy policy. Please do not share <b>private, sexual, gratuitous, or sensitive material!!</b></p>

                <h3 class="text-left">How long do we keep your personal data for?</h3>
                <p class="font-weight-normal text-left">Due to the nature of the project and the text data collected for machine learner purposes. This information is kept indefinitely for training purposes only.</p>
                <p class="font-weight-normal text-left">For all digital media collected, this data will be removed every six months, or earlier if the repository that houses this data exceeds its limit. In the case of the artistic moving image work(s), this content will be created at the time of collection thereby becoming an original piece of creative work - thus again the emphasis on <b>not sharing private, sexual, gratuitous, or sensitive material!!</b></p>

                <h3 class="text-left">Your rights in relation to personal data</h3>
                <p class="font-weight-normal text-left">By your consent. Consent for this project is given by the user through agreeing with the terms of service for the project <em>Moses the Lonely Londoner</em>.</p>

                <h3 class="text-left">Use of automated decision-making and profiling</h3>
                <p class="font-weight-normal text-left">Agorama does not believe in auto decision and profiling of any individual, whether by race, colour of skin, gender, sexuality, religious belief, political belief and so forth. Any auto decision and or profiling happens on a language basis, meaning for a computer to understand dialogue and respond to a user correctly.</p>

                <h3 class="text-left">How to contact us?</h3>
                <p class="font-weight-normal text-left">If you have any questions please feel free to contact Agorama directly: admin@agorama.org.uk.</p>

                <h3 class="text-left">Use of cookies and other technologies</h3>
                <p class="font-weight-normal text-left"><em>Moses the Lonely Londoner</em> does not use cookies, tracking software or spyware.</p>

                <h3 class="text-left">Linking to other websites / third party content</h3>
                <p class="font-weight-normal text-left">Please note <em>Moses the Lonely Londoner</em> is not sponsored or financed by <a href="https://www.facebook.com/policies/">Facebook</a> or <a href="https://www.snap.com/en-US/terms/">Snapchat</a>. This project only uses these platforms for the purposes of reaching audiences. Please see Facebook and Snapchat's terms of service for information of their uses of your data.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#terms">
          Terms of Service
        </button>

        <!-- Modal -->
        <div class="modal fade" id="terms" tabindex="-1" role="dialog" aria-labelledby="termsTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="termsTitle">Terms of Service</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">Dismiss</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="font-weight-normal text-left">The terms of service for the users willing or interested in participating in the project <em>Moses the Lonely Londoner</em>.</p>
                <p class="font-weight-normal text-left">By connecting to Moses the chatbot through Facebook Messenger, a users is giving their direct consent for the participation in an artistic project.</p>
                <p class="font-weight-normal text-left">As part of our terms of service, we ask user who do participate to abstain from sharing <b>private, sexual, gratuitous, or sensitive material.</b>.</p>
                <p class="font-weight-normal text-left">In addition, by consenting to these terms of service, a user also consents to our privacy policy. Please see our Privacy Policy tab for further information on our data collection policy.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
  `
}
