var React = require('react');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var axios = require('axios');
var helpers = require('./utils/helper');
// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Search = React.createClass({
	getInitialState: function(){
		return {
			data:[]
		}
	},

	handleChange: function(event){

		var newSearch = {
			num1: 0,
			num2: 0,
			text: ""
		};

    	helpers.search(searchData)
            .then(function(data){
                this.setState({
                    data: data.data.response.docs,
                    meta: data.data.response.meta
                })
            }.bind(this)
            );
    },
    render: function(){
        return(
            <div className="holder">
                <div className="row">
                    <Query onUpdate={this.onUpdate} />
                </div>
                <div className="row">
                    <Results results={this.state.data} meta ={this.state.meta}/>
                </div>
            </div>
        )
    },
    onUpdate:function (searchData) {
        helpers.search(searchData)
            .then(function(data) {
                this.setState({
                    data: data.data.response.docs,
                    meta: data.data.response.meta
                })
            }.bind(this)
            );
    }
});

module.exports = Search;