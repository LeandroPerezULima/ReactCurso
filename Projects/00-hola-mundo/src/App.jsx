import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const format = (userName) => `@${userName}`
    
export function App () {
    
    return(
        <section className='App'>
            <TwitterFollowCard 
            formatUsername={format}  
            userName = "LeandroPerezUlima" 
            name = "Leandro Perez"
            initialIsFollowing={true}/>

            <TwitterFollowCard 
            formatUsername={format} 
            userName = "MouSimper" 
            name = "Mou Simper"/>
        </section>
    )


}