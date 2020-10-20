import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeature } from '../actions/actions';
const AddedFeature = props => {
  const removeItem = useDispatch();
  return (
    <li>
      <button onClick={() => removeItem(removeFeature(props.feature))} className="button1">X</button>
      {props.feature.name}
    </li>
  );
};



export default AddedFeature;
