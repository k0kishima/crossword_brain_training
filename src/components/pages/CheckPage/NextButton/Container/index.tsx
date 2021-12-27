import React from 'react';
import { useDispatch } from 'react-redux';
import { answerStore } from 'store/answer';
import { NextButton } from '../Presentation';

export const NextButtonContainer: React.FC = () => {
  const dispatch = useDispatch();

  const handleClieck = () => {
    dispatch(answerStore.actions.clear());
  };

  return <NextButton handleClick={handleClieck} />;
};
