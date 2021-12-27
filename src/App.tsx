import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QuestionPage } from 'components/pages/QuestionPage';
import { AnswerPage } from 'components/pages/AnswerPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <QuestionPage />
          </Route>
          <Route path="/answer">{AnswerPage}</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
