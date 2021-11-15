
const List = ({people})=>{
     return (
         <>
             {people.map((person) => {
                 const {thumbnailUrl ,id , title,url }=person;
                return <article key={id} >
                    <img src={thumbnailUrl} alt={title}/>
                
                <div>
                    <h4>{title}</h4>
                    <p> Address :{url} </p>
                </div>
                </article>
             })}
         </>
     )
 }

 export default List