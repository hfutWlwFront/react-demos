"use strict";

// onChange事件, 冒泡

var TestChangeComponent = React.createClass({
    getInitialState: function () {
        return {
            value: ''
        };
    },
    render: function () {
        var value = this.state.value;
        return (
            <div style={{marginBottom: '20px'}} onChange={this.handleChangeBubble}>
                <input type="text" value={value} onChange={this.handleChangeInput}/>
            </div>
        );
    },
    handleChangeInput: function (ev) {
        this.setState({
            value: ev.target.value
        });
        console.log('change:' + ev.target.value);
    },
    handleChangeBubble: function (ev) {
        console.log('event 冒泡:' + ev.target.value);
    }
});

var TestTextArea = React.createClass({
    getInitialState: function () {
        return {
            content: ''
        }
    },
    render: function () {
        var content = this.state.content;
        return (
            <div>
                <textarea placeholder="请输入内容" rows="5" value={content} onChange={this.handleChange}/>
            </div>
        )
    },
    handleChange: function (event) {
        this.setState({
            content: event.target.value
        });
    }
});

var TestSelect = React.createClass({
    render: function () {
        return (
            <div style={{marginTop: '20px'}}>
                <select defaultValue="B">
                    <option value="A">AAA</option>
                    <option value="B">BBB</option>
                    <option value="C">CCCC</option>
                    <option value="D">DDDD</option>
                </select>
                <select multiple={true} defaultValue={['B','C']}>
                    <option value="A">AAA</option>
                    <option value="B">BBB</option>
                    <option value="C">CCCC</option>
                    <option value="D">DDDD</option>
                </select>
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <TestChangeComponent/>
        <TestTextArea/>
        <TestSelect/>
    </div>,
    document.getElementById('example')
);