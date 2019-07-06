import React, {Component} from 'react';
// import Card from '@kiwicom/orbit-components/es/Card';
// import Stack from '@kiwicom/orbit-components/es/Stack';
// import CardSectionHeader from '@kiwicom/orbit-components/es/Card/CardSection/CardSectionHeader';
// import CardSection from '@kiwicom/orbit-components/es/Card/CardSection';
// import Heading from '@kiwicom/orbit-components/es/Heading';
// import {CardSectionContent} from '@kiwicom/orbit-components/es/Card/CardSection/index';
import {cloneDeep, findIndex, isArray} from 'lodash';

class CardDash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalDaySalary:0,
      newOrders:20,
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
    return (<div></div>
    );
  }
}

export default CardDash;
