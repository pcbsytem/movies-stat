import Carousel from 'react-multi-carousel'
import { responsive } from './Slider.constants'
import { SliderProps } from '../atomos.types'

export const Slider = ({ children }: SliderProps) => {
  return <Carousel responsive={responsive}>{children}</Carousel>
}
