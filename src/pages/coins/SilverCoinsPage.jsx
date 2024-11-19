import { useParams } from 'react-router-dom';

const SilverCoinsPage = () => {
  const params = useParams();
  console.log(params);

  return <div>SilverCoinsPage</div>;
};

export default SilverCoinsPage;
