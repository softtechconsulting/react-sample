import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PeopleViewer from './People';
import PersonService from '../services/PersonService';

configure({ adapter: new Adapter() });

jest.mock('../services/PersonService', () => ({ findAll: jest.fn() }));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PeopleViewer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays table of people', async () => {
  const p = Promise.resolve(TEST_PEOPLE);
  PersonService.findAll.mockImplementation(() => p);

  const wrapper = mount(<PeopleViewer />);

  await p;
  wrapper.update();
  expect(PersonService.findAll).toHaveBeenCalled();
  expect(wrapper.find('BootstrapTable').props().data).toEqual(TEST_PEOPLE);
});

const TEST_PEOPLE = [
  {
    "id": "3bd20db4-080d-48c2-972d-cb47631570f6",
    "eyeColor": "brown",
    "name": {
      "first": "Robbins",
      "last": "Chen"
    },
    "company": "KEGULAR",
    "email": "robbins.chen@kegular.biz",
    "phone": "+1 (998) 418-3974",
    "address": "346 School Lane, Fostoria, Idaho, 7755"
  },
  {
    "id": "da7758d6-d459-4ae6-9596-690bef88463a",
    "eyeColor": "brown",
    "name": {
      "first": "Lily",
      "last": "Trevino"
    },
    "company": "QUORDATE",
    "email": "lily.trevino@quordate.ca",
    "phone": "+1 (857) 426-3323",
    "address": "732 George Street, Gouglersville, Federated States Of Micronesia, 991"
  }
];
