import React from "react";
import ReactDOM from "react-dom";

import "./component.scss"
import SearchIcon from './search-solid.svg'
import SyncIcon from './sync-alt-solid.svg'
import TimesIcon from './times-solid.svg'
import Dropdown from 'se-react-dropdown'

class Component extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            //data: props.data,
            selectedList: props.selectedList || [
                /*{text:'name', value:'Judy'},
                {text:'name', value:'Anny'},
                {text:'name', value:'Stuff'},
                {text:'city', value:'San Francisco'},
                {text:'country', value:'USA'}*/
            ],
            value:'',
            label: ''
        };

    }

    updateLabel(dropdownItem) {
        this.setState({label: dropdownItem.text})
    }

    append(e) {
        const json = { text:this.state.label, value:e.target.value }
        const {onEnter} = this.props
        this.setState(state=>{
            const selectedList = state.selectedList.concat(json)
            return {
                selectedList
            }
        }, ()=>{
            onEnter && onEnter(this.state.selectedList)
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
                    <Dropdown data={data} onChange={this.updateLabel.bind(this)} />
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
            </div>
        );
    }
}

export default Component;