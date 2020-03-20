import attempt from '@lcf.vs/generics/lib/express/attempt.js'
import { query } from '@lcf.vs/generics/lib/express/parser.js'
import logger from '@lcf.vs/generics/lib/log/logger.js'

const rules = {
  content: [
    minString(5)
  ]
}

const request = {
  query: {
    content: '12345'
  }
}

const response = {}

const next = error => console.log(error)

const route = attempt([
  query(rules),
  logger()
])


function minString (min) {
  return async (value) => {
    const { length } = value

    if (length >= min) {
      return value
    }

    throw new Error(`Chaine trop courte (doit être supérieure ou égale à ${min} caractères)`)
  }
}

void route(request, response, next)
