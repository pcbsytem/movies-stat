import { MovieStatProps } from '../atoms.types';

export const MovieStatShort = ({ height, width }: MovieStatProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_1_2)'>
      <path
        d='M30.5 32H1.33835C0.620282 32 0 31.6041 0 30.6667V1.5C0 0.5 0.5 0 1.50565 0C2.51129 0 1.84023 0 2.50941 0C3.5 0 4 0.5 4.01506 1.5V28H30.5C31.5 28 32 28.5 32 29.5C32 30.5 32 29.5 32 30.5C32 31.5 31.5 32 30.5 32Z'
        fill='white'
      />
      <path
        d='M5.01882 1V27H9.03387V7L22 20L31 13.5V8L22 14L9.03387 1H5.01882Z'
        fill='#2589F5'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_2'>
        <rect width='32' height='32' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
