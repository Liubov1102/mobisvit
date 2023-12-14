import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: #5eaae857;
  height: 100%;
  width: 100%;
  transition: 1s all easy;
  opacity: 1;
  visibility: visible;
`;

// .done{#001739
//   opacity: 0;
//   visibility: hidden;
// }
export const Spinner = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  border: 3px solid transparent;
  /*   border: 3px solid greeen; */
  border-radius: 50%;
  height: 110px;
  width: 110px;
  margin: 200px auto;
  position: relative;
  border-top-color: gold;
  animation-name: spin;
  animation-duration: 1.1s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  &:before {
    content: "";
    position: absolute;
    border: 3px solid transparent;
    /*   border: 3px solid greeen; */
    border-radius: 50%;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    border-top-color: red;
    animation-name: spin;
    animation-duration: 2.1s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-duration: 2.1s;
  }
  &:after {
    content: "";
    position: absolute;
    border: 3px solid transparent;
    /*   border: 3px solid greeen; */
    border-radius: 50%;
    top: 23px;
    left: 23px;
    bottom: 23px;
    right: 23px;
    border-top-color: indigo;
    animation-name: spin;
    animation-delay: 1.3s;
    animation-duration: 3.1s;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
`;

// .circle: before, .circle:after{
//      content: "";
//   position: absolute;
//   border: 3px solid transparent;
// /*   border: 3px solid greeen; */
//   border-radius: 50%;
// }

// .circle{
//   height: 110px;
//   width: 110px;
//   margin: 200px auto;
//   position: relative;
//   border-top-color: gold;
//   animation-name: spin;
//    animation-duration:1.1s;
//   animation-iteration-count: infinite;
//   animation-direction: normal;
// }

// .circle:before, .circle:after{
//   content: "";
//   position: absolute;
// }

// .circle:before{
//   top: 10px;
//   left:10px;
//   bottom: 10px;
//   right: 10px;
//   border-top-color: red;
//   animation-name: spin;
//    animation-duration:2.1s;
//   animation-iteration-count: infinite;
//   animation-direction: normal;
//   animation-duration: 2.1s;
// }

// .circle:after{
//   top: 23px;
//   left:23px;
//   bottom: 23px;
//   right: 23px;
//   border-top-color: indigo;
//   animation-name: spin;
//   animation-delay: 1.3s;
//   animation-duration:3.1s;
//   animation-iteration-count: infinite;
//   animation-direction: normal;
// }
