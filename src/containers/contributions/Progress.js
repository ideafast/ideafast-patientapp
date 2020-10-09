/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {VictoryGroup, VictoryBar} from 'victory-native';

const Progress: () => React$Node = ({colorScale, data}) => {
  return (
    <VictoryGroup
      horizontal
      offset={8}
      // TODO: make this adaptive rather than hard-coded values
      height={40}
      width={115}
      style={{
        data: {
          fillOpacity: 0.7,
        },
      }}
      padding={{top: 0, right: 0, bottom: 0, left: 0}}
      colorScale={colorScale}>
      {data.map(item => {
        return <VictoryBar key={item.x} data={item} barWidth={4} />;
      })}
    </VictoryGroup>
  );
};

export default Progress;
