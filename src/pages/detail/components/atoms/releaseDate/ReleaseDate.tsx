import { memo } from 'react';
import { FlexboxGrid } from 'rsuite';
import { DETAIL_MODAL_TEXT } from '../../../Detail.constants';
import { formatDate } from '../../../../../services/helper';
import './ReleaseDate.css';

interface ReleaseProps {
  releaseDate: string;
}

const ReleaseDateMemo = ({ releaseDate }: ReleaseProps) => {
  return (
    <FlexboxGrid.Item className='releaseDate' colspan={4}>
      <b>{DETAIL_MODAL_TEXT.RELEASE_TEXT}</b>
      <p>{formatDate(releaseDate)}</p>
    </FlexboxGrid.Item>
  );
};

export const ReleaseDate = memo(ReleaseDateMemo);
