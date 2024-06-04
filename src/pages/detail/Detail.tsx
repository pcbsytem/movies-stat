import { memo, useEffect, useState } from 'react';
import {
  Container,
  Content,
  Drawer,
  FlexboxGrid,
  Header,
  Button
} from 'rsuite';
import { Icon, Image } from '../../commons/components';
import { useFavorite } from '../favorite/hooks/useFavorite';
import { useDetail } from './hooks/useDetail';
import { DETAIL_MODAL_TEXT } from './Detail.constants';
import { SimilarMoviesSlider } from './components';
import { VoteAverage } from './components/atoms/voteAverage/VoteAverage';
import { ReleaseDate } from './components/atoms/releaseDate/ReleaseDate';

const DetailComponent = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const { detail, showDetail, handleDetailClose, handleSimilarMovies } =
    useDetail();
  const { handleExistInFavorite, handleFavoriteAdd } = useFavorite();

  useEffect(() => {
    const handleGetSimilarMovies = async () => {
      const result = await handleSimilarMovies();
      setSimilarMovies([...(result as typeof similarMovies)]);
    };

    if (detail?.id) {
      handleGetSimilarMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail?.id]);

  return (
    <Drawer
      size={window.screen.width === 800 ? 'full' : 'sm'}
      open={showDetail}
      onClose={handleDetailClose}
    >
      <Drawer.Body style={{ padding: 0 }}>
        <Container>
          <Header>
            {detail?.backdrop_path ? (
              <Image
                path={detail?.backdrop_path}
                title={detail?.title}
                width='100%'
              />
            ) : (
              <FlexboxGrid
                className='cardBackWithoutImage'
                justify='center'
                align='middle'
                style={{ height: '337px', width: '100%' }}
                color='gray'
              >
                <Icon iconName='fileImageO' height='120' width='120' />
              </FlexboxGrid>
            )}
          </Header>

          <Content style={{ padding: '1rem' }}>
            <h4>{detail?.title}</h4>
            <br />
            <div
              style={{
                textAlign: 'justify',
                minHeight: '100px',
                height: 'auto'
              }}
            >
              {detail?.overview || DETAIL_MODAL_TEXT.OVERVIEW_DEFAULT}
            </div>
            <br />
            <FlexboxGrid align='middle'>
              <ReleaseDate releaseDate={detail.release_date} />
              <VoteAverage voteAverage={detail.vote_average} />
            </FlexboxGrid>
            <br />
            <FlexboxGrid>
              <Button
                color='red'
                startIcon={<Icon iconName='heart' />}
                title={
                  !handleExistInFavorite({ id: detail.id })
                    ? DETAIL_MODAL_TEXT.FAVORITE_ICON_ADDED_TEXT
                    : DETAIL_MODAL_TEXT.FAVORITE_ICON_TEXT
                }
                onClick={() => handleFavoriteAdd(detail)}
                appearance={
                  handleExistInFavorite({ id: detail.id })
                    ? 'primary'
                    : 'default'
                }
                disabled={!handleExistInFavorite({ id: detail.id })}
                block
              >
                Adicionar favoritos
              </Button>
            </FlexboxGrid>
            <br />

            <h4>{DETAIL_MODAL_TEXT.GENRE_TEXT}</h4>
            <SimilarMoviesSlider list={similarMovies} />
          </Content>
        </Container>
      </Drawer.Body>
    </Drawer>
  );
};

export const Detail = memo(DetailComponent);
