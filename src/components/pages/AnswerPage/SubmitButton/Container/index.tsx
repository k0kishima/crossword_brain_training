import React from 'react';
import { useDispatch } from 'react-redux';
import { questionStore } from 'store/question';
import { SubmitButton } from '../Presentation';

export const SubmitButtonContainer: React.FC = () => {
  const handleClieck = () => null;

  return <SubmitButton handleClick={handleClieck} />;
};
