import React from 'react';

export const a11yClickProps = (clickFn: () => void) => {
  return {
    tabIndex: 0,
    onClick: clickFn,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        clickFn();
      }
    },
  };
};
