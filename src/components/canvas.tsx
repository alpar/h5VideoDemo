import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';

export interface CanvasProps { type: string, message?:string }
interface stageSize { w : number, h : number }

export class Canvas extends React.Component<CanvasProps, {}> {
    render() {
        let type = this.props.type;
        let stage:stageSize = {
            w : 1280,
            h : 800
        };
        switch ( type ) {
            case "fullScreen":
                
                break;
            default:
                break;
        }
        return <canvas width={stage.w} height={stage.h} ></canvas>;
    }    
}