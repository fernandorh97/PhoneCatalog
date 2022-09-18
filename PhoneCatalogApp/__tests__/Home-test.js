import 'react-native';
import React from 'react';
import {Home} from '@/screens';
import {store} from '@/store';
import {Provider} from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Home screen', () => {
  renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
});
