import User from './components/User';
import Header from './components/Header';
import Timer from './components/Timer';
import { users, auctionTime } from './constansts';
import Parametrs from './components/Parametrs';

function App() {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <Header />
        <div className="body">
          <h2 className="body__text">
            Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных
            в таблице:
          </h2>
          <div className="body__info">
            <p className="body__info-text">Ход</p>
            <Timer users={users} auctionTime={auctionTime} />
          </div>
          <div className="body__main-container">
            <Parametrs />
            {users.map((i) => {
              return <User key={i._id} user={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
