// agent endpoints
const GET_ALL_SECURITY_QUESTIONS = "/settings/getall_security_questions";
const ADD_SECURITY_QUESTIONS = "/settings/add_security_questions";
const ADD_OFFERS = "/management/add_offers";
const GET_ALL_OFFERS = "/offers/getall_offers";
const GET_ALL_PAYMENTS = "/management/getall_payments";
const ADD_PAYMENT_GATEWAY = "/management/add_payment_gateway";
const UPDATE_PAYMENT_GATEWAY = "/management/update_payment_gateway";
const GET_BROADCAST_EVENTS = "/management/get_broadcast_event";
const GET_ALL_WEBSITES = "/management/getall_websites";
const ADD_WEBSITE = "/management/addwebsite";
const GET_COUNTRY_AND_CURRENCY = "/management/get_country_and_currency";
const ADD_COUNTRY_AND_CURRENCY = "/management/add_countryand_currency";
const UPDATE_SETTINGS = "/management/update_settings";
const GET_ALL_POLICY_DOCUMENTS = "/management/get_policy_document";
const ADD_POLICY = "/management/add_policy";
const UPDATE_COUNTRY_CURRENCY = "/management/update_countryand_currency";
const UPDATE_POLICY = "/management/update_policy";
const GET_ALL_PACKAGES = "/packages/get_packages";
const GET_USER_LIST = "offline-management/get_user_list";
const ACCOUNT_REGISTERATION = "/account_register";
const UPDATE_PROFILE = "/admin/admin_profile_update_info";
const GET_BROADCASTING_EVENT = "/management/get_broadcast_event";
const GET_POLICY_DOCUMENT = "/management/get_policy_document";
const ADD_COUNTRY = "/management/add_countryand_currency";
const ADD_NOTIFICATIONS_TEXT_MESSAGES = "/management/add_new_notifications";
const GET_ALL_NOTIFICATIONS = "/management/get_all_notifications";
const ADD_POSTERS_AND_ADS = "/management/add_new_posters";
const GET_ALL_POSTERS = "/management/get_all_posters";
const GET_ALL_USERS = "/offline-management/get_user_list";
const GENERATE_SIGNED_URL = "/admin/profile_signed_url";
const GET_MATCHES_DATA = "/offline-management/get_matches_data";
const CREATE_OFFLINE_MATCHES = "/offline-management/match_creation";
const PACKAGES_CREATION = "/packages/package_creation_upgrade_discount";
const GET_REQUEST_PACKAGES =
  "/packages/get_package_histroy_bypackage_requestid";
const PACKAGE_APPROVE_REJECT = "/packages/package_approve_reject";
const BULK_PACKAGE_APPROVE_REJECT = "/packages/bulk_package_approve_reject";
// const PACKAGES_CREATION="/packages/package_creation_upgrade_discount";
const GET_ADMIN_PACKAGE_REQUEST = "/packages/get_all_admin_package_request";
const GET_REASON_REJECTIONS = "/settings/getall_security_questions";
const ADD_REASON_REJECTIONS = "/settings/add_reason_rejection";

const ADD_TOURS = "/tours/add_tours";
const GET_TOURS = "/tours/get_tours";
const UPDATE_TOURS = "/tours/update_tours";
const GET_INTERESTED = "/tours/get_interested";
const UPDATE_INTERESTED = "/tours/update_interested";
const BOOKNOW_FOR_INTERESTED = "/tours/booknow_for_interested";

// methods
const DELETE = "DELETE";
const POST = "POST";
const GET = "POST";
const PUT = "PUT";

exports.BOOKNOW_FOR_INTERESTED = {
  url: BOOKNOW_FOR_INTERESTED,
  method: POST,
};

exports.UPDATE_INTERESTED = {
  url: UPDATE_INTERESTED,
  method: POST,
};

exports.GET_INTERESTED = {
  url: GET_INTERESTED,
  method: POST,
};

exports.UPDATE_TOURS = {
  url: UPDATE_TOURS,
  method: POST,
};

exports.GET_TOURS = {
  url: GET_TOURS,
  method: POST,
};

exports.ADD_TOURS = {
  url: ADD_TOURS,
  method: POST,
};

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

exports.ADD_OFFERS = {
  url: ADD_OFFERS,
  method: POST,
};

exports.GET_ALL_OFFERS = {
  url: GET_ALL_OFFERS,
  method: POST,
};

exports.GET_BROADCAST_EVENTS = {
  url: GET_BROADCAST_EVENTS,
  method: POST,
};

exports.GET_ALL_PAYMENTS = {
  url: GET_ALL_PAYMENTS,
  method: POST,
};

exports.GET_ALL_WEBSITES = {
  url: GET_ALL_WEBSITES,
  method: POST,
};

exports.GET_ALL_WEBSITES = {
  url: GET_ALL_WEBSITES,
  method: POST,
};

exports.GET_COUNTRY_AND_CURRENCY = {
  url: GET_COUNTRY_AND_CURRENCY,
  method: POST,
};

