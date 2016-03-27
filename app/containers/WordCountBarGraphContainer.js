import React from 'react';
import { connect } from 'react-redux';
import WordCountBarGraph from '../components/WordCountBarGraph';

const mapStateToProps = (state) => {
  let sortedWords = Object.assign({}, state.wordCount);
  let sortedArr = Object.keys(sortedWords).map(key => ({ [key]: sortedWords[key] }))
                        .sort((a, b) => a[Object.keys(a).join('')] - b[Object.keys(b).join('')] );
  return { 
    labels: sortedArr.map(word => Object.keys(word).join('')).slice(sortedArr.length-10),
    data: sortedArr.map(word => word[Object.keys(word).join('')]).slice(sortedArr.length-10)
  };
};


export default connect(mapStateToProps)(WordCountBarGraph);

