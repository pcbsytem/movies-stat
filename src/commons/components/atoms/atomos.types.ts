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