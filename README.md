# ideafast-patientapp

React-Native Patient-facing application (currently working towards prototype)

## Initial set up

1. Follow environment instructions on https://reactnative.dev/docs/environment-setup
1. Make sure your node version >= 10
1. Install yarn package manager
1. Pull down repository
1. Run `yarn`
1. Run `npx react-native link`
1. Copy `.example.env` to `.env` and update `API_URL` if using the _live_ API
1. **Note:** when working with the live API locally (i.e. during development) you will need to update API_URL with your local IP address.
1. Start android emulator
1. In project directory, run `npx react-native run-android`


## Debugging

1. Go to http://localhost:8081/debugger-ui/ for console logs
1. `npx react-devtools` for UI inspection

## Linting

To lint the code locally, simply run `yarn lint`

To fix lint errors, simply run `yarn fixlint`

## Testing

To test the code locally, simply run `yarn test`
