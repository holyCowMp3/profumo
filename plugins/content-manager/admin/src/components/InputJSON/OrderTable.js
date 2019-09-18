import React from 'react';
import OrderRow from "./OrderRow";

export default class OrderTable extends React.Component {

  //props: data(required)

  tableStyles = {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)',
    fontFamily: 'Lato',
    textAlign:'center'
  }

  render() {
    console.log(this.props);
    return (
      <table className={'table-striped'} style={this.tableStyles}>
        <thead style={{background:'rgba(104, 118, 142, 0.15)', fontWeight: 'bold'}}>
        <td style={{border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>№</td>
        <td style={{border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>Фото</td>
        <td style={{border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>Название</td>
        <td style={{border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>Цена</td>
        <td style={{border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>Количество</td>
        <td style={{border: '1px solid #E3E9F3', 'boxShadow' : '0px 1px 1px rgba(104, 118, 142, 0.05)'}}>Всего</td>
        </thead>
        <tbody>
        {this.props.data.map((elem, index) =>
          <OrderRow
            index={index + 1}
            key={elem.product.id}
            id={elem.product.id}
            count={elem.count}
          />)}
        </tbody>
      </table>
    )
  }
}
