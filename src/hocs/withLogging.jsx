import { useEffect } from "react"

//funcion del HOC
export function withLogging(WrappedComponent){
    //Este es el nuevo componente que se crea 
    const ComponentWithLogging = (props)=>{
        //Este efecto se ejecuta cuando el componente aparece en pantalla
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se monto!`)
        },[] )

        //Mostramos el componente original, con todas sus props
        return <WrappedComponent {...props}/>
    }
//devolviendo el nuevo componente
return ComponentWithLogging

}