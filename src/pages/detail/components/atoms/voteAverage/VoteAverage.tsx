import { memo } from 'react';
import { FlexboxGrid } from 'rsuite';
import { DETAIL_MODAL_TEXT } from '../../../Detail.constants';
import './VoteAverage.css';

interface VoteAverageProps {
  voteAverage: number | null;
}

const VoteAverageMemo = ({ voteAverage }: VoteAverageProps) => {
  if (!voteAverage) {
    return <></>;
  }

  const handleColorClass = (voteAverage: number | null) => {
    if (!voteAverage) {
      return;
    }

    if (voteAverage < 50) {
      return 'low';
    }

    return 'high';
  };

  const vote = voteAverage ? voteAverage * 10 : 0;

  return (
    <FlexboxGrid.Item
      className={`voteAverage ${handleColorClass(vote)}`}
      colspan={4}
    >
      <b>{DETAIL_MODAL_TEXT.VOTE_AVERAGE_TEXT}</b>
      <p>{`${vote ? vote.toFixed(1) : 'não voto'}${vote ? '%' : ''}`}</p>
    </FlexboxGrid.Item>
  );
};

export const VoteAverage = memo(VoteAverageMemo);
