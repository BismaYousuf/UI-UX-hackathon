import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage'
import hero from './landingPage-Sections/hero'
import foodcategory from './landingPage-Sections/foodcategory'
import whychooseus from './landingPage-Sections/whychooseus'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, hero, foodcategory, whychooseus],
}
