import React from 'react';

export default class OrderRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ready: false
    };
  }

  componentWillMount() {
    fetch('https://profumo.com.ua/products/' + this.props.id)
      .then(response => {
        if (response.status >= 200 && response.status < 400) return response.json();
      })
      .then(data => {
        if (data) this.setState({data: data, ready: true});
      });
  }

  render() {
    if (this.state.ready)
      return (
        <tr>
          <td style={{
            border: '1px solid #E3E9F3',
            'boxShadow': '0px 1px 1px rgba(104, 118, 142, 0.05)'
          }}>{this.props.index}</td>
          <td style={{border: '1px solid #E3E9F3', 'boxShadow': '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>
            <img src={'https://profumo.com.ua' + this.state.data.photos[0].url}
              style={{maxHeight: '50px', maxWidth: '50px', objectFit: 'contain'}}/>
          </td>
          <td style={{border: '1px solid #E3E9F3', 'boxShadow': '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>
            <a href={'https://profumo.com.ua/product/' + this.props.id}>{this.state.data.name_ru}</a>
          </td>
          <td style={{
            border: '1px solid #E3E9F3',
            'boxShadow': '0px 1px 1px rgba(104, 118, 142, 0.05)'
          }}>{this.state.data.price} грн.
          </td>
          <td style={{
            border: '1px solid #E3E9F3',
            'boxShadow': '0px 1px 1px rgba(104, 118, 142, 0.05)'
          }}>{this.props.count}</td>
          <td style={{
            border: '1px solid #E3E9F3',
            'boxShadow': '0px 1px 1px rgba(104, 118, 142, 0.05)'
          }}>{this.state.data.price * this.props.count} грн.
          </td>
        </tr>
      );
    return '';
  }
}
