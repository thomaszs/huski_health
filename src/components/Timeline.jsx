import React, { Component } from 'react';

class Timeline extends Component {
    render(){
        return(
            <div>
                <h2>Activity Timeline</h2>
            <div class="page">
              <div class="page__demo">
                <div class="main-container page__container">
                  <div class="timeline">
                    <div class="timeline__group">
                      <span class="timeline__year">2013</span>
                      <div class="timeline__box">
                        <div class="timeline__date">
                          <span class="timeline__day">2</span>
                          <span class="timeline__month">Jun</span>
                        </div>
                        <div class="timeline__post">
                          <div class="timeline__content">
                            <p>Went for a 30 minute run but Leonard refused to jog so I ended up carrying him</p>
                          </div>
                        </div>
                      </div>
                      <div class="timeline__box">
                        <div class="timeline__date">
                          <span class="timeline__day">4</span>
                          <span class="timeline__month">Jun</span>
                        </div>
                        <div class="timeline__post">
                          <div class="timeline__content">
                            <p>Bought a new red laser and played with Leonard for an hour</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="timeline__group">
                      <span class="timeline__year">2016</span>
                      <div class="timeline__box">
                        <div class="timeline__date">
                          <span class="timeline__day">14</span>
                          <span class="timeline__month">Jul</span>
                        </div>
                        <div class="timeline__post">
                          <div class="timeline__content">
                            <p>Went on a trip and Leonard was DEFINITELY overfed. Time to start a diet!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="timeline__group">
                      <span class="timeline__year">2018</span>
                      <div class="timeline__box">
                        <div class="timeline__date">
                          <span class="timeline__day">28</span>
                          <span class="timeline__month">Aug</span>
                        </div>
                        <div class="timeline__post">
                          <div class="timeline__content">
                            <p>Leonard is down 3 lbs!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        );
    }
}
export default Timeline;