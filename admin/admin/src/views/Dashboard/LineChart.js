import React, {Component} from 'react';
import {ResponsiveLine} from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
class LineChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalDaySalary: 0,
      newOrders: 0,
      newUsers: 0,
      data: [
        {
          'id': 'users',
          'color': 'hsl(106, 70%, 50%)',
          'data': [
            {
              'x': 'helicopter',
              'y': 159
            },
            {
              'x': 'boat',
              'y': 277
            },
            {
              'x': 'train',
              'y': 217
            },
            {
              'x': 'subway',
              'y': 182
            },
            {
              'x': 'bus',
              'y': 258
            },
            {
              'x': 'car',
              'y': 48
            },
            {
              'x': 'moto',
              'y': 23
            },
            {
              'x': 'bicycle',
              'y': 111
            },
            {
              'x': 'horse',
              'y': 204
            },
            {
              'x': 'skateboard',
              'y': 59
            },
            {
              'x': 'others',
              'y': 67
            }
          ]
        },
      ]
    };
  }
  componentWillReceiveProps(nextProps, nextContext) {

  }

  render() {
    return (
      <div style={{height:this.props.height}}>
        <ResponsiveLine
          data={this.props.data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
        )
      </div>
    );
  }
}
export default LineChart;
