import React, { Component } from 'react';

const ListStars = (props) => {
  console.log(Array.isArray(props.stars));
  console.log(props.stars);
    return (
      <div>
        <ul>
        {/* {this.props.stars.map((star, i) => {
          return (
            <li key={i}> {star[i]}</li>
          )
        })} */}
        </ul>
      </div>
    ) 
}

export default ListStars;
