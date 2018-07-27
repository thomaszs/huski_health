import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body id="dashboard-body" className="keen-dashboard">
          <div id="root">
            <div id="navbar" className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={{backgroundColor: "#003399"}}>
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="../">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a className="navbar-brand" href="./">HuskiHealth &raquo; </a>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-left">
                    <li>
                      <a href="https://keen.io">Home</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container-fluid">

              <div className="row">
                <div className="col-sm-3">
                  <div className="chart-wrapper">
                    <div className="chart-title">
                      <h2>Leonard</h2>
                      <img className="pet-img" style={{width: "100%"}} src="https://toll-imageinaboxllc.netdna-ssl.com/wp-content/uploads/2014/06/Fat-Cat_400-2.jpg" />
                    </div>
                    <div className="chart-stage" id="chart-01">

                    </div>
                    <div className="chart-notes">
                      <table className="table table-dark" style={{fontSize: 16}}>
                        <tbody>
                          <tr>
                            <td>Weight:</td>
                            <td>22lbs</td>
                          </tr>
                          <tr>
                            <td>Age:</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>Birthday:</td>
                            <td>April 8, 2012</td>
                          </tr>
                          <tr>
                            <td>Breed:</td>
                            <td>Egyptian Mau</td>
                          </tr>
                          <tr>
                            <td>Owners:</td>
                            <td>Lexi</td>
                          </tr>
                          <tr>
                            <td>Notes:</td>
                            <td>On a weightloss plan - NO TREATS</td>
                          </tr>
                          <tr>
                            <td>
                              <button type="button" className="btn btn-primary">Edit Profile</button>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success">Add Activity</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="chart-wrapper">
                        <div className="chart-title">
                          <h2>Weight over Time</h2>
                        </div>
                        <div className="chart-stage" id="chart-02">
                          <img style={{width: "100%"}} src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7398_light.jpg" />
                        </div>
                        <div className="chart-notes">
                          Notes about this chart
                        </div>
                      </div>

                      <h2>Activity Timeline</h2>
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

                    <div className="col-sm-4">
                      <div className="chart-wrapper">
                        <div className="chart-title">
                          <h2>Current Weight</h2>
                        </div>
                        <div className="chart-stage" id="chart-05">
                          <h1>22lbs</h1>
                        </div>
                        <div className="chart-notes">
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="chart-wrapper">
                        <div className="chart-title">
                          <h2>Last Fed</h2>
                        </div>
                        <div className="chart-stage" id="chart-01">
                          <h1>8:00am</h1>
                        </div>
                        <div className="chart-notes">
                          July 25, 2018
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="chart-wrapper">
                        <div className="chart-title">
                          <h2>Last Active</h2>
                        </div>
                        <div className="chart-stage" id="chart-02">
                          <h1>July 23, 2018</h1>
                        </div>
                        <div className="chart-notes">
                          Notes about this chart
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="chart-wrapper">
                        <div className="chart-title">
                          <h2>Did you know...</h2>
                        </div>
                        <div className="chart-stage" id="chart-03">
                          <p>Frequencies of 20 to 50 Hertz are helpful in speeding the healing process of bone injuries. Cat's purr vibrations
                            which range from 20 – 140 Hertz, can help heal soft tissue injuries to ligaments, tendons and muscles.
                          </p>
                        </div>
                        <div className="chart-notes">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </body>
    </div>
    );
  }
}

export default App;
