import React from 'react';
import { Link } from 'react-router'
import { getUsersByCity } from '../server'

export default class ResultCityEntry extends React.Component {
	constructor(props){
    super(props);
    this.state = props.data;
  }

  componentDidMount() {
    getUsersByCity(this.state._id, (peopleData) => {
      this.setState({peoplepics: peopleData});
    });
  }

  render() {
    var pics = [];
    for (var key in this.state.peoplepics) {
      if (!this.state.peoplepics.hasOwnProperty(key)) continue;
      var obj = this.state.peoplepics[key];
      pics.push(<img className="list-pic" src={obj.image} title={obj.name} key={key}/>);
    }
		return(
			<div className="row">
        <div className="col-md-12 result">
          <Link to={"/cities/"+this.state._id}>
            <div className="media">
              <div className="media-left">
                <img className="result-image" src={this.state.image} />
              </div>
              <div className="media-body">
                <div className="col-md-12">
                  <div className="row result-name">
                    {this.state.name}
                  </div>
                  <hr />
                  <div className="row result-info">
                    <div className="col-md-6">
                      <table>
                        <tbody>
                          <tr>
                            <td>Location:</td>
                            <td className="r">{this.state.location}</td>
                          </tr>
                          <tr>
                            <td>Climate:</td>
                            <td className="r">{this.state.climate}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table>
                        <tbody>
                          <tr>
                            <td>Number of hosts:</td>
                            <td>{this.state.people.length}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="col-md-12 visible-md visible-lg">
                        { pics }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
	}
}
