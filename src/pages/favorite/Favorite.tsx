import { Container, Content, FlexboxGrid, List } from 'rsuite'
import { Banner, Icon } from '../../commons/components'
import { FavoriteItem } from './components'
import { useFavorite } from './hooks/useFavorite'
import { FAVORITE_TOAST_TEXT } from './Favorite.constants'
import './Favorite.css'
import { MovieProps } from '../../commons/typing'

export function Favorite() {
  const { favorite } = useFavorite()

  return (
    <Container style={{ width: '100%' }}>
      <Banner title={'testonho'} subTitle={'testonho legal'} />

      <Content>
        {favorite.length > 0 && (
          <List className="favoriteList" hover>
            {favorite.map((item: MovieProps) => (
              <FavoriteItem item={item} key={item.id} />
            ))}
          </List>
        )}

        {favorite.length === 0 && (
          <FlexboxGrid
            className="favoriteEmpty"
            justify="center"
            align="middle"
          >
            <Icon iconName="frownO" />
            <p>{FAVORITE_TOAST_TEXT.WITHOUT_FAVORITE}</p>
          </FlexboxGrid>
        )}
      </Content>
    </Container>
  )
}
