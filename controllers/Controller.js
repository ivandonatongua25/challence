const db=require("../database/models/index");
let { validationResult } = require('express-validator');

const Controller = {

    index: (req, res) => {
        db.Products.findAll()
        .then((productos)=>{
            console.log(productos)
            res.render("index",{"productos": productos});
        });
       
    },
    home:(req,res)=>{
        db.Products.findAll()
        .then((productos)=>{
            console.log(productos)
            res.render("list",{"productos": productos});
        });

    },
    detail: (req,res)=>{
        db.Products.findByPk(req.params.id)
        .then((productos)=>{
            console.log(productos)
            res.render("detail",{"productos": productos});
        });
    },

    add: (req,res)=>{
        res.render("add");
        
    },
    create:(req,res)=>{

        db.Products.create({
            
            ...req.body
           
            
        })
        .then((productos)=>{
            res.redirect("/");
        })
        
        
    },
    edit:(req,res)=>{
        let productedit=req.params.id;
        db.Products.findByPk(productedit)
        .then((productos)=>{
            console.log(productos)
            res.render("edit",{"productos": productos});
        });


    },
    update:(req,res)=>{
        let productedit=req.params.id;
        db.Products.update({
            
            ...req.body,
           
        },
        {
            where:{id:productedit}
        })
        .then(()=>res.redirect("/"));

        
    },
    delete:(req,res)=>{
        let productedit=req.params.id;
        db.Products.findByPk(productedit)
        .then((productos)=>{
            console.log(productos)
            res.render("delete",{"productos": productos});
        });

    },
    destroy:(req,res)=>{
        let productedit=req.params.id;
        db.Products.destroy(
        {
            where:{id:productedit}
        })
        .then(()=>res.redirect("/"));


    }

    


}

module.exports = Controller;