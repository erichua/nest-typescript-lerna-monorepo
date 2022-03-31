import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);

mock.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });
  