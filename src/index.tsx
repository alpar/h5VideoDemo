import * as React from "react";
import * as ReactDOM from "react-dom";

import { Title } from "./components/Title";
import { Canvas } from "./components/Canvas";

ReactDOM.render(
    <Title compiler="TypeScript" framework="React" buttonName="BootstrapTestButton" />,
    document.getElementById("title")
);
ReactDOM.render(
    <Canvas type = "default" message = "Your borwser dont support canvas!"></Canvas>,
    document.getElementById("canvas")
);