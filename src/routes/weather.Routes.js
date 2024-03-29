import { createWeather, AllWeathers, deleteWeather } from "../controller/weather.controler.js";
import  {Router}  from "express";

const weatherRoutes = Router()



weatherRoutes.post('/create-weather',(req,res) =>{
  const {temperature, localization,time , day, state} = req.body;
  const newWeather = createWeather(temperature, localization,time , day, state)
  res.json({newWeather})
})


weatherRoutes.get('/Weathers',(req,res)=>{
    let weathers = AllWeathers()
    res.json(weathers)
})


weatherRoutes.delete('/delete',(req,res)=>{
    const {temperature,localization,day} = req.body;
    let lessWeather = deleteWeather(temperature,localization,day);
    res.json({lessWeather})


})


export { weatherRoutes}

