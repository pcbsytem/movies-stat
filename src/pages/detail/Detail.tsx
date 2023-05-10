import { memo } from 'react'
import {
  Container,
  Content,
  Drawer,
  FlexboxGrid,
  Header,
  IconButton,
  Rate
} from 'rsuite'
import { formatDate } from '../../services/helper'
import { Icon, Image } from '../../commons/components'
import { useFavorite } from '../favorite/hooks/useFavorite'
import { useDetail } from './hooks/useDetail'
import { DETAIL_MODAL_TEXT } from './Detail.constants'

const DetailComponent = () => {
  const { detail, showDetail, handleDetailClose } = useDetail()
  const { handleExistInFavorite, handleFavoriteAdd } = useFavorite()

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
            <h6>{detail?.title}</h6>
            <br />
            <div style={{ textAlign: 'justify' }}>
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
              <FlexboxGrid.Item colspan={4}>
                <b>{DETAIL_MODAL_TEXT.RELEASE_TEXT}</b>{' '}
                {formatDate(detail?.release_date)}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={7}>
                {/* <b>{DETAIL_MODAL_TEXT.RELEASE_TEXT}</b> */}
                <div style={{ textAlign: 'center' }}>
                  {`${
                    detail?.vote_average
                      ? detail?.vote_average * 10
                      : 'Sem voto'
                  }%`}
                </div>
                <Rate
                  defaultValue={2.7}
                  // defaultValue={detail?.vote_average ? detail?.vote_average : 0}
                  size="sm"
                  allowHalf
                  readOnly
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </Drawer.Body>
    </Drawer>
  )
}

export const Detail = memo(DetailComponent)
