const uuid = require('uuid');
const path = require('path');
const {Certificate, CertificateInfo} = require('../models/models')
const ApiError = require ('../error/api-error')

class certificateController {
    async create (req, res, next){
        try{
            let {name, price, catalog_category_id, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const certificate = await Certificate.create({name, price, catalog_category_id, info, img: fileName})

            if (info){
                info = JSON.parse(info)
                info.forEach(i => 
                    CertificateInfo.create({
                        title: i.title,
                        description: i.description,
                        certificateId: certificate.id
                    })
                )
            }

            return res.json(certificate)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getOne (req, res){ 
        const {id} = req.params
        const certificate = await Certificate.findOne(
            {
                where: {id},
                include: [{model: CertificateInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
    
    async getAll (req, res){
        const {categoryId} = req.query
        let certificates;
        if (!categoryId) {
            certificates = await Certificate.findAll()
        }else{
            certificates = await Certificate.findAll({where:{categoryId}})
        }
        return res.json(certificates)
    }
}

module.exports = new certificateController()