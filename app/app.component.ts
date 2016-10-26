import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll/ng2-page-scroll';

@Component({
    selector: 'my-app',
    template: `
    <div class='top-container'>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-xs-10'>
                    <a pageScroll href="#info"><button>Info</button></a>
                    <a pageScroll href="#venue"><button>Venue</button></a>
                    <a pageScroll href="#three"><button>Contact</button></a>
                </div>
            </div>
        </div>
    </div>
    <div id='info' class='info-container'>
    Date, Venue, Schedule?
    </div>
    <div id='venue' class='venue-container'>
        Venue, alternate places to stay
    </div>
    <div id='three' class='three-container'>
        Menu? gift stuff? ( no gifts)
    </div>
    <div  class='fourth-container'>
        dinner menu?
    </div>
`
})
export class AppComponent { 
    constructor() { 
        PageScrollConfig.defaultDuration = 500;
    }
}
