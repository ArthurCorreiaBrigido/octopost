import { useState } from 'react'

import MainComposer from '../../components/MainComposer/MainComposer'
import MediaInputs from '../../components/MediaInputs/MediaInput'
import SavBar from '../../components/SavBar/SavBar'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import scss from './home.module.scss'

const Home = () => {
  const [sidebarSwitch, setsSidebarSwitch] = useState()

  return (
    <>
      <Header />
      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar sidebarSwitch={sidebarSwitch} setsSidebarSwitch={setsSidebarSwitch} />
          </div>
          <div className={scss.gridInput}>
            <MainComposer />
            <MediaInputs />
          </div>

          <div className={scss.gridTabs} />
        </div>
        <SavBar />
      </div>
    </>
  )
}

export default Home
