const axios = require('axios')
const { formatISO, lastDayOfMonth, subMonths } = require('date-fns')
const API_BASE_URL = `https://api.starlingbank.com/api/v2/feed/account/${process.env.STARLING_ACCOUNT_ID}/settled-transactions-between`
const headers = {
  'Content-type': 'application/json',
  Authorization: `Bearer ${process.env.STARLING_BEARER_TOKEN}`
}

exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext

  if (!identity || !user) return { statusCode: 401, body: 'Unauthorized' }
  if (event.httpMethod !== 'GET') return { statusCode: 405, body: 'Method Not Allowed' }

  try {
    const { data } = await axios.get(API_BASE_URL, {
      params: {
        minTransactionTimestamp: event.queryStringParameters?.startDate || formatISO(lastDayOfMonth(subMonths(new Date(), 1))),
        maxTransactionTimestamp: event.queryStringParameters?.endDate || formatISO(lastDayOfMonth(new Date()))
      },
      headers
    })

    return {
      statusCode: 200,
      body: JSON.stringify(data.feedItems)
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: `Error fetching transactions: ${error.response.statusText}`
    }
  }
}
