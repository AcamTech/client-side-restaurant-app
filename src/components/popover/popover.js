import React, {createClass, PropTypes, Children} from 'react';
import ReactDOM from 'react-dom';
import _ from 'dom-easy';
import E from 'oui-dom-events';
import PopoverAction from './popover-action';
import PopoverContent from './popover-content';

const Popover = createClass({
  displayName: 'popover',
  propTypes: {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  },
  getInitialState(){
    return {
      isOpen: false
    };
  },
  componentDidMount(){
    E.on(document, 'click.reactpopover', this.externalClick);
  },
  componentWillUnmount(){
    E.off(document, 'click.reactpopover', this.externalClick);
  },
  externalClick(e){
    var node = ReactDOM.findDOMNode(this),
      target = e.target,
      isOpen = this.state.isOpen,
      isPopoverChild = _(target).parents(node).length > 0;
    if(isOpen){
      if(!isPopoverChild){
        this.closeDropdown();
      }
    }
  },
  closeDropdown(){
    this.setState({isOpen: false});
  },
  toggleDropdown(e){
    e.preventDefault();
    this.setState({isOpen: !this.state.isOpen});
  },
  render () {
    var {children, className} = this.props,
      {isOpen} = this.state,
      childrenCount = Children.count(children),
      childrenArray = [],
      topComponent = null,
      contentComponent = null;
    if(childrenCount > 1){
      childrenArray = Children.toArray(children);
      topComponent = childrenArray.slice(0,1)[0];
      contentComponent = childrenArray.slice(1);
    }else{
      contentComponent = children;
    }
    return (
      <div className={`popover ${isOpen ? 'is-open' : ''} ${className ? className : ''}`}>
        <PopoverAction isOpen={isOpen} toggleDropdown={this.toggleDropdown}>{topComponent}</PopoverAction>
        {isOpen ? <PopoverContent isOpen={isOpen}>{contentComponent}</PopoverContent> : null}
      </div>
    );
  }
});

export {PopoverAction, PopoverContent};
export default Popover;
