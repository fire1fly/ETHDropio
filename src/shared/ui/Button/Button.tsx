import {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  align?: 'start' | 'center' | 'between' | 'end',
  gap?: number,
  startIcon?: React.VFC<React.SVGProps<SVGSVGElement>>,
  endIcon?: React.VFC<React.SVGProps<SVGSVGElement>>,
  textClassnames?: string;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    align = 'between',
    gap = 0,
    startIcon: IconStart,
    endIcon: IconEnd,
    textClassnames,
    ...otherProps
  } = props;

  const clsMods: ClassnamesMods = {
    [cls[theme]]: true,
    [cls[align]]: true,
  };

  return (
    <button
      type="button"
      style={{ gap: `${gap}px` }}
      className={classNames(cls.Button, className, clsMods)}
      {...otherProps}
    >
      {IconStart && <IconStart className={cls.Button_icon} />}
      <div className={classNames(cls.Button_text, textClassnames)}>
        {children}
      </div>
      {IconEnd && <IconEnd className={cls.Button_icon} />}
    </button>
  );
});
