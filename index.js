const rootElement = document.getElementById('app')
// const myElement= document.createElement('h1')
// myElement.className="orange"
// myElement.innerText="Helo from pluralSight"

const myReactElement=React.createElement('h1',
{className: 'orange'},
'Helo from fucking react');
// rootElement.appendChild(myElement)

ReactDOM.render(
    myReactElement,
    document.getElementById('app')
)