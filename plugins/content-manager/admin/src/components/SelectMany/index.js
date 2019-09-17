/**
 *
 * SelectMany
 *
 */

import React, {Fragment} from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import {
  cloneDeep,
  includes,
  isArray,
  isNull,
  isUndefined,
  get,
  findIndex,
  isEmpty,
  groupBy, isFunction,
} from 'lodash';

// Utils.
import request from 'utils/request';
import templateObject from 'utils/templateObject';

// CSS.
import 'react-select/dist/react-select.css';
// Component.
import SortableList from './SortableList';
// CSS.
import styles from './styles.scss';

class SelectMany extends React.PureComponent {
  state = {
    isLoading: true,
    options: [],
    start: 0,
    oldCatId:'--',
    newCatId:'---'
  };
  componentDidMount() {

    this.getOptions('');
  }

  componentDidUpdate(prevProps, prevState) {
    if (isEmpty(prevProps.record) && !isEmpty(this.props.record)) {
      const values = (
        get(this.props.record, this.props.relation.alias) || []
      ).map(el => el.id || el._id);
      const options = this.state.options.filter(el => {
        return !values.includes(el.value.id || el.value._id);
      });
      this.state.options = options;
    }
    if (prevState.start !== this.state.start) {
      this.getOptions('');
    }
    if (
      this.props.relation.collection === 'property' &&
      this.props.currentModelName === 'product'
    ) {

      if (prevProps.getState().categoryId !== '') {
        this.state.newCatId = prevProps.getState().categoryId;
        if (this.state.newCatId !== this.state.oldCatId) {
          this.state.oldCatId = prevProps.getState().categoryId;
          const values = get(this.props.record, this.props.relation.alias);
          for (let i in values) {
           // this.handleRemove(i);
          }

        }
        this.getOptions('');
      }
    }
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
    let requestUrl = `/content-manager/explorer/${this.props.relation.model ||
      this.props.relation.collection}`;
    if (
      this.props.relation.collection === 'property' &&
      this.props.currentModelName === 'product'
    ) {
      delete params.source;
      requestUrl = '/categories/'+this.state.newCatId;
    }
    // Call our request helper (see 'utils/request')
    return request(requestUrl, {
      method: 'GET',
      params,
    })
      .then(response => {

        /* eslint-disable indent */
        console.log(response);
        const options = isArray(response.properties)
          ? response.properties.map(item => ({
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
        if (
          this.props.relation.collection === 'property' &&
          this.props.currentModelName === 'product'
        ) {

          return this.setState({
            options: options,
            isLoading: false,
          });
        }
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

  handleInputChange = value => {
    const clonedOptions = this.state.options;
    const filteredValues = clonedOptions.filter(data =>
      includes(data.label, value)
    );
    if (filteredValues.length === 0) {
      return this.getOptions(value);
    }
  };

  handleChange = value => {
    if (
      this.props.relation.collection === 'property' &&
      this.props.currentModelName === 'product'
    ) {
      this.state.options = this.state.options.filter(
        el =>
          !((el.value._id || el.value.id) === (value.id || value._id))
      );
      this.props.onAddRelationalItem({
        key: this.props.relation.alias,
        value: value,
      });

    } else{
      this.state.options = this.state.options.filter(
        el =>
          !((el.value._id || el.value.id) === (value.value.id || value.value._id))
      );
      this.props.onAddRelationalItem({
        key: this.props.relation.alias,
        value: value.value,
      });
    }


  };

  handleBottomScroll = () => {
    this.setState(prevState => {
      return {
        start: prevState.start + 1,
      };
    });
  };

  handleRemove = index => {
    const values = get(this.props.record, this.props.relation.alias);
    // Add removed value from available option;
    const toAdd = {
      value: values[index],
      label: templateObject(
        { mainField: this.props.relation.displayedAttribute },
        values[index]
      ).mainField,
    };
    this.setState(prevState => ({
      options: prevState.options.concat([toAdd]),
    }));

    this.props.onRemoveRelationItem({
      key: this.props.relation.alias,
      index,
    });

  };
  handleRemoveCustom = item => {
    const values = get(this.props.record, this.props.relation.alias);

    // Add removed value from available option;
    const toAdd = {
      value: item.value,
      label: templateObject(
        { mainField: this.props.relation.displayedAttribute },
        item.value
      ).mainField,
    };
    this.setState(prevState => ({
      options: prevState.options.concat([toAdd]),
    }));
    let index = values.findIndex( items => items.short_name? items.short_name===item.value.short_name :items.value.short_name===item.value.short_name );

    this.props.onRemoveRelationItem({
      key: this.props.relation.alias,
      index,
    });

  };
  // Redirect to the edit page
  handleClick = (item = {}) => {
    this.props.onRedirect({
      model: this.props.relation.collection || this.props.relation.model,
      id: item.value.id || item.value._id,
      source: this.props.relation.plugin,
    });
  };

  render() {
    const description = this.props.relation.description ? (
      <p>{this.props.relation.description}</p>
    ) : (
      ''
    );
    const value = get(this.props.record, this.props.relation.alias) || [];

    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div
        className={`form-group ${styles.selectMany} ${value.length > 4 &&
          styles.selectManyUpdate}`}
      >
        <label htmlFor={this.props.relation.alias}>
          {get(
            this.props.relation,
            'labelPlural',
            this.props.relation.labelPlural
          )
            ? get(
                this.props.relation,
                'labelPlural',
                this.props.relation.labelPlural
              )
            : get(this.props.relation, 'label', this.props.relation.label)}{' '}
          <span>({value.length})</span>
        </label>
        {description}
        <div></div>
        {(this.props.currentModelName==='product' && this.props.relation.alias==='properties')?<div></div>:<SortableList
          items={
            /* eslint-disable indent */
            isNull(value) || isUndefined(value) || value.size === 0
              ? null
              : value.map(item => {
                if (item) {
                  return {
                    value: get(item, 'value') || item,
                    label:
                      get(item, 'label') ||
                      templateObject(
                        { mainField: this.props.relation.displayedAttribute },
                        item
                      ).mainField ||
                      item.id,
                  };
                }
              })
          }
          /* eslint-enable indent */
          isDraggingSibling={this.props.isDraggingSibling}
          keys={this.props.relation.alias}
          moveAttr={this.props.moveAttr}
          moveAttrEnd={this.props.moveAttrEnd}
          name={this.props.relation.alias}
          onRemove={this.handleRemove }
          distance={1}
          onClick={this.handleClick}
        />}
        {
          (this.props.currentModelName==='product' && this.props.relation.alias==='properties')?
          Object.entries(
            groupBy(this.state.options, option => option.value.property_name))
            .map( (opts) => {
              return( <Fragment>
                  {description}
               <label htmlFor={opts[0]}>{opts[0]}</label>

               <Select
                 className={`${styles.select}`}
                 id={this.props.relation.alias}
                 isLoading={this.state.isLoading}
                 onChange={this.handleChange}
                 onInputChange={this.handleInputChange}
                 onMenuScrollToBottom={undefined}
                 options={opts[1]}
                 placeholder={
                   opts[0]
                 }
               />
                  <SortableList
                    items={
                      /* eslint-disable indent */
                      isNull(value) || isUndefined(value) || value.size === 0
                        ? null
                        : value.filter(it => it.value?it.value.property_name===opts[0]:it.property_name===opts[0]).map(item => {
                          if (item) {
                            return {
                              value: get(item, 'value') || item,
                              label:
                                get(item, 'label') ||
                                templateObject(
                                  { mainField: this.props.relation.displayedAttribute },
                                  item
                                ).mainField ||
                                item.id,
                            };
                          }
                        })
                    }
                    /* eslint-enable indent */
                    isDraggingSibling={this.props.isDraggingSibling}
                    keys={this.props.relation.alias}
                    moveAttr={this.props.moveAttr}
                    moveAttrEnd={this.props.moveAttrEnd}
                    name={this.props.relation.alias}
                    onRemove={this.handleRemoveCustom}
                    onCustomRemove={this.handleRemoveCustom}
                    distance={1}
                    onClick={this.handleClick}
                  />
                  <div className={styles.selectMany}></div>
             </Fragment>
          )
            }):<Fragment>
            <Select
              className={`${styles.select}`}
              id={this.props.relation.alias}
              isLoading={this.state.isLoading}
              onChange={this.handleChange}
              onInputChange={this.handleInputChange}
              onMenuScrollToBottom={this.handleBottomScroll}
              options={this.state.options}
              placeholder={
                <FormattedMessage id="content-manager.containers.Edit.addAnItem" />
              }
            />
          </Fragment>
        }

      </div>
    );
    /* eslint-disable jsx-a11y/label-has-for */
  }
}

SelectMany.defaultProps = {
  isDraggingSibling: false,
  moveAttr: () => {},
  moveAttrEnd: () => {},
};

SelectMany.propTypes = {
  isDraggingSibling: PropTypes.bool,
  moveAttr: PropTypes.func,
  moveAttrEnd: PropTypes.func,
  onAddRelationalItem: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
  onRemoveRelationItem: PropTypes.func.isRequired,
  record: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  relation: PropTypes.object.isRequired,
};

export default SelectMany;
