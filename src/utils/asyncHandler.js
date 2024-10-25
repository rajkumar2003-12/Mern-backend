const asyncHandler = (requestHandler) => {
    (res, req , next) =>{
        promise.resolve(requestHandler(req, res, next)).
        catch((err)=>next(err))
    }
}




export {asyncHandler}

// const asyncHandler =(fn) => async(req,res,next)=>{
//     try{

//     } catch (err) {
//         res.status(err.code || 500).json({
//             success:false
//         })
//     }
// }