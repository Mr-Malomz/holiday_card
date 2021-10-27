import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

export const Card = ({ message, name, publicId }) => {
  return (
    <div>
      <CloudinaryContext cloudName='dtgbzmpca'>
        <Image publicId={publicId} width={1000}>
          <Transformation crop='fit' effect='blur:100' />
          <Transformation effect='brightness_hsb:-50' />
          <Transformation
            color='#FFFFFF'
            overlay={{
              background: '',
              fontFamily: 'Neucha',
              fontSize: 100,
              fontWeight: 'bold',
              text: message,
              textAlign: 'center',
            }}
            width='1300'
            crop='fit'
          />
          <Transformation flags='layer_apply' />
          <Transformation
            color='#FFFFFF'
            overlay={{
              fontFamily: 'Dancing Script',
              fontSize: 50,
              fontWeight: 'bold',
              text: `from ${name}`,
            }}
          />
          <Transformation
            flags='layer_apply'
            gravity='center'
            x='450'
            y='350'
          />
        </Image>
      </CloudinaryContext>
    </div>
  );
};
