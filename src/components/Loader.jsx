import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    backgroundColor={'rgb(53, 34, 16)'}
    foregroundColor={'rgb(204, 179, 122)'}
    viewBox="0 0 280 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="40" height="40" />
    <rect x="45" y="5" rx="4" ry="4" width="150" height="13" />
    <rect x="45" y="30" rx="3" ry="3" width="150" height="10" />
  </ContentLoader>
);

export default MyLoader;
