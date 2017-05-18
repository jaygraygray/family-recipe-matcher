import React, { Component } from 'react'
import { Panel, Accordion } from 'react-bootstrap'

class AllRecipes extends Component {

constructor(props) {
  super(props);
}

render() {

const recipeData = [{
  id : 0,
  name : 'Fried Eggs',
  ingredients : [
    {name : 'eggs', qty : 2, measurement : 'whole'},
    {name : 'butter', qty : 1, measurement : 'tbsp'}
  ],
  instructions : [
    'Pre-heat pan on medium heat.',
    'Add butter, spread in pan.',
    'Crack egg(s) and add to butter after allowing pan to heat.',
    'Let cook 2-3 minutes. Flip.',
    'Let cook another 2-3 minutes or until desired consistency is met.'
  ],
  prep_time : '1 min.',
  cook_time : '5-10 min.',
  tags: ['breakfast', 'fast', 'eggs', 'protein']
},
{
  id : 0,
  name : 'Fried Eggs',
  ingredients : [
    {name : 'eggs', qty : 2, measurement : 'whole'},
    {name : 'butter', qty : 1, measurement : 'tbsp'}
  ],
  instructions : [
    'Pre-heat pan on medium heat.',
    'Add butter, spread in pan.',
    'Crack egg(s) and add to butter after allowing pan to heat.',
    'Let cook 2-3 minutes. Flip.',
    'Let cook another 2-3 minutes or until desired consistency is met.'
  ],
  prep_time : '1 min.',
  cook_time : '5-10 min.',
  tags: ['breakfast', 'fast', 'eggs', 'protein']
} ]
console.log(recipeData[0].ingredients[0])
const recipes = recipeData.map( (data, i) => {

return (
  
  
    <Panel header={ data.name }>
    <ul>
      <li>Prep: { data.prep_time} </li>
      <li>Cook: { data.cook_time} </li>
    </ul>
    <ul> Ingredients:
      { data.ingredients.map( ingredients => { return ( <li>{ ingredients.name }: { ingredients.qty } - { ingredients.measurement } </li> )  }) }
    </ul>
    <ol> Instructions:
      { data.instructions.map( instructions => { return ( <li>{ instructions }</li> ) }) }
    </ol>
    <ul> Tags:
      { data.tags.map( tags => { <p>{ tags }</p> }) }
    </ul>
  </Panel>

)})


  return (
    <div>
      <h1>All Recipes</h1>
      <Accordion>{ recipes }</Accordion>
        
      
    </div>
  )
}

}
export default AllRecipes