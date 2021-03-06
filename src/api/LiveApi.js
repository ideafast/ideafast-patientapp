import ApiInterface from './ApiInterface';

export default class LiveApi extends ApiInterface {
  // Make a request, serialise it, and respond to errors
  request = async (method, resource, body = {}) => {
    try {
      const url = `${this.endpoint}/${resource}`;
      const _body = ['GET'].includes(method) ? null : JSON.stringify(body);
      const options = {method: method, body: _body};

      const response = await fetch(url, options);

      const isSuccessfulResponse = [200, 201, 204].includes(response.status);

      const payload = await response.json();

      return this.makeEnvelope(
        isSuccessfulResponse,
        payload.data,
        payload.meta,
      );
    } catch (error) {
      console.error(error);
    }
  };

  getDevices = async () => this.request('GET', 'devices');

  getDeviceMetrics = async deviceID =>
    this.request('GET', 'metrics', {deviceID});

  getDeviceStatus = async deviceID => this.request('GET', 'status', {deviceID});

  verifyUser = async token => this.request('POST', 'verify', {token});
}
