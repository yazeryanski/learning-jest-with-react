// src/mocks/server.js
import { setupServer } from 'msw/node';
import api from './api/api';
// This configures a request mocking server with the given request handlers.
export const server = setupServer(api);