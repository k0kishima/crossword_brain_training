import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { CrosswordTable } from 'components/shared/CrosswordTable';

const selector = ({ question }: RootState) => ({
  cells: question.cells,
});

export const QuestionContainer: React.VFC = () => {
  const { cells } = useSelector(selector);

  return <CrosswordTable cells={cells} />;
};
