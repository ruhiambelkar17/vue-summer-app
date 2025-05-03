import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state:{
        apiResp:[],
        deleteId:0
    },
    mutations:{
         getDeleteId(state,id){
              return id; 
        }
    },
    actions:{
        async getArtActivities(){
            this.state.apiResp=(await axios.get('http://localhost:1337/api/art-activities')).data.data;
            //await axios.get('http://localhost:1337/api/art-activities').then(response => commit('getArtData',response.data.data))
            console.log("api resp",this.state.apiResp)
            
        },
        async deleteArtActivity({commit},id){
            console.log('id',id);
            commit('getDeleteId',id);
            await axios.delete(`https://api.restful-api.dev/objects/${id}`);
           
            console.log("api resp delete",this.state.apiResp)
        },
        async updateArtActivity({commit},id){
            await axios.put(`http://localhost:1337/api/art-activities/${id}`,{
                data:{
                    availableSeats:5
                }
            });
            commit('getDeleteId',id);
            console.log("api resp delete",this.state.apiResp)
        },
        async postNewData(){
            await axios.post(`https://api.restful-api.dev/objects`,{
                
                    id: "14",
      name: "Google Pixel 7 Pro",
      data: {
         color: "Cloudy White",
         capacity: "128 GB"
}
                
            });
        }
    },
    getters:{

    }
})