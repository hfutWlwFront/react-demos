var TestAjaxComponent = React.createClass({
    getInitialState: function () {
        return {
            list: []
        }
    },
    componentDidMount: function () {
        var source = this.props.source;
        $.get(source,function (result) {
            console.log(result);
            this.setState({
                list: result
            });
        }.bind(this));
    },
    render: function () {
        var list = this.state.list;
        return (
            <div style={{width:'90%',margin: '20px auto'}}>
                <table>
                    <tbody>
                    <tr>
                        <th>评论数</th>
                        <th>评论地址</th>
                        <th>commit地址</th>
                        <th>创建日期</th>
                    </tr>
                    {list.map(function (item, index) {
                        return (
                            <tr key={index}>
                                <td>{item.comments}</td>
                                <td>{item.comments_url}</td>
                                <td>{item.commits_url}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});

ReactDOM.render(
    <TestAjaxComponent source="https://api.github.com/users/octocat/gists"/>,document.getElementById('example'));