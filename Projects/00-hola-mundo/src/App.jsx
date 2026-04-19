import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const format = (userName) => `@${userName}`
    


const users =[
    {
        userName: "LeandroPerezUlima",
        name: "Leandro Perez",
        isFollowing: true
    },
    {
        userName: "MouSimper",
        name: "Mou Simper",
        isFollowing: false
    },
    {
        userName: "AlonVal2902",
        name: "Edgar Alonso Leoncio Valdivia DIaz",
        isFollowing: true
    },
    {
        userName: "DoubleLiFFt",
        name: "NSX Galax",
        isFollowing: false
    }
]
export function App () {
    
    return(
        <section className='App'>
            
        {
            users.map(user => {
                const {userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard
                       formatUsername={format}
                       userName={userName}
                       name = {name}
                       initialIsFollowing={isFollowing}
                    ></TwitterFollowCard>
                    )
                })
        }   
        </section>
    )
}
        
