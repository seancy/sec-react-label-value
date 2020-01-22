import React from "react";
import ReactDOM from "react-dom";

import "./component.scss"
import SearchIcon from './search-solid.svg'
import SyncIcon from './sync-alt-solid.svg'
import Dropdown from 'se-react-dropdown'

class LabelValue extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: props.data,
            selectedList: [{text:'t1', value:'v1'}],
            label: ''
        };

        //this.myRef = React.createRef();

        //document.addEventListener("click", this.hidePanel.bind(this), true);
    }

    /*hidePanel = e => {
        if (!this.myRef.current) {
            return;
        }
        const root = ReactDOM.findDOMNode(this.myRef.current);
        if (root && root.contains(e.target) && this.container !== e.target) {
            return;
        }
        this.setState({isOpen: false});
    };

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    select = (item) => {
        this.setState({
            selected: item
        })
    }*/

    updateLabel(dropdownItem) {
        this.setState({label: dropdownItem.text})
    }

    append(e) {
        let val = e.currentTarget.value;
        this.setState({
            selectedList: (prev) => {
                return prev.append({ text:this.state.label, value:val });
            }
        })

    }

    render() {
        const {data} = this.props
        const {label, selectedList} = this.state;
        return (
            <div className={'sec-react-label-value ' + (this.props.className || '')}>
                <div className="element-wrapper">
                    <Dropdown data={data} onChange={this.updateLabel.bind(this)}/>
                    <div className="input-wrapper">
                        <SearchIcon className="search-icon"/>
                        <span className="label">{label}:</span>
                        <input className="box" type="text" onClick={this.append.bind(this)}
                               placeholder="press enter to add"/>

                    </div>
                    <span className="data-clear">
                        <SyncIcon className="sync-icon"/>
                    </span>
                </div>
                <div className="selected-wrapper">
                    {selectedList.map(item=>(
                        <span>{item.text}--{item.value}</span>
                    ))}

                </div>


                {/*<div className="select" onClick={this.toggle.bind(this)}>
                    <span className="text">{selected.text || ''}</span>
                    {isOpen? (<ChevronUp/>):(<ChevronDown/>)}
                </div>
                <ul className={'panel' + (!this.state.isOpen && ' hide' || '')}>
                    {this.state.data.map(item => (
                        <li key={item.text} onClick={this.select.bind(this, item)} value={item.value}>{item.text}</li>
                    ))}
                </ul>*/}
            </div>
        );
    }
}

export default LabelValue;

