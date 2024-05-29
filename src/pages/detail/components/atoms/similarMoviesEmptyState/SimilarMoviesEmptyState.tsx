import { FlexboxGrid } from 'rsuite'
import { Icon } from '../../../../../commons/components'

export const SimilarMoviesEmptyState = () => (
  <FlexboxGrid
    justify="center"
    align="middle"
    style={{
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#eee',
      height: '300px'
    }}
  >
    <Icon iconName="frownO" height="120" width="120" />
    <div>Infelizmente, não encontramos títulos similares.</div>
  </FlexboxGrid>
)
