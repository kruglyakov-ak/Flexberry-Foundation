const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299,
};

export default class Api {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getTickets() {
    return this._load({url: 'tickets'})
      .then(Api.toJSON)
      .then((tickets) => tickets);
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    return fetch(
      `${this._endPoint}/${url}`,
      {method, body, headers},
    )
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN ||
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
