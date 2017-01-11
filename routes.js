'use strict';

const Joi = require('joi'),
  handlers = require('./controllers/handler');

module.exports = function(server) {
  server.route({
    method: 'POST',
    path: '/basket/{user}/{item}',
    handler: handlers.saveItem,
    config: {
      validate: {
        params: {
          user: Joi.string().alphanum().lowercase().required(),
          item: Joi.string().alphanum().lowercase().required()
        },
      },
      tags: ['api'],
      description: 'Insert an item into a user basket',
      plugins: {
        'hapi-swagger': {
          responses: {
            ' 200 ': {
              'description': 'Successfully added item to basket with quantity one'
            },
            ' 230 ': {
              'description': 'Item added, but can not reach itemservice'
            },
            ' 409 ': {
              'description': 'Item is already added, increase quantity instead'
            },
            ' 500 ': {
              'description': 'Internal Server Error'
            },
          },
          payloadType: 'form'
        }
      }
    },
  });

  server.route({
    method: 'DELETE',
    path: '/basket/{user}/{item}',
    handler: handlers.deleteItem,
    config: {
      validate: {
        params: {
          user: Joi.string().alphanum().lowercase().required(),
          item: Joi.string().alphanum().lowercase().required()
        },
      },
      tags: ['api'],
      description: 'Delete an item from a user basket'
    }
  });

  server.route({
    method: 'POST',
    path: '/basket/{user}/{item}/{quantity}',
    handler: handlers.changeQuantity,
    config: {
      validate: {
        params: {
          user: Joi.string().alphanum().lowercase().required(),
          item: Joi.string().alphanum().lowercase().required(),
          quantity: Joi.number().min(0).required()
        },
      },
      tags: ['api'],
      description: 'Change quantity of an item inside the user basket'
    }
  });

  server.route({
    method: 'GET',
    path: '/basket/{user}/order',
    handler: handlers.order,
    config: {
      validate: {
        params: {
          user: Joi.string().alphanum().lowercase().required()
        },
      },
      tags: ['api'],
      description: 'Initiate order process for a user basket'
    }
  });
};
