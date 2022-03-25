import React from "react";

export default class ShowDate extends React.Component {
    state = {
      date: ""
    };
  
    componentDidMount() {
      this.getDate();
    }
  
    getDate = () => {
      var date = new Date().toDateString();
      this.setState({ date });
    };
  
    render() {
      const { date } = this.state;
  
      return <div>{date}</div>;
    }
  }