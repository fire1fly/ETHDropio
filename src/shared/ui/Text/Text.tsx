import {
  ElementType, FC, HTMLAttributes, memo,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextColor {
  DEFAULT = 'default',
  TRANSLUCENT = 'translucent'
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  tag: ElementType;
  color?: TextColor;
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    children,
    className,
    tag: Tag,
    color = TextColor.DEFAULT,
    ...otherProps
  } = props;

  const mods: ClassnamesMods = {
    [cls[color]]: true,
  };

  return (
    <Tag className={classNames(cls.Text, className, mods)} {...otherProps}>
      {children}
    </Tag>
  );
});
