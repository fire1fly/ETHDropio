import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import IconArrow from 'shared/assets/icons/icon-arrow-up-right.svg';
import cls from './Steps.module.scss';
import { IStepCard } from '../model/items';

interface StepCardProps extends IStepCard {
  className?: string;
}

export const StepCard: FC<StepCardProps> = (props) => {
  const {
    className,
    icon: Icon,
    title,
    link,
  } = props;

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Steps_card, className)}>
      {Icon && (
        <div className={cls.Steps_card_icon}>
          <Icon />
        </div>
      )}
      <div className={cls.Steps_card_row}>
        {title && <Text tag="h3" className={cls.Steps_card_title}>{t(title)}</Text>}
        {link && (
          <a href={link} className={cls.Steps_card_btn_wrapper}>
            <Button className={cls.Steps_card_btn} align="center" startIcon={IconArrow} />
          </a>
        )}
      </div>
    </div>
  );
};
