import React from 'react';
import { CrosswordTable } from 'components/shared/CrosswordTable';

export const TableContainer: React.VFC = () => {
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    const classNameValue = event.currentTarget.className ? '' : 'filled';
    event.currentTarget.className = classNameValue;
    return;
  };

  // TODO: 設定用のsliceで保持して一元的に管理したい
  const TABLE_SIZE = 5;
  const blankCells = Array(TABLE_SIZE).fill(Array(TABLE_SIZE).fill(false));

  return <CrosswordTable cells={blankCells} handleClick={handleClick} />;
};
