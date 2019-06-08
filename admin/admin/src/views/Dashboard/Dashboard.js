import React, {Component} from 'react';
import Card from '@kiwicom/orbit-components/es/Card';
import Money from '@kiwicom/orbit-components/lib/icons/Money';
import PassengerAdd from '@kiwicom/orbit-components/lib/icons/PassengerAdd';
import Profit from '@kiwicom/orbit-components/lib/icons/Profit';
import Stack from '@kiwicom/orbit-components/es/Stack';
import CardSectionHeader from '@kiwicom/orbit-components/es/Card/CardSection/CardSectionHeader';
import CardSection from '@kiwicom/orbit-components/es/Card/CardSection';
import Heading from '@kiwicom/orbit-components/es/Heading';
import Calendar from './Calendar';
import Chart from '@kiwicom/orbit-components/lib/icons/Chart';
import {CardSectionContent} from '@kiwicom/orbit-components/es/Card/CardSection/index';
import LineChart from './LineChart';
import {cloneDeep, findIndex, isArray} from 'lodash';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalDaySalary:0,
      newOrders:0,
      newUsers:0,
      data:[]
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.getStats();
    this.setState(nextProps);
  }
  getOptions = query => {
    const params = {
      _limit: 20,
      _start: this.state.start,
      source: this.props.relation.plugin || 'content-manager',
    };
    // Set `query` parameter if necessary
    if (query) {
      delete params._limit;
      delete params._skip;
      params[`${this.props.relation.displayedAttribute}_contains`] = query;
    }
    // Request URL
    let requestUrl = `/content-manager/stats`;
    // Call our request helper (see 'utils/request')
    return request(requestUrl, {
      method: 'GET',
      params,
    })
      .then(response => {
        console.log(response.length);
        /* eslint-disable indent */
        const options = isArray(response)
          ? response.map(item => ({
            value: item,
            label: templateObject(
              { mainField: this.props.relation.displayedAttribute },
              item
            ).mainField,
          }))
          : [
            {
              value: response,
              label: response[this.props.relation.displayedAttribute],
            },
          ];
        /* eslint-enable indent */
        const newOptions = cloneDeep(this.state.options);
        options.map(option => {
          // Don't add the values when searching
          if (
            findIndex(newOptions, o => o.value.id === option.value.id) === -1
          ) {
            return newOptions.push(option);
          }
        });
        return this.setState({
          options: newOptions,
          isLoading: false,
        });
      })
      .catch(() => {
        strapi.notification.error(
          'content-manager.notification.error.relationship.fetch'
        );
      });
  };
  getStats = () => {


  }
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col col-lg-4 col-sm-6">
            <Card>
              <CardSection expandable>
                <CardSectionHeader subTitle="This is a description of the card." >
                  <Stack direction="row" align="center" justify="between">
                    <div><Money color="success" size="large" /></div>
                    <Heading type="title2" element="h2">
                      Заработок за день
                    </Heading>
                    <div>
                      <Stack direction="row" align="center">
                        <Heading type="title2" element="h2">
                          {this.state.totalDaySalary}
                        </Heading>
                      </Stack>
                    </div>
                  </Stack>
                </CardSectionHeader>
                <CardSectionContent>
                {/*//  <Calendar style ={{height:300}}/>*/}
                </CardSectionContent>
              </CardSection>
            </Card>
          </div>
          <div className="col col-lg-4 col-sm-6">
            <Card>
              <CardSection expandable>
                <CardSectionHeader subTitle="This is a description of the card." >
                  <Stack direction="row" align="center" justify="between">
                    <div><Profit  color="info" size="large"/></div>
                    <Heading type="title2" element="h2">
                      Новых заказов
                    </Heading>
                    <div>
                      <Stack direction="row" align="center">
                        <Heading type="title2" element="h2">
                          {this.state.newOrders}
                        </Heading>
                      </Stack>
                    </div>
                  </Stack>
                </CardSectionHeader>
                <CardSectionContent>
                {/*//  <Calendar style ={{height:300}}/>*/}
                </CardSectionContent>
              </CardSection>
            </Card>
          </div>
          <div className="col col-lg-4 col-sm-6">
            <Card >
              <CardSection expandable>
                <CardSectionHeader subTitle="This is a description of the card." >
                  <Stack direction="row" align="center" justify="between">
                    <div><PassengerAdd  color="warning" size="large"/></div>
                    <Heading type="title2" element="h2">
                      Новых пользователей
                    </Heading>
                    <div>
                      <Stack direction="row" align="center">
                        <Heading type="title2" element="h2">
                          {this.state.newUsers}
                        </Heading>
                      </Stack>
                    </div>
                  </Stack>
                </CardSectionHeader>
                <CardSectionContent>
                {/*//  <Calendar style ={{height:300}}/>*/}
                </CardSectionContent>
              </CardSection>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-12">
            <Card >
              <CardSection
                expandable
                initialExpanded>
                <CardSectionHeader subTitle="This is a description of the card." >
                  <Stack direction="row" align="center" justify="between">
                    <div><Chart color="info" size="large"/></div>
                    <Heading type="title2" element="h2">
                      Статистика дохода за год
                    </Heading>
                    <div></div>
                  </Stack>
                </CardSectionHeader>
                <CardSectionContent>
                  <Calendar height={500}/>
                </CardSectionContent>
              </CardSection>
            </Card>

          </div>
          <div className="col col-md-12">
            <Card >
              <CardSection
                expandable
                initialExpanded>
                <CardSectionHeader subTitle="This is a description of the card." >
                  <Stack direction="row" align="center" justify="between">
                    <div><PassengerAdd  color="warning" size="large"/></div>
                    <Heading type="title2" element="h2">
                      Продажи по категориям
                    </Heading>
                    <div></div>
                  </Stack>
                </CardSectionHeader>
                <CardSectionContent>
                  <LineChart height={400} />
                </CardSectionContent>
              </CardSection>
            </Card>

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
