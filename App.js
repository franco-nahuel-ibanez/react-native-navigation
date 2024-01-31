import RootNavigator from './src/navigations/RootNavigator';
import { Provider } from 'react-redux'
import { store } from './src/app/store';

export default function App() {
  return (
    <Provider store={store} >
      <RootNavigator />
    </Provider>
  );
}

