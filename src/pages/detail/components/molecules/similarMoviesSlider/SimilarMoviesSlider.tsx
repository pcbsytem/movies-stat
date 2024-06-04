import { Slider } from '../../../../../commons/components';
import { MovieProps } from '../../../../../commons/typing';
import { Card } from '../../../../home/components';
import { SimilarMoviesSliderProps } from '../../../Detail.types';
import { SimilarMoviesEmptyState } from '../../index';

export const SimilarMoviesSlider = ({ list }: SimilarMoviesSliderProps) => {
  return (
    <>
      <Slider>
        {list.map((item: MovieProps, index: number) => (
          <Card movie={item} key={`${item.id} - ${index}`} />
        ))}
      </Slider>

      {list.length === 0 && <SimilarMoviesEmptyState />}
    </>
  );
};
