import React, { cloneElement, ReactElement } from 'react';

interface A11yClickerProps {
  children: ReactElement;
  onClick: (args: any) => void;
}

const A11yClicker = ({ children, onClick }: A11yClickerProps) => {
  return cloneElement(children, {
    tabIndex: 0,
    onClick: onClick,
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onClick(e);
      }
    },
  });
};

export default A11yClicker;
