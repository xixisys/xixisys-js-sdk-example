import React from 'react';
import { Route, Switch } from "wouter";

import Wrapper from './components/Wrapper';
import FrameWrapper from './components/FrameWrapper';
import Header from './components/Header';
import SdsHtml from './components/SdsHtml';
import ComplianceHtml from './components/ComplianceHtml';

function App() {
  return (
    <Wrapper>
      <Header/>

      <Switch>
        <Route path="/sds/:cas/:edition">
          {params => (
            <FrameWrapper>
              <SdsHtml cas={params.cas} edition={params.edition}/>
            </FrameWrapper>
          )}
        </Route>
        <Route path="/compliance/:cas">
          {params => (
            <FrameWrapper>
              <ComplianceHtml cas={params.cas}/>
            </FrameWrapper>
          )}
        </Route>
      </Switch>

    </Wrapper>
  );
}

export default App;
