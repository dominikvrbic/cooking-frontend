import React from 'react';

import { ApplicationRouter } from './ApplicationRouter';
import { observer } from 'mobx-react';

export const App = observer(() => {
  return <ApplicationRouter />;
});
