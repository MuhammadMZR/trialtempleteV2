import { ImageResponse } from 'next/og';
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: '#051A3D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#E5B53A',
          fontWeight: 800,
          border: '2px solid #E5B53A',
          borderRadius: '6px',
        }}
      >
        TT
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
