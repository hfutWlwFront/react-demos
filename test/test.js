var MyHeader = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {
            name: 'linpeng',
            age: '23'
        }
    },
    render: function() {
        return (
            <header style={{width: 300,margin: '20px auto'}}>
                <h2>I am header</h2>
                <h3>{this.props.name}</h3>
                <h4>{this.props.age}</h4>
            </header>
        )
    }
});

var MyContent = React.createClass({
    render: function() {
        return (
            <div id="cotent">
                <h3>I am content: </h3>
                {this.props.children}
            </div>
        )
    }
});


var name = 'sqliang';
//var age = 23;
var age = '23';

ReactDOM.render(
    <div>
        <MyHeader name={name} age={age}/>

        <MyContent>
            <h2>花非花,雾非雾</h2>
        </MyContent>
        <MyHeader/>
    </div>,
    document.getElementById('example')
);