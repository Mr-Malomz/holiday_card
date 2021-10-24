import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

export const Card = ({ message, name, publicId }) => {
  return (
    <div>
      <CloudinaryContext cloudName='dtgbzmpca'>
        <Image
          publicId={publicId}
          style={{
            border: '20px solid',
          }}
          width={1000}
        >
          <Transformation crop='fit' effect='blur:100' />
          <Transformation
            color='#FFFFFF'
            overlay={{
              background: '',
              fontFamily: 'Neucha',
              fontSize: 200,
              fontWeight: 'bold',
              text: message,
              textAlign: 'center',
            }}
          />
          <Transformation flags='layer_apply' />
          <Transformation
            color='#FFFFFF'
            overlay={{
              fontFamily: 'Dancing Script',
              fontSize: 100,
              fontWeight: 'bold',
              text: `from ${name}`,
            }}
          />
          <Transformation
            flags='layer_apply'
            gravity='center'
            x='450'
            y='200'
          />
        </Image>
      </CloudinaryContext>
    </div>
  );
};
