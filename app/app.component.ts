import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll/ng2-page-scroll';

@Component({
    selector: 'my-app',
    template: `
    <div class='top-container'>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-xs-10'>
                   <a pageScroll href="#info"><button>Wedding</button></a>
                </div>
            </div>
        </div>
    </div>
    <div id='info' class='info-container'>
        Date: 2o3842yo3r2g3
        Reception: 23f23f2f32f
        Time: 2342304
    </div>
    <div id='venue' class='venue-container'>
        DMontebbloe

    </div>
    <div class='three-container'>
        DMontebbloe

    </div>
    <div  class='fourth-container'>
        DMontebbloe

    </div>
`
})
export class AppComponent { 
    constructor() { 
        PageScrollConfig.defaultDuration = 500;
      }

//   public scrollElement() {
//     let element = document.getElementById('venue');
//     window.scrollTo(0, element.offsetTop, 500);
//   }

}
