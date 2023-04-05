import { RevolvingDot } from 'react-loader-spinner';

const Loader = () => (
  <div className="Loader">
    <RevolvingDot
      height="900"
      width="800"
      radius="90"
      color="#2724c5"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
