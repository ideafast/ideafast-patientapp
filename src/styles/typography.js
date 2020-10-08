import {scaleFont} from './mixins';
import {BLACK} from './colors';

export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

export const FONT_SIZE_39 = scaleFont(39);
export const FONT_SIZE_30 = scaleFont(31);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_10 = scaleFont(10);

export const BORDER_WIDTH = 1;

export const HEADER = {
  fontSize: FONT_SIZE_16,
  fontWeight: FONT_WEIGHT_BOLD,
  color: BLACK,
};

export const TITLE = {
  fontSize: FONT_SIZE_16,
  fontWeight: FONT_WEIGHT_BOLD,
  color: BLACK,
};

export const SUBTITLE = {
  fontSize: FONT_SIZE_10,
  color: BLACK,
};
