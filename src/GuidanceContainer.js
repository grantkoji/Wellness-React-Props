import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

let copyWellnessFactors = [...wellnessFactors]
copyWellnessFactors.sort((factor1, factor2) => factor2.stars - factor1.stars)

export default class GuidanceContainer extends React.Component {

   



    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                            <td>Priority?</td>
                        </tr>
                    </thead>
                    <tbody>
                        {copyWellnessFactors.map((item, index) => 
                            <GuidanceItem 
                                  key={index}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                stars={item.stars}
                                isPriority={item.isPriority}
                            />
                        )}
                        {/** TODO:  Render GuidanceItems here
                                    Check the GuidanceItem component for the expect props
                                    BUG CATCHER: There's a bug in GuidanceItem that will make it fail. 
                                            Can you find it? 
                                            What warning did you get and how did it help you?
                        */}
                           
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}