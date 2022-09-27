import { Route, Routes } from 'react-router-dom';
import routes from './pages/routes';

function App() {

  return (
    <Routes>
      {
        routes.map(({ component: Component, path, ...rest }) => {
          return <Route element={<Component />} key={path} path={path} {...rest} />
        })
      }
    </Routes>
  );
}

export default App;
