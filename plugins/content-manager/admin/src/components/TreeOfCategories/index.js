import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {Growl} from 'primereact/growl';
import 'primeicons/primeicons.css';
import styles from '../../containers/EditPage/styles.scss';
import request from 'utils/request';

export class TreeOfCategories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes : [],
      selectedNodeKey: null,

    };
    this.onExpand = this.onExpand.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onUnselect = this.onUnselect.bind(this);
  }

  componentWillMount() {
    this.getOptions();
  }

  getOptions = query => {
    let requestUrl = '/categories/tree';
    return request(requestUrl, {
      method: 'GET',
    })
      .then(response => {
        return this.setState({
          nodes: response,
        });
      })
      .catch(() => {
        strapi.notification.error(
          'content-manager.notification.error.relationship.fetch'
        );
      });
  };


  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps);
  }

  handleClick(node) {
    console.log(node);
    if (!node.type) {
      this.context.router.history.push(
        `${this.props.routeParams.slug}/${node.key}${this.props.redirectUrl}`
      );
    } else {
      this.context.router.history.push(
        `${'product'}/${node.key}${this.props.redirectUrl}`
      );
    }
  }

  onExpand(event) {
    // this.growl.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
  }

  onCollapse(event) {// this.growl.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
  }

  onSelect(event) {
    console.log(this.props);
    // this.growl.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    this.handleClick(event.node);
  }

  onUnselect(event) {
  //  this.growl.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
  }

  render() {
    return (
      <div>
        <div className="content-section implementation">
          <Growl ref={(el) => this.growl = el} />
          <h2 className="first">Дерево категорий</h2>
          <Tree
            contentClassName={`${styles.links_wrapper}`}
            value={this.state.nodes}
            selectionMode="single"
            selectionKeys={this.state.selectedNodeKey}
            onSelectionChange={e => this.setState({selectedNodeKey: e.value})}
            onExpand={this.onExpand}
            onCollapse={this.onCollapse}
            onSelect={this.onSelect}
            onUnselect={this.onUnselect}
          />
        </div>
      </div>
    );
  }

}
TreeOfCategories.contextTypes = {
  router: function () {
    return React.PropTypes.func.isRequired;
  }
};
