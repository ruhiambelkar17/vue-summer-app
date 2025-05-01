import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state:{
        apiResp:[]
    },
    mutations:{
        getArtData(state){
            return state.apiResp; 
        }
    },
    actions:{
        async getArtActivities(){
            this.state.apiResp=(await axios.get('http://localhost:1337/api/art-activities')).data.data;
            //await axios.get('http://localhost:1337/api/art-activities').then(response => commit('getArtData',response.data.data))
        
            
        }
    },
    getters:{

    }
})