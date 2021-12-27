import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QuestionPage } from 'components/pages/QuestionPage';
import { AnswerPage } from 'components/pages/AnswerPage';
import { CheckPage } from 'components/pages/CheckPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <QuestionPage />
          </Route>
          <Route path="/answer">{AnswerPage}</Route>
          <Route path="/check">{CheckPage}</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
