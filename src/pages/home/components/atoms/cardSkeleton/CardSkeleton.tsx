import { Col, FlexboxGrid, Placeholder } from 'rsuite';

export const CardSkeleton = () => {
  return (
    <button className='card'>
      <FlexboxGrid.Item className='cardInner' as={Col} colspan={24} md={5}>
        <div className='content'>
          <Placeholder.Graph active />
        </div>
      </FlexboxGrid.Item>
    </button>
  );
};
