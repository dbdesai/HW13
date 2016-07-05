var React 		= require('react');

// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Results = React.createClass({
	render: function(){
		
		// Return and parenthesis needs to be on same line.
		/*this.props.children will get replaced by the active component which will be our home component*/
		/*This is because the "home.js" file is inside of the main component*/

		var results = this.props.results.map(function(result, i){
            return(
                <li className="list-group-item" key={i}>
                    <h3>
                        <span><em>{result.headline.main}</em></span>
                        <span className="btn-group pull-right" >
                            <button className="btn btn-default ">View Article</button>
                            <button className="btn btn-primary">Save</button>
                        </span>
                    </h3>
                    <p>Date Published: {result.pub_date}</p>
                </li>
            )
        });
        return(
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {results}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Results;