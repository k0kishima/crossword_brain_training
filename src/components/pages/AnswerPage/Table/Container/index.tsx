import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { CrosswordTable } from 'components/shared/CrosswordTable';
import { answerStore } from 'store/answer';

const selector = ({ answer }: RootState) => ({
  cells: answer.cells,
});

export const TableContainer: React.VFC = () => {
  const { cells } = useSelector(selector);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    const index: string = event.currentTarget.dataset.index!;
    const [x, y] = index.split('-').map((x_or_y_str) => {
      return Number(x_or_y_str);
    });
    dispatch(answerStore.actions.updateCell({ x, y }));

    return;
  };

  return <CrosswordTable cells={cells} handleClick={handleClick} />;
};
