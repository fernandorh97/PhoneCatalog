import 'react-native';
import React from 'react';
import App from '@/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('App render', () => {
  renderer.create(<App />);
});
