

import donorSchema from './model/donor.model.js'

export async function addDonor(req,res) {
    console.log(req.body);

    const {...donors}=req.body
    await donorSchema.create({...donors}).then(()=>{
        res.status(201).send({msg: "Success"})
    })
    .catch((error)=>{
        res.status(500).send({error: error})
    })
}

export async function getDonors(req,res){
    console.log("get donors")

    const data = await donorSchema.find()
    console.log(data);
    
    res.status(200).send(data)
}

export async function getDonorById(req, res) {
const donor = await donorSchema.findById(req.params.id);
res.status(200).send(donor);    
}

export async function getDonor(res,req) {
    console.log(req.params);
    const {id}=req.params
    const data=await donorSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
}
export async function update(req,res){
    console.log(req.params);
    console.log(req.body);
    const {...donor}=req.body
    await donorSchema.updateOne({_id:req.params.id},{$set:{...donor}}).then((res,req)=>{
        res.status(201).send({msg:"updated"})
        req.body=_id
    }).catch((error)=>{
        res.status(500).send({error:error})
    })
    
    
}

