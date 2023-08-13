import IconStep1 from 'shared/assets/icons/icon-step-1.svg';
import IconStep2 from 'shared/assets/icons/icon-step-2.svg';
import IconStep3 from 'shared/assets/icons/icon-step-3.svg';

export interface IStepCard {
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  title?: string;
  link?: string;
}

export const steps: IStepCard[] = [
  {
    icon: IconStep1,
    title: 'steps.step_1',
    link: '#',
  },
  {
    icon: IconStep2,
    title: 'steps.step_2',
    link: '#',
  },
  {
    icon: IconStep3,
    title: 'steps.step_3',
    link: '#',
  },
];
