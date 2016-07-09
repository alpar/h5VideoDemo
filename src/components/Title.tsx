import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';

export interface TitleProps { compiler: string; framework: string; buttonName: string}

/**
 * H1 title wiht a special button.Just for test.
 */
export class Title extends React.Component<TitleProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! <Button action="true" block="false" bsSize="large" bsStyle="info">{this.props.buttonName}</Button> </h1>;
    }    
}