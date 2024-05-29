import { memo, useEffect, useState } from 'react'
import {
  Container,
  Content,
  Drawer,
  FlexboxGrid,
  Header,
  IconButton
} from 'rsuite'
import { formatDate } from '../../services/helper'
import { Icon, Image } from '../../commons/components'
import { useFavorite } from '../favorite/hooks/useFavorite'
import { useDetail } from './hooks/useDetail'
import { DETAIL_MODAL_TEXT } from './Detail.constants'
import { SimilarMoviesSlider } from './components'

const DetailComponent = () => {
  const [similarMovies, setSimilarMovies] = useState([])
  const { detail, showDetail, handleDetailClose, handleSimilarMovies } =
    useDetail()
  const { handleExistInFavorite, handleFavoriteAdd } = useFavorite()

  useEffect(() => {
    const handleGetSimilarMovies = async () => {
      const result = await handleSimilarMovies()
      setSimilarMovies([...(result as typeof similarMovies)])
    }

    if (detail?.id) {
      handleGetSimilarMovies()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail?.id])

  return (
    <Drawer open={showDetail} onClose={handleDetailClose}>
      <Drawer.Body style={{ padding: 0 }}>
        <Container>
          <Header>
            {detail?.backdrop_path ? (
              <Image
                path={detail?.backdrop_path}
                title={detail?.title}
                width="100%"
              />
            ) : (
              <FlexboxGrid
                className="cardBackWithoutImage"
                justify="center"
                align="middle"
                style={{ height: '337px', width: '100%' }}
                color="gray"
              >
                <Icon iconName="fileImageO" height="120" width="120" />
              </FlexboxGrid>
            )}
          </Header>

          <Content style={{ padding: '16px' }}>
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
            <FlexboxGrid align="middle" justify="space-between">
              <FlexboxGrid.Item colspan={2}>
                <IconButton
                  classPrefix="cardFavoriteButton"
                  icon={<Icon iconName="heart" />}
                  onClick={() => handleFavoriteAdd(detail)}
                  title={
                    handleExistInFavorite({ id: detail.id })
                      ? DETAIL_MODAL_TEXT.FAVORITE_ICON_ADDED_TEXT
                      : DETAIL_MODAL_TEXT.FAVORITE_ICON_TEXT
                  }
                  size="lg"
                  color="red"
                  appearance={
                    handleExistInFavorite({ id: detail.id })
                      ? 'primary'
                      : 'default'
                  }
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4} style={{ textAlign: 'center' }}>
                <b>{DETAIL_MODAL_TEXT.RELEASE_TEXT}</b>{' '}
                {formatDate(detail?.release_date)}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4} style={{ textAlign: 'center' }}>
                <b>{DETAIL_MODAL_TEXT.RELEASE_TEXT}</b>
                <p>
                  {`${
                    detail?.vote_average
                      ? detail?.vote_average * 10
                      : 'Sem voto'
                  }%`}
                </p>
              </FlexboxGrid.Item>
            </FlexboxGrid>
            <br />
            <h4>Filmes do mesmo gênero</h4>
            <SimilarMoviesSlider list={similarMovies} />
          </Content>
        </Container>
      </Drawer.Body>
    </Drawer>
  )
}

export const Detail = memo(DetailComponent)
