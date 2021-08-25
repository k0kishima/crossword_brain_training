import React from 'react';
import { useDispatch } from 'react-redux';
import { questionStore } from 'store/question';
import { PassButton } from '../Presentation';

export const PassButtonContainer: React.FC = () => {
  const dispatch = useDispatch();

  const handleClieck = () => {
    dispatch(questionStore.actions.reset());
  };

  return <PassButton handleClick={handleClieck} />;
};
