import BasicCard from "../components/BasicCard";
import { CARDS } from "../constants";
import "../Styles/Dashboard.css"

 export default function Dashboard(){
console.log(CARDS)

     return(
         <div className="cardFlex-main">
                {
                    CARDS.map((card,index)=>{
                        
                       return <BasicCard className="dashBasicCard" title={card.title} subTitle={card.subTitle} url={card.url}/>
                       
                    })
                }

        

         </div>
     )
 }