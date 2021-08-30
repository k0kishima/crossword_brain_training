import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { CrosswordTable } from 'components/shared/CrosswordTable';

const selector = ({ question }: RootState) => ({
  tableSize: question.tableSize,
});

export const TableContainer: React.VFC = () => {
  // TODO: 設定用のsliceで保持して一元的に管理したい
  const { tableSize } = useSelector(selector);

  // NOTE:
  // 行もfillで作ってしまうと各々の要素が他要素の参照になってしまい、
  // ある箇所を編集したら全行の同列が更新されてしまうためmapで行に相当する配列を各々作る
  const allBlankCells = Array(tableSize)
    .fill([])
    .map(() => {
      return Array(tableSize).fill(false);
    });
  const [cells, setCells] = useState(allBlankCells);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    const index: string = event.currentTarget.dataset.index!;
    const [x, y] = index.split('-').map((x_or_y_str) => {
      return Number(x_or_y_str);
    });

    const newCells = [...cells];
    newCells[x][y] = !cells[x][y];
    setCells(newCells);

    return;
  };

  return <CrosswordTable cells={cells} handleClick={handleClick} />;
};
