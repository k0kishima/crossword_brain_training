import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  handleClick: () => void;
};

export const NextButton: React.FC<Props> = ({ handleClick }: Props) => {
  return (
    <Button variant="contained" onClick={handleClick} href="./">
      Next
    </Button>
  );
};
