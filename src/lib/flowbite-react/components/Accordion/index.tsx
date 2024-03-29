import { Children, cloneElement, FC, PropsWithChildren, ReactElement, useMemo } from 'react';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
import { AccordionContent } from './AccordionContent';
import classNames from 'classnames';

export type AccordionProps = PropsWithChildren<{
  flush?: boolean;
}>;

const AccordionComponent: FC<AccordionProps> = ({ children, flush }) => {
  const panels = useMemo(
    () => Children.map(children as ReactElement<AccordionPanelProps>[], (child) => cloneElement(child, { flush })),
    [children, flush],
  );

  return (
    <div
      data-testid="accordion-element"
      className={classNames('divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700', {
        'rounded-lg border': !flush,
        'border-b': flush,
      })}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = 'Accordion';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
