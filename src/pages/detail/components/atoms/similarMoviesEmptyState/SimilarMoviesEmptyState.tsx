import { FlexboxGrid } from 'rsuite';
import { Icon } from '../../../../../commons/components';
import { SIMILAR_MOVIES_EMPTY_STATE } from '../../../Detail.constants';

export const SimilarMoviesEmptyState = () => (
  <FlexboxGrid
    justify='center'
    align='middle'
    style={{
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#eee',
      height: '300px'
    }}
  >
    <Icon iconName='frownO' height='120' width='120' />
    <div>{SIMILAR_MOVIES_EMPTY_STATE.EMPTY_STATE}</div>
  </FlexboxGrid>
);
