import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactPlayer from 'react-player/lazy';

const HighlightItem = (props) => {
    return (
        props.data.video == 'false' 
        ?
        <LazyLoadImage style={ItemStyle} src={props.data.url}/>
        :
        <span><ReactPlayer maxWidth='300px' style={ItemStyle} url={props.data.url} controls='true' light='true'/></span>
    );

}
export default HighlightItem;

const ItemStyle = {
    marginLeft: '3px',
    marginTop: '3px',
    maxHeight: '200px',
    minWidth: '50px',
    maxWidth: '300px',
    boxShadow: '0px 0px 1px 1px white'
    //objectFit: 'cover',
    //verticalAlign: 'bottom'
};
