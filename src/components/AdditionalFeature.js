import React from 'react';
import { useDispatch } from 'react-redux';
import { addFeature } from '../actions/actions';

const AdditionalFeature = props => {
  const addItem = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addItem(addFeature(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
