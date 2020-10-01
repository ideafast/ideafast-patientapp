import ApiInterface from './ApiInterface';
// Load our mock data to populate our endpoints
import Devices from './mock-data/devices.json';
import DeviceMetrics from './mock-data/metrics.json';
import DeviceStatus from './mock-data/status.json';
import UserVerify from './mock-data/verification.json';

const MOCK = {
  SPEED: 300,
  DEVICES: Devices,
  DEVICE_METRICS: DeviceMetrics,
  DEVICE_STATUS: DeviceStatus,
  USER_VERIFY: UserVerify,
};

export default class MockApi extends ApiInterface {
  mockConnection = async () => {
    await new Promise(resolve => setTimeout(resolve, MOCK.SPEED));
  };

  mock = async (payload = null, success = true) => {
    await this.mockConnection();
    return this.makeEnvelope(success, payload);
  };

  getDevices = async () => this.mock(MOCK.DEVICES);

  getDeviceMetrics = async deviceID => this.mock(MOCK.DEVICE_METRICS);

  getDeviceStatus = async deviceID => this.mock(MOCK.DEVICE_STATUS);

  verifyUser = async token => this.mock(MOCK.USER_VERIFY);
}
