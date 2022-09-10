import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import { Slice } from '@prismicio/types';
import clsx from 'clsx';
import React from 'react';

import { Bounded } from '../../components/Bounded';

interface Bounded {
  slice: Slice;
  index: number;
}

const Image: React.FunctionComponent<Bounded> = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <Bounded as='section' className={clsx('bg-white', index === 0 && 'pt-0 md:pt-0')}>
      {prismicH.isFilled.image(image) && (
        <div className='bg-gray-100'>
          <PrismicNextImage field={image} layout='responsive' />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
