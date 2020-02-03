import React from "react";
import ReactDOM from "react-dom";

import "./component.scss"
import SearchIcon from './search-solid.svg'
import SyncIcon from './sync-alt-solid.svg'
import TimesIcon from './times-solid.svg'
import Dropdown from 'se-react-dropdown'

class LabelValue extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            //data: props.data,
            selectedList: [{text:'name', value:'Judy'},
                {text:'name', value:'Anny'},
                {text:'name', value:'Stuff'},
                {text:'city', value:'San Francisco'},
                {text:'country', value:'USA'}
            ],
            value:'',
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
        const json = { text:this.state.label, value:e.target.value }
        this.setState(state=>{
            const selectedList = state.selectedList.concat(json)
            return {
                selectedList
            }
        })

    }

    removeSelected(item){
        this.setState(state=>{
            const selectedList = state.selectedList.filter(p=>(p.text != item.text || p.value != item.value))
            return {
                selectedList
            }
        })

    }

    clean(){
        this.setState(state=>{
            return {
                selectedList:[]
            }
        })
    }

    _handleKeyDown(e){
        if (e.key === 'Enter') {
            this.append(e)

        }
    }

    render() {
        const {data} = this.props
        const {label, value, selectedList} = this.state;
        return (
            <div className={'sec-react-label-value ' + (this.props.className || '')}>
                <div className="element-wrapper">
                    <Dropdown data={data} onChange={this.updateLabel.bind(this)}/>
                    <div className="input-wrapper">
                        <SearchIcon className="search-icon"/>
                        <span className="label">{label}:</span>
                        <input className="box" type="text"
                               onKeyDown={this._handleKeyDown.bind(this)}
                               placeholder="press enter to add"/>

                    </div>
                    <span className="data-clear" onClick={this.clean.bind(this)}>
                        <SyncIcon className="sync-icon"/>
                    </span>
                </div>
                <ul className="selected-wrapper">
                    {selectedList.map(item=>(
                        <li><span>{item.text+':'+item.value}</span><TimesIcon onClick={this.removeSelected.bind(this, item)}/></li>
                    ))}

                </ul>


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

