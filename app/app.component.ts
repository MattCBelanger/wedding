import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll/ng2-page-scroll';

@Component({
    selector: 'my-app',
    template: `
    <div class='wed-container'>
        <div class='top-navbar'>
            <div class='nav-options'>
                <a pageScroll href="#where">Where</a>
                <a pageScroll href="#when">When</a>
                <a pageScroll href="#info">Info</a>
                <a pageScroll href="#misc">Misc</a>
            </div>
        </div>
        <div class='top-container'>
            <img [class]="classMap" [src]="urlVariable" />
            <div class='title'> 
            Come join us and party!
            </div>
        </div>
        <div id='where' class='info-container'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-6'>
                        <div class="title">
                            Where?
                        </div>
                        <div class='content'>
                            Fairmont Le Château Montebello, Rue Notre Dame, Montebello, QC
                            <a href='https://www.google.ca/maps/place/Fairmont+Le+Ch%C3%A2teau+Montebello/@45.6453106,-74.9517356,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce584bdcb2a6a7:0x2b2530aaf408ea45!8m2!3d45.6453106!4d-74.9495469' target='_blank' >Montebello on Google Maps</a>
                        </div>
                    </div>
                    <div class='col-xs-6'>
                        <img class='img-responsive' src='http://www.fodors.com/images/pois-thumbs/Exterior-483844-0-full.jpg' />
                    </div>
                </div>
            </div>
        </div>
        <div id='when' class='venue-container'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-3'>
                        <div class="title">
                            When?
                        </div>
                    </div>
                    <div class='col-xs-7 col-xs-offset-2'>
                        <div class='content'>
                            July 8th 2017
                        </div>
                            <div class='content'>
                            Ceremony 5:30pm
                        </div>
                        <div class='content'>
                            Cocktails 6:30pm - 7:30pm
                        </div>
                        <div class='content'>
                            Dinner & Recption starts at 7:30pm
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='info' class='booking-container'>
            <div class="title">
                Booking Info
            </div>
            <div class='content'>
                We have a block of rooms resvered at Montebello for the wedding. We will be looking up alternatives in the area if you wish you not stay at the hotel. ( But it IS amazing! :D)
           </div>
           <div class='content'>
                Information for booking and discount code to come.
           </div>
        </div>
        <div id='misc' class='misc-container'>
          <div class='title'>
            Misc
          </div>
          <div class='content'>
          <a href='http://www.fairmont.com/montebello/' target=''_blank>Montebello Website</a>
          </div>
        <div class='title'>
            Gifts
          </div>
          <div class='content'>
            We are not setting up a gift regsitery because our little boat can't hold anything more.
            Your presence at our wedding in the best present we could ask for. 
            If you did wish to contribute to our honeymoon it would be very appriciated!
          </div>
        </div>
    </div>
    `
})
export class AppComponent { 
    urlVariable: string;
    showPlay: boolean;
    videoTimeOut: any;
    classMap: any;
    constructor() { 
        PageScrollConfig.defaultDuration = 800;
        this.urlVariable = 'images/EdgeWalk-41.jpg';
        this.showPlay = true;
        this.classMap = {'viewHeight': false};
    }

    clicked() {
        //  <i *ngIf="showPlay" class="fa fa-play-circle fa-3x" aria-hidden="true"></i>
        if (this.urlVariable === 'images/EdgeWalk-41.jpg') {
            this.urlVariable = 'http://i.imgur.com/NADwJbx.gifv';
            this.showPlay = false;
            this.classMap = {'viewHeight': true};
            this.videoTimeOut = setTimeout(() => {
                this.showPlay = true;
                this.classMap = {'viewHeight': false};
                this.urlVariable = 'images/EdgeWalk-41.jpg';
            }, 18000)
        } else {
            this.urlVariable = 'images/EdgeWalk-41.jpg';
            this.showPlay = true;
            this.classMap = {'viewHeight': false};
            if (this.videoTimeOut) {
                clearTimeout(this.videoTimeOut);
            }
        }
    }
}
