function customrender(reactelement,container){
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    /*domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    Basic one by one attribute setting but tedioust for too many atributes */
    //LOOP TO SET ATTRIBUTE
    for (const prop in reactelement.props){
        if(prop==='children') continue ;
        domelement.setAttribute(prop,reactelement.props[prop])
    }

    container.appendChild(domelement)

}
const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'

    },
    children:'Click me to visit google'
}

const maincontainer=document.querySelector('#root')

customrender(reactelement,maincontainer)