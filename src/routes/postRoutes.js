const express=require("express");

const router=express.Router();

const Post=require("../models/Post");

router.get("/",async(req,res)=>{
    try{
        const posts=await Post.find();

        res.status(200).json(posts);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

router.post("/",async(req,res)=>{
    try{
        const {title,content}=req.body;

        const newPost=await Post.create({
            title,
            content
        });
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const deletedPost=await Post.findByIdAndDelete(req.params.id);

        if(!deletedPost){
            return res.status(404).json({
                message:"Post not found"
            });
        }

        res.status(200).json({
            message:"Post deleted succesfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

module.exports=router;