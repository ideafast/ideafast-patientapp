export default class ApiInterface {
  constructor(endpoint = '') {
    this.endpoint = endpoint;
  }

  notImplemented = () => {
    throw new Error('Not yet implemented');
  };

  makeEnvelope(success, payload = null, errors = []) {
    return {
      meta: {success, errors},
      data: payload,
    };
  }

  getDevices = async () => this.notImplemented();

  getDeviceMetrics = async () => this.notImplemented();

  getDeviceStatus = async () => this.notImplemented();

  verifyUser = async () => this.notImplemented();
}
