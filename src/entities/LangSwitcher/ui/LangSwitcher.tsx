import {
  FC, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import IconPlanet from 'shared/assets/icons/icon-planet.svg';
import IconArrow from 'shared/assets/icons/icon-arrow-down.svg';

import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { ILanguage, languages } from '../model/languages';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const ref = useRef<HTMLDivElement >(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initLang = languages.find((lang) => lang.value === i18n.language);
  const [language, setLanguage] = useState<ILanguage>(initLang || languages[0]);

  const handleLangSwitch = (lang: ILanguage) => {
    i18n.changeLanguage(lang.value);
    setLanguage(lang);
  };

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const el = e.target as unknown as HTMLElement;
    if (ref.current && !ref.current.contains(el)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  return (
    <div
      ref={ref}
      onClick={toggleList}
      className={classNames(cls.LangSwitcher, cls.LangSwitcher_box)}
    >
      <IconPlanet className={cls.LangSwitcher_icon_lang} />
      <div className={cls.LangSwitcher_lang}>{language.label}</div>
      <IconArrow className={cls.LangSwitcher_icon_arrow} />

      <div className={classNames(
        cls.LangSwitcher_list,
        cls.LangSwitcher_box,
        { [cls.active]: isOpen },
      )}
      >
        {
          languages.map((lang) => (
            <div
              key={lang.value}
              onClick={() => handleLangSwitch(lang)}
              className={classNames(
                cls.LangSwitcher_list_item,
                cls.LangSwitcher_lang,
                { [cls.active]: lang.value === language.value },
              )}
            >
              {lang.label}
            </div>
          ))
        }
      </div>
    </div>
  );
};
