import { useParams } from 'react-router-dom';

const GoldCoinPage = () => {
  const params = useParams();
  console.log(params);

  return <div>GoldCoinPage</div>;
};

export default GoldCoinPage;
