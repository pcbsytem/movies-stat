import { ReactNode } from "react"
import { TypeAttributes } from "rsuite/esm/@types/common"
export interface IconProps {
  iconName: string
  height?: string
  width?: string
}

export interface SearchInputProps {
  action: (params: string) => void
  placeholder: string
  size: TypeAttributes.Size
}

export interface SliderProps {
  children: ReactNode
}

export interface MovieStatProps {
  height?: string
}

export interface ImageProps {
  path: string
  title: string
  width?: string
}

export interface PaginationProps {
  currentPage: number
  handlePagination: (page: number) => void
  maxButtons: number
  totalCount: number
}