// agent endpoints
const GET_ALL_SECURITY_QUESTIONS = "/settings/getall_security_questions";
const ADD_SECURITY_QUESTIONS = "/settings/add_security_questions";
const ADD_OFFERS = "/offers/getall_offers";
const GET_ALL_PAYMENTS ="/management/getall_payments";
const GET_BROADCAST_EVENTS ="/management/get_broadcast_event"
const GET_ALL_WEBSITES = "/management/getall_websites"
const ADD_WEBSITE = "/management/addwebsite"
const GET_COUNTRY_AND_CURRENCY = "/management/get_country_and_currency"
const ADD_COUNTRY_AND_CURRENCY = "/management/add_countryand_currency"


// methods
const DELETE = "DELETE";
const POST = "POST";
const GET = "POST";
const PUT = "PUT";


exports.GET_ALL_SECURITY_QUESTIONS = {
  url: GET_ALL_SECURITY_QUESTIONS,
  method: POST
}


exports.ADD_SECURITY_QUESTIONS = {
  url: ADD_SECURITY_QUESTIONS,
  method: POST
}



exports.ADD_OFFERS = {
  url: ADD_OFFERS,
  method: POST
}


exports.GET_BROADCAST_EVENTS = {
  url: GET_BROADCAST_EVENTS,
  method: POST
}


exports.GET_ALL_PAYMENTS = {
  url: GET_ALL_PAYMENTS,
  method: POST
}


exports.GET_ALL_WEBSITES = {
  url: GET_ALL_WEBSITES,
  method: POST
}

exports.GET_ALL_WEBSITES = {
  url: GET_ALL_WEBSITES,
  method: POST
}
exports.GET_COUNTRY_AND_CURRENCY = {
  url: GET_COUNTRY_AND_CURRENCY,
  method: POST
}

exports.ADD_WEBSITE = {
  url: ADD_WEBSITE,
  method: POST
}

exports.ADD_COUNTRY_AND_CURRENCY = {
  url: ADD_COUNTRY_AND_CURRENCY,
  method: POST
}


