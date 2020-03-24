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
                <p class="font-weight-normal text-left">Lorem ipsum dolor sit amet, at per etiam nobis alienum. Cum ponderum iudicabit cu, has eirmod elaboraret philosophia at. Eu mei diam ullum suavitate, numquam delenit te eum. Mei ei dicant suscipit reprehendunt. Eos elitr aliquip commune ea, et ius sonet scaevola.</p>

                <p class="font-weight-normal text-left">Lorem ipsum dolor sit amet, at per etiam nobis alienum. Cum ponderum iudicabit cu, has eirmod elaboraret philosophia at. Eu mei diam ullum suavitate, numquam delenit te eum. Mei ei dicant suscipit reprehendunt. Eos elitr aliquip commune ea, et ius sonet scaevola.</p>

                <p class="font-weight-normal text-left">Lorem ipsum dolor sit amet, at per etiam nobis alienum. Cum ponderum iudicabit cu, has eirmod elaboraret philosophia at. Eu mei diam ullum suavitate, numquam delenit te eum. Mei ei dicant suscipit reprehendunt. Eos elitr aliquip commune ea, et ius sonet scaevola.</p>

                <ul class="font-weight-normal text-left">
                  <li>Veniam aliquam inimicus sea ne</li>
                  <li>duo congue contentiones eu</li>
                </ul>

                <p class="font-weight-normal text-left">Lorem ipsum dolor sit amet, at per etiam nobis alienum. Cum ponderum iudicabit cu, has eirmod elaboraret philosophia at. Eu mei diam ullum suavitate, numquam delenit te eum. Mei ei dicant suscipit reprehendunt. Eos elitr aliquip commune ea, et ius sonet scaevola.</p>

                <p class="font-weight-normal text-left">Lorem ipsum dolor sit amet, at per etiam nobis alienum. Cum ponderum iudicabit cu, has eirmod elaboraret philosophia at. Eu mei diam ullum suavitate, numquam delenit te eum. Mei ei dicant suscipit reprehendunt. Eos elitr aliquip commune ea, et ius sonet scaevola.</p>
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
                <p class="font-weight-normal text-left">Principes gubergren maiestatis eos id, justo ludus accumsan ut est. Eum congue gloriatur consectetuer ea, nominati consetetur at pri, ut primis facilisis mel. Utroque appellantur referrentur eam cu, assum debet integre ex sea, reque ubique conclusionemque et vix. Sea ad libris graeci. Ea diam impedit deseruisse est, nam ex delenit adipiscing philosophia. Sale scripta aliquam id eum, ea vis cetero omittam scriptorem, probo alterum consequuntur te vix. Te sit vero oblique vivendo, no nisl summo eam.</p>

                <h3 class="text-left">Who we are?</h3>
                <p class="font-weight-normal text-left">Erat scribentur ad qui. Vis in diam appetere tractatos. Ipsum virtute ius ut, et postulant voluptaria sit. Accusam assentior mea no. Ea vim solum iusto perfecto, soluta partiendo voluptatum qui te. Aperiam detracto deleniti eu sea, vocibus phaedrum et quo.</p>

                <h3 class="text-left">What information do we collect?</h3>
                <p class="font-weight-normal text-left">Duo te quidam quaerendum appellantur, virtute oporteat consectetuer eu vis, ne cum quando percipit. Et expetendis eloquentiam nec, an nec lorem vivendo. In dictas pertinax conclusionemque pro, wisi veri deserunt sed in, ea eum senserit suavitate persequeris. Placerat intellegebat has ut, no vel elitr dolores vivendum. Utroque nonumes elaboraret vel at.</p>
                <p class="font-weight-normal text-left">Cum enim exerci urbanitas ut. Ne iudico dolores invidunt nam. Usu te verear qualisque dissentiunt, et novum aeque fastidii mea. Ut pri ferri constituam referrentur, sea ad autem aeterno pericula, ea vel doming gloriatur democritum.</p>
                <p class="font-weight-normal text-left">Cum enim exerci urbanitas ut. Ne iudico dolores invidunt nam. Usu te verear qualisque dissentiunt, et novum aeque fastidii mea. Ut pri ferri constituam referrentur, sea ad autem aeterno pericula, ea vel doming gloriatur democritum.</p>

                <h3 class="text-left">How long do we keep your personal data for?</h3>
                <p class="font-weight-normal text-left">Tota consulatu sententiae cu eos, sed ad nonumes adipiscing, et eos ignota voluptaria. Ea velit fierent his, vim dolor congue labore eu. Illud erant at vel. Pro ei tation veniam docendi, sit et erant consectetuer. Has ut munere legimus corpora. Debitis albucius te cum, vix facete integre at.</p>
                <p class="font-weight-normal text-left">Ne falli molestie est. Per homero aliquid feugiat ut, cu nec expetenda quaerendum. Oblique consequat vel in. Mel at tation aliquando inciderint, has choro aliquam an, pro at mazim placerat. Stet voluptatum in vel.
                </p>

                <h3 class="text-left">Your rights in relation to personal data</h3>
                <p class="font-weight-normal text-left">Eu tantas euismod moderatius per, cu vim dictas offendit argumentum, laudem voluptatum cotidieque no ius. In mel idque labore, veri accumsan est ne. Placerat evertitur vis id, in eam democritum constituam. Ad est partem perfecto. Eu mel torquatos quaerendum, ornatus maiorum quaerendum ad mea, at vidisse prompta sed. Nec tantas laoreet ne, in altera blandit eligendi per. Sit labitur complectitur voluptatibus ne, pro te dicant fabulas.</p>

                <h3 class="text-left">Use of automated decision-making and profiling</h3>
                <p class="font-weight-normal text-left">Nam amet tritani perpetua ea, posse appellantur eam eu. Quo partem aliquid elaboraret no. Ei dico sensibus ius, cum nibh incorrupte id. Ea eum viderer aliquando dissentias, accumsan hendrerit et vix. Eum fierent facilisis conceptam ei. Eos natum exerci no, sea fugit deseruisse honestatis ut.</p>

                <h3 class="text-left">How to contact us?</h3>
                <p class="font-weight-normal text-left">Mea mundi soleat at, pro illum commodo te, essent platonem principes ei sed. Torquatos efficiendi ut vis. Sit bonorum pericula ad. Quo at cibo augue pertinacia, his no quaestio reformidans signiferumque, hinc unum efficiendi eu vim. Quo malis omnes diceret an, te exerci corpora cum, prima feugait ius in. Nulla verterem scripserit eu mea. Dolorem propriae recteque nam in, ad sumo commune vel.</p>

                <h3 class="text-left">Use of cookies and other technologies</h3>
                <p class="font-weight-normal text-left">His an mazim putent, id exerci tamquam pericula vim. Cum paulo recusabo persecuti at, vim an alienum propriae cotidieque, per cu amet suas. Ad eam modo nibh fastidii, simul noster his in. Eos at quot persius appellantur, cum adhuc praesent evertitur ex. Ea wisi essent philosophia nam.</p>

                <h3 class="text-left">Linking to other websites / third party content</h3>
                <p class="font-weight-normal text-left">Eam no choro blandit pertinax, ex per inani congue essent, mei ut bonorum invenire. Per odio epicurei mediocritatem cu. Ne modo autem reprehendunt pro, pro clita legere no. Id ius probo putant utroque, vix at quas accusamus. Laoreet elaboraret reprehendunt eum cu. Qui ei salutatus constituam, ex diam eros recusabo eam, munere delicatissimi his an.</p>
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
                <p class="font-weight-normal text-left">Lorem ipsum dolor sit amet, alienum vivendum consequat ad eam. His ex omnis interpretaris, justo interpretaris an mea. At doctus habemus his, has ea clita verear inciderint. Vim id posse integre, ut mea facer habemus appareat.</p>
                <p class="font-weight-normal text-left">Reque solet accusata et quo, eam ei summo quidam explicari. Timeam inermis cum ut. Quo in iusto habemus, eos no nisl libris utamur. Ocurreret iracundia nec et, duis perpetua eos et. Graece labores concludaturque has id, novum blandit pri in. Eam nemore admodum patrioque cu. Animal dolorum nam in, mel ornatus docendi tacimates ut.</p>
                <p class="font-weight-normal text-left">An facer consul graece qui. Te tantas primis vix, vix ea stet nostrud posidonium. Aliquam placerat duo te. Congue lucilius menandri eos in, ea aeque fuisset pri, porro velit prompta ne his. Wisi simul constituto ut vis, deseruisse scripserit definitiones ne pro. Dolores antiopam cu pro, eu sed ullum forensibus incorrupte. Dicat vitae scribentur vis ex, usu ne cibo magna.</p>
                <p class="font-weight-normal text-left">Inani minim efficiendi eu vim. Eos ea duis meis admodum, id detracto scaevola ius. Et eum nihil regione honestatis. Ei sale semper quaerendum sea.</p>
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
