import CharacterCountdown from '../components/CharacterCountDown/CharacterCountDown';

import scss from './home.module.scss';

const Home = () => {
  return (
    <div className={scss.mainContainer}>
      <div className={scss.gridContainer}>
        <div className={scss.gridSwitches} />
        <div className={scss.gridInput} />
        <div className={scss.gridTabs} />
      </div>
    </div>
  );
};

export default Home;