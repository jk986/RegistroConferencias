import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/clienteAxios';
import { Conferencia } from '../models/Conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  //-----------
  constructor() { }
  //-----------
  /**
   * Funcion para agregar una nueva conferencia o un nuevo horario
   * @param conference conferencia
   * @returns mensaje
   */
  async addConference(conference:Conferencia){
    try {
      const token = localStorage.getItem('tkn');
    
      if(!token) return;
  
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post('/confer',conference,config);
      console.log(data);
    }catch(error){
      console.log("Error en angular");
    }
  }
  //-----------
}
