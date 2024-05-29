import { FlexboxGrid } from 'rsuite'
import { Icon } from '../../index'
import { HOME_LIST_TEXT } from '../../../../pages/home/Home.constants'

export const EmptyState = () => {
  return (
    <FlexboxGrid
      justify="center"
      align="middle"
      style={{ flexDirection: 'column' }}
    >
      <Icon iconName="frownO" height="120" width="120" />
      <h3>{HOME_LIST_TEXT.DESCRIPTION}</h3>
    </FlexboxGrid>
  )
}
