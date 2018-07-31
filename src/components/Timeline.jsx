import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <div className="chart-stage" id="chart-02">
            <h2>Activity Timeline</h2>
            <button type="button" className="btn btn-activity">Add Activity</button>
            <div className="page">
              <div className="page__demo">
                <div className="main-container page__container">
                  <div className="timeline">
                    <div className="timeline__group">
                      <span className="timeline__year">2013</span>
                      <div className="timeline__box">
                        <div className="timeline__date">
                          <span className="timeline__day">2</span>
                          <span className="timeline__month">Jun</span>
                        </div>
                        <div className="timeline__post">
                          <div className="timeline__content">
                            <p>Went for a 30 minute run but Leonard refused to jog so I ended up carrying him</p>
                          </div>
                        </div>
                      </div>
                      <div className="timeline__box">
                        <div className="timeline__date">
                          <span className="timeline__day">4</span>
                          <span className="timeline__month">Jun</span>
                        </div>
                        <div className="timeline__post">
                          <div className="timeline__content">
                            <p>Bought a new red laser and played with Leonard for an hour</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__group">
                      <span className="timeline__year">2016</span>
                      <div className="timeline__box">
                        <div className="timeline__date">
                          <span className="timeline__day">14</span>
                          <span className="timeline__month">Jul</span>
                        </div>
                        <div className="timeline__post">
                          <div className="timeline__content">
                            <p>Went on a trip and Leonard was DEFINITELY overfed. Time to start a diet!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__group">
                      <span className="timeline__year">2018</span>
                      <div className="timeline__box">
                        <div className="timeline__date">
                          <span className="timeline__day">28</span>
                          <span className="timeline__month">Aug</span>
                        </div>
                        <div className="timeline__post">
                          <div className="timeline__content">
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
        </div>
      </div>
    );
  }
}
export default Timeline;