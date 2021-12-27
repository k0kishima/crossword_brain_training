import React from 'react';
import { TableContainer } from './Table';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { SubmitButtonContainer } from './SubmitButton/Container';

export const AnswerPage: React.FC = () => {
  const Styled = styled.div`
    button,
    a {
      margin: 10px 30px 30px 30px;
      cursor: pointer;
    }
  `;

  return (
    <Styled>
      <TableContainer />

      <Box textAlign="center">
        <SubmitButtonContainer />
      </Box>
    </Styled>
  );
};
