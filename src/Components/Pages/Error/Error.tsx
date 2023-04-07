import { render } from 'react-dom';

function NotFoundPage() {
    return (
      <div>
        <h1 className='error-title'>404 Not Found</h1>
        <p className='error'>The page you are looking for does not exist.</p>
      </div>
    );
  };
  
  export default NotFoundPage;