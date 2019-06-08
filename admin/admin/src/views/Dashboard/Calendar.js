import React,{Component} from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalDaySalary: 0,
      newOrders: 0,
      newUsers: 0,
      data: [
        {
          'day': '2015-11-06',
          'value': 324
        },
        {
          'day': '2016-12-07',
          'value': 61
        },
        {
          'day': '2017-05-06',
          'value': 314
        }
      ]
    };
  }
  componentWillReceiveProps(nextProps, nextContext) {

  }

  render() {
    return (
      <div style={{height:this.props.height}}>
        <ResponsiveCalendar
          data={this.state.data}
          from="2015-03-01"
          to="2016-07-12"
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{top: 40, right: 40, bottom: 40, left: 40}}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left'
            }
          ]}
        />
      </div>
    );
  }
}
export default Calendar;
