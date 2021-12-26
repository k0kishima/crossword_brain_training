import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { CrosswordTable } from 'components/shared/CrosswordTable';

const selector = ({ question }: RootState) => ({
  cells: question.cells,
});

export const QuestionContainer: React.VFC = () => {
  const { cells } = useSelector(selector);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    return;
  };

  return <CrosswordTable cells={cells} handleClick={handleClick} />;
};
