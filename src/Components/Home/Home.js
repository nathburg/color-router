import { Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Redirect to='/rgb/0/0/0' />
    </div>
  );
}
