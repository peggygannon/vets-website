import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import AddressState from
    '../../../../_health-care/_js/_components/address-state';

describe('<AddressState>', () => {
  let component = null;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(
      <AddressState state={{ state: 'F' }} onUserInput={(_unused) => {}}/>
    );
    assert.ok(component, 'Cannot even render component');
  });

  it('has sane looking features', () => {
    const selects = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'select');
    expect(selects).to.have.length(1);
  });
});
