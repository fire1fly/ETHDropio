import { Header } from 'widgets/Header';
import { MainScreen } from 'widgets/MainScreen';
import { Steps } from 'widgets/Steps';
import { useRef } from 'react';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const stepsEl = useRef<HTMLSelectElement>(null);

  const handleScrollToSteps = () => {
    const topOffset = stepsEl?.current?.offsetTop;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cls.Page}>
      <div className={cls.Page_inner}>
        <Header onClickScroll={handleScrollToSteps} />
        <MainScreen onClickScroll={handleScrollToSteps} />
        <Steps ref={stepsEl} />
      </div>
    </div>
  );
};

export default MainPage;
