import SimpleMarkdown from 'simple-markdown';
import {Image, Text} from 'react-native';
import React from 'react';
import {devices} from '../../assets/devices/assets';
// RenderImage.js was created since all the available modules, which were discovered did not have a rule to render
// local images. This file gives a solution to this problem.

// devices is a dictionary of devices with appropriate indexes. Those are wrapped in require() since it is static.

const IMAGE_LINK = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*';
const IMAGE_HREF_AND_TITLE =
  '\\s*<?(' +
  '(?:[^\\s\\\\]|\\\\.)*?' +
  ')>?' +
  '(' +
  '?:\\s+[\'"]' +
  '([\\s\\S]*?)[\'"]' +
  ')?';
const IMAGE_SIZE = '(?:\\s+=([0-9]+)?x([0-9]+)?)?\\)\\s*';

export const renderImage = (node, output, state, styles) => {
  // node.target is a path to our image. Since we use dictionary with wrapped paths, we need to extract actual names,
  // which are also indexes. Since actual image name is with '.jpeg' and dictionaries do not allow to hold such names
  // before passing actual image index it should be split from .jpeg
  console.log('Node is : ' + node.target);
  const pathList = node.target.split('/').slice(-2);
  const image = devices[pathList[0]][pathList[1].split('.')[0]];
  return (
    <Text key={state.key}>
      <Image source={image} />
    </Text>
  );
};

export const RenderLocalImage = render => {
  return {
    match: SimpleMarkdown.anyScopeRegex(
      new RegExp(
        '^!\\[(' + IMAGE_LINK + ')\\]\\(' + IMAGE_HREF_AND_TITLE + IMAGE_SIZE,
      ),
    ),
    order: 1,
    quality: () => 100,
    parse: (capture, parse, state) => ({
      alt: capture[1],
      target: capture[2],
      title: capture[3],
      width: capture[4] ? parseInt(capture[4]) : undefined,
      height: capture[5] ? parseInt(capture[5]) : undefined,
    }),

    render,
  };
};
