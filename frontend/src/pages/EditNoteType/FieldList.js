import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import ConnectedFieldArray from '../../components/ConnectedFieldArray';
import { TextButton } from '../../components/styles/ButtonStyles';
import { handleDragInFieldArray } from '../../lib/utils';
import DraggableList from '../../components/DraggableList';
import DraggableListItem from '../../components/DraggableListItem';

export default class FieldList extends Component {
  render() {
    return (
      <ConnectedFieldArray name="fieldDefinitions">
        {({ values, fields }) => (
          <DraggableList
            onDragEnd={dragInfo => handleDragInFieldArray({ dragInfo, fields })}
          >
            {provided => (
              <Fragment>
                {fields.map((name, index) => {
                  const uniqueKey =
                    (values.fieldDefinitions[index] || {}).id || String(index);
                  return (
                    <DraggableListItem
                      key={uniqueKey}
                      uniqueKey={uniqueKey}
                      index={index}
                      name={`${name}.key`}
                      onRemove={() => fields.remove(index)}
                    />
                  );
                })}
                {provided.placeholder}
                <li>
                  <TextButton
                    type="button"
                    textColor="good"
                    onClick={() =>
                      fields.push({
                        id: shortid.generate(),
                        key: ''
                      })
                    }
                  >
                    + New Field
                  </TextButton>
                </li>
              </Fragment>
            )}
          </DraggableList>
        )}
      </ConnectedFieldArray>
    );
  }
}
