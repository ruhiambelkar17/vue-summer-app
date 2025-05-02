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
            
            await axios.delete(`http://localhost:1337/api/art-activities/${id}`);
            commit('getDeleteId',id);
            console.log("api resp delete",this.state.apiResp)
        }
    },
    getters:{

    }
})