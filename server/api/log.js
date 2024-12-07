

export default defineEventHandler(async (event)=>{
    try{
        const head = await getQuery(event).head
        const body =  await readBody(event)

        const resp = await new logSchema({title:head,log:body}).save()
        return resp
    }catch (error){
        return error
    }
})