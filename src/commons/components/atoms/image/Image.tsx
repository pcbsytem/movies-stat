import { memo } from 'react'
import { IMAGE_URL } from '../../../../services/api.constants'
import { ImageProps } from '../atoms.types'

export const ImageComponent = ({ path, title, width }: ImageProps) => (
  <img src={`${IMAGE_URL}${path}`} alt={title} width={width} />
)

export const Image = memo(ImageComponent)
