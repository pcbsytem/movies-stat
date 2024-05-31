import { Col, IconButton, FlexboxGrid, List } from 'rsuite';
import { formatDate } from '../../../../../services/helper';
import { useFavorite } from '../../../hooks/useFavorite';
import { Icon, Image } from '../../../../../commons/components';
import { FavoriteItemProps } from '../../../Favorite.types';
import { FAVORITE_TEXT } from '../../../Favorite.constants';
import './FavoriteItem.css';

export const FavoriteItem = ({ item }: FavoriteItemProps): JSX.Element => {
  const { handleFavoriteRemove } = useFavorite();
  return (
    <List.Item className='favoriteItem'>
      <FlexboxGrid align='middle'>
        <FlexboxGrid.Item as={Col} colspan={24} md={3}>
          <Image path={item?.backdrop_path} title={item.title} width='100%' />
        </FlexboxGrid.Item>

        <FlexboxGrid.Item as={Col} colspan={24} md={9}>
          <h5>{item?.title}</h5>
          <br />
          <p>{item?.overview}</p>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item className='centerText' as={Col} colspan={24} md={4}>
          <div>{FAVORITE_TEXT.VOTE_AVERAGE_TITLE}</div>
          <div>{`${(item.vote_average ?? 0) * 10}% `}</div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item className='centerText' as={Col} colspan={24} md={4}>
          <div>{formatDate(item?.release_date)}</div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item className='endText' as={Col} colspan={24} md={4}>
          <IconButton
            size='md'
            appearance='subtle'
            icon={<Icon iconName='trash2' />}
            onClick={() => handleFavoriteRemove({ id: item.id ?? 0 })}
            title={FAVORITE_TEXT.ICON_TITLE}
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </List.Item>
  );
};
