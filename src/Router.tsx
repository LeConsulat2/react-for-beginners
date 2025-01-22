import Coin from './routes/coin';
import Coins from './routes/coins';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
