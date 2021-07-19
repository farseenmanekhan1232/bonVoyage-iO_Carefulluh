import React from 'react';
import './Details.styles.css';

var key=  0;
class Details extends React.Component {

 
    render(){
        if(this.props.details){
            return(
                <div className="details">
                    <div className="Name-section" key={++key}>
                        <h1>Basic Details</h1>
                    {Object.entries(this.props.details.names).map((item)=>{
                        key+=1;
                        return (
                            <div key={++key} className = 'Name'>
                                <div><b>{item[0].toUpperCase()}</b></div>
                                <div><i>{item[1]}</i></div>
                            </div>
                        )
                    })  
                    }
                    <div className='Name'>
                        <div><b>Time Zone</b></div>              
                        <div>{this.props.details.timezone.name}</div>
                    </div>   
                    </div>

                    <div className='Name-section'>
                        <h1>Coordinates</h1>
                        <div>
                            <div className='Name'>
                                <div><b>LATITUDE</b></div>
                                <div>{this.props.details.maps.lat}</div>
                            </div>
                            <div className='Name'>
                                <div><b>LONGITUDE</b></div>
                                <div>{this.props.details.maps.long}</div>
                            </div>
                        </div>
                    </div>

                    <div className="Name-section" key={++key}>
                        <h1>Currency Details</h1>
                    {Object.entries(this.props.details.currency).map((item)=>{
                        key+=1;
                        if(item[0]==='compare'||item[0]==='symbol'||item[0]==='rate'){
                            return(<div></div>)
                        }
                        else{
                        return (
                            <div key={++key} className = 'Name'>
                                <div><b>{item[0].toUpperCase()}</b></div>
                                <div><i>{item[1]}</i></div>
                            </div>
                        )}
                        
                    })                   
                    }
                    </div>


                    <div className='Name-section'>
                        <h1>Telephone Details</h1>

                        {
                            Object.entries(this.props.details.telephone).map(item=>{
                                return(
                                    <div className='Name'>
                                        <div><b>{item[0].toUpperCase()}</b></div>
                                        <div>{item[1]}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='Name-section vaccine'>
                        <h1>Mandatory Vaccinacations</h1>
                        {       
                                this.props.details.vaccinations.map((item)=>{
                                    
                                return(
                                    
                                    <div className='Name'>
                                        <div className='title'><b>{item.name.toUpperCase()}</b></div>
                                        <br />
                                        <div className='vaccine-detail'>{item.message}</div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className='Name-section neighbour'>
                        <h1>Neighboring Countries</h1>
                        {       
                                this.props.details.neighbors.map((item)=>{
                                    
                                return(
                                    
                                        <h3 className='title neighbour'><b>{item.name.toUpperCase()}</b></h3>
                                    )
                            })
                        }
                        
                    </div>
                </div>

            )
        }
        else{
            return(
                <div>
                </div>
            )
        }
    }
}

export default Details;
