import * as React from 'react';
import './App.css';
import { State } from './examples/state/State';
import { Step2 } from './examples/thinkInReact/step2';
import { Step4 } from './examples/thinkInReact/step4';
import { Step5 } from './examples/thinkInReact/step5';
import { UseState } from './examples/hooks/useState';
import { UseEffect } from './examples/hooks/useEffect';
import { SimpleDataFetching } from './examples/suspense/simpleDataFetching';

function App() {
    return (
        <div className="App">
            {/*<ClassState />*/}
            {/*{Step2}*/}
            {/*{Step4}*/}
            {/*{Step5}*/}
            {/*<UseState />*/}
            {/*<UseEffect />*/}
            <SimpleDataFetching />
        </div>
    );
}

export default App;
