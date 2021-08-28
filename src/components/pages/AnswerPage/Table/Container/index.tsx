import React, { useState } from 'react';
import { CrosswordTable } from 'components/shared/CrosswordTable';

export const TableContainer: React.VFC = () => {
  // TODO: 設定用のsliceで保持して一元的に管理したい
  const TABLE_SIZE = 5;

  // NOTE:
  // 行もfillで作ってしまうと各々の要素が他要素の参照になってしまい、
  // ある箇所を編集したら全行の同列が更新されてしまうためmapで行に相当する配列を各々作る
  const allBlankCells = Array(TABLE_SIZE)
    .fill([])
    .map(() => {
      return Array(TABLE_SIZE).fill(false);
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
