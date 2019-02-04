import React from "react";
import AnimateHeight from "react-animate-height";

type AccordionProps = {
  open?: boolean;
  header?: (
    toggleCollapse: (event: React.MouseEvent<HTMLElement>) => void,
    isOpen: boolean
  ) => void;
};

type AccordionState = {
  open: boolean;
};

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  public state: AccordionState = {
    open: this.props.open || false
  };

  public render(): JSX.Element {
    const { header } = this.props;
    const { open } = this.state;

    return (
      <div className="m-accordion">
        {header && header(this.onCollapseChange, open)}
        <section>
          <AnimateHeight height={open ? "auto" : 0}>
            <div className="m-accordion__body">{this.props.children}</div>
          </AnimateHeight>
        </section>
      </div>
    );
  }

  private onCollapseChange = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
}
