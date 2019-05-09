/**
 *
 * EditRelations
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

// Components.
import SelectOne from '../SelectOne';
import SelectMany from '../SelectMany';

import styles from './styles.scss';

function EditRelations(props) {

  function Store(initialState = {categoryId:''}) {
    this.state = initialState;
  }
  Store.prototype.mergeState = function(partialState) {
    Object.assign(this.state,partialState);
  };

  Store.prototype.getState = function (){
    return this.state;
  };

  const myStore = new Store();


  return (
    <div className={styles.editFormRelations}>
      {props.displayedRelations.map(relationName => {
        const relation = get(props.schema, ['relations', relationName], {});

        if (
          [
            'oneWay',
            'oneToOne',
            'manyToOne',
            'oneToManyMorph',
            'oneToOneMorph',
          ].includes(relation.nature)
        ) {
          return (
            <SelectOne
              mergeState={myStore.mergeState.bind(myStore)}
              getState={myStore.getState.bind(myStore)}
              currentModelName={props.currentModelName}
              key={relationName}
              record={props.record}
              relation={relation}
              schema={props.schema}
              setRecordAttribute={props.changeData}
              location={props.location}
              onRedirect={props.onRedirect}
            />
          );
        }

        return (
          <SelectMany
            mergeState={myStore.mergeState.bind(myStore)}
            getState={myStore.getState.bind(myStore)}
            currentModelName={props.currentModelName}
            key={relationName}
            isDraggingSibling={props.isDraggingSibling}
            location={props.location}
            moveAttr={props.moveAttr}
            moveAttrEnd={props.moveAttrEnd}
            onAddRelationalItem={props.onAddRelationalItem}
            onRedirect={props.onRedirect}
            onRemoveRelationItem={props.onRemoveRelationItem}
            record={props.record}
            relation={relation}
            schema={props.schema}
          />
        );
      })}
    </div>
  );
}

EditRelations.defaultProps = {
  displayedRelations: [],
  isDraggingSibling: false,
  moveAttr: () => {},
  moveAttrEnd: () => {},
  record: {},
  schema: {},
};

EditRelations.propTypes = {
  changeData: PropTypes.func.isRequired,
  currentModelName: PropTypes.string.isRequired,
  displayedRelations: PropTypes.array,
  isDraggingSibling: PropTypes.bool,
  location: PropTypes.object.isRequired,
  moveAttr: PropTypes.func,
  moveAttrEnd: PropTypes.func,
  onAddRelationalItem: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
  onRemoveRelationItem: PropTypes.func.isRequired,
  record: PropTypes.object,
  schema: PropTypes.object,
};

export default EditRelations;
