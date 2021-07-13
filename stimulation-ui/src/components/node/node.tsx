import { Component} from 'react';
import './node.css';
import nextId from "react-id-generator";
import axios from 'axios';  
//import { Container } from 'reactstrap';

export class Node extends Component <any,any> {
  static displayName = Node.name;
  htmlId = nextId();
  id: any;
  constructor (props :any) {
    super(props);
    this.state = {
      id : this.htmlId,
      x : this.props.x, 
      y : this.props.y ,
      name: this.props.name,
      ksp : []
    };
  }
  componentDidMount() {
    this.dragElement(document.querySelector(`#${this.htmlId}`));
  }
  componentDidUpdate() {
    
  }
  render () {
    let color : any 
    let id : any
    if(this.props.name ==='DCU'){
     color = 'red'
     id = this.htmlId
     return (
      <div id={this.htmlId} className="mydiv" style={{top: this.props.y, left: this.props.x}} onMouseMove = {this.handleChange}>
        <svg id="Layer_1" height="90" viewBox="0 0 512 512" width="90" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
        <path d="m42 19v445h390v-445z" fill="#b3d1e7"/><path d="m402.17 193.82h84.7v119.36h-84.7z" fill="#d4e1f4"/>
        <path d="m197.85 36.53h77.83v28.24h-77.83z" fill="#fb6771"/><path d="m94.67 84.25h284.2v347.16h-284.2z" fill="#4a5160"/>
        <path d="m316.8 115.03h62.07v23.72h-62.07z" fill="#b0b5ca"/><path d="m316.8 138.75h62.07v292.66h-62.07z" fill="#6d7486"/>
        <path d="m122.7 139.84h154.13v291.57h-154.13z" fill="#6d7486"/><path d="m122.7 115.03h154.13v24.81h-154.13z" fill="#b0b5ca"/>
        <path d="m338.42 300.8h40.45v45.51h-40.45z" fill="#fadf4a"/><path d="m338.42 233.23h40.45v45.52h-40.45z" fill="#f7d1c5"/>
        <path d="m338.42 165.67h40.45v45.51h-40.45z" fill="#55d8d8"/><path d="m144.32 300.8h110.89v45.51h-110.89z" fill="#726de2"/>
        <path d="m144.32 233.23h110.89v45.52h-110.89z" fill="#43bbef"/><path d="m144.32 165.67h110.89v45.51h-110.89z" fill="#a3e261"/>
        <path d="m94.67 431.41h284.2v33.08h-284.2z" fill="#b0b5ca"/><path d="m402.17 193.82h30v119.36h-30z" fill="#b6c7dd"/>
        <path d="m338.42 300.8h30v45.51h-30z" fill="#ffeea4"/><path d="m338.42 233.23h30v45.52h-30z" fill="#ffebe6"/>
        <path d="m338.42 165.67h30v45.51h-30z" fill="#8ff9f6"/><path d="m144.32 300.8h30v45.51h-30z" fill="#bbb8ff"/>
        <path d="m144.32 233.23h30v45.52h-30z" fill="#9fe2ff"/><path d="m144.32 165.67h30v45.51h-30z" fill="#cdff99"/>
        <path d="m420.25 248.19h48.54v35.57h-48.54z" fill="#49bdff"/><path d="m42 19h30v445h-30z" fill="#80adc4"/>
        <path d="m25.13 463.49h423.27v30h-423.27z" fill="#6d7486"/><path d="m25.13 463.49h30v30h-30z" fill="#4a5160"/>
        <g fill="#284268"><path d="m198 71h78a6 6 0 0 0 6-6v-28a6 6 0 0 0 -6-6h-78a6 6 0 0 0 -6 6v28a6 6 0 0 0 6 6zm6-28h66v16h-66z"/>
        <path d="m420.25 290h48.54a6.392 6.392 0 0 0 6.21-6.24v-35.57a6.347 6.347 0 0 0 -6.21-6.19h-6.79v-9.52a17.54 17.54 0 0 0 -5.033-12.653 17.044 17.044 0 0 0 -12.354-5.277 17.682 17.682 0 0 0 -17.613 17.93v9.52h-6.75a6.382 6.382 0 0 0 -6.25 6.19v35.57a6.427 6.427 0 0 0 6.25 6.24zm18.75-57.52a5.765 5.765 0 0 1 5.725-5.93 5.153 5.153 0 0 1 3.86 1.762 5.572 5.572 0 0 1 1.415 4.168v9.52h-11zm-13 21.52h37v24h-37z"/><path d="m67 79.92a6 6 0 0 0 -6 6v3.41a6 6 0 0 0 12 0v-3.41a6 6 0 0 0 -6-6z"/>
        <path d="m67 102.33a6 6 0 0 0 -6 6v99.47a6 6 0 0 0 12 0v-99.47a6 6 0 0 0 -6-6z"/><path d="m158.282 330.1a9 9 0 0 0 5.517 1.928 8.4 8.4 0 0 0 5.934-2.439 8.63 8.63 0 0 0 .654-11.457 6.01 6.01 0 0 0 -1.13-1.14 8.555 8.555 0 0 0 -12.075 12 6.032 6.032 0 0 0 1.1 1.108z"/><path d="m182.481 330.107a9.009 9.009 0 0 0 5.513 1.921 8.4 8.4 0 0 0 5.944-2.445 8.631 8.631 0 0 0 .649-11.45 6.01 6.01 0 0 0 -1.13-1.14 8.559 8.559 0 0 0 -12.094 11.985 6.007 6.007 0 0 0 1.118 1.129z"/><path d="m206.681 330.107a9.009 9.009 0 0 0 5.513 1.921 8.4 8.4 0 0 0 5.944-2.445 8.631 8.631 0 0 0 .649-11.45 6.01 6.01 0 0 0 -1.13-1.14 8.559 8.559 0 0 0 -12.094 11.985 6.007 6.007 0 0 0 1.118 1.129z"/><path d="m158.282 262.531a9 9 0 0 0 5.517 1.928 8.4 8.4 0 0 0 5.94-2.444 8.619 8.619 0 0 0 .641-11.451 6.022 6.022 0 0 0 -1.111-1.122 8.551 8.551 0 0 0 -12.081 11.985 6.019 6.019 0 0 0 1.094 1.104z"/><path d="m182.481 262.538a9.011 9.011 0 0 0 5.519 1.921 8.406 8.406 0 0 0 5.95-2.451 8.62 8.62 0 0 0 .635-11.444 6.022 6.022 0 0 0 -1.111-1.122 8.555 8.555 0 0 0 -12.1 11.974 6.022 6.022 0 0 0 1.107 1.122z"/><path d="m206.681 262.538a9.011 9.011 0 0 0 5.514 1.921 8.406 8.406 0 0 0 5.95-2.451 8.62 8.62 0 0 0 .635-11.444 6.022 6.022 0 0 0 -1.111-1.122 8.555 8.555 0 0 0 -12.1 11.974 6.022 6.022 0 0 0 1.112 1.122z"/><path d="m158.282 194.971a9 9 0 0 0 5.518 1.929 8.4 8.4 0 0 0 5.935-2.439 8.632 8.632 0 0 0 .652-11.461 6.007 6.007 0 0 0 -1.118-1.129 8.554 8.554 0 0 0 -12.087 11.985 5.976 5.976 0 0 0 1.1 1.115z"/><path d="m182.481 194.978a9.014 9.014 0 0 0 5.513 1.92 8.4 8.4 0 0 0 5.944-2.445 8.632 8.632 0 0 0 .649-11.453 6.007 6.007 0 0 0 -1.118-1.129 8.558 8.558 0 0 0 -12.106 11.974 6.017 6.017 0 0 0 1.118 1.133z"/><path d="m206.681 194.978a9.012 9.012 0 0 0 5.513 1.92 8.4 8.4 0 0 0 5.944-2.445 8.632 8.632 0 0 0 .649-11.453 6.007 6.007 0 0 0 -1.118-1.129 8.558 8.558 0 0 0 -12.106 11.974 6.017 6.017 0 0 0 1.118 1.133z"/><path d="m363.357 316.994a8.559 8.559 0 0 0 -12.094 11.984 6.007 6.007 0 0 0 1.118 1.129 9.009 9.009 0 0 0 5.513 1.921 8.4 8.4 0 0 0 5.944-2.445 8.631 8.631 0 0 0 .649-11.45 5.976 5.976 0 0 0 -1.13-1.139z"/><path d="m363.369 249.442a8.555 8.555 0 0 0 -12.1 11.974 6.022 6.022 0 0 0 1.111 1.122 9.011 9.011 0 0 0 5.514 1.921 8.406 8.406 0 0 0 5.95-2.451 8.62 8.62 0 0 0 .635-11.444 6.022 6.022 0 0 0 -1.11-1.122z"/><path d="m363.369 181.873a8.558 8.558 0 0 0 -12.106 11.974 6.017 6.017 0 0 0 1.118 1.131 9.012 9.012 0 0 0 5.513 1.92 8.4 8.4 0 0 0 5.944-2.445 8.632 8.632 0 0 0 .649-11.453 6.007 6.007 0 0 0 -1.118-1.127z"/>
        <path d="m486.87 188h-48.87v-169.49c0-3.314-3.116-5.51-6.43-5.51h-389.61c-3.314 0-5.96 2.2-5.96 5.51v438.49h-10.87c-3.314 0-6.13 3.176-6.13 6.49v30c0 3.314 2.816 5.51 6.13 5.51h423.27a5.269 5.269 0 0 0 5.6-5.51v-30c0-3.314-2.286-6.49-5.6-6.49h-10.4v-138h48.87a5.961 5.961 0 0 0 6.13-5.82v-119.36a5.961 5.961 0 0 0 -6.13-5.82zm-438.87-163h378v163h-23.83a6 6 0 0 0 -6.17 5.82v119.36a6 6 0 0 0 6.17 5.82h23.83v138h-41v-372.75a6.33 6.33 0 0 0 -6.13-6.25h-229.814a6 6 0 0 0 0 12h223.944v19h-56.2a5.858 5.858 0 0 0 -5.8 6.03v309.97h-28v-309.97a6.173 6.173 0 0 0 -6.17-6.03h-154.13a5.777 5.777 0 0 0 -5.7 6.03v309.97h-16v-335h18.162a6 6 0 0 0 0-12h-24.492c-3.314 0-5.67 2.937-5.67 6.25v372.75h-41zm223 121v36h-10v-16.33a5.55 5.55 0 0 0 -5.79-5.67h-110.89c-3.314 0-6.32 2.356-6.32 5.67v16.33h-9v-36zm-142-12v-13h142v13zm120 38v33h-99v-33zm-111 22v17.18c0 3.314 3.006 5.82 6.32 5.82h110.89a5.672 5.672 0 0 0 5.79-5.82v-17.18h10v56h-10v-16.77a6.026 6.026 0 0 0 -5.79-6.23h-110.89a6.481 6.481 0 0 0 -6.32 6.23v16.77h-9v-56zm111 45v34h-99v-34zm-111 23v16.75a6.5 6.5 0 0 0 6.32 6.25h110.89a6.044 6.044 0 0 0 5.79-6.25v-16.75h10v56h-10v-17.2a5.656 5.656 0 0 0 -5.79-5.8h-110.89c-3.314 0-6.32 2.486-6.32 5.8v17.2h-9v-56zm111 45v33h-99v-33zm-111 23v16.31c0 3.314 3.006 5.69 6.32 5.69h110.89a5.566 5.566 0 0 0 5.79-5.69v-16.31h10v95h-142v-95zm235 107v20h-272v-20zm-50-12v-95h9v16.31c0 3.314 3.106 5.69 6.42 5.69h34.58v73zm21-85v-33h29v33zm-5.58-45c-3.314 0-6.42 2.486-6.42 5.8v17.2h-9v-56h9v16.75a6.59 6.59 0 0 0 6.42 6.25h34.58v10zm5.58-22v-34h29v34zm-5.58-46a6.572 6.572 0 0 0 -6.42 6.23v16.77h-9v-56h9v17.18c0 3.314 3.106 5.82 6.42 5.82h34.58v10zm5.58-22v-33h29v33zm-5.58-45c-3.314 0-6.42 2.356-6.42 5.67v16.33h-9v-37h50v15zm-15.42-27v-12h50v12zm119 336v18h-411v-18zm39-162h-73v-107h73z"/>
        </g>
        <text fill="#ffffff" fontSize={140} fontFamily="Verdana" x={100} y={340}> {id} </text>
        </svg>
        {/* <svg width={100} height={100}>
          <circle cx={50} cy={50} r={40} stroke="green" strokeWidth={4} fill= {color} />
          <text fill="#ffffff" fontSize={15} fontFamily="Verdana" x={34} y={50}>{this.props.name}</text>
          <text fill="#ffffff" fontSize={15} fontFamily="Verdana" x={34} y={70}> {id} </text>
        </svg> */}
        <br/>
        <span> {this.props.name}</span>
        <br/>
        <span  > x : {this.state.x} y : {this.state.y}</span>
      </div>
        );
    }
    else {
     color = 'blue'
     id = this.htmlId

     return (
      <div id={this.htmlId}  className="mydiv" style={{top: this.props.y, left: this.props.x}} onMouseMove = {this.handleChange} onClick={ this.handleClick}>

        <svg id="Layer_1" height="90" viewBox="0 0 512 512" width="90" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
        <path d="m83 373v100c0 15.19 12.46 28 27.64 28h289.78c15.17 0 27.58-12.81 27.58-28v-100z" fill="#585d68"/>
        <path d="m391.67 373.16v83.24h-272.28v-83.24z" fill="#6d7486"/><path d="m119 373h30v83h-30z" fill="#5a6170"/>
        <path d="m43.11 133.85v89.51h-26.23a5.885 5.885 0 0 1 -5.88-5.89v-77.74a5.877 5.877 0 0 1 5.88-5.88z" fill="#6d7486"/>
        <path d="m501 139.73v77.74a5.885 5.885 0 0 1 -5.88 5.89h-27.18v-89.51h27.18a5.877 5.877 0 0 1 5.88 5.88z" fill="#6d7486"/>
        <path d="m438.94 11.5h-366.83a30 30 0 0 0 -30 30v302.66a30 30 0 0 0 30 30h366.83c16.57 0 30-18.43 30-35v-297.66a30 30 0 0 0 -30-30z" fill="#4a5160"/>
        <rect fill="#6d7486" height="307.2" rx="10" width="373.85" x="68.6" y="39.23"/><path d="m327.89 400.46h33.88v26.63h-33.88z" fill="#f3ce7d"/>
        <path d="m176.68 80.83h77.13v62.83h-77.13z" fill="#90c3d3"/><path d="m149.28 400.46h33.88v26.63h-33.88z" fill="#e87187"/>
        <path d="m209.55 195.74a22.315 22.315 0 1 1 -22.3 22.31 22.3 22.3 0 0 1 22.3-22.31z" fill="#5fa8ed"/><path d="m268.36 400.46h33.87v26.63h-33.87z" fill="#e87187"/>
        <path d="m208.82 400.46h33.88v26.63h-33.88z" fill="#f3ce7d"/><path d="m387.87 90.83v42.83a10 10 0 0 1 -10 10h-46.94v-62.83h46.94a9.991 9.991 0 0 1 10 10z" fill="#90c3d3"/>
        <path d="m259.65 201.55h131.72v34.38h-131.72z" fill="#b0b5ca"/><path d="m253.81 80.83h77.12v62.83h-77.12z" fill="#a5e2fb"/>
        <path d="m176.68 80.83v62.83h-45.1a10 10 0 0 1 -10-10v-42.83a9.991 9.991 0 0 1 10-10z" fill="#a5e2fb"/>
        <path d="m145.36 195.74a22.315 22.315 0 1 1 -22.3 22.31 22.31 22.31 0 0 1 22.3-22.31z" fill="#5fcda4"/>
        <path d="m99 336.43v-287.2c0-5.52 4.08-10.23 9.6-10.23h-30c-5.52 0-9.6 4.71-9.6 10.23v287.2a9.31 9.31 0 0 0 9.6 9.57h30a9.31 9.31 0 0 1 -9.6-9.57z" fill="#5a6170"/>
        <g fill="#4e5460">
        <path d="m398.5 284.056h-33.657a6 6 0 0 1 0-12h33.657a6 6 0 0 1 0 12z"/>
        <path d="m349.147 284.056h-230.976a6 6 0 1 1 0-12h230.976a6 6 0 0 1 0 12z"/>
        <path d="m398.5 311.555h-19.918a6 6 0 0 1 0-12h19.918a6 6 0 0 1 0 12z"/>
        <path d="m354.385 311.555h-15.4a6 6 0 0 1 0-12h15.4a6 6 0 0 1 0 12z"/>
        <path d="m314.907 311.555h-196.736a6 6 0 1 1 0-12h196.736a6 6 0 0 1 0 12z"/>
        </g>
        <path d="m91 73a6 6 0 0 1 -6-6v-2a6 6 0 0 1 12 0v2a6 6 0 0 1 -6 6z" fill="#f4f8fc"/>
        <path d="m91 185a6 6 0 0 1 -6-6v-92a6 6 0 0 1 12 0v92a6 6 0 0 1 -6 6z" fill="#f4f8fc"/>
        <text fill="#1c0606" fontSize={140} fontFamily="Verdana" x={100} y={340}> {id} </text>
        </svg>
        {/* <svg width={100} height={100}>
          <circle cx={50} cy={50} r={40} stroke="green" strokeWidth={4} fill= {color} />
          <text fill="#ffffff" fontSize={15} fontFamily="Verdana" x={34} y={50}>{this.props.name}</text>
          <text fill="#ffffff" fontSize={15} fontFamily="Verdana" x={34} y={70}> {id} </text>
        </svg> */}
        <br/>
        <span> {this.props.name}</span>
        <br/>
        <span  > x : {this.state.x} y : {this.state.y}</span>
      </div>
        );
    }
  }
  // getId =() =>{
  //   if(this.htmlId !== undefined) {
  //     const temp = []
  //     for (let i = 0; i < this.props.connect.length; i++) {
  //       temp.push(this.props.connect[i].id)
  //     }
  //     if(temp.includes(this.htmlId)){
  //       console.log(this.htmlId)
  //       axios.post('/api/ksp',{
  //         targetNode : this.htmlId
  //       }).then(response =>{
  //         console.log(response.data.solv)
  //       })
  //     }
  //   }
  // }

  handleClick = e => {
    try
    { 
      this.setState({ [e.target.name]: e.target.value }, () => {
        if(this.htmlId !== undefined) {
          const temp = []
          for (let i = 0; i < this.props.connect.length; i++) {
            if(this.props.connect[i].id !== undefined){
              temp.push(this.props.connect[i].id)
            }

          }
          if(temp.includes(this.htmlId)){
            console.log(this.htmlId)
            axios.post('/api/ksp',{
              targetNode : this.htmlId
            }).then(response =>{
              this.setState({ksp : response.data.solv})
              if (this.props.onClick){
                this.props.onClick(this.state.ksp);
              }
            })
          }
        }
      })
    }
    catch (error) {

    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onMouseMove) {
        this.props.onMouseMove(this.state);
      }
    })
  };

  dragElement(elmnt : any) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e : any) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
       pos3 = e.clientX;
       pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    const elementDrag = (e : any) => {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      // console.log('y'+ elmnt.style.top,'x'+ elmnt.style.left)
      this.setState({ y: (elmnt.offsetTop - pos1), x: (elmnt.offsetLeft - pos2) });
    }
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

