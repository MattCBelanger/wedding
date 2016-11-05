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
                <a pageScroll href="#info">Booking</a>
                <a pageScroll href="#misc">Misc</a>
            </div>
        </div>
        <div class='top-container'>
            <div class='title1'>
                Tiia and Matt Wedding 
            </div>
            <div class='title2'>
                July 8th 2017
            </div>
            <div class='title3'> 
                Come join us and party!
            </div>
        </div>
        <div id='where' class='info-container'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-6'>
                        <div class="title">
                            Where
                        </div>
                        <div class='content'>
                            Fairmont Le Château Montebello 
                            <div class='address'>
                                <div>392 Notre Dame</div>
                                <div> Quebec, Canada </div>
                                <div>  J0V 1L0 </div>
                            </div>
                        </div>
                        <div class='content'>
                            <a href='https://www.google.ca/maps/place/Fairmont+Le+Ch%C3%A2teau+Montebello/@45.6453106,-74.9517356,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce584bdcb2a6a7:0x2b2530aaf408ea45!8m2!3d45.6453106!4d-74.9495469' target='_blank' >Montebello on Google Maps</a>
                        </div>
                        <div class='content'>
                            <a href='http://www.fairmont.com/montebello/map/mapanddirections/' target='_blank' >Directions to Montebello</a>
                        </div>
                        <div class='content'>
                            <a href='http://www.fairmont.com/montebello/' target='_blank' >Montebello's Website</a>
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
                    <div class='col-xs-6'>
                        <img class='img-responsive' src='images/gazeebo.jpg' />
                    </div>
                    <div class='col-xs-6'>
                        <div class="title">
                            When
                        </div>
                        <div class='content bot-pad'>
                            July 8th 2017
                        </div>
                            <div class='content2'>
                            Ceremony 5:30pm - Water Gazebo
                        </div>
                        <div class='content2'>
                            Cocktails 6:30pm - Golf ClubHouse
                        </div>
                        <div class='content2'>
                            Dinner & Reception 7:30pm - Golf ClubHouse
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-xs-12 center pad-top'>
                        <div class='content smaller-font'>
                            Shuttles will be provided to and from the main lobby and the clubhouse, before cocktail hour and during the reception.
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-xs-12 center pad-top'>
                        <div class='content smaller-font'>
                             The ceremony will be outdoors on the lawn, weather permitting. Otherwise it will be inside in the Quebec Room.
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
                We have a block of rooms reserved at Montebello for July 8th. To make reservations and take advantage of our group rate follow the link below.
           </div>
            <div class='content'>
               <a class='purple' href='https://aws.passkey.com/go/merikalliobelanger' target='_blank' >Booking Website</a>
           </div>
           <div class='content'>
               If you do not wish to stay at Montebello there are plenty of B&Bs in there area. Here are some that we found.
           </div>
           <div class='content'>
                <a class='purple' href='http://www.auxdouceursdupassant.com/eng/acceuil.html' target='_blank' >Aux Douceurs du Passant</a>
           </div>
           <div class='content'>
                <a class='purple' href='http://www.aubergemontebello.com/' target='_blank'>Auberge Montebello</a>
           </div>
        </div>
        <div id='misc' class='misc-container'>
          <div class='title'>
            Misc
          </div>
          <div class='content'>
            Your presence at our wedding is the best gift we could ask for. 
            If you wish to contribute to our honeymoon, it would be very appriciated!
          </div>
          <div class='content'>
            We are looking forward to seeing all of you!
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
