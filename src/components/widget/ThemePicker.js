import React from 'react';
import { Icon, Divider } from 'antd';
import { SketchPicker } from 'react-color';
import classNames from 'classnames';


export default class ThemePicker extends React.Component{
    state = {
        switcherOn: false,
        background: localStorage.getItem('@primary-color') || '#313653',
    };

    _switcherOn = () => {
        this.setState({
            switcherOn: !this.state.switcherOn
        })
    };

    _handleChangeComplete = color => {
         console.log(color);
         this.setState({ background: color.hex });
         localStorage.setItem('@primary-color', color.hex);
         window.less.modifyVars({
             '@primary-color': color.hex,
         })
    };


    render(){
        const { switcherOn, background } = this.state;
        return (
            <div className={classNames('switcher dark-white',{ active: switcherOn })}>
                <span className="sw-btn dark-white" onClick={this._switcherOn}>
                    <Icon type="setting" className="text-dark"/>
                </span>
                <div className="clear" style={{ padding: 10 }}>
                    <SketchPicker color={background} onChangeComplete={this._handleChangeComplete}/>
                </div>
            </div>
        );
    }
}