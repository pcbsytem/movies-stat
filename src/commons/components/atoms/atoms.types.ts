import { ReactNode } from 'react';
import { TypeAttributes } from 'rsuite/esm/internals/types';
export interface IconProps {
  iconName: string;
  height?: string;
  width?: string;
}

export interface SearchInputProps {
  action: (params: string) => void;
  placeholder: string;
  size: TypeAttributes.Size;
  alt: string;
}

export interface SliderProps {
  children: ReactNode;
}

export interface MovieStatProps {
  height?: string;
  width?: string;
}

export interface ImageProps {
  path: string;
  title: string;
  width?: string;
}

export interface PaginationProps {
  currentPage: number;
  handlePagination: (page: number) => void;
  maxButtons: number;
  totalCount: number;
}
