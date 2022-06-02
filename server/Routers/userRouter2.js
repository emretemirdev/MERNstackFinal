import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';

const router = express.Router();//express paketinin içerisindeki router

// localhost:5000/users 'a  post isteği yapılırsa aşşağıdaki olaylar gerçekleşsin
router.post("/signup", async (req, res)=>{
    try {
        const { fullname, password, phoneNumber, email } = req.body; //isteğin bodysinden geliyor

        const userExists = await User.findOne({ email }) //çağırılan user findone neye göre bulmak istiyorum, dönene kadar beklemek istiyorum

        if(userExists)//null değilse
            return res.status(400).json({ message: 'Bu Kullanıcı zaten var, Farklı Bir E-Posta İle yeniden Dene'})

        const hashedPassword = await bcrypt.hash(password, 10)//password hashleme databasede gizlemek için, bcrypt.js paketi
        //bcrypt hash password, 10= 10 random karakter ekler 
        const createdUser = await User.create({ //kullanıcı oluşturuyoruz.
            fullname,
            email,
            password: hashedPassword, // göndermek istediğim değer hashlenmiş değeri
            phoneNumber
        })

        return res.status(201).json(createdUser); //201 oluşturulduğunu söyler.
    } catch (error) {
        console.log(error)
        return res.json({message: "Kayıt başarısız"})
    }
})

// localhost:5000/users/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body; //email ve şifreye ihtiyacım var
        const user = await User.findOne({email}) //emaile sahip kullanıcı var mı onu görüyoruz
        if(!user) //user yoksa
            return res.status(400).json({message: "Böyle bir kullanıcı yok"}) 
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)//hashlenmiş ve hashlenmemişi karşılaştır 
        if(!isPasswordCorrect) // eşleşmiyorsa
            return res.status(400).json({message: "Girdiğiniz Şifre Yanlış"})
        
        return res.status(200).json({ user, message: 'Giriş Başarılı' })
    } catch (error) {
        console.log("yarram kod çalışmıyor")
        return res.status(400).json({ message: error.message })
    }
})

export default router;