import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('cd-place-my-order functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('cd-place-my-order main page shows up', function() {
  F('title').text('cd-place-my-order', 'Title is set');
});
