import 'react-native';
import React from 'react';
import {AddButton, Button, Editable, InputView, PhoneItem} from '@/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('AddButton component', () => {
  renderer.create(<AddButton />);
});

it('Button component', () => {
  renderer.create(<Button />);
});

it('Editable component', () => {
  renderer.create(<Editable />);
});

it('InputView component', () => {
  renderer.create(<InputView />);
});

it('PhoneItem component', () => {
  renderer.create(<PhoneItem />);
});
