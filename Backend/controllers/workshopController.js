const Workshop=require('../models/workshop');
const ErrorHandler=require('../utils/errorHandler')
const catchAsyncError=require('../middlewares/catchAsyncError')
const APIFeatures=require('../utils/apiFeatures')
//Get Users - Get all workshop
exports.getWorkshop=catchAsyncError(async(req,res,next)=>
{
    const apiFeatures=new APIFeatures(Workshop.find(),req.query).search()
    const workshop=await apiFeatures.query;
    res.status(200).json({
        success:true,
        workshop
    }
    )
});
//creating users - /api/v1/workshop/new
exports.newWorkshop =catchAsyncError(async(req,res,next) =>
{
    req.body.incharge_id= req.user.user_id;
   const workshop= await Workshop.create(req.body)
   res.status(201).json({
    success:true,
    workshop
   })
});
exports.getSingleWorkshop=catchAsyncError(async(req,res,next)=>
{
    const workshop = await Workshop.findOne({ workshopid: req.params.id});
    res.status(200).json(
        {
            success:true,
            workshop
        }
    )
})
exports.getDepartmentWorkshop=catchAsyncError(async(req,res,next)=>
{
    const workshop = await Workshop.find({ organizing_department: req.params.id});
    res.status(200).json(
        {
            success:true,
            workshop
        }
    )
})
