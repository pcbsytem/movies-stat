import { Col } from 'rsuite';
import { Icon } from '../../index';
import { BannerProps } from '../molecules.types';
import './Banner.css';

export const Banner = ({ title, subTitle, children }: BannerProps) => (
  <header className='banner'>
    <div className='bannerLogo'>
      <Icon iconName='movieStat' width='350px' height='60px' />
    </div>

    <br />
    <h1>{title}</h1>
    <br />
    <p className='bannerSubTitle'>{subTitle}</p>
    <Col xs={24} sm={12} md={8}>
      {children}
    </Col>
  </header>
);
