import { defineMongooseModel } from '#nuxt/mongoose'

export const WormSchema = defineMongooseModel({
  name: 'WORM',
  schema: {
    name:{type:String,required:true},
    link:{type:String,required:true}
    
  }, 
  options: {
    collection: 'worm', 
  },
})