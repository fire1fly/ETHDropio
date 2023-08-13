import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextColor } from 'shared/ui/Text/Text';
import IconShield from 'shared/assets/icons/icon-shield-check.svg';
import cls from './Steps.module.scss';
import { steps } from '../model/items';
import { StepCard } from './StepCard';

interface StepsProps {
  className?: string;
}

export const Steps = React.forwardRef<HTMLSelectElement, StepsProps>(({ className }, ref) => {
  const { t } = useTranslation();
  return (
    <section ref={ref} className={classNames(cls.Steps, className)}>
      <div className="container">
        <Text tag="p" className={classNames(cls.Steps_subtitle, '_text-upper')}>ETHEREUM AIRDROP</Text>
        <Text tag="h2" className={cls.Steps_title}>{t('howToStart')}</Text>

        <div className={cls.Steps_grid}>
          {
            steps.map((step) => (
              <StepCard
                key={step.title}
                {...step}
              />
            ))
          }
        </div>

        <div className={cls.Steps_footer}>
          <IconShield className={cls.Steps_footer_icon} />
          <Text tag="span" className={cls.Steps_footer_text}>{t('steps.footer')}</Text>
        </div>
      </div>
    </section>
  );
});
