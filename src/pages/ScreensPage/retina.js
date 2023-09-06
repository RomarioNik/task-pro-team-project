const desktop_1x = '';
const mobile_1x = '';
const mobile_2x = '';
export const retina = {
  backgroundImage: mobile_1x,
  '@media (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)':
    {
      backgroundImage: mobile_2x,
    },
};
