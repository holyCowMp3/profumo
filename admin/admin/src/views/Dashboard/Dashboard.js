import React, {Component} from 'react';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalDaySalary: 0,
      newOrders: 20,
      newUsers: 0,
      data: []
    };
  }
  //
  // getJwt() {
  //   var headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Connection': 'keep-alive',
  //   };
  //   var dataString = '{"identifier":"test","password":"testtest"}';
  //   return fetch('https://profumo.com.ua/auth/local',
  //     {
  //       method: 'POST',
  //       headers: headers,
  //       body: dataString,
  //     }
  //   ).then(body => body.json().jwt);
  // }

  // getDataFromSite(jwt, body) {
  //   var headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + jwt,
  //     'Connection': 'keep-alive',
  //   };
  //   return fetch('https://profumo.com.ua/graphql', {
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify({query: body})
  //   }).then(body => body.json());
  // }

  componentWillReceiveProps(nextProps, nextContext) {
    this.getStats();
    this.setState(nextProps);
  }
  //
  // getOptions = query => {
  //   const params = {
  //     _limit: 20,
  //     _start: this.state.start,
  //     source: this.props.relation.plugin || 'content-manager',
  //   };
  //   // Set `query` parameter if necessary
  //   if (query) {
  //     delete params._limit;
  //     delete params._skip;
  //     params[`${this.props.relation.displayedAttribute}_contains`] = query;
  //   }
  //   // Request URL
  //   let requestUrl = '/content-manager/stats';
  //   // Call our request helper (see 'utils/request')
  //   return request(requestUrl, {
  //     method: 'GET',
  //     params,
  //   })
  //     .then(response => {
  //       console.log(response.length);
  //       /* eslint-disable indent */
  //       const options = isArray(response)
  //         ? response.map(item => ({
  //           value: item,
  //           label: templateObject(
  //             {mainField: this.props.relation.displayedAttribute},
  //             item
  //           ).mainField,
  //         }))
  //         : [
  //           {
  //             value: response,
  //             label: response[this.props.relation.displayedAttribute],
  //           },
  //         ];
  //       /* eslint-enable indent */
  //       const newOptions = cloneDeep(this.state.options);
  //       options.map(option => {
  //         // Don't add the values when searching
  //         if (
  //           findIndex(newOptions, o => o.value.id === option.value.id) === -1
  //         ) {
  //           return newOptions.push(option);
  //         }
  //       });
  //       return this.setState({
  //         options: newOptions,
  //         isLoading: false,
  //       });
  //     })
  //     .catch(() => {
  //       strapi.notification.error(
  //         'content-manager.notification.error.relationship.fetch'
  //       );
  //     });
  // };
  //
  // getStats = () => {
  //   var jwt = '';
  //   return this.getJwt().then(res => {
  //     jwt = res;
  //     this.getDataFromSite(res, `query{
  //                                     usersConnection{
  //                                    \t\tgroupBy{
  //                                         createdAt{
  //                                           key
  //                                         }
  //                                       }
  //                                     }
  //                                   }`
  //     ).then(res => res.data.usersConnection.groupBy.createdAt).map(
  //       key => {
  //         return {
  //           x: key.toLocaleDateString(),
  //           y: this.getDataFromSite(jwt, `
  //           query{
  //             usersConnection (where:{createdAt:"${key.toISOString()}"}){
  //               aggregate{
  //                 count
  //               }
  //             }
  //           }
  //         `)
  //         };
  //       }
  //     );
  //   });
  //
  // }

  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col col-md-12">
            {/*<CardDash symbol={<Money color={'success'}/>} title={'Продажи по датам'} graph={<Calendar height={300}/>}/>*/}

          </div>
          <div className="col col-md-12">
            {/*<CardDash symbol={<Money color={'success'}/>} title={'График регистраций'}*/}
            {/*  graph={<LineChart data={this.getStats()} height={300}/>}/>*/}
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
