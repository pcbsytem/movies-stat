import { Col, FlexboxGrid } from 'rsuite';
import { Icon, Image } from '../../../../../commons/components';
import { CardProps } from '../../../Home.types';
import { colors } from './Card.constants';
import './Card.css';

export const Card = ({ movie, action }: CardProps) => {
  const randomColor = Number(String(Math.random() * 7).slice(0, 1));
  return (
    <button className='card' onClick={() => action && action(movie)}>
      <FlexboxGrid.Item className='cardInner' as={Col} colspan={24} md={5}>
        <div className='content'>
          {movie?.poster_path ? (
            <Image path={movie?.poster_path} title={movie.title} />
          ) : (
            <FlexboxGrid
              className='cardWithoutImage'
              justify='center'
              align='middle'
              style={{
                backgroundColor: colors[
                  randomColor as keyof typeof colors
                ] as string
              }}
            >
              <Icon iconName='fileImageO' />
            </FlexboxGrid>
          )}
        </div>
      </FlexboxGrid.Item>
    </button>
  );
};
