import classNames from 'classnames';
import './button.scss';
// @ts-ignore
import upSvg from './up.svg';
// @ts-ignore
import downSvg from './down.svg';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export function Button({
  up,
  ...rest
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { up: boolean }
>) {
  return (
    <button
      className={classNames('Button', up ? 'Button--up' : 'Button--down')}
      {...rest}
    >
      <div className="Button__inner">
        <img src={up ? upSvg : downSvg} />
      </div>
      <div className="Button__shadow"></div>
    </button>
  );
}
