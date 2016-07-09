import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';

export interface HelloProps { compiler: string; framework: string; buttonName: string}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! <Button action="true" block="false" bsSize="large" bsStyle="info">Bootstrap-React</Button> </h1>;
    }    
}