exports.UPDATE_COUNTRY_CURRENCY = {
  url: UPDATE_COUNTRY_CURRENCY,
  method: POST,
};

exports.ADD_COUNTRY_AND_CURRENCY = {
  url: ADD_COUNTRY_AND_CURRENCY,
  method: POST,
};

exports.ADD_WEBSITE = {
  url: ADD_WEBSITE,
  method: POST,
};

exports.ADD_PAYMENT_GATEWAY = {
  url: ADD_PAYMENT_GATEWAY,
  method: POST,
};

exports.UPDATE_SETTINGS = {
  url: UPDATE_SETTINGS,
  method: POST,
};

exports.GET_ALL_POLICY_DOCUMENTS = {
  url: GET_ALL_POLICY_DOCUMENTS,
  method: POST,
};

exports.ADD_POLICY = {
  url: ADD_POLICY,
  method: POST,
};

exports.GET_ALL_NOTIFICATIONS = {
  url: GET_ALL_NOTIFICATIONS,
  method: POST,
};

exports.UPDATE_PAYMENT_GATEWAY = {
  url: UPDATE_PAYMENT_GATEWAY,
  method: POST,
};

exports.UPDATE_POLICY = {
  url: UPDATE_POLICY,
  method: POST,
};

exports.GET_ALL_PACKAGES = {
  url: GET_ALL_PACKAGES,
  method: POST,
};

exports.ACCOUNT_REGISTERATION = {
  url: ACCOUNT_REGISTERATION,
  method: POST,
};

exports.UPDATE_PROFILE = {
  url: UPDATE_PROFILE,
  method: POST,
};

exports.GET_USER_LIST = {
  url: GET_USER_LIST,
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

exports.GET_ALL_POSTERS = {
  url: GET_ALL_POSTERS,
  method: POST,
};

exports.ADD_OFFERS = {
  url: ADD_OFFERS,
  method: POST,
};

exports.GET_BROADCAST_EVENTS = {
  url: GET_BROADCAST_EVENTS,
  method: POST,
};

exports.GET_ALL_PAYMENTS = {
  url: GET_ALL_PAYMENTS,
  method: POST,
};

exports.GET_ALL_WEBSITES = {
  url: GET_ALL_WEBSITES,
  method: POST,
};

exports.GET_COUNTRY_AND_CURRENCY = {
  url: GET_COUNTRY_AND_CURRENCY,
  method: POST,
};

exports.UPDATE_COUNTRY_CURRENCY = {
  url: UPDATE_COUNTRY_CURRENCY,
  method: POST,
};

exports.ADD_COUNTRY_AND_CURRENCY = {
  url: ADD_COUNTRY_AND_CURRENCY,
  method: POST,
};

exports.ADD_WEBSITE = {
  url: ADD_WEBSITE,
  method: POST,
};

exports.ADD_PAYMENT_GATEWAY = {
  url: ADD_PAYMENT_GATEWAY,
  method: POST,
};

exports.UPDATE_SETTINGS = {
  url: UPDATE_SETTINGS,
  method: POST,
};

exports.GET_ALL_POLICY_DOCUMENTS = {
  url: GET_ALL_POLICY_DOCUMENTS,
  method: POST,
};

exports.ADD_POLICY = {
  url: ADD_POLICY,
  method: POST,
};

exports.UPDATE_PAYMENT_GATEWAY = {
  url: UPDATE_PAYMENT_GATEWAY,
  method: POST,
};

exports.UPDATE_POLICY = {
  url: UPDATE_POLICY,
  method: POST,
};

exports.GET_ALL_PACKAGES = {
  url: GET_ALL_PACKAGES,
  method: POST,
};

exports.GET_ALL_USERS = {
  url: GET_ALL_USERS,
  method: POST,
};

exports.GET_MATCHES_DATA = {
  url: GET_MATCHES_DATA,
  method: POST,
};

exports.CREATE_OFFLINE_MATCHES = {
  url: CREATE_OFFLINE_MATCHES,
  method: POST,
};

exports.ADD_REASON_REJECTIONS = {
  url: ADD_REASON_REJECTIONS,
  method: POST,
};

exports.GENERATE_SIGNED_URL = {
  url: GENERATE_SIGNED_URL,
  method: POST,
};

exports.PACKAGES_CREATION = {
  url: PACKAGES_CREATION,
  method: POST,
};
exports.GET_REQUEST_PACKAGES = {
  url: GET_REQUEST_PACKAGES,
  method: POST,
};

exports.GET_ADMIN_PACKAGE_REQUEST = {
  url: GET_ADMIN_PACKAGE_REQUEST,
  method: POST,
};

exports.GET_REASON_REJECTIONS = {
  url: GET_REASON_REJECTIONS,
  method: POST,
};

exports.BULK_PACKAGE_APPROVE_REJECT = {
  url: BULK_PACKAGE_APPROVE_REJECT,
  method: POST
}

exports.PACKAGE_APPROVE_REJECT = {
  url: PACKAGE_APPROVE_REJECT,
  method: POST
}
