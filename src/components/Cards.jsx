import '../App.css'


function Cards ({ title, description, image, click}) {


    return (
        
        <div className = 'Info-Card'>
            
            
            <h3 className = 'Card-Header'>{title}</h3>

            {/* Only show image if one is provided */}
            {image && <img className="Card-Image" src={image} alt={title} />}
            
            <p className = 'Card-Description'>{description}</p>
            


        </div>
        
    )
};

export default Cards;