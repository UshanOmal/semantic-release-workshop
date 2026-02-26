'use strict';

const express = require('express');

const router = express.Router();

/**
 * GET /
 * Home route - returns API info and available endpoints
 */
router.get('/', (req, res) => {
  res.json({
    name: 'semantic-release-workshop',
    version: process.env.npm_package_version || '1.0.0',
    description: 'A Node.js + Express app showcasing semantic-release, conventional commits, and husky',
    routes: [
      { method: 'GET', path: '/', description: 'API information' },
      { method: 'GET', path: '/health', description: 'Health check' },
      { method: 'GET', path: '/users', description: 'List all users' },
      { method: 'GET', path: '/users/:id', description: 'Get user by ID' },
      { method: 'POST', path: '/users', description: 'Create a new user' },
      { method: 'PUT', path: '/users/:id', description: 'Update a user' },
      { method: 'DELETE', path: '/users/:id', description: 'Delete a user' },
    ],
  });
});

/**
 * GET /health
 * Health check endpoint
 */
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.get('/test', (req, res) => {
  res.json({ status: 'test', timestamp: new Date().toISOString() });
});

module.exports = router;
