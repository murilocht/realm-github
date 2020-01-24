import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

YellowBox.ignoreWarnings(['Warning']);

const App = () => (
  <>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <Routes />
  </>
);

export default App;
