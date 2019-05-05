import React, { Component } from 'react';
import { StatsCard } from '../../components/StatsCard/StatsCard.js';

class Dashboard extends Component {

  countNewOrders = () => {
  }

  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col col-lg-3 col-sm-6">
            <StatsCard
            />
          </div>
          <div className="col col-lg-3 col-sm-6">
            <StatsCard
            />
          </div>
          <div className="col col-lg-3 col-sm-6">
            <StatsCard
            />
          </div>
          <div className="col col-lg-3 col-sm-6">
            <StatsCard
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-8">
          </div>
          <div className="col col-md-4">
          </div>
        </div>
        <div className="row">
          <div className="col col-md-8">
          </div>
          <div className="col col-md-8">
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
