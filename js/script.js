const App = () => {
    return (
        <React.Fragment>
            <Task1/>
            <Task2/>
            <Task3/>
            <Task4/>
            <Task5/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
