import { IconProps, Spinner } from 'phosphor-react';
import { VisuallyHidden } from '@reach/visually-hidden';

const LoadingIndicator = (props: IconProps) => {
  return (
    <>
      <VisuallyHidden>Loading</VisuallyHidden>
      <Spinner {...props}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        />
      </Spinner>
    </>
  );
};

export default LoadingIndicator;
