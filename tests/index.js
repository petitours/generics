import attempt from '@lcf.vs/generics/lib/express/attempt.js'
import { body, params, query } from '@lcf.vs/generics/lib/express/parser.js'
import logger from '@lcf.vs/generics/lib/log/logger.js'

function minString (min) {
  return async (value) => {
    const { length } = value

    if (length >= min) {
      return value
    }

    throw new Error(`Chaine trop courte (doit être supérieure ou égale à ${min} caractères)`)
  }
}

const response = {}

const next = error => console.error(error)

const rules = {
  content: [
    minString(5),
    minString(5)
  ],
  content2: [
    minString(5),
    minString(5)
  ]
}

const request = {
  body: {
    content: '12345',
    content2: '12345'
  },
  params: {
    content: '12345',
    content2: '12345'
  },
  query: {
    content: '12345',
    content2: '12345'
  }
}

const route = attempt([
  body(rules),
  params(rules),
  query(rules),
  logger()
])

void route(request, response, next)
