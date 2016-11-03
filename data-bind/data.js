// 自定义组件
var DataBindComponent = React.createClass({
    getDefaultProps: function () {
        return {
            content: 'hehe'
        }
    },
    getInitialState: function () {
        return {
            content: this.props.content
        }
    },
    render: function () {
        return (
            <div style={{width:400,margin: '30px auto'}}>
                <input type="text" value={this.state.content} onChange={this.handleChange}/>
                <p>{this.state.content}</p>
            </div>
        );
    },
    handleChange: function (event) {
        this.setState({content: event.target.value});
    }
});
// 渲染
ReactDOM.render(
    <DataBindComponent content="hello"/>,
    document.getElementById('example'));