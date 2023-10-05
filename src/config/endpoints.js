// agent endpoints
const GET_ALL_SECURITY_QUESTIONS = "/settings/getall_security_questions";
const ADD_SECURITY_QUESTIONS = "/settings/add_security_questions";
const GET_BROADCASTING_EVENT = "/management/get_broadcast_event";
const GET_POLICY_DOCUMENT = "/management/get_policy_document";
const ADD_POLICY = "/management/add_policy";
const ADD_COUNTRY = "/management/add_countryand_currency";
const ADD_NOTIFICATIONS_TEXT_MESSAGES = "/management/add_new_notifications";
const ADD_POSTERS_AND_ADS = "/management/add_new_posters";

// methods
const DELETE = "DELETE";
const POST = "POST";
const GET = "POST";
const PUT = "PUT";

exports.GET_ALL_SECURITY_QUESTIONS = {
  url: GET_ALL_SECURITY_QUESTIONS,
  method: POST,
};

exports.ADD_COUNTRY = {
  url: ADD_COUNTRY,
  method: POST,
};

exports.ADD_POLICY = {
  url: ADD_POLICY,
  method: POST,
};

exports.GET_BROADCASTING_EVENT = {
  url: GET_BROADCASTING_EVENT,
  method: POST,
};

exports.GET_POLICY_DOCUMENT = {
  url: GET_POLICY_DOCUMENT,
  method: POST,
};

exports.ADD_SECURITY_QUESTIONS = {
  url: ADD_SECURITY_QUESTIONS,
  method: POST,
};

exports.ADD_NOTIFICATIONS_TEXT_MESSAGES = {
  url: ADD_NOTIFICATIONS_TEXT_MESSAGES,
  method: POST,
};

exports.ADD_POSTERS_AND_ADS = {
  url: ADD_POSTERS_AND_ADS,
  method: POST,
};
