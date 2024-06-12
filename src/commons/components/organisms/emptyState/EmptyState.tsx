import { FlexboxGrid } from 'rsuite';
import { Icon } from '../../index';
import { HOME_LIST_EMPTY_TEXT } from '../../../../pages/home/Home.constants';

export const EmptyState = () => {
  return (
    <FlexboxGrid
      justify='center'
      align='middle'
      style={{ flexDirection: 'column' }}
    >
      <h3>{HOME_LIST_EMPTY_TEXT.TITLE}</h3>
      <p>{HOME_LIST_EMPTY_TEXT.SUBTITLE}</p>
      <br />
      <br />
      <Icon iconName='homeEmptyState' height='360' width='360' />
      <br />
      <br />
    </FlexboxGrid>
  );
};
