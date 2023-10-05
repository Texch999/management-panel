// agent endpoints
const GET_ALL_SECURITY_QUESTIONS = "/settings/getall_security_questions";
const ADD_SECURITY_QUESTIONS = "/settings/add_security_questions";
const ADD_OFFERS = "/offers/getall_offers";
const GET_ALL_PAYMENTS ="/management/getall_payments";
const ADD_PAYMENT_GATEWAY ="/management/add_payment_gateway";
const UPDATE_PAYMENT_GATEWAY ="/management/update_payment_gateway";
const GET_BROADCAST_EVENTS ="/management/get_broadcast_event"
const GET_ALL_WEBSITES = "/management/getall_websites"
const ADD_WEBSITE = "/management/addwebsite"
const GET_COUNTRY_AND_CURRENCY = "/management/get_country_and_currency" 
const ADD_COUNTRY_AND_CURRENCY = "/management/add_countryand_currency"
const UPDATE_SETTINGS = "/management/update_settings" 
const GET_ALL_POLICY_DOCUMENTS="/management/get_policy_document"
const ADD_POLICY ="/management/add_policy"
const ADD_NEW_NOTIFICATIONS ="/management/add_new_notifications";
const UPDATE_COUNTRY_CURRENCY ="/management/update_countryand_currency";
const UPDATE_POLICY = "/management/update_policy"
const GET_ALL_PACKAGES ="/packages/get_packages";
const GET_ADMIN_ACCOUNTS ="/admin/get_admin_accounts_user_info";
const GET_USER_LIST="offline-management/get_user_list"
const ACCOUNT_REGISTERATION = "/account_register";
const UPDATE_PROFILE = "/admin/admin_profile_update_info"



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

exports.UPDATE_COUNTRY_CURRENCY = {
  url: UPDATE_COUNTRY_CURRENCY,
  method: POST
}

exports.ADD_COUNTRY_AND_CURRENCY = {
  url: ADD_COUNTRY_AND_CURRENCY,
  method: POST
}

exports.ADD_WEBSITE = {
  url: ADD_WEBSITE,
  method: POST
}

exports.ADD_PAYMENT_GATEWAY = {
  url: ADD_PAYMENT_GATEWAY,
  method: POST
}


exports.UPDATE_SETTINGS = {
  url: UPDATE_SETTINGS,
  method: POST
}


exports.GET_ALL_POLICY_DOCUMENTS = {
  url: GET_ALL_POLICY_DOCUMENTS,
  method: POST
}

exports.ADD_POLICY = {
  url: ADD_POLICY,
  method: POST
}

exports.ADD_NEW_NOTIFICATIONS = {
  url: ADD_NEW_NOTIFICATIONS,
  method: POST
}


exports.UPDATE_PAYMENT_GATEWAY = {
  url: UPDATE_PAYMENT_GATEWAY,
  method: POST
}

exports.UPDATE_POLICY = {
  url: UPDATE_POLICY,
  method: POST
}


exports.GET_ALL_PACKAGES = {
  url: GET_ALL_PACKAGES,
  method: POST
}



exports.GET_ADMIN_ACCOUNTS = {
  url: GET_ADMIN_ACCOUNTS,
  method: POST
}


exports.ACCOUNT_REGISTERATION = {
  url: ACCOUNT_REGISTERATION,
  method: POST
}


exports.UPDATE_PROFILE = {
  url: UPDATE_PROFILE,
  method: POST
}


exports.GET_USER_LIST = {
  url: GET_USER_LIST,
  method: POST
}
