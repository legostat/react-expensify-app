import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 2 expenses and total amount $94.34', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={9434} expenseCount={2}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense and total amount $94.34', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={9434} expenseCount={1}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 0 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={0} expenseCount={0}/>);
  expect(wrapper).toMatchSnapshot();
});