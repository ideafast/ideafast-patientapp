/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {VictoryGroup, VictoryBar} from 'victory-native';
import {DEVICES} from '../../styles/colors';

const Progress: () => React$Node = ({data}) => {
  return (
    <VictoryGroup
      horizontal
      // TODO: make this adaptive rather than hard-coded values
      height={50}
      width={120}
      padding={{top: 0, right: 0, bottom: 0, left: 0}}>
      <VictoryBar
        style={{
          data: {
            fillOpacity: 0.7,
            fill: ({datum}) => DEVICES[datum.x],
          },
        }}
        data={data}
        barWidth={2.5}
      />
    </VictoryGroup>
  );
};

export default Progress;
