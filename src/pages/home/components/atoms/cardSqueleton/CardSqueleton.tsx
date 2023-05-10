import { Col, FlexboxGrid, Placeholder } from 'rsuite'

export const CardSqueleton = () => {
  return (
    <div className="card">
      <FlexboxGrid.Item as={Col} colspan={24} md={5}>
        <div className="content">
          <Placeholder.Graph active />
        </div>
      </FlexboxGrid.Item>
    </div>
  )
}
