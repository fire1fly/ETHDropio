import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { useResponsive } from 'shared/lib/hooks/useResponsive';

import imageBg from 'shared/assets/images/mainscreen-bg.png';
import imageBgSm from 'shared/assets/images/mainscreen-bg-sm.png';
import cls from './MainScreen.module.scss';

interface MainScreenProps {
  className?: string;
  onClickScroll?: () => void;
}

export const MainScreen: FC<MainScreenProps> = ({ className, onClickScroll }) => {
  const { t } = useTranslation();
  const { md, lg } = useResponsive();
  return (
    <div className={classNames(cls.MainScreen, className, { container: lg })}>
      <div className={cls.MainScreen_row}>
        <div className={classNames(cls.MainScreen_info, { container: !lg })}>
          <Text tag="span" className={classNames(cls.MainScreen_suptitle, '_text-upper')}>ETHEREUM AIRDROP</Text>
          <Text tag="h1" className={classNames(cls.MainScreen_title)}>
            {t('pageTitle_1')}
            {' '}
            <span className={cls.MainScreen_title_sub}>
              {t('pageTitle_2')}
            </span>
            {' '}
            {t('pageTitle_3')}
          </Text>
          <Text
            tag="p"
            color={TextColor.TRANSLUCENT}
            className={classNames(cls.MainScreen_subtitle)}
          >
            {t('pageSubtitle')}
          </Text>
          <Button
            className={cls.MainScreen_btn_get}
            align="center"
            onClick={onClickScroll}
          >
            {t('connectWallet')}
          </Button>
        </div>

        <div className={cls.MainScreen_pic}>
          {
            md
              ? <img src={imageBg} alt="etherium" />
              : <img src={imageBgSm} alt="etherium" />
          }
        </div>

      </div>
    </div>
  );
};
