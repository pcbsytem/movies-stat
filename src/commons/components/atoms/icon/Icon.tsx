import ChevronUp from '@rsuite/icons/legacy/ChevronUp';
import Heart from '@rsuite/icons/legacy/Heart';
import Home from '@rsuite/icons/legacy/Home';
import FileImageO from '@rsuite/icons/legacy/FileImageO';
import FileMovieO from '@rsuite/icons/legacy/FileMovieO';
import Trash2 from '@rsuite/icons/legacy/Trash2';
import { MovieStat } from '../movieStat/MovieStat';
import { MovieStatShort } from '../moviesStatShort/MoviesStatShort';
import { HomeEmptyState } from '../homeEmptyState/HomeEmptyState';
import { IconProps } from '../atoms.types';

export const Icon = ({ iconName, height, width }: IconProps) => {
  const ComponentIcon = () => {
    const iconObject = {
      chevronUp: <ChevronUp />,
      heart: <Heart />,
      home: <Home />,
      fileImageO: <FileImageO height={height} width={width} />,
      fileMovieO: <FileMovieO />,
      trash2: <Trash2 />,
      movieStat: <MovieStat height={height} width={width} />,
      movieStatShort: <MovieStatShort height={height} width={width} />,
      homeEmptyState: <HomeEmptyState height={height} width={width} />
    };

    return iconObject[iconName as keyof typeof iconObject];
  };
  return <ComponentIcon />;
};